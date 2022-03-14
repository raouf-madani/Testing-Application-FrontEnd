import React, {useState, useRef} from 'react';
import Image from 'next/image';
import Baselayout from '@/components/layouts/baselayout';
import Basepage from '@/components/Basepage';
import Modalnewtestscanner from '@/components/modals/newtest/scannermodal';
import {UseGetUser} from '@/actions/user';
import {Spin, Space, Row, Col, Card, Divider, Button} from 'antd';
import {useReactToPrint} from 'react-to-print';
const Rapports = () => {
  const {data, loading} = UseGetUser();
  const [modal, setmodal] = useState(false);
  const PrintRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => PrintRef.current,
  });
  const style = {padding: '8px 0'};
  return (
    <div>
      <Baselayout user={data} loading={loading} status={0}>
        <Basepage className="base-page">
          <Row justify="center">
            <div
              ref={PrintRef}
              id="report"
              style={{
                background: 'black',
                height: '800px',
                padding: '10px',
                boxShadow: 'white 0px 5px 15px',
              }}>
              <Row justify="center" style={{borderBottom: '1px white solid'}}>
                <h2>TRANSFORMATEUR AERIEN INOXYDABLE, ONAN, 60Hz, 65 C</h2>
              </Row>

              <Row justify="end" style={{borderBottom: '1px white solid'}}>
                <h2 style={{borderBottom: '2px white solid'}}>Code 1145113</h2>
              </Row>
              <div style={{borderBottom: '1px white solid'}}>
                <Row gutter={8}>
                  <Col className="gutter-row" span={12}>
                    <Row>
                      <Col span={12}>
                        <h4>1 PH :</h4>{' '}
                      </Col>
                      <Col span={12}>
                        <h4>100 KVA </h4>
                      </Col>
                    </Row>
                  </Col>
                  <Col className="gutter-row" span={12}>
                    <Row>
                      <Col span={12}>
                        <h4>No Serie :</h4>{' '}
                      </Col>
                      <Col span={12}>
                        <h4>20136-272</h4>
                      </Col>
                    </Row>
                  </Col>
                </Row>

                <Row gutter={8}>
                  <Col className="gutter-row" span={12}>
                    <Row>
                      <Col span={12}>
                        <h4>Impédance A 85 C:</h4>{' '}
                      </Col>
                      <Col span={12}>
                        <h4>2.15%</h4>
                      </Col>
                    </Row>
                  </Col>
                  <Col className="gutter-row" span={12}>
                    <Row>
                      <Col span={12}>
                        <h4>Vol. D&apos;HUILE</h4>{' '}
                      </Col>
                      <Col span={12}>
                        <h4>128 L</h4>
                      </Col>
                    </Row>
                  </Col>
                </Row>

                <Row gutter={8}>
                  <Col className="gutter-row" span={12}>
                    <Row>
                      <Col span={12}>
                        <h4>TENUE AU CHOC :</h4>{' '}
                      </Col>
                      <Col span={12}>
                        <h4>95 x 125</h4>
                      </Col>
                    </Row>
                  </Col>
                  <Col className="gutter-row" span={12}>
                    <Row>
                      <Col span={12}>
                        <h4>MASSE TOTALE :</h4>{' '}
                      </Col>
                      <Col span={12}>
                        <h4>505 kg</h4>
                      </Col>
                    </Row>
                  </Col>
                </Row>

                <Row gutter={8}>
                  <Col className="gutter-row" span={12}>
                    <Row>
                      <Col span={12}>
                        <h4>H.T :</h4>{' '}
                      </Col>
                      <Col span={12}>
                        <h4>12470 YMALT/7200 V</h4>
                      </Col>
                    </Row>
                  </Col>
                  <Col className="gutter-row" span={12}>
                    <h4> x 25940 YMALT/14400 V</h4>
                  </Col>
                </Row>
              </div>

              <Row align="bottom">
                <Image
                  src="/SE_Logo_White_RGB.svg"
                  height="45px"
                  width="130px"
                  alt="se-logo"
                />
              </Row>
            </div>
          </Row>
          <Row justify="center" style={{marginTop: '20px'}}>
            <Button onClick={handlePrint}>Imprimer</Button>
          </Row>
        </Basepage>
        <Modalnewtestscanner
          modal={modal}
          toggle={() => setmodal(!modal)}
          teststatus={0}
          direction="index"
        />
      </Baselayout>
    </div>
  );
};

export default Rapports;
