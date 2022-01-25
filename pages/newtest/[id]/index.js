import {useRouter} from 'next/router';
import React, {useState, useEffect} from 'react';
import Head from 'next/head';
import Baselayout from '@/components/layouts/baselayout';
import Basepage from '@/components/Basepage';
import EtapeContent from '@/components/newTestContent';
// import HistoriqueModal from '@/components/modals/historique/historiquemodal';
import Modalnewtestscanner from '@/components/modals/newtest/scannermodal';

import Haut from '@/components/newTestComponents/Haut';
import DisplayComponent from '@/components/Timer';
import {Fakedata, Mise_NewData} from '@/FakeData/TestData';
import {useGetCommande} from '@/actions/commandes';
import {useGetMise, useUpdateMisePlace} from '@/actions/mise_place';

import withAuth from '@/hoc/withAuth';
import {useGetUser} from '@/actions/user';

import {UpdateData} from '@/actions/newtestupdate';
import TestingApi from '@/lib/api/testing';

import {Steps, Button, Row, Col, Divider, Form, Modal, Space, Spin} from 'antd';

const {Step} = Steps;
const {confirm} = Modal;

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

const NewTest = ({commande, mise_en_placeById, Tests, allCommandesById}) => {
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const [time, setTime] = useState({ms: 0, s: 0, m: 0, h: 0});
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);
  const [form] = Form.useForm();
  // const [historiquemodal, sethistoriqueModal] = useState(false);

  const [Finaldata, setFinaldata] = useState(Fakedata);
  const [NewMisePlace, setNewMisePlace] = useState(Mise_NewData);
  const initial_testform_values = {};
  const [modal, setmodal] = useState(false);
  const {data: dataU, loading: loadingU} = useGetUser();
  const [test_type_selected, settest_type_selected] = useState();
  const [kvaofday, setkvaofday] = useState(13);
  const [teststatus, setteststatus] = useState();
  const {data: commandehook} = useGetCommande(router.query.id);
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
    const filter1 = () => {
      if (mise_en_placeById != null) {
        console.log(' le voltage_ht from commande', commande.voltage_ht);
        console.log('le test status ', router.query.firstchecked);
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
  }, [commande, mise_en_placeById, kvaofday]);

  const next = () => {
    if (current == 0) {
      if (mise_en_placeById !== null) {
        console.log('begin the work mise en place done');
        console.log(mise_en_placeById.Bornes.Borne_rouge);
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
          mise_en_placeById.Ratio.Polarite_volts_P1,
          setFinaldata
        );
        UpdateData(
          'Polarite_volts_P2',
          mise_en_placeById.Ratio.Polarite_volts_P2,
          setFinaldata
        );
        //Induit
        UpdateData(
          'Fréquence_genératrice_P1',
          mise_en_placeById.Induit.Fréquence_genératrice_P1,
          setFinaldata
        );
        UpdateData(
          'Fréquence_genératrice_P2',
          mise_en_placeById.Induit.Fréquence_genératrice_P2,
          setFinaldata
        );
        UpdateData(
          'Réactance_ske77_P1',
          mise_en_placeById.Induit.Réactance_ske77_P1,
          setFinaldata
        );
        UpdateData(
          'Réactance_ske77_P2',
          mise_en_placeById.Induit.Réactance_ske77_P2,
          setFinaldata
        );
        UpdateData(
          'Réactance_ske17_P1',
          mise_en_placeById.Induit.Réactance_ske17_P1,
          setFinaldata
        );
        UpdateData(
          'Réactance_ske17_P2',
          mise_en_placeById.Induit.Réactance_ske17_P2,
          setFinaldata
        );

        //Perte A Vide
        UpdateData(
          'Multiplicateur_volts_P1',
          mise_en_placeById.Perte_a_Vide.Multiplicateur_volts_P1,
          setFinaldata
        );
        UpdateData(
          'Multiplicateur_volts_P2',
          mise_en_placeById.Perte_a_Vide.Multiplicateur_volts_P2,
          setFinaldata
        );
        UpdateData(
          'Multiplicateur_amperes_P1',
          mise_en_placeById.Perte_a_Vide.Multiplicateur_amperes_P1,
          setFinaldata
        );
        UpdateData(
          'Multiplicateur_amperes_P2',
          mise_en_placeById.Perte_a_Vide.Multiplicateur_amperes_P2,
          setFinaldata
        );
        UpdateData(
          'Perte_table_P1',
          mise_en_placeById.Perte_a_Vide.Perte_table_P1,
          setFinaldata
        );
        UpdateData(
          'Perte_table_P2',
          mise_en_placeById.Perte_a_Vide.Perte_table_P2,
          setFinaldata
        );

        //Perte A Charge
        UpdateData(
          'Multiplicateur_volts_charge_P1',
          mise_en_placeById.Perte_a_Charge.Multiplicateur_volts_charge_P1,
          setFinaldata
        );
        UpdateData(
          'Multiplicateur_volts_charge_P2',
          mise_en_placeById.Perte_a_Charge.Multiplicateur_volts_charge_P2,
          setFinaldata
        );
        UpdateData(
          'Multiplicateur_amperes_charge_P1',
          mise_en_placeById.Perte_a_Charge.Multiplicateur_amperes_charge_P1,
          setFinaldata
        );
        UpdateData(
          'Multiplicateur_amperes_charge_P2',
          mise_en_placeById.Perte_a_Charge.Multiplicateur_amperes_charge_P2,
          setFinaldata
        );
        UpdateData(
          'Perte_table_charge_P1',
          mise_en_placeById.Perte_a_Charge.Perte_table_charge_P1,
          setFinaldata
        );
        UpdateData(
          'Perte_table_charge_P2',
          mise_en_placeById.Perte_a_Charge.Perte_table_charge_P2,
          setFinaldata
        );
        UpdateData(
          'Courant_de_correction_P1',
          mise_en_placeById.Perte_a_Charge.Courant_de_correction_P1,
          setFinaldata
        );
        UpdateData(
          'Courant_de_correction_P2',
          mise_en_placeById.Perte_a_Charge.Courant_de_correction_P2,
          setFinaldata
        );
        UpdateData(
          'Perte_table_totale_P1',
          mise_en_placeById.Perte_a_Charge.Perte_table_totale_P1,
          setFinaldata
        );
        UpdateData(
          'Perte_table_totale_P2',
          mise_en_placeById.Perte_a_Charge.Perte_table_totale_P2,
          setFinaldata
        );
        UpdateData(
          'Courant_appliquié_transfo_P1',
          mise_en_placeById.Perte_a_Charge.Courant_appliquié_transfo_P1,
          setFinaldata
        );
        UpdateData(
          'Courant_appliquié_transfo_P2',
          mise_en_placeById.Perte_a_Charge.Courant_appliquié_transfo_P2,
          setFinaldata
        );
        UpdateData(
          'Courant_appliqué_appareil_P1',
          mise_en_placeById.Perte_a_Charge.Courant_appliqué_appareil_P1,
          setFinaldata
        );
        UpdateData(
          'Courant_appliqué_appareil_P2',
          mise_en_placeById.Perte_a_Charge.Courant_appliqué_appareil_P2,
          setFinaldata
        );
        UpdateData(
          'No_cavalier_P1',
          mise_en_placeById.Perte_a_Charge.No_cavalier_P1,
          setFinaldata
        );
        UpdateData(
          'No_cavalier_P2',
          mise_en_placeById.Perte_a_Charge.No_cavalier_P2,
          setFinaldata
        );
        UpdateData(
          'Perte_cavalier_P1',
          mise_en_placeById.Perte_a_Charge.Perte_cavalier_P1,
          setFinaldata
        );
        UpdateData(
          'Perte_cavalier_P2',
          mise_en_placeById.Perte_a_Charge.Perte_cavalier_P2,
          setFinaldata
        );
        UpdateData(
          'Resistance_ht_P1',
          mise_en_placeById.Perte_a_Charge.Resistance_ht_P1,
          setFinaldata
        );
        UpdateData(
          'Resistance_ht_P2',
          mise_en_placeById.Perte_a_Charge.Resistance_ht_P2,
          setFinaldata
        );
        UpdateData(
          'Resistance_bt_P1',
          mise_en_placeById.Perte_a_Charge.Resistance_bt_P1,
          setFinaldata
        );
        UpdateData(
          'Resistance_bt_P2',
          mise_en_placeById.Perte_a_Charge.Resistance_bt_P2,
          setFinaldata
        );

        setCurrent(current + 1);
      } else {
        console.log('begin the work No mise en place ');
        // Type test
        UpdateData('test_type', test_type_selected, setFinaldata);
        console.log(' la final data', Finaldata);
        setCurrent(current + 1);
      }
      {
        status === 0 ? start() : '';
      }
    } else if (current < steps.length - 1) {
      setCurrent(current + 1);
    } else {
      if (Finaldata.temperature_affected !== null) {
        reset();
        form.resetFields();
        setmodal(!modal);
        console.log(Finaldata);
      } else {
        alert('add temperature');
      }
    }
    if (current == steps.length - 1) {
      setteststatus('fin');
      console.log(teststatus);
    }

    console.log(Finaldata);
    console.log(NewMisePlace);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  function AnnulerConfirm() {
    confirm({
      title: "etes vous sur d'annuler le test Courant?",
      onOk() {
        reset();
        setCurrent(0);
        settest_type_selected();
        setFinaldata(Fakedata);
        form.resetFields();
      },
      onCancel() {
        console.log('Cancel');
      },
    });
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
      <Baselayout
        user={dataU}
        loading={loadingU}
        status={status}
        AnnulerConfirm={AnnulerConfirm}>
        <Basepage className="base-page">
          {commande !== null ? (
            commande !== 'nullserie' ? (
              commande !== 'tested' ? (
                <div>
                  <Haut
                    mise_en_placeById={mise_en_placeById}
                    Finaldata={Finaldata}
                    commande={commande}
                    setFinaldata={setFinaldata}
                    UpdateData={UpdateData}
                    useGetMise={useGetMise}
                    useUpdateMisePlace={useUpdateMisePlace}
                    Tests_length={Tests.length}
                    allCommandesById_length={allCommandesById.length}
                    status={status}
                    test_type_selected={test_type_selected}
                    settest_type_selected={settest_type_selected}
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
                      <Steps
                        size="small"
                        current={current}
                        direction="vertical">
                        {steps.map(item => (
                          <Step
                            key={item.title}
                            id="newtest"
                            title={item.title}
                          />
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
                            setNewMisePlace={setNewMisePlace}
                            error={error}
                          />
                        </div>
                        <div
                          className="steps-action"
                          style={{display: 'flex', justifyContent: 'end'}}>
                          {mise_en_placeById !== null ? (
                            <Form.Item>
                              {current > 0 && (
                                <>
                                  {status === 1 ? (
                                    <Button
                                      style={{margin: '0 8px'}}
                                      onClick={stop}>
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
                                      (current == 1 && status === 1) ||
                                      status === 2
                                        ? AnnulerConfirm()
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
                          ) : (
                            test_type_selected && (
                              <Form.Item>
                                {current > 0 && (
                                  <>
                                    {status === 1 ? (
                                      <Button
                                        style={{margin: '0 8px'}}
                                        onClick={stop}>
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
                                        (current == 1 && status === 1) ||
                                        status === 2
                                          ? AnnulerConfirm()
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
                            )
                          )}
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
                        teststatus={teststatus}
                        direction="index"
                      />
                    </Col>
                  </Row>
                  le kva de commande {commande.voltage_ht}
                </div>
              ) : (
                <Basepage>
                  <Row justify="center">
                    <Space size="middle">
                      <h1> produit deja tested voulez vous le retester?</h1>
                    </Space>
                  </Row>
                </Basepage>
              )
            ) : (
              <Basepage>
                <Row justify="center">
                  <Space size="middle">
                    <h1> serie Not Found</h1>
                  </Space>
                </Row>
              </Basepage>
            )
          ) : (
            <Basepage>
              <Row justify="center">
                <Space size="middle">
                  <h1> La commande Existe Pas</h1>
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
  let id = params.id.slice(0, params.id.length - 2);
  let serie_num = params.id.slice(-2);
  const json_Test = await new TestingApi().getTestResultsById(id);
  const Tests = json_Test.data;
  const json = await new TestingApi().getById_commande(id);
  const allCommandesById = json.data;
  const Commandlist = allCommandesById.filter(function (item) {
    return item.num_serie == serie_num;
  });
  console.log('la liste de commande final', allCommandesById.length);
  console.log('la commande final', Commandlist.length);
  let commande;
  let mise_en_placeById = null;
  if (Commandlist.length !== 0) {
    commande = Commandlist[0];
    if (commande !== null) {
      if (Tests.some(test => test.num_serie === serie_num)) {
        commande = 'tested';
      }
      const json_Mise_en_placeById = await new TestingApi().getmiseById(
        commande.id_product
      );
      mise_en_placeById = json_Mise_en_placeById.data;
    }
  } else {
    if (Commandlist.length == 0 && allCommandesById.length !== 0) {
      commande = 'nullserie';
    } else {
      commande = null;
    }
  }
  console.log(commande);
  return {props: {commande, mise_en_placeById, Tests, allCommandesById}};
}

export default withAuth(NewTest)();
