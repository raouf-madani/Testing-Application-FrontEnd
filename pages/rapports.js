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
            <div
              className="print-source"
              ref={PrintRef}
              id="report"
              style={{color: 'white'}}>
              <div style={{height: '27%'}}>
                <Row
                  justify="center"
                  style={{
                    borderBottom: '1px white solid',
                    fontSize: '11px',

                    fontFamily: 'Lucida Sans',
                  }}>
                  TRANSFORMATEUR AERIEN INOXYDABLE, ONAN, 60Hz, 65 C
                </Row>
                <Row
                  style={{borderBottom: '1px white solid', fontSize: '11px'}}
                  justify="end">
                  <span
                    style={{
                      borderBottom: '2px white solid',
                      fontFamily: 'Lucida Sans',
                    }}>
                    Code 1145113{' '}
                  </span>
                </Row>
                <div
                  style={{
                    fontSize: '7px',
                    fontFamily: 'Microsoft Sans Serif ',
                  }}>
                  <Row justify="center">
                    <Col span={10}>
                      <Row>
                        <Col span={12}>1 PH :</Col>
                        <Col span={12}>100 KVA</Col>
                      </Row>
                    </Col>
                    <Col span={14}>
                      <Row>
                        <Col span={12}>No Serie :</Col>
                        <Col span={12} style={{fontSize: '11px'}}>
                          20136-272
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <Row justify="center">
                    <Col span={10}>
                      <Row>
                        <Col span={12}>Impédance A 85 C:</Col>
                        <Col span={12}>2.15%</Col>
                      </Row>
                    </Col>
                    <Col span={14}>
                      <Row>
                        <Col span={12}>Vol. D&apos;HUILE</Col>
                        <Col span={12}>128 L</Col>
                      </Row>
                    </Col>
                  </Row>
                  <Row justify="center">
                    <Col span={10}>
                      <Row>
                        <Col span={12}>TENUE AU CHOC :</Col>
                        <Col span={12}>95 x 125</Col>
                      </Row>
                    </Col>
                    <Col span={14}>
                      <Row>
                        <Col span={12}>MASSE TOTALE :</Col>
                        <Col span={12}>505 kg</Col>
                      </Row>
                    </Col>
                  </Row>
                  <Row justify="center">
                    <Col span={10}>
                      <Row>
                        <Col span={12}>H.T :</Col>
                        <Col span={12}>12470 YMALT/7200 V</Col>
                      </Row>
                    </Col>
                    <Col span={14}>
                      <Row>
                        <Col span={12}>x</Col>
                        <Col span={12}>25940 YMALT/14400 V</Col>
                      </Row>
                    </Col>
                  </Row>
                  <Row justify="center">
                    <Col span={10}>
                      <Row>
                        <Col span={12}>B.T :</Col>
                        <Col span={12}>240/120 V</Col>
                      </Row>
                    </Col>
                    <Col span={14}>BPC / 2 PPM</Col>
                  </Row>
                </div>
              </div>
              <Row style={{height: '56%'}} justify="center">
                <Row justify="center">Dessin 1</Row>
                <Row justify="center" align="middle" style={{height: '20%'}}>
                  <span
                    style={{
                      fontSize: '7px',
                      fontFamily: 'Microsoft Sans Serif',

                      width: '60%',
                      padding: '1px',
                      border: '0.5px solid',
                    }}>
                    ATTENTION: AVANT DACTIONNER LE SELECTEUR DE TENSION METTRE
                    LE TRANSFORMATEUR HORS TENSION.
                  </span>
                </Row>
                <Row justify="center">Dessin 2</Row>
              </Row>
              <div style={{height: '17%'}}>
                <div
                  style={{
                    fontSize: '7px',
                    fontFamily: 'Microsoft Sans Serif',
                  }}>
                  <Row
                    justify="center"
                    style={{borderBottom: '1px white solid'}}>
                    EFFICACITE ENERGITIQUE SELON CAN/CSA-C802.1-00
                  </Row>
                  <Row style={{borderBottom: '1px white solid'}}>
                    <Col span={13}>
                      <Row justify="space-between">
                        <Col span={12}>NO. DE CONTRAT :</Col>
                        <Col span={12}>4600029855</Col>
                      </Row>
                    </Col>
                    <Col span={11}>
                      <Row>
                        <Col span={16}>DATE DE FABRICATION :</Col>
                        <Col span={8}>2021/10</Col>
                      </Row>
                    </Col>
                  </Row>
                  <Row style={{borderBottom: '1px white solid'}}>
                    <Col span={14}>
                      <Row>
                        <Col span={8}>NORME :</Col>
                        <Col span={16}>STERD-A5/009 REV.1</Col>
                      </Row>
                    </Col>
                    <Col span={10}>
                      <Row>
                        <Col span={12}>No DE REF :</Col>
                        <Col span={12}>661 240 202</Col>
                      </Row>
                    </Col>
                  </Row>
                </div>
                <Row>
                  <Col span={7}>
                    <Row align="bottom">
                      <Col>
                        <Image
                          src="/SE_Logo_White_RGB.svg"
                          height="25px"
                          width="50px"
                          alt="se-logo"
                        />
                      </Col>
                      <Col
                        style={{
                          fontSize: '7px',
                          fontFamily: 'Siemens Sans Cond Global',
                        }}>
                        FITFormer
                      </Col>
                    </Row>
                  </Col>
                  <Col span={17}>
                    <Row
                      justify="space-between"
                      style={{
                        fontSize: '7px',
                        fontFamily: 'Siemens Sans Cond Global',
                      }}>
                      <Col>FABRIQUE A TROIS RIVIERES CANADA</Col>
                      <Col>661 378 908 R04</Col>
                    </Row>
                    <div
                      style={{
                        fontSize: '6px',
                        fontFamily: 'Siemens Sans Cond Global',
                      }}>
                      <Row>Siemens Energie Transformateurs Canada Inc.</Row>
                      <Row>
                        Siemens Energie est une marque de commerce de siemens AG
                        employee sous licence.
                      </Row>
                    </div>
                  </Col>
                </Row>
              </div>
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
