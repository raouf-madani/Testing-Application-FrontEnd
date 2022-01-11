import React, {useState, useEffect, memo, useMemo} from 'react';
import Head from 'next/head';
import Baselayout from '@/components/layouts/baselayout';
import Basepage from '@/components/Basepage';
import EtapeContent from '@/components/newTestContent';
import HistoriqueModal from '@/components/modals/historique/historiquemodal';
import Modalnewtest from '@/components/modals/newtest/scanmodal';
import Haut from '@/components/newTestComponents/Haut';
import DisplayComponent from '@/components/Timer';
import {Fakedata} from '@/FakeData/TestData';
import {Mise_fakeData} from '@/FakeData/TestData';

import withAuth from '@/hoc/withAuth';
import {useGetUser} from '@/actions/user';
import {UpdateData} from '@/actions/newtestupdate';
import TestingApi from '@/lib/api/testing';

import {useRouter} from 'next/router';
import {Steps, Button, Row, Col, Divider, Form, Modal} from 'antd';

const {Step} = Steps;

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
    title: 'Ratio/Polarite',
    content: 'Ratio/Polarite',
  },
  {
    title: 'Induit',
    content: 'Induit',
  },
  {
    title: 'Hipot',
    content: 'Hipot',
  },
  {
    title: 'Pertes a Vide',
    content: 'Pertes a Vide',
  },
  {
    title: 'RIV ',
    content: 'RIV',
  },
  {
    title: 'Pertes a Charge',
    content: 'Pertes a Charge',
  },
  {
    title: 'Facteur de dissipation',
    content: 'Facteur de dissipation',
  },

  {
    title: 'Décharges Partielles',
    content: 'Décharges Partielles',
  },

  {
    title: 'Signature',
    content: 'Signature',
  },
];
const Newtest = ({commandes, mise_en_place}) => {
  const {data, loading} = useGetUser();
  const [current, setCurrent] = useState(0);
  const [time, setTime] = useState({ms: 0, s: 0, m: 0, h: 0});
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);
  const [form] = Form.useForm();
  const [historiquemodal, sethistoriqueModal] = useState(false);
  const router = useRouter();
  const noCommande = router.query.numerocommande;
  const [Finaldata, setFinaldata] = useState(Fakedata);
  const initial_testform_values = {};
  const [mise_data, setmise_data] = useState(Mise_fakeData);
  const [state, setstate] = useState(true);
  const [modal, setmodal] = useState(false);

  const start = () => {
    run();
    setStatus(1);
    setInterv(setInterval(run, 10));
  };

  var updatedMs = time.ms,
    updatedS = time.s,
    updatedM = time.m,
    updatedH = time.h;

  const run = () => {
    if (updatedM === 60) {
      updatedH++;
      updatedM = 0;
    }
    if (updatedS === 60) {
      updatedM++;
      updatedS = 0;
    }
    if (updatedMs === 100) {
      updatedS++;
      updatedMs = 0;
    }
    updatedMs++;
    return setTime({ms: updatedMs, s: updatedS, m: updatedM, h: updatedH});
  };

  const stop = () => {
    clearInterval(interv);
    setStatus(2);
  };

  const reset = () => {
    clearInterval(interv);
    setStatus(0);
    setTime({ms: 0, s: 0, m: 0, h: 0});
  };

  const resume = () => start();
  useEffect(() => {
    const filter = () => {
      if (state == true) {
        return (steps = steps.filter(
          step => !step.content.includes('Placer Borne')
        ));
      }
    };
    filter();
  }, []);

  const next = () => {
    if (current == 0) {
      if (state == true) {
        console.log('begin the work mise en place done');
        //Bornes
        UpdateData('Borne_rouge', mise_data.Bornes.Borne_rouge, setFinaldata);
        UpdateData('Borne_verte', mise_data.Bornes.Borne_verte, setFinaldata);
        UpdateData('Borne_jaune', mise_data.Bornes.Borne_jaune, setFinaldata);
        //Ratio_Polarite
        UpdateData(
          'Volts_apluiqés_P1',
          mise_data.Ratio.Volts_apluiqés_P1,
          setFinaldata
        );
        UpdateData(
          'Volts_apluiqés_P2',
          mise_data.Ratio.Volts_apluiqés_P2,
          setFinaldata
        );
        UpdateData('Volts_ht_P1', mise_data.Ratio.Volts_ht_P1, setFinaldata);
        UpdateData('Volts_ht_P2', mise_data.Ratio.Volts_ht_P2, setFinaldata);
        UpdateData(
          'Polarite_volts_P1',
          mise_data.Ratio.Polarité_volts_P1,
          setFinaldata
        );
        UpdateData(
          'Polarite_volts_P2',
          mise_data.Ratio.Polarité_volts_P2,
          setFinaldata
        );
        setCurrent(current + 1);
      } else {
        console.log('begin the work No mise en place ');
        setCurrent(current + 1);
      }
      {
        status === 0 ? start() : '';
      }
    } else if (current < steps.length - 1) {
      setCurrent(current + 1);
    } else {
      reset();
      form.resetFields();
      setmodal(!modal);
      console.log(Finaldata);
    }
  };

  const prev = () => {
    setCurrent(current - 1);
  };
  const annuler = () => {
    reset();
    setCurrent(current - 1);
    form.resetFields();
  };

  var foundcommande = false;
  var id_of_product = null;
  for (var i = 0; i < commandes.length; i++) {
    if (commandes[i].id_commande == noCommande) {
      foundcommande = true;
      id_of_product = commandes[i].id_product;
      break;
    }
  }
  var found_mise_commande = false;
  for (var i = 0; i < mise_en_place.length; i++) {
    if (mise_en_place[i].id_product == id_of_product) {
      found_mise_commande = true;
      break;
    }
  }
  function error(text) {
    Modal.error({
      title: 'Test échoué',
      content: text,
      onOk() {
        console.log(Finaldata);
        window.location.href = '/';
      },
    });
    console.log('stop fromnewtest');
    stop();
  }

  return (
    <div>
      <Head>
        <title>Testing App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Baselayout user={data} loading={loading}>
        <Basepage className="base-page">
          {foundcommande ? (
            <div>
              <Haut
                mise_data={mise_data}
                state={state}
                temperature_affected={Finaldata.temperature_affected}
                commande={commandes}
                setmise_data={setmise_data}
                setFinaldata={setFinaldata}
                UpdateData={UpdateData}
              />
              <Divider dashed orientation="left" style={{color: 'white'}}>
                Étapes de Test
              </Divider>

              <Row justify="space-between">
                <Col
                  key="steps"
                  span={6}
                  style={{
                    padding: '10px',
                    borderRadius: '10px',
                    boxShadow: '3px 4px 5px 1px rgb(163 234 237 / 77%)',
                    maxHeight: '530px',
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
                  <Form
                    form={form}
                    layout="vertical"
                    name="results_form"
                    onFinish={next}
                    initialValues={initial_testform_values}
                    autoComplete="off">
                    <div className="steps-content">
                      <Row justify="center" style={{marginBottom: '10px'}}>
                        <DisplayComponent time={time} />
                      </Row>
                      <EtapeContent
                        UpdateData={UpdateData}
                        etapeName={steps[current].content}
                        miseenplaceok={mise_data}
                        Finaldata={Finaldata}
                        setFinaldata={setFinaldata}
                        error={error}
                      />
                    </div>
                    <div
                      className="steps-action"
                      style={{display: 'flex', justifyContent: 'end'}}>
                      <Form.Item>
                        {current > 0 && (
                          <>
                            {status === 1 ? (
                              <Button style={{margin: '0 8px'}} onClick={stop}>
                                Stop
                              </Button>
                            ) : (
                              <Button
                                style={{margin: '0 8px'}}
                                onClick={resume}>
                                Resume
                              </Button>
                            )}

                            <Button
                              style={{margin: '0 8px'}}
                              disabled={status == 2 ? true : false}
                              onClick={() =>
                                (current == 1 && status === 1) || status === 2
                                  ? annuler()
                                  : prev()
                              }>
                              {current == 1 ? 'Annuler' : 'Retour'}
                            </Button>
                          </>
                        )}
                        {current < steps.length - 1 && (
                          <Button
                            type="primary"
                            htmlType="submit"
                            disabled={status == 2 ? true : false}>
                            {current == 0 ? 'Commencer' : 'Suivant'}
                          </Button>
                        )}
                        {current === steps.length - 1 && (
                          <Button type="primary" htmlType="submit">
                            enregistrer
                          </Button>
                        )}
                      </Form.Item>
                    </div>
                  </Form>
                  <Modalnewtest
                    modal={modal}
                    toggle={() => setmodal(!modal)}
                    direction="/"
                  />
                </Col>
              </Row>
            </div>
          ) : (
            <div>Commande not found</div>
          )}
        </Basepage>
      </Baselayout>
    </div>
  );
};
export async function getStaticProps() {
  const json_Commandes = await new TestingApi().getAllcommandes();
  const commandes = json_Commandes.data;
  const json_Mise_en_place = await new TestingApi().getAllmise_en_place();
  const mise_en_place = json_Mise_en_place.data;

  return {
    props: {commandes, mise_en_place},
  };
}
export default withAuth(Newtest)();
