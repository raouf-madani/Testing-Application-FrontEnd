import Head from 'next/head';
import React, {useState} from 'react';
import Baselayout from '@/components/layouts/baselayout';
import Basepage from '@/components/Basepage';
import EtapeContent from '@/components/newTestContent';
import withAuth from '@/hoc/withAuth';
import {useGetUser} from '@/actions/user';
import {useRouter} from 'next/router';
import Modal from '@/components/modals/historique/historiquemodal';
import {Steps, Button, message, Row, Col, Divider, Form, Input} from 'antd';

const {Step} = Steps;
const steps = [
  {
    title: 'Temperature',
    content: 'Temperatur',
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
    title: 'Hinot',
    content: 'Hinot',
  },
  {
    title: 'Pertes a Vide',
    content: 'Pertes a Vide',
  },
  {
    title: 'Pertes a Charge',
    content: 'Pertes a Charge',
  },

  {
    title: 'Gravure',
    content: 'Gravure',
  },

  {
    title: 'Signature',
    content: 'Signature',
  },
];
const Haut = ({noCommande, toggle1}) => {
  return (
    <div style={{display: 'flex'}}>
      <Col
        span={8}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100px',
          background: '#035266',
          border: '1px solid white',
        }}>
        <Row
          gutter={8}
          className="flex-div"
          style={{justifyContent: 'space-between'}}>
          <div className="flex-div">
            <h4>Model</h4> : 1EA1010{' '}
          </div>
        </Row>
        <Row
          gutter={8}
          className="flex-div"
          style={{justifyContent: 'space-between'}}>
          <div className="flex-div">
            <h4>Type</h4> : 3 phases{' '}
          </div>
        </Row>
      </Col>
      <Col
        span={8}
        offset={8}
        style={{
          border: '1px solid white',
          backgroundColor: '#035266',
        }}>
        <Row
          gutter={8}
          className="flex-div"
          style={{justifyContent: 'space-between'}}>
          <div className="flex-div">#Mo : {noCommande} </div>
          <div className="flex-div">Kva : inin </div>
        </Row>
        <Row
          gutter={8}
          className="flex-div"
          style={{justifyContent: 'space-between'}}>
          <div className="flex-div">Numero de serie : hggj </div>
          <div className="flex-div">Voltage HT : inin </div>
        </Row>
        <Row
          gutter={8}
          className="flex-div"
          style={{justifyContent: 'space-between'}}>
          <div className="flex-div">Quantity : 1/13 </div>
          <div className="flex-div">Voltage BT : inin </div>
        </Row>
      </Col>
    </div>
  );
};

const Newtest = () => {
  const {data, loading} = useGetUser();
  const router = useRouter();
  const noCommande = router.query.numerocommande;
  const [modal1, setModal1] = useState(false);
  const toggle1 = () => setModal1(!modal1);
  const [current, setCurrent] = useState(0);
  const [temperature, settemperature] = useState(null);
  const [Finaldata, setFinaldata] = useState({temperature: 1});
  const [Commandes, setModels] = useState([
    {id: '1', numcommand: 'CP20136', numproduit: 'Produit1'},
    {id: '2', numcommand: 'CP20135', numproduit: 'Produit2'},
    {id: '3', numcommand: 'CP20136', numproduit: 'Produit3'},
    {id: '4', numcommand: 'CP20137', numproduit: 'Produit4'},
    {id: '5', numcommand: 'CP20138', numproduit: 'Produit5'},
    {id: '6', numcommand: 'CP20139', numproduit: 'Produit6'},
    {id: '7', numcommand: 'CP20140', numproduit: 'Produit7'},
    {id: '8', numcommand: 'CP20141', numproduit: 'Produit8'},
    {id: '9', numcommand: 'CP20142', numproduit: 'Produit9'},
  ]);
  const next = () => {
    current < 8 ? setCurrent(current + 1) : message.success('Test Finit!');
    console.log(Finaldata);
  };

  const prev = () => {
    setCurrent(current - 1);
  };
  const UpdateData = value => {
    setFinaldata(data => {
      return {...data, temperature: value};
    });
  };
  var foundcommande = false;
  for (var i = 0; i < Commandes.length; i++) {
    if (Commandes[i].numcommand == noCommande) {
      foundcommande = true;
      break;
    }
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
              <Haut noCommande={noCommande} toggle1={toggle1} />
              <Divider dashed orientation="left" style={{color: 'white'}}>
                Étapes
              </Divider>
              <Row>
                <Col flex={1}>
                  <Steps current={current} direction="vertical">
                    {steps.map(item => (
                      <Step
                        style={{color: 'red'}}
                        key={item.title}
                        title={item.title}
                      />
                    ))}
                  </Steps>
                </Col>
                <Col flex={4}>
                  <Form layout="vertical" name="control-ref" onFinish={next}>
                    <div className="steps-content">
                      <EtapeContent
                        etapeName={steps[current].content}
                        temperature={temperature}
                      />
                    </div>
                    <div className="steps-action">
                      <Form.Item>
                        {current > 0 && (
                          <Button
                            style={{margin: '0 8px'}}
                            onClick={() => prev()}>
                            Previous
                          </Button>
                        )}
                        {current < steps.length - 1 && (
                          <Button type="primary" htmlType="submit">
                            Next
                          </Button>
                        )}
                        {current === steps.length - 1 && (
                          <Button type="primary" htmlType="submit">
                            Done
                          </Button>
                        )}
                      </Form.Item>
                    </div>
                  </Form>
                </Col>
              </Row>
            </div>
          ) : (
            <div>model not found</div>
          )}
          <Modal
            noCommande={noCommande}
            toggle={toggle1}
            modal={modal1}
            title="Historique"
            className="modalContainer"
            width="100%"></Modal>
        </Basepage>
      </Baselayout>
    </div>
  );
};

export default withAuth(Newtest)();
