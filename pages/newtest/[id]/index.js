import {useRouter} from 'next/router';
import React, {useState, useEffect, memo, useMemo} from 'react';
import Head from 'next/head';
import Baselayout from '@/components/layouts/baselayout';
import Basepage from '@/components/Basepage';
import EtapeContent from '@/components/newTestContent';
// import HistoriqueModal from '@/components/modals/historique/historiquemodal';
import Modalnewtestscanner from '@/components/modals/newtest/scannermodal';

import Haut from '@/components/newTestComponents/Haut';
import DisplayComponent from '@/components/Timer';
import {Fakedata} from '@/FakeData/TestData';
import {useGetCommande} from '@/actions/commandes';
import {useGetMise, useUpdateMisePlace} from '@/actions/mise_place';

import withAuth from '@/hoc/withAuth';
import {useGetUser} from '@/actions/user';

import {UpdateData} from '@/actions/newtestupdate';
import TestingApi from '@/lib/api/testing';

import {Steps, Button, Row, Col, Divider, Form, Modal, Space, Spin} from 'antd';

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

const NewTest = ({commande, mise_en_placeById}) => {
  const [current, setCurrent] = useState(0);
  const [time, setTime] = useState({ms: 0, s: 0, m: 0, h: 0});
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);
  const [form] = Form.useForm();
  // const [historiquemodal, sethistoriqueModal] = useState(false);
  const router = useRouter();
  const [Finaldata, setFinaldata] = useState(Fakedata);
  const initial_testform_values = {};
  const [modal, setmodal] = useState(false);
  const {data: dataU, loading: loadingU} = useGetUser();
  const {data: initialDataC} = useGetCommande(router.query.id);
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
      if (mise_en_placeById !== null) {
        return (steps = steps.filter(
          step => !step.content.includes('Placer Borne')
        ));
      }
    };
    filter();
  }, []);

  const next = () => {
    if (current == 0) {
      if (mise_en_placeById !== null) {
        console.log('begin the work mise en place done');
        //Bornes
        UpdateData(
          'Borne_rouge',
          mise_en_placeById.Bornes.Borne_rouge,
          setFinaldata
        );
        UpdateData(
          'Borne_verte',
          mise_en_placeById.Bornes.Borne_verte,
          setFinaldata
        );
        UpdateData(
          'Borne_jaune',
          mise_en_placeById.Bornes.Borne_jaune,
          setFinaldata
        );
        //Ratio_Polarite
        UpdateData(
          'Volts_apluiqés_P1',
          mise_en_placeById.Ratio.Volts_apluiqés_P1,
          setFinaldata
        );
        UpdateData(
          'Volts_apluiqés_P2',
          mise_en_placeById.Ratio.Volts_apluiqés_P2,
          setFinaldata
        );
        UpdateData(
          'Volts_ht_P1',
          mise_en_placeById.Ratio.Volts_ht_P1,
          setFinaldata
        );
        UpdateData(
          'Volts_ht_P2',
          mise_en_placeById.Ratio.Volts_ht_P2,
          setFinaldata
        );
        UpdateData(
          'Polarite_volts_P1',
          mise_en_placeById.Ratio.Polarité_volts_P1,
          setFinaldata
        );
        UpdateData(
          'Polarite_volts_P2',
          mise_en_placeById.Ratio.Polarité_volts_P2,
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

  if (router.isFallback) {
    return (
      <Basepage>
        <Row justify="center">
          <Space size="middle">
            <Spin size="large" />
          </Space>
        </Row>
      </Basepage>
    );
  }

  return (
    <div>
      <Head>
        <title>Testing App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Baselayout user={dataU} loading={loadingU}>
        <Basepage className="base-page">
          {commande !== null ? (
            <div>
              <Haut
                mise_en_placeById={mise_en_placeById}
                temperature_affected={Finaldata.temperature_affected}
                commande={commande}
                setFinaldata={setFinaldata}
                UpdateData={UpdateData}
                useGetMise={useGetMise}
                useUpdateMisePlace={useUpdateMisePlace}
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
                        mise_en_placeById={mise_en_placeById}
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
                  {/* <Modalnewtest
                    modal={modal}
                    toggle={() => setmodal(!modal)}
                    direction="/"
                  /> */}
                  <Modalnewtestscanner
                    modal={modal}
                    toggle={() => setmodal(!modal)}
                    direction="newtest"
                  />
                </Col>
              </Row>
            </div>
          ) : (
            <Basepage>
              <Row justify="center">
                <Space size="middle">
                  <h1> Command Not Found</h1>
                </Space>
              </Row>
            </Basepage>
          )}
        </Basepage>
      </Baselayout>
    </div>
  );
};

export async function getStaticPaths() {
  const json = await new TestingApi().getAllcommandes();
  const commandes = json.data;
  const paths = commandes.map(commande => {
    return {
      params: {id: commande.id_commande},
    };
  });

  return {paths, fallback: true};
}

export async function getStaticProps({params}) {
  const json = await new TestingApi().getById_commande(params.id);
  const commande = json.data;
  // const json_Mise_en_place = await new TestingApi().getAllmise_en_place();
  // const mise_en_place = json_Mise_en_place.data;
  let mise_en_placeById = null;
  if (commande !== null) {
    const json_Mise_en_placeById = await new TestingApi().getmiseById(
      commande.id_product
    );
    mise_en_placeById = json_Mise_en_placeById.data;
  }
  return {props: {commande, mise_en_placeById}};
}

export default NewTest;
