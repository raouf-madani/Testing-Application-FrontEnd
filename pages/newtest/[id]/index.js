import {useRouter} from 'next/router';
import React, {useState, useEffect} from 'react';
import Head from 'next/head';
import Baselayout from '@/components/layouts/baselayout';
import Basepage from '@/components/Basepage';
import Modalnewtestscanner from '@/components/modals/newtest/scannermodal';
import Haut from '@/components/newTestComponents/Haut';

import DisplayComponent from '@/components/Timer';
import TestArea from '@/components/test_area';
import {Fakedata, Fakedata3phases, Mise_NewData} from '@/FakeData/TestData';
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

const NewTest = ({commande, mise_en_placeById, Tests, allCommandesById}) => {
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

  const next = () => {
    if (current == 0) {
      if (Finaldata.temperature_affected == null) {
        alert(
          temperature_noaffected
            ? 'affecter la temperature'
            : 'affecter la temperature non affected'
        );
      } else {
        if (mise_en_placeById !== null) {
          console.log('begin the work mise en place done');
          UpdateData('numcommand', 1010, setFinaldata);
          setCurrent(current + 1);
        } else {
          console.log('begin the work No mise en place ');
          UpdateData('numcommand', 1010, setFinaldata);
          UpdateData('numcommand', 1010, setNewMisePlace);
          // Type test
          UpdateData('test_type', test_type_selected, setFinaldata);
          UpdateData('test_type', test_type_selected, setNewMisePlace);
          console.log(' la final data', Finaldata);
          setCurrent(current + 1);
        }
      }
      {
        status === 0 ? start() : '';
      }
    } else if (current < tablelength - 1) {
      setCurrent(current + 1);
    } else {
      if (Finaldata.temperature_affected !== null) {
        reset();
        form.resetFields();
        setmodal(!modal);

        console.log('the final data to create is ', Finaldata);
        _CreateTest(Finaldata);
      } else {
        alert('affecter la temperature');
      }
    }
    if (current == tablelength - 1) {
      setteststatus('fin');
      console.log(teststatus);
    }

    console.log(Finaldata);
    console.log(NewMisePlace);
  };
  // nex for 3 phases
  const next3phases = () => {
    if (current == 0) {
      if (Finaldata3phases.temperature_affected == null) {
        alert(
          temperature_noaffected
            ? 'affecter la temperature'
            : 'affecter la temperature non affected'
        );
      } else {
        if (mise_en_placeById !== null) {
          console.log('begin the work mise en place done');
          UpdateData('numcommand', 1010, setFinaldata3phases);
          setCurrent(current + 1);
        } else {
          console.log('begin the work No mise en place ');
          UpdateData('numcommand', 1010, setFinaldata3phases);
          UpdateData('numcommand', 1010, setNewMisePlace);
          // Type test
          UpdateData('test_type', test_type_selected, setFinaldata3phases);
          UpdateData('test_type', test_type_selected, setNewMisePlace);
          console.log(' la final data', Finaldata3phases);
          setCurrent(current + 1);
        }
      }
      {
        status === 0 ? start() : '';
      }
    } else if (current < tablelength - 1) {
      setCurrent(current + 1);
    } else {
      if (Finaldata3phases.temperature_affected !== null) {
        reset();
        form.resetFields();
        setmodal(!modal);

        console.log('the final data to create is ', Finaldata3phases);
        _CreateTest(Finaldata3phases);
      } else {
        alert('affecter la temperature');
      }
    }
    if (current == tablelength - 1) {
      setteststatus('fin');
      console.log(teststatus);
    }

    console.log(Finaldata3phases);
    console.log(NewMisePlace);
  };
  ///
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
  // for 3 phases
  function AnnulerConfirm3phases() {
    confirm({
      title: "etes vous sur d'annuler le test Courant?",
      onOk() {
        reset();
        setCurrent(0);
        settest_type_selected();
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
                    setFinaldata={setFinaldata}
                    Finaldata3phases={Finaldata3phases}
                    setFinaldata3phases={setFinaldata3phases}
                    commande={commande}
                    UpdateData={UpdateData}
                    useGetMise={useGetMise}
                    useUpdateMisePlace={useUpdateMisePlace}
                    Tests_length={Tests.length}
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
                    onFinish={test_type_selected == '1phase' ? next : next}
                    initialValues={{
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
                    }}
                    autoComplete="off">
                    <TestArea
                      mise_en_placeById={mise_en_placeById}
                      settest_type_selected={settest_type_selected}
                      commande={commande}
                      test_type_selected={test_type_selected}
                      Finaldata={Finaldata}
                      setFinaldata={setFinaldata}
                      Finaldata3phases={Finaldata3phases}
                      setFinaldata3phases={setFinaldata3phases}
                      setNewMisePlace={setNewMisePlace}
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
                      next={next}
                      next3phases={next3phases}
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
  let Tests;
  let allCommandesById;
  try {
    json_Test = await new TestingApi().getallTestResults();
    Tests = json_Test.data;
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
      if (
        Tests.some(
          test => test.num_serie === serie_num && test.id_command === id
        )
      ) {
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
  return {
    props: {commande, mise_en_placeById, Tests, allCommandesById},
    revalidate: 60,
  };
}

export default NewTest;
