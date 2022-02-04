import React, {useState, useRef, useEffect} from 'react';
import {Form, Input, Row, Divider, Select} from 'antd';

export default function Perte_a_vide({
  UpdateData,
  miseenplaceok,
  setFinaldata,
  setNewMisePlace,
}) {
  const inputEl = useRef(null);
  useEffect(() => {
    if (inputEl.current) {
      inputEl.current.focus();
    }
  }, [inputEl]);
  const Multiplicateur_Volts = [
    {label: 0.4, value: 0.4},
    {label: 1, value: 1},
    {label: 2, value: 2},
    {label: 4, value: 4},
    {label: 8, value: 8},
    {label: 16, value: 16},
    {label: 24, value: 24},
    {label: 40, value: 40},
    {label: 48, value: 48},
  ];
  const Multiplicateur_Amperes = [
    {label: 1, value: 1},
    {label: 2, value: 2},
    {label: 5, value: 5},
    {label: 10, value: 10},
    {label: 20, value: 20},
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
                    ref={inputEl}
                    tabIndex={1}
                    defaultValue=""
                    options={Multiplicateur_Volts}
                    onChange={value => {
                      UpdateData(
                        'Multiplicateur_volts_P1',
                        value,
                        setNewMisePlace
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
                    tabIndex={6}
                    options={Multiplicateur_Volts}
                    onChange={value => {
                      UpdateData(
                        'Multiplicateur_volts_P2',
                        value,
                        setNewMisePlace
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
                    tabIndex={2}
                    options={Multiplicateur_Amperes}
                    onChange={value => {
                      UpdateData(
                        'Multiplicateur_amperes_P1',
                        value,
                        setNewMisePlace
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
                    tabIndex={7}
                    options={Multiplicateur_Amperes}
                    onChange={value => {
                      UpdateData(
                        'Multiplicateur_amperes_P2',
                        value,
                        setNewMisePlace
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
                    tabIndex={3}
                    min={10}
                    max={1000}
                    step="0.0001"
                    placeholder="Position 1"
                    onChange={e => {
                      UpdateData(
                        'Perte_table_P1',
                        e.target.value,
                        setNewMisePlace
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
                    tabIndex={8}
                    min={10}
                    max={1000}
                    step="0.0001"
                    placeholder="Position 2"
                    onChange={e => {
                      UpdateData(
                        'Perte_table_P2',
                        e.target.value,
                        setNewMisePlace
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
                ref={!miseenplaceok ? null : inputEl}
                type="number"
                tabIndex={4}
                min={10}
                max={1000}
                step="0.0001"
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
                tabIndex={9}
                min={10}
                max={1000}
                step="0.0001"
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
                tabIndex={5}
                min={10}
                max={1000}
                step="0.0001"
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
                tabIndex={10}
                min={10}
                max={1000}
                step="0.0001"
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
