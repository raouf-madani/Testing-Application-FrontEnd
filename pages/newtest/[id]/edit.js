import {useRouter} from 'next/router';
import React, {useState, useEffect} from 'react';
import Head from 'next/head';
import Baselayout from '@/components/layouts/baselayout';
import Basepage from '@/components/Basepage';
import Modalnewtestscanner from '@/components/modals/newtest/scannermodal';
import Haut from '@/components/newTestComponents/Haut';

import DisplayComponent from '@/components/Timer';
import TestArea from '@/components/test_area';
import {
  Fakedata,
  Fakedata3phases,
  Mise_NewData,
  Mise_NewData3phases,
} from '@/FakeData/TestData';
import {useGetCommande} from '@/actions/commandes';
import {useGetMise, useUpdateMisePlace} from '@/actions/mise_place';

import withAuth from '@/hoc/withAuth';
import {useGetUser} from '@/actions/user';
import {useCreateTest, useGetTest} from '@/actions/tests';
import {UpdateData} from '@/actions/newtestupdate';
import TestingApi from '@/lib/api/testing';

import {
  Steps,
  Button,
  Row,
  Col,
  Divider,
  Form,
  Modal,
  Space,
  Spin,
  Input,
} from 'antd';

const {Step} = Steps;
const {confirm} = Modal;

