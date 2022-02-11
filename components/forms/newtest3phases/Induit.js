import React, {useState, useRef, useEffect} from 'react';
import {Form, Input, Radio, Row, Divider, Select} from 'antd';

export default function Induit({
  UpdateData,
  miseenplaceok,
  setFinaldata,
  setNewMisePlace,
  error,
}) {
  const {TextArea} = Input;
  const inputEl = useRef(null);
  useEffect(() => {
    if (inputEl.current) {
      inputEl.current.focus();
    }
  }, [inputEl]);
  const Frequence_Gen = [
    {label: 400, value: 400},
    {label: 208, value: 208},
  ];
  const SKE77 = [
    {label: 'off', value: 'off'},
    {label: 16, value: 16},
    {label: 32, value: 32},
  ];
  const SKE17 = [
    {label: 'off', value: 'off'},
    {label: 1, value: 1},
    {label: 3, value: 3},
    {label: 5, value: 5},
    {label: 7, value: 7},
    {label: 9, value: 9},
    {label: 10, value: 10},
    {label: 11, value: 11},
    {label: 12, value: 12},
    {label: 13, value: 13},
    {label: 14, value: 14},
    {label: 15, value: 15},
  ];
  return (
    <div className="Containertest">
      <Divider
        dashed
        orientation="left"
        style={{color: '#34b1ab', marginBottom: '40px'}}>
        <h3>Induit</h3>{' '}
      </Divider>
      <Row
        style={{
          justifyContent: 'center',
        }}>
        <Form.Item
          style={{
            width: '70%',
            marginBottom: '5px',
          }}>
          <Form.Item className="show_item">Position 1</Form.Item>
          <Form.Item
            className="show_item"
            style={{
              margin: '0 8px',
            }}>
            Position 2
          </Form.Item>
        </Form.Item>
      </Row>
      <div>
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
          </div>
        )}
        {!miseenplaceok && (
          <div>
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
                    tabIndex={!miseenplaceok ? 2 : -1}
                    options={SKE77}
                    onChange={value => {
                      UpdateData('Réactance_ske77_P1', value, setNewMisePlace);
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
                    tabIndex={!miseenplaceok ? 6 : -1}
                    defaultValue=""
                    options={SKE77}
                    onChange={value => {
                      UpdateData('Réactance_ske77_P2', value, setNewMisePlace);
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
                    tabIndex={!miseenplaceok ? 3 : -1}
                    options={SKE17}
                    onChange={value => {
                      UpdateData('Réactance_ske17_P1', value, setNewMisePlace);
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
                    tabIndex={!miseenplaceok ? 7 : -1}
                    defaultValue=""
                    options={SKE17}
                    onChange={value => {
                      UpdateData('Réactance_ske17_P2', value, setNewMisePlace);
                    }}
                  />
                </Form.Item>
              </Form.Item>
            </Row>
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
                    ref={inputEl}
                    tabIndex={!miseenplaceok ? 1 : -1}
                    defaultValue=""
                    options={Frequence_Gen}
                    onChange={value => {
                      UpdateData(
                        'Fréquence_genératrice_P1',
                        value,
                        setNewMisePlace
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
                    tabIndex={!miseenplaceok ? 5 : -1}
                    defaultValue=""
                    options={Frequence_Gen}
                    onChange={value => {
                      UpdateData(
                        'Fréquence_genératrice_P2',
                        value,
                        setNewMisePlace
                      );
                    }}
                  />
                </Form.Item>
              </Form.Item>
            </Row>
          </div>
        )}
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

        <Row
          style={{
            justifyContent: 'center',
            marginBottom: '10px',
          }}>
          <Form.Item
            label="Commentaire"
            style={{
              width: '60%',
              marginBottom: '5px',
            }}>
            <TextArea rows={4} />
          </Form.Item>
        </Row>
        <Row style={{justifyContent: 'center'}}>
          <Form.Item style={{width: '60%', marginBottom: '5px'}}>
            <Form.Item
              name="Resultat_P1"
              style={{display: 'inline-block', width: 'calc(50% - 8px)'}}>
              <Radio.Group defaultValue="reussit" buttonStyle="solid">
                <Radio.Button
                  tabIndex={4}
                  ref={!miseenplaceok ? null : inputEl}
                  style={{margin: '5px'}}
                  value="reussit"
                  optionType="button"
                  onClick={() =>
                    UpdateData('Test_Induit_P1', true, setFinaldata)
                  }>
                  reussit
                </Radio.Button>
                <Radio.Button
                  style={{margin: '5px'}}
                  onClick={() => {
                    UpdateData('Test_Induit_P1', false, setFinaldata);
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
                  tabIndex={8}
                  style={{margin: '5px'}}
                  value={true}
                  onClick={() =>
                    UpdateData('Test_Induit_P2', true, setFinaldata)
                  }>
                  reussit{' '}
                </Radio.Button>
                <Radio.Button
                  onClick={() => {
                    UpdateData('Test_Induit_P2', false, setFinaldata);
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
