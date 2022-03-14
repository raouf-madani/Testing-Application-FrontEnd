import React, {useState, useRef} from 'react';
import Image from 'next/image';
import Baselayout from '@/components/layouts/baselayout';
import Basepage from '@/components/Basepage';
import Modalnewtestscanner from '@/components/modals/newtest/scannermodal';
import {UseGetUser} from '@/actions/user';
import {Spin, Space, Row, Col, Card, Divider, Button, Alert} from 'antd';
import {useReactToPrint} from 'react-to-print';
const Rapports = () => {
  const {data, loading} = UseGetUser();
  const [modal, setmodal] = useState(false);
  const PrintRef = useRef();
  const pageStyle = `{ size: 4.5in 4in, background:red }`;
  const handlePrint = useReactToPrint({
    content: () => PrintRef.current,
    documentTitle: 'Repport test 1',
  });

  return (
    <div>
      <Baselayout user={data} loading={loading} status={0}>
        <Basepage className="base-page">
          <Row justify="center">
            <div className="print-source" ref={PrintRef} id="report">
              <Row justify="center" style={{borderBottom: '1px white solid'}}>
                <h2>TRANSFORMATEUR AERIEN INOXYDABLE, ONAN, 60Hz, 65 C</h2>
              </Row>

              <Row justify="end" style={{borderBottom: '1px white solid'}}>
                <h2 style={{borderBottom: '2px white solid'}}>Code 1145113</h2>
              </Row>
              <div style={{borderBottom: '1px white solid', padding: '5px'}}>
                <Row gutter={8}>
                  <Col className="gutter-row" span={12}>
                    <Row>
                      <Col span={12} style={{color: 'white'}}>
                        1 PH :
                      </Col>
                      <Col span={12} style={{color: 'white'}}>
                        100 KVA
                      </Col>
                    </Row>
                  </Col>
                  <Col className="gutter-row" span={12}>
                    <Row>
                      <Col span={12} style={{color: 'white'}}>
                        No Serie :
                      </Col>
                      <Col span={12} style={{color: 'white'}}>
                        20136-272
                      </Col>
                    </Row>
                  </Col>
                </Row>

                <Row gutter={8}>
                  <Col className="gutter-row" span={12}>
                    <Row>
                      <Col span={12} style={{color: 'white'}}>
                        Impédance A 85 C:
                      </Col>
                      <Col span={12} style={{color: 'white'}}>
                        2.15%
                      </Col>
                    </Row>
                  </Col>
                  <Col className="gutter-row" span={12}>
                    <Row>
                      <Col span={12} style={{color: 'white'}}>
                        Vol. D&apos;HUILE
                      </Col>
                      <Col span={12} style={{color: 'white'}}>
                        128 L
                      </Col>
                    </Row>
                  </Col>
                </Row>

                <Row gutter={8}>
                  <Col className="gutter-row" span={12}>
                    <Row>
                      <Col span={12} style={{color: 'white'}}>
                        TENUE AU CHOC :
                      </Col>
                      <Col span={12} style={{color: 'white'}}>
                        95 x 125
                      </Col>
                    </Row>
                  </Col>
                  <Col className="gutter-row" span={12}>
                    <Row>
                      <Col span={12} style={{color: 'white'}}>
                        MASSE TOTALE :
                      </Col>
                      <Col span={12} style={{color: 'white'}}>
                        505 kg
                      </Col>
                    </Row>
                  </Col>
                </Row>

                <Row gutter={8}>
                  <Col className="gutter-row" span={12}>
                    <Row>
                      <Col span={12} style={{color: 'white'}}>
                        H.T :
                      </Col>
                      <Col span={12} style={{color: 'white'}}>
                        12470 YMALT/7200 V
                      </Col>
                    </Row>
                  </Col>
                  <Col
                    className="gutter-row"
                    span={12}
                    style={{color: 'white'}}>
                    x 25940 YMALT/14400 V
                  </Col>
                </Row>
                <Row gutter={8}>
                  <Col className="gutter-row" span={12}>
                    <Row>
                      <Col span={12} style={{color: 'white'}}>
                        B.T :
                      </Col>
                      <Col span={12} style={{color: 'white'}}>
                        240/120 V
                      </Col>
                    </Row>
                  </Col>
                  <Col
                    className="gutter-row"
                    span={12}
                    style={{color: 'white'}}>
                    x BPC / 2 PPM
                  </Col>
                </Row>
              </div>
              <Row
                justify="center"
                align="middle"
                style={{borderBottom: '1px white solid'}}>
                <h2>Dessin 1</h2>
              </Row>
              <Row justify="center" align="middle" style={{padding: '10px'}}>
                <Alert
                  style={{width: '42%'}}
                  description="ATTENTION: AVANT DACTIONNER LE SELECTEUR DE TENSION METTRE LE
                   TRANSFORMATEUR HORS TENSION."
                />
              </Row>
              <Row justify="center" align="middle">
                {' '}
                <h2>Dessin 2</h2>
              </Row>
              <Row justify="center" style={{borderBottom: '1px white solid'}}>
                {' '}
                <h4>EFFICACITE ENERGITIQUE SELON CAN/CSA-C802.1-00</h4>
              </Row>
              <Row
                gutter={8}
                style={{padding: '5px', borderBottom: '1px white solid'}}>
                <Col className="gutter-row" span={12}>
                  <Row>
                    <Col span={12} style={{color: 'white'}}>
                      NO. DE CONTRAT :
                    </Col>
                    <Col span={12} style={{color: 'white'}}>
                      4600029855
                    </Col>
                  </Row>
                </Col>
                <Col className="gutter-row" span={12}>
                  <Row>
                    <Col span={12} style={{color: 'white'}}>
                      DATE DE FABRICATION :
                    </Col>
                    <Col span={12} style={{color: 'white'}}>
                      2021/10
                    </Col>
                  </Row>
                </Col>
              </Row>

              <Row
                gutter={8}
                style={{padding: '5px', borderBottom: '1px white solid'}}>
                <Col className="gutter-row" span={12}>
                  <Row>
                    <Col span={12} style={{color: 'white'}}>
                      NORME :
                    </Col>
                    <Col span={12} style={{color: 'white'}}>
                      STERD-A5/009 REV.1
                    </Col>
                  </Row>
                </Col>
                <Col className="gutter-row" span={12}>
                  <Row>
                    <Col span={12} style={{color: 'white'}}>
                      No DE REF :
                    </Col>
                    <Col span={12} style={{color: 'white'}}>
                      661 240 202
                    </Col>
                  </Row>
                </Col>
              </Row>

              <Row gutter={10} align="bottom">
                <Col className="gutter-row" span={6}>
                  <Row align="bottom">
                    <Col>
                      {' '}
                      <Image
                        src="/SE_Logo_White_RGB.svg"
                        height="45px"
                        width="130px"
                        alt="se-logo"
                      />
                    </Col>
                    <Col style={{color: 'white'}}>FITFormer</Col>
                  </Row>
                </Col>
                <Col className="gutter-row" span={14}>
                  <Row justify="space-between">
                    <Col style={{color: 'white'}}>
                      FABRIQUE A TROIS RIVIERES CANADA
                    </Col>
                    <Col style={{color: 'white', paddingRight: '10px'}}>
                      661 378 908 R04
                    </Col>
                  </Row>
                  <Row style={{color: 'white'}}>
                    Siemens Energie Transformateurs Canada Inc.
                  </Row>
                  <Row style={{color: 'white'}}>
                    Siemens Energie est une marque de commerce de siemens AG
                    employee sous licence.
                  </Row>
                </Col>
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