const NewTest = ({commande, mise_en_placeById, Test, allCommandesById}) => {
  debugger;
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const [tablelength, settablelength] = useState(15);
  const [time, setTime] = useState({ms: 0, s: 0, m: 0, h: 0});
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);

  // const [historiquemodal, sethistoriqueModal] = useState(false);

  const [Finaldata, setFinaldata] = useState(Fakedata);
  const [Finaldata3phases, setFinaldata3phases] = useState(Fakedata3phases);
  const [NewMisePlace, setNewMisePlace] = useState(Mise_NewData);
  const [NewMisePlace3phases, setNewMisePlace3phases] =
    useState(Mise_NewData3phases);

  const [modal, setmodal] = useState(false);
  const {data: dataU, loading: loadingU} = useGetUser();
  const [test_type_selected, settest_type_selected] = useState();
  const [teststatus, setteststatus] = useState();
  const [temperature_noaffected, settemperature_noaffected] = useState(16);
  const [createTest, {data, loading}] = useCreateTest();
  const _CreateTest = data => {
    createTest(data);
  };
  const {data: commandehook} = useGetCommande(router.query.id);
  const {data: test} = useGetTest(50070345);
  const {data: mise} = useGetMise('1AE654');
  const TypeOfTest = mise_en_placeById
    ? mise_en_placeById.Type_test
    : test_type_selected;
  const [form] = Form.useForm();
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

  const next = data => {
    if (current == 0) {
      if (data.temperature_affected == null) {
        alert(
          temperature_noaffected
            ? 'affecter la temperature'
            : 'affecter la temperature non affected'
        );
      } else {
        if (mise_en_placeById !== null) {
          console.log('begin the work mise en place done');
          UpdateData(
            'numcommand',
            1010,
            TypeOfTest == '1phase' ? setFinaldata : setFinaldata3phases
          );
          setCurrent(current + 1);
        } else {
          console.log('begin the work No mise en place ');
          UpdateData(
            'numcommand',
            1010,
            TypeOfTest == '1phase' ? setFinaldata : setFinaldata3phases
          );
          UpdateData(
            'numcommand',
            1010,
            TypeOfTest == '1phase' ? setNewMisePlace : setNewMisePlace3phases
          );
          // Type test
          UpdateData(
            'test_type',
            test_type_selected,
            TypeOfTest == '1phase' ? setFinaldata : setFinaldata3phases
          );
          UpdateData(
            'test_type',
            test_type_selected,
            TypeOfTest == '1phase' ? setNewMisePlace : setNewMisePlace3phases
          );
          console.log(' la final data', data);
          setCurrent(current + 1);
        }
      }
      {
        status === 0 ? start() : '';
      }
    } else if (current < tablelength - 1) {
      setCurrent(current + 1);
    } else {
      if (data.temperature_affected !== null) {
        reset();
        form.resetFields();
        setmodal(!modal);

        console.log('the final data to create is ', data);
        // _CreateTest(data);
      } else {
        alert('affecter la temperature');
      }
    }
    if (current == tablelength - 1) {
      setteststatus('fin');
      console.log(teststatus);
    }

    console.log(data);
    console.log(TypeOfTest == '1phase' ? NewMisePlace : NewMisePlace3phases);
    console.log('the current is ', current);
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
        setFinaldata3phases(Fakedata3phases);
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
  let initial_from_values1phase = {
    // Ratio et Polarite
    Tension_mesurée_P1: Test.Ratio.Tension_mesurée_P1,
    Tension_mesurée_P2: Test.Ratio.Tension_mesurée_P2,
    Polarité_Mesuré_P1: Test.Ratio.Polarité_mesurée_P1,
    Polarité_Mesuré_P2: Test.Ratio.Polarité_mesurée_P2,
    // Decharges Partielle
    S_15: Finaldata.Decharges_Partielles.S_15,
    S_30: Finaldata.Decharges_Partielles.S_30,
    S_45: Finaldata.Decharges_Partielles.S_45,
    S_60: Finaldata.Decharges_Partielles.S_60,
    S_75: Finaldata.Decharges_Partielles.S_75,
    S_90: Finaldata.Decharges_Partielles.S_90,
    S_105: Finaldata.Decharges_Partielles.S_105,
    S_120: Finaldata.Decharges_Partielles.S_120,
    S_135: Finaldata.Decharges_Partielles.S_135,
    S_150: Finaldata.Decharges_Partielles.S_150,
    S_165: Finaldata.Decharges_Partielles.S_165,
    S_180: Finaldata.Decharges_Partielles.S_180,
    //Pertes a Charge
    Resistance_HT_P1: Finaldata.Perte_a_charge.Resistance_ht_P1,
    Resistance_BT_P1: Finaldata.Perte_a_charge.Resistance_bt_P1,
    Resistance_HT_P2: Finaldata.Perte_a_charge.Resistance_ht_P2,
    Resistance_BT_P2: Finaldata.Perte_a_charge.Resistance_bt_P2,
  };
  let initial_from_values3phase = {
    // Decharges Partielles
    S_15: Finaldata3phases.Decharges_Partielles.S_15,
    S_30: Finaldata3phases.Decharges_Partielles.S_30,
    S_45: Finaldata3phases.Decharges_Partielles.S_45,
    S_60: Finaldata3phases.Decharges_Partielles.S_60,
    S_75: Finaldata3phases.Decharges_Partielles.S_75,
    S_90: Finaldata3phases.Decharges_Partielles.S_90,
    S_105: Finaldata3phases.Decharges_Partielles.S_105,
    S_120: Finaldata3phases.Decharges_Partielles.S_120,
    S_135: Finaldata3phases.Decharges_Partielles.S_135,
    S_150: Finaldata3phases.Decharges_Partielles.S_150,
    S_165: Finaldata3phases.Decharges_Partielles.S_165,
    S_180: Finaldata3phases.Decharges_Partielles.S_180,
    // Resistance
    Resistance_ht_P1: Finaldata3phases.Resistance.Resistance_ht_P1,
    Resistance_ht_P2: Finaldata3phases.Resistance.Resistance_ht_P2,
    Resistance_bt: Finaldata3phases.Resistance.Resistance_bt,
    H1_H2_P1: Finaldata3phases.Resistance.H1_H2_P1,
    H1_H3_P1: Finaldata3phases.Resistance.H1_H3_P1,
    H2_H3_P1: Finaldata3phases.Resistance.H2_H3_P1,
    H1_H2_P2: Finaldata3phases.Resistance.H1_H2_P1,
    H1_H3_P2: Finaldata3phases.Resistance.H1_H3_P1,
    H2_H3_P2: Finaldata3phases.Resistance.H2_H3_P1,
    X1_X2: Finaldata3phases.Resistance.H1_H2_P1,
    X1_X3: Finaldata3phases.Resistance.H1_H3_P1,
    X2_X3: Finaldata3phases.Resistance.H2_H3_P1,
  };
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
                    Finaldata={
                      TypeOfTest == '1phase' ? Finaldata : Finaldata3phases
                    }
                    setFinaldata={
                      TypeOfTest == '1phase'
                        ? setFinaldata
                        : setFinaldata3phases
                    }
                    commande={commande}
                    UpdateData={UpdateData}
                    useGetMise={useGetMise}
                    useUpdateMisePlace={useUpdateMisePlace}
                    Tests_length={6}
                    allCommandesById_length={allCommandesById.length}
                    status={status}
                    test_type_selected={test_type_selected}
                    settest_type_selected={settest_type_selected}
                    temperature_noaffected={temperature_noaffected}
                    settemperature_noaffected={settemperature_noaffected}
                  />
                  <Divider dashed orientation="left" style={{color: 'white'}}>
                    Étapes de Test
                  </Divider>
                  <Form
                    form={form}
                    layout="vertical"
                    name="results_form"
                    onFinish={
                      test_type_selected == '1phase'
                        ? () =>
                            next(
                              TypeOfTest == '1phase'
                                ? Finaldata
                                : Finaldata3phases
                            )
                        : () =>
                            next(
                              TypeOfTest == '1phase'
                                ? Finaldata
                                : Finaldata3phases
                            )
                    }
                    initialValues={
                      TypeOfTest == '1phase'
                        ? initial_from_values1phase
                        : initial_from_values3phase
                    }
                    autoComplete="off">
                    <TestArea
                      mise_en_placeById={mise_en_placeById}
                      settest_type_selected={settest_type_selected}
                      commande={commande}
                      test_type_selected={test_type_selected}
                      temperature_noaffected={temperature_noaffected}
                      form={form}
                      Finaldata={
                        TypeOfTest == '1phase' ? Finaldata : Finaldata3phases
                      }
                      setFinaldata={
                        TypeOfTest == '1phase'
                          ? setFinaldata
                          : setFinaldata3phases
                      }
                      setNewMisePlace={
                        TypeOfTest == '1phase'
                          ? setNewMisePlace
                          : setNewMisePlace3phases
                      }
                      error={error}
                      current={current}
                      settablelength={settablelength}
                      //props for buttons
                      status={status}
                      resume={resume}
                      stop={stop}
                      AnnulerConfirm={AnnulerConfirm}
                      prev={prev}
                      tablelength={tablelength}
                      // props button reussi
                      next={() =>
                        next(
                          TypeOfTest == '1phase' ? Finaldata : Finaldata3phases
                        )
                      }
                    />
                  </Form>
                  <Modalnewtestscanner
                    modal={modal}
                    toggle={() => setmodal(!modal)}
                    teststatus={teststatus}
                    direction="index"
                  />
                </div>
              ) : (
                <Basepage>
                  <Row justify="center">
                    <Space size="middle">
                      <h1> produit deja tested voulez vous le retester?</h1>
                      <Button
                        onClick={() => {
                          router.push({
                            pathname: '/newtest/[id]/edit',
                            query: {
                              id: router.query.id,
                              firstchecked: router.query.firstchecked,
                            },
                          });
                        }}>
                        retester
                      </Button>
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
  let commande;
  let mise_en_placeById = null;
  let json_Test;
  let Test;
  let allCommandesById;
  try {
    json_Test = await new TestingApi().getTestResultsById(params.id);
    Test = json_Test.data;
    const json = await new TestingApi().getById_commande(id);
    allCommandesById = json.data;
  } catch (error) {
    console.log(error);
  }

  const Commandlist = allCommandesById.filter(function (item) {
    return item.num_serie == serie_num;
  });
  if (Commandlist.length !== 0) {
    commande = Commandlist[0];
    if (commande !== null) {
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
  return {
    props: {commande, mise_en_placeById, Test, allCommandesById},
    revalidate: 60,
  };
}

export default withAuth(NewTest)();
