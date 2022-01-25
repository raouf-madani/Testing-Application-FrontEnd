import React, {useState} from 'react';
import {Form, Input, Radio, Row, Divider, Select} from 'antd';

export default function Induit({
  UpdateData,
  miseenplaceok,
  setFinaldata,
  setNewMisePlace,
  error,
}) {
  const Frequence_Gen = [
    {label: '400', value: '400'},
    {label: '208', value: '208'},
  ];
  const SKE77 = [
    {label: '100', value: '100'},
    {label: '200', value: '200'},
    {label: '300', value: '300'},
    {label: '600', value: '600'},
  ];
  const SKE17 = [
    {label: '100', value: '100'},
    {label: '200', value: '200'},
    {label: '300', value: '300'},
    {label: '600', value: '600'},
  ];
  return (
    <div className="Containertest">
      <Divider
        dashed
        orientation="left"
        style={{color: '#34b1ab', marginBottom: '40px'}}>
        <h3>Induit</h3>{' '}
      </Divider>
      <div>
        <Row
          style={{
            justifyContent: 'center',
          }}>
          <Form.Item
            style={{
              width: '70%',
              marginBottom: '5px',
            }}>
            <Form.Item className="show_item">
              Tension applique position1 : 20V
            </Form.Item>
            <Form.Item
              className="show_item"
              style={{
                margin: '0 8px',
              }}>
              Tension applique position2 : 20V
            </Form.Item>
          </Form.Item>
        </Row>
        {miseenplaceok && (
          <div>
            <Row
              style={{
                justifyContent: 'center',
              }}>
              <Form.Item
                style={{
                  width: '70%',
                  marginBottom: '5px',
                }}>
                <Form.Item className="show_item">
                  Fréquence Genératrice :{' '}
                  {miseenplaceok.Induit.Fréquence_genératrice_P1}
                </Form.Item>
                <Form.Item
                  className="show_item"
                  style={{
                    margin: '0 8px',
                  }}>
                  Fréquence Genératrice :{' '}
                  {miseenplaceok.Induit.Fréquence_genératrice_P2}
                </Form.Item>
              </Form.Item>
            </Row>
            <Row
              style={{
                justifyContent: 'center',
              }}>
              <Form.Item
                style={{
                  width: '70%',
                  marginBottom: '5px',
                }}>
                <Form.Item className="show_item">
                  Réactance SKE77 : {miseenplaceok.Induit.Réactance_ske77_P1}
                </Form.Item>
                <Form.Item
                  className="show_item"
                  style={{
                    margin: '0 8px',
                  }}>
                  Réactance SKE77 : {miseenplaceok.Induit.Réactance_ske77_P2}
                </Form.Item>
              </Form.Item>
            </Row>
            <Row
              style={{
                justifyContent: 'center',
              }}>
              <Form.Item
                style={{
                  width: '70%',
                  marginBottom: '5px',
                }}>
                <Form.Item className="show_item">
                  Réactance SKE17 : {miseenplaceok.Induit.Réactance_ske17_P1}
                </Form.Item>
                <Form.Item
                  className="show_item"
                  style={{
                    margin: '0 8px',
                  }}>
                  Réactance SKE17 : {miseenplaceok.Induit.Réactance_ske17_P2}
                </Form.Item>
              </Form.Item>
            </Row>
          </div>
        )}
        {!miseenplaceok && (
          <div>
            <Row
              style={{
                justifyContent: 'center',
              }}>
              <Form.Item
                label="Fréquence Genératrice"
                style={{width: '60%', marginBottom: '5px'}}>
                <Form.Item
                  name="Fréquence_Genératrice_P1"
                  rules={[{required: true, message: 'Champ Requis'}]}
                  style={{display: 'inline-block', width: 'calc(50% - 8px)'}}>
                  <Select
                    defaultValue=""
                    options={Frequence_Gen}
                    onChange={value => {
                      UpdateData(
                        'Fréquence_genératrice_P1',
                        value,
                        setNewMisePlace
                      );
                      UpdateData(
                        'Fréquence_genératrice_P1',
                        value,
                        setFinaldata
                      );
                    }}
                  />
                </Form.Item>
                <Form.Item
                  name="Fréquence_Genératrice_P2"
                  style={{
                    display: 'inline-block',
                    width: 'calc(50% - 8px)',
                    margin: '0 8px',
                  }}>
                  <Select
                    defaultValue=""
                    options={Frequence_Gen}
                    onChange={value => {
                      UpdateData(
                        'Fréquence_genératrice_P2',
                        value,
                        setNewMisePlace
                      );
                      UpdateData(
                        'Fréquence_genératrice_P2',
                        value,
                        setFinaldata
                      );
                    }}
                  />
                </Form.Item>
              </Form.Item>
            </Row>
            <Row style={{justifyContent: 'center'}}>
              <Form.Item
                label="Réactance SKE77"
                style={{width: '60%', marginBottom: '5px'}}>
                <Form.Item
                  name="Réactance_SKE77_P1"
                  rules={[{required: true, message: 'Champ Requis'}]}
                  style={{display: 'inline-block', width: 'calc(50% - 8px)'}}>
                  <Select
                    defaultValue=""
                    options={SKE77}
                    onChange={value => {
                      UpdateData('Réactance_ske77_P1', value, setNewMisePlace);
                      UpdateData('Réactance_ske77_P1', value, setFinaldata);
                    }}
                  />
                </Form.Item>
                <Form.Item
                  name="Réactance_SKE77_P2"
                  style={{
                    display: 'inline-block',
                    width: 'calc(50% - 8px)',
                    margin: '0 8px',
                  }}>
                  <Select
                    defaultValue=""
                    options={SKE77}
                    onChange={value => {
                      UpdateData('Réactance_ske77_P2', value, setNewMisePlace);
                      UpdateData('Réactance_ske77_P2', value, setFinaldata);
                    }}
                  />
                </Form.Item>
              </Form.Item>
            </Row>
            <Row style={{justifyContent: 'center'}}>
              <Form.Item
                label="Réactance SKE17"
                style={{width: '60%', marginBottom: '5px'}}>
                <Form.Item
                  name="Réactance_SKE17_P1"
                  rules={[{required: true, message: 'Champ Requis'}]}
                  style={{display: 'inline-block', width: 'calc(50% - 8px)'}}>
                  <Select
                    defaultValue=""
                    options={SKE17}
                    onChange={value => {
                      UpdateData('Réactance_ske17_P1', value, setNewMisePlace);
                      UpdateData('Réactance_ske17_P1', value, setFinaldata);
                    }}
                  />
                </Form.Item>
                <Form.Item
                  name="Réactance_SKE17_P2"
                  style={{
                    display: 'inline-block',
                    width: 'calc(50% - 8px)',
                    margin: '0 8px',
                  }}>
                  <Select
                    defaultValue=""
                    options={SKE17}
                    onChange={value => {
                      UpdateData('Réactance_ske17_P2', value, setNewMisePlace);
                      UpdateData('Réactance_ske17_P2', value, setFinaldata);
                    }}
                  />
                </Form.Item>
              </Form.Item>
            </Row>
          </div>
        )}
        <Row style={{justifyContent: 'center'}}>
          <Form.Item style={{width: '60%', marginBottom: '5px'}}>
            <Form.Item
              name="Resultat_P1"
              rules={[{required: true, message: 'Champ Requis'}]}
              style={{display: 'inline-block', width: 'calc(50% - 8px)'}}>
              <Radio.Group buttonStyle="solid">
                <Radio.Button
                  style={{margin: '5px'}}
                  value="reussit"
                  onClick={() =>
                    UpdateData(
                      'Test_Induit_P1',
                      'test Induit reussi',
                      setFinaldata
                    )
                  }>
                  reussit
                </Radio.Button>
                <Radio.Button
                  style={{margin: '5px'}}
                  onClick={() => {
                    UpdateData(
                      'Test_Induit_P1',
                      'test Induit echoue',
                      setFinaldata
                    );
                    error('Le Test de Induit Position 1 est echoué...');
                  }}
                  value="echoue">
                  echoue
                </Radio.Button>
              </Radio.Group>
            </Form.Item>
            <Form.Item
              name="Resultat_P2"
              style={{
                display: 'inline-block',
                width: 'calc(50% - 8px)',
                margin: '0 8px',
              }}>
              <Radio.Group buttonStyle="solid">
                <Radio.Button
                  style={{margin: '5px'}}
                  value={true}
                  onClick={() =>
                    UpdateData(
                      'Test_Induit_P2',
                      'test Induit reussi',
                      setFinaldata
                    )
                  }>
                  reussit{' '}
                </Radio.Button>
                <Radio.Button
                  onClick={() => {
                    UpdateData(
                      'Test_Induit_P2',
                      'test Induit echoue',
                      setFinaldata
                    );
                    error('Le Test de Induit Position 2 est echoué...');
                  }}
                  style={{margin: '5px'}}
                  value={false}>
                  echoue
                </Radio.Button>
              </Radio.Group>
            </Form.Item>
          </Form.Item>
        </Row>
      </div>
    </div>
  );
}
