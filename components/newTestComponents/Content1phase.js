import React, {useState, useEffect, useRef} from 'react';
import {useRouter} from 'next/router';

import EtapeContent from '@/components/newTestContent';
import EtapeContent3phase from '@/components/newTestContent3phases';
import DisplayComponent from '@/components/Timer';
import {UpdateData} from '@/actions/newtestupdate';

import {Steps, Button, Row, Col, Divider, Form, Modal, Space, Spin} from 'antd';

const {Step} = Steps;
import {Fakedata, Mise_NewData, steps1phase} from '@/FakeData/TestData';
const steps = [
  {
    title: 'Nouveau Test',
    content: 'newtest',
  },
  {
    title: 'Placer Borne',
    content: 'Placer Borne',
  },
  {
    title: 'Ratio/Polarite P1',
    content: 'Ratio/Polarite P1',
  },
  {
    title: 'Induit P1',
    content: 'Induit P1',
  },
  {
    title: 'Ratio/Polarite P2',
    content: 'Ratio/Polarite P2',
  },

  {
    title: 'Induit P2',
    content: 'Induit P2',
  },
  {
    title: 'Hipot BT',
    content: 'Hipot BT',
  },
  {
    title: 'Hipot HT',
    content: 'Hipot HT',
  },
  {
    title: 'Pertes à vide P1',
    content: 'Pertes à vide P1',
  },
  {
    title: 'Pertes à vide P2',
    content: 'Pertes à vide P2',
  },

  {
    title: 'RIV ',
    content: 'RIV',
  },
  {
    title: 'Pertes à charge P1',
    content: 'Pertes à charge P1',
  },
  {
    title: 'Pertes à charge P2',
    content: 'Pertes à charge P2',
  },
  {
    title: 'Résistance',
    content: 'Résistance',
  },
  {
    title: 'Décharges Partielles',
    content: 'Décharges Partielles',
  },
  {
    title: 'Facteur de dissipation',
    content: 'Facteur de dissipation',
  },

  {
    title: 'Signature',
    content: 'Signature',
  },
];

function ContentAndSteps1phase(props) {
  const {
    mise_en_placeById,
    test_type_selected,
    commande,
    current,
    Finaldata,
    setFinaldata,
    NewMisePlace,
    setNewMisePlace,
    error,
    settablelength,
    form,
    // props for buttons
    status,
    resume,
    stop,
    AnnulerConfirm,
    prev,
    tablelength,
    // props button reussi
    next,
  } = props;
  const router = useRouter();
  const [kvaofday, setkvaofday] = useState(13);
  useEffect(() => {
    const filter1 = () => {
      if (mise_en_placeById != null) {
        return (steps = steps.filter(
          step => !step.content.includes('Placer Borne')
        ));
      }
    };
    const filter2 = () => {
      if (
        mise_en_placeById != null &&
        commande.voltage_ht < 16000 &&
        router.query.firstchecked !== 'true' &&
        commande.kva == kvaofday
      ) {
        return (steps = steps.filter(step => !step.content.includes('RIV')));
      }
    };
    const filter3 = () => {
      if (
        mise_en_placeById != null &&
        commande.kva == kvaofday &&
        router.query.firstchecked !== 'true'
      ) {
        return (steps = steps.filter(
          step => !step.content.includes('Facteur de dissipation')
        ));
      }
    };
    filter1();
    filter2();
    filter3();
    settablelength(steps.length);
    console.log('la commandes est', commande);
  }, []);
  const inputEl = useRef(null);
  useEffect(() => {
    if (inputEl.current) {
      inputEl.current.focus();
    }
  }, [inputEl]);
  return (
    <div>
      <Row justify="space-between">
        <Col
          key="steps"
          span={6}
          style={{
            padding: '10px',
            borderRadius: '10px',
            boxShadow: '3px 4px 5px 1px #503662',
          }}>
          <Steps size="small" current={current} direction="vertical">
            {steps.map(item => (
              <Step key={item.title} id="newtest" title={item.title} />
            ))}
          </Steps>
        </Col>
        <Col
          key="content"
          span={17}
          style={{
            borderRadius: '10px',
          }}>
          <div className="steps-content">
            <EtapeContent
              UpdateData={UpdateData}
              commande={commande}
              etapeName={steps[current].content}
              mise_en_placeById={mise_en_placeById}
              test_type_selected={test_type_selected}
              Finaldata={Finaldata}
              NewMisePlace={NewMisePlace}
              Prise={commande.prise}
              setFinaldata={setFinaldata}
              setNewMisePlace={setNewMisePlace}
              error={error}
              form={form}
              // props button reussi
              next={next}
            />
            <div
              className="steps-action"
              style={{display: 'flex', justifyContent: 'end'}}>
              {mise_en_placeById !== null ? (
                <Form.Item>
                  {current > 0 && (
                    <>
                      {status === 1 ? (
                        <Button style={{margin: '0 8px'}} onClick={stop}>
                          Stop
                        </Button>
                      ) : (
                        <Button style={{margin: '0 8px'}} onClick={resume}>
                          Resume
                        </Button>
                      )}

                      <Button
                        style={{margin: '0 8px'}}
                        disabled={status == 2 ? true : false}
                        onClick={() =>
                          (current == 1 && status === 1) || status === 2
                            ? AnnulerConfirm()
                            : prev()
                        }>
                        {current == 1 ? 'Annuler' : 'Retour'}
                      </Button>
                    </>
                  )}
                  {current < tablelength - 1 && (
                    <Button
                      type="primary"
                      htmlType="submit"
                      disabled={status == 2 ? true : false}>
                      {current == 0 ? 'Commencer' : 'Suivant'}
                    </Button>
                  )}
                  {current === tablelength - 1 && (
                    <Button type="primary" htmlType="submit">
                      enregistrer
                    </Button>
                  )}
                </Form.Item>
              ) : (
                test_type_selected && (
                  <Form.Item>
                    {current > 0 && (
                      <>
                        {status === 1 ? (
                          <Button style={{margin: '0 8px'}} onClick={stop}>
                            Stop
                          </Button>
                        ) : (
                          <Button style={{margin: '0 8px'}} onClick={resume}>
                            Resume
                          </Button>
                        )}

                        <Button
                          style={{margin: '0 8px'}}
                          disabled={status == 2 ? true : false}
                          onClick={() =>
                            (current == 1 && status === 1) || status === 2
                              ? AnnulerConfirm()
                              : prev()
                          }>
                          {current == 1 ? 'Annuler' : 'Retour'}
                        </Button>
                      </>
                    )}
                    {current < tablelength - 1 && (
                      <Button
                        type="primary"
                        tabIndex={mise_en_placeById !== null ? 3 : 15}
                        ref={inputEl}
                        htmlType="submit"
                        disabled={status == 2 ? true : false}>
                        {current == 0 ? 'Commencer' : 'Suivant'}
                      </Button>
                    )}
                    {current === tablelength - 1 && (
                      <Button type="primary" htmlType="submit">
                        enregistrer
                      </Button>
                    )}
                  </Form.Item>
                )
              )}
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default ContentAndSteps1phase;
