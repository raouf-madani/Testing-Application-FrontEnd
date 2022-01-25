import React, {useState} from 'react';
import {Form, Input, Row, Divider, Select} from 'antd';

export default function Perte_a_vide({
  UpdateData,
  miseenplaceok,
  setFinaldata,
  setNewMisePlace,
}) {
  const Multiplicateur_Volts = [
    {label: '400', value: '400'},
    {label: '208', value: '208'},
  ];
  const Multiplicateur_Amperes = [
    {label: '4000', value: '4000'},
    {label: '2000', value: '2000'},
  ];
  return (
    <div className="Containertest">
      <Divider
        dashed
        orientation="left"
        style={{color: '#34b1ab', marginBottom: '40px'}}>
        <h3>Perte A Vide</h3>
      </Divider>
      <div>
        <Row style={{justifyContent: 'center'}}>
          <Form.Item style={{marginBottom: 0, width: '70%'}}>
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
            <Row style={{justifyContent: 'center'}}>
              <Form.Item style={{marginBottom: 0, width: '70%'}}>
                <Form.Item className="show_item">
                  Multiplicateur Volts :{' '}
                  {miseenplaceok.Perte_a_Vide.Multiplicateur_volts_P1}
                </Form.Item>
                <Form.Item
                  className="show_item"
                  style={{
                    margin: '0 8px',
                  }}>
                  Multiplicateur Volts :{' '}
                  {miseenplaceok.Perte_a_Vide.Multiplicateur_volts_P2}
                </Form.Item>
              </Form.Item>
            </Row>
            <Row style={{justifyContent: 'center'}}>
              <Form.Item style={{marginBottom: 0, width: '70%'}}>
                <Form.Item className="show_item">
                  Multiplicateur Ampéres :{' '}
                  {miseenplaceok.Perte_a_Vide.Multiplicateur_amperes_P1}
                </Form.Item>
                <Form.Item
                  className="show_item"
                  style={{
                    margin: '0 8px',
                  }}>
                  Multiplicateur Ampéres :{' '}
                  {miseenplaceok.Perte_a_Vide.Multiplicateur_amperes_P2}
                </Form.Item>
              </Form.Item>
            </Row>
          </div>
        )}
        {!miseenplaceok && (
          <div>
            <Row style={{justifyContent: 'center'}}>
              <Form.Item
                label="Multiplicateur Volts"
                style={{marginBottom: 0, width: '60%'}}>
                <Form.Item
                  name="multiplicateur_Volts_P1"
                  rules={[{required: true, message: 'Champ Requis'}]}
                  style={{display: 'inline-block', width: 'calc(50% - 8px)'}}>
                  <Select
                    defaultValue=""
                    options={Multiplicateur_Volts}
                    onChange={value => {
                      UpdateData(
                        'Multiplicateur_volts_P1',
                        value,
                        setNewMisePlace
                      );
                      UpdateData(
                        'Multiplicateur_volts_P1',
                        value,
                        setFinaldata
                      );
                    }}
                  />
                </Form.Item>
                <Form.Item
                  name="multiplicateur_Volts_P2"
                  style={{
                    display: 'inline-block',
                    width: 'calc(50% - 8px)',
                    margin: '0 8px',
                  }}>
                  <Select
                    defaultValue=""
                    options={Multiplicateur_Volts}
                    onChange={value => {
                      UpdateData(
                        'Multiplicateur_volts_P2',
                        value,
                        setNewMisePlace
                      );
                      UpdateData(
                        'Multiplicateur_volts_P2',
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
                label="Multiplicateur Ampéres"
                style={{marginBottom: 0, width: '60%'}}>
                <Form.Item
                  name="Multiplicateur_Amprers_P1"
                  rules={[{required: true, message: 'Champ Requis'}]}
                  style={{display: 'inline-block', width: 'calc(50% - 8px)'}}>
                  <Select
                    defaultValue=""
                    options={Multiplicateur_Amperes}
                    onChange={value => {
                      UpdateData(
                        'Multiplicateur_amperes_P1',
                        value,
                        setNewMisePlace
                      );
                      UpdateData(
                        'Multiplicateur_amperes_P1',
                        value,
                        setFinaldata
                      );
                    }}
                  />
                </Form.Item>
                <Form.Item
                  name="Multiplicateur_Amprers_P2"
                  style={{
                    display: 'inline-block',
                    width: 'calc(50% - 8px)',
                    margin: '0 8px',
                  }}>
                  <Select
                    defaultValue=""
                    options={Multiplicateur_Amperes}
                    onChange={value => {
                      UpdateData(
                        'Multiplicateur_amperes_P2',
                        value,
                        setNewMisePlace
                      );
                      UpdateData(
                        'Multiplicateur_amperes_P2',
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
                label="Perte Table"
                style={{marginBottom: 0, width: '60%'}}>
                <Form.Item
                  name="Perte_Table_P1"
                  rules={[{required: true, message: 'Champ Requis'}]}
                  style={{display: 'inline-block', width: 'calc(50% - 8px)'}}>
                  <Input
                    type="number"
                    min={10}
                    max={1000}
                    placeholder="Position 1"
                    onChange={e => {
                      UpdateData(
                        'Perte_table_P1',
                        e.target.value,
                        setNewMisePlace
                      );
                      UpdateData(
                        'Perte_table_P1',
                        e.target.value,
                        setFinaldata
                      );
                    }}
                  />
                </Form.Item>
                <Form.Item
                  name="Perte_Table_P2"
                  style={{
                    display: 'inline-block',
                    width: 'calc(50% - 8px)',
                    margin: '0 8px',
                  }}>
                  <Input
                    type="number"
                    min={10}
                    max={1000}
                    placeholder="Position 2"
                    onChange={e => {
                      UpdateData(
                        'Perte_table_P2',
                        e.target.value,
                        setNewMisePlace
                      );
                      UpdateData(
                        'Perte_table_P2',
                        e.target.value,
                        setFinaldata
                      );
                    }}
                  />
                </Form.Item>
              </Form.Item>
            </Row>
          </div>
        )}
        <Row style={{justifyContent: 'center'}}>
          <Form.Item
            label="Pertes Mesurés"
            style={{marginBottom: 0, width: '60%'}}>
            <Form.Item
              name="Pertes_Mesurés_P1"
              rules={[{required: true, message: 'Champ Requis'}]}
              style={{display: 'inline-block', width: 'calc(50% - 8px)'}}>
              <Input
                type="number"
                min={10}
                max={1000}
                placeholder="Position 1"
                onChange={e =>
                  UpdateData('Pertes_mesurés_P1', e.target.value, setFinaldata)
                }
              />
            </Form.Item>
            <Form.Item
              name="Pertes_Mesurés_P2"
              style={{
                display: 'inline-block',
                width: 'calc(50% - 8px)',
                margin: '0 8px',
              }}>
              <Input
                type="number"
                min={10}
                max={1000}
                placeholder="Position 2"
                onChange={e =>
                  UpdateData('Pertes_mesurés_P2', e.target.value, setFinaldata)
                }
              />
            </Form.Item>
          </Form.Item>
        </Row>
        <Row style={{justifyContent: 'center'}}>
          <Form.Item
            label="Courant Excitation Mesurés"
            style={{marginBottom: 0, width: '60%'}}>
            <Form.Item
              name="Courant_Excitation_Mesurés_P1"
              rules={[{required: true, message: 'Champ Requis'}]}
              style={{display: 'inline-block', width: 'calc(50% - 8px)'}}>
              <Input
                type="number"
                min={10}
                max={1000}
                placeholder="Position 1"
                onChange={e =>
                  UpdateData(
                    'Courant_excitation_mesurés_P1',
                    e.target.value,
                    setFinaldata
                  )
                }
              />
            </Form.Item>
            <Form.Item
              name="Courant_Excitation_Mesurés_P2"
              style={{
                display: 'inline-block',
                width: 'calc(50% - 8px)',
                margin: '0 8px',
              }}>
              <Input
                type="number"
                min={10}
                max={1000}
                placeholder="Position 2"
                onChange={e =>
                  UpdateData(
                    'Courant_excitation_mesurés_P2',
                    e.target.value,
                    setFinaldata
                  )
                }
              />
            </Form.Item>
          </Form.Item>
        </Row>
      </div>
    </div>
  );
}
