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
import {UseGetUser} from '@/actions/user';
import {useCreateTest, useGetTest, useUpdateTest} from '@/actions/tests';
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
  const {data: dataU, loading: loadingU} = UseGetUser();
  const [test_type_selected, settest_type_selected] = useState();
  const [teststatus, setteststatus] = useState();
  const [temperature_noaffected, settemperature_noaffected] = useState(16);
  const [createTest, {data, loading}] = useCreateTest();
  const _CreateTest = data => {
    createTest(data);
  };
  const [updateTest] = useUpdateTest();
  const _updateTest = async (id, data) => {
    await updateTest(id, data);
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
            router.query.id,
            TypeOfTest == '1phase' ? setFinaldata : setFinaldata3phases
          );
          // Type test
          UpdateData(
            'test_type',
            TypeOfTest,
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
        console.log('the final data to update ', data);
        // _updateTest(Test._id, data);
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
      title: 'Test ??chou??',
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
    // RIV
    Riv: Test.riv,
    // Ratio et Polarite
    //Position 1
    // sans prise
    Tension_mesur??e_P1: Test.Ratio.Tension_mesur??e_P1,
    // avec prise
    Tension_mesur??e_P1_P1: Test.Ratio.Tension_mesur??e_P1_P1,
    Tension_mesur??e_P2_P1: Test.Ratio.Tension_mesur??e_P2_P1,
    Tension_mesur??e_P3_P1: Test.Ratio.Tension_mesur??e_P3_P1,
    Tension_mesur??e_P4_P1: Test.Ratio.Tension_mesur??e_P4_P1,
    Tension_mesur??e_P5_P1: Test.Ratio.Tension_mesur??e_P5_P1,

    Polarit??_Mesur??_P1: Test.Ratio.Polarit??_mesur??e_P1,
    //Position 2
    //sans prise
    Tension_mesur??e_P2: Test.Ratio.Tension_mesur??e_P2,
    //avec prise
    Tension_mesur??e_P1_P2: Test.Ratio.Tension_mesur??e_P1_P2,
    Tension_mesur??e_P2_P2: Test.Ratio.Tension_mesur??e_P2_P2,
    Tension_mesur??e_P3_P2: Test.Ratio.Tension_mesur??e_P3_P2,
    Tension_mesur??e_P4_P2: Test.Ratio.Tension_mesur??e_P4_P2,
    Tension_mesur??e_P5_P2: Test.Ratio.Tension_mesur??e_P5_P2,

    Polarit??_Mesur??_P2: Test.Ratio.Polarit??_mesur??e_P2,
    // Pertes a Vide
    //Position 1
    Pertes_Mesur??s_P1: Test.Perte_a_Vide.Pertes_mesur??s_P1,
    Courant_Excitation_Mesur??s_P1:
      Test.Perte_a_Vide.Courant_excitation_mesur??s_P1,
    //Position 2
    Pertes_Mesur??s_P2: Test.Perte_a_Vide.Pertes_mesur??s_P2,
    Courant_Excitation_Mesur??s_P2:
      Test.Perte_a_Vide.Courant_excitation_mesur??s_P2,
    // Pertes a Charge
    //Position 1
    Resistance_HT_P1: Test.Perte_a_Charge.Resistance_ht_P1,
    Resistance_BT_P1: Test.Perte_a_Charge.Resistance_bt_P1,
    Perte_Charge_Mesur??_P1: Test.Perte_a_Charge.Perte_charge_mesur??_P1,
    Imp??dance_Mesur??_P1: Test.Perte_a_Charge.Imp??dance_mesur??_P1,
    //Position 2
    Resistance_HT_P2: Test.Perte_a_Charge.Resistance_ht_P2,
    Resistance_BT_P2: Test.Perte_a_Charge.Resistance_bt_P2,
    Perte_Charge_Mesur??_P2: Test.Perte_a_Charge.Perte_charge_mesur??_P2,
    Imp??dance_Mesur??_P2: Test.Perte_a_Charge.Imp??dance_mesur??_P2,

    // Decharges Partielle
    S_15: Test.Decharges_Partielles.s_15,
    S_30: Test.Decharges_Partielles.s_30,
    S_45: Test.Decharges_Partielles.s_45,
    S_60: Test.Decharges_Partielles.s_60,
    S_75: Test.Decharges_Partielles.s_75,
    S_90: Test.Decharges_Partielles.s_90,
    S_105: Test.Decharges_Partielles.s_105,
    S_120: Test.Decharges_Partielles.s_120,
    S_135: Test.Decharges_Partielles.s_135,
    S_150: Test.Decharges_Partielles.s_150,
    S_165: Test.Decharges_Partielles.s_165,
    S_180: Test.Decharges_Partielles.s_180,
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
                    ??tapes de Test
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
