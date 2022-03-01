import React, {useState, useRef, useEffect} from 'react';
import {UpdateData} from '@/actions/newtestupdate';

import {TR_Charge, TR_Courant, TR_Voltage} from '@/FakeData/TestData';

import {
  Form,
  Input,
  Button,
  Select,
  Card,
  Space,
  Radio,
  Row,
  Col,
  Divider,
} from 'antd';

export default function Ratio_P2({commande, mise_en_placeById, setFinaldata}) {
  const inputEl = useRef(null);
  useEffect(() => {
    if (inputEl.current) {
      inputEl.current.focus();
    }
  }, [inputEl]);
  return (
    <div className="Containertest">
      <Divider
        dashed
        orientation="left"
        style={{color: '#34b1ab', marginBottom: '40px'}}>
        <h3>Ratio P2</h3>
      </Divider>
      <div>
        <>
          <Row style={{justifyContent: 'center'}}>
            {!mise_en_placeById ? (
              <Form.Item
                key="Tension_a_appliquer_Ratio_P2"
                label="Tension à appliquer"
                name="Tension_a_appliquer_Ratio_P2 "
                className="show_item_input">
                <Input
                  type="number"
                  ref={inputEl}
                  tabIndex={1}
                  placeholder="Tension à appliquer P2 "
                  onChange={e => {
                    UpdateData(
                      'Tension_a_appliquer_Ratio_P2',
                      e.target.value,
                      setFinaldata
                    );
                  }}
                />
              </Form.Item>
            ) : (
              <Form.Item className="show_item">Tension à appliquer</Form.Item>
            )}
          </Row>

          <Row style={{justifyContent: 'center'}}>
            {!mise_en_placeById ? (
              <Form.Item
                key="Tension_côté_primaire_P2"
                label="Tension côté primaire "
                name="Tension_côté_primaire_P2"
                className="show_item_input">
                <Input
                  type="number"
                  tabIndex={1}
                  placeholder="Tension côté primaire P2  "
                  onChange={e => {
                    UpdateData(
                      'Tension_côté_primaire_P2',
                      e.target.value,
                      setFinaldata
                    );
                  }}
                />
              </Form.Item>
            ) : (
              <Form.Item className="show_item">Tension côté primaire</Form.Item>
            )}
          </Row>

          <Row style={{justifyContent: 'center'}}>
            {!mise_en_placeById ? (
              <Form.Item
                key="TR_Charge_Ratio_P2"
                label="TR Charge "
                name="TR_Charge_Ratio_P2"
                className="show_item_input">
                <Select
                  placeholder="TR Charge P2"
                  showSearch
                  initialvalues=""
                  tabIndex={2}
                  options={TR_Charge}
                  onChange={value =>
                    UpdateData('TR_Charge_Ratio_P2', value, setFinaldata)
                  }
                />
              </Form.Item>
            ) : (
              <Form.Item className="show_item">TR Charge</Form.Item>
            )}
          </Row>

          <Row style={{justifyContent: 'center'}}>
            {!mise_en_placeById ? (
              <Form.Item
                key="TR_Courant_Ratio_P2"
                label="TR Courant  "
                name="TR_Courant_Ratio_P2 "
                className="show_item_input">
                <Select
                  placeholder="TR Courant P2  "
                  showSearch
                  initialvalues=""
                  tabIndex={3}
                  options={TR_Courant}
                  onChange={value =>
                    UpdateData('TR_Courant_Ratio_P2', value, setFinaldata)
                  }
                />
              </Form.Item>
            ) : (
              <Form.Item className="show_item">TR Courant </Form.Item>
            )}
          </Row>

          <Row style={{justifyContent: 'center'}}>
            {!mise_en_placeById ? (
              <Form.Item
                key="TR_Voltage_Ratio_P2"
                label="TR Voltage  "
                name="TR_Voltage_Ratio_P2 "
                className="show_item_input">
                <Select
                  placeholder="TR Voltage P2"
                  showSearch
                  initialvalues=""
                  tabIndex={4}
                  options={TR_Voltage}
                  onChange={value =>
                    UpdateData('TR_Voltage_Ratio_P2', value, setFinaldata)
                  }
                />
              </Form.Item>
            ) : (
              <Form.Item className="show_item">TR Voltage </Form.Item>
            )}
          </Row>
          {!mise_en_placeById && (
            <>
              <Row style={{justifyContent: 'center'}}>
                <Form.Item className="show_item">
                  Résultats théoriques
                </Form.Item>
              </Row>
              <Row style={{justifyContent: 'center'}}>
                <Form.Item
                  key="Prise1_théoriques_P2"
                  style={{width: '10%', marginRight: '5px'}}
                  label="Prise1"
                  name="Prise1_théoriques_P2">
                  <Input
                    type="number"
                    step="0.01"
                    tabIndex={5}
                    placeholder="Prise1 P2"
                    onChange={e => {
                      UpdateData(
                        'Prise1_théoriques_P2',
                        e.target.value,
                        setFinaldata
                      );
                    }}
                  />
                </Form.Item>
                <Form.Item
                  key="Prise2_théoriques_P2"
                  style={{width: '10%', marginRight: '5px'}}
                  label="Prise2"
                  name="Prise2_théoriques_P2">
                  <Input
                    type="number"
                    step="0.01"
                    tabIndex={6}
                    placeholder="Prise2 P2"
                    onChange={e => {
                      UpdateData(
                        'Prise2_théoriques_P2',
                        e.target.value,
                        setFinaldata
                      );
                    }}
                  />
                </Form.Item>
                <Form.Item
                  key="Prise3_théoriques_P2"
                  style={{width: '10%', marginRight: '5px'}}
                  label="Prise3"
                  name="Prise3_théoriques_P2">
                  <Input
                    type="number"
                    step="0.01"
                    tabIndex={7}
                    placeholder="Prise3 P2"
                    onChange={e => {
                      UpdateData(
                        'Prise3_théoriques_P2',
                        e.target.value,
                        setFinaldata
                      );
                    }}
                  />
                </Form.Item>
                <Form.Item
                  key="Prise4_théoriques_P2"
                  style={{width: '10%', marginRight: '5px'}}
                  label="Prise4"
                  name="Prise4_théoriques_P2">
                  <Input
                    type="number"
                    step="0.01"
                    tabIndex={8}
                    placeholder="Prise4 P2"
                    onChange={e => {
                      UpdateData(
                        'Prise4_théoriques_P2',
                        e.target.value,
                        setFinaldata
                      );
                    }}
                  />
                </Form.Item>
                <Form.Item
                  key="Prise5_théoriques_P2"
                  style={{width: '10%', marginRight: '5px'}}
                  label="Prise5"
                  name="Prise5_théoriques_P2">
                  <Input
                    type="number"
                    step="0.01"
                    tabIndex={8}
                    placeholder="Prise5 P2"
                    onChange={e => {
                      UpdateData(
                        'Prise5_théoriques_P2',
                        e.target.value,
                        setFinaldata
                      );
                    }}
                  />
                </Form.Item>
              </Row>
            </>
          )}

          <Row style={{justifyContent: 'center'}}>
            <Form.Item className="show_item">Résultats mesurés</Form.Item>
          </Row>
          <Row style={{justifyContent: 'center'}}>
            <Form.Item
              key="Prise1_mesurés_P2"
              style={{width: '10%', marginRight: '5px'}}
              label="Prise1"
              name="Prise1_mesurés_P2">
              <Input
                type="number"
                step="0.01"
                tabIndex={9}
                placeholder="Prise1 P2"
                onChange={e => {
                  UpdateData('Prise1_mesurés_P2', e.target.value, setFinaldata);
                }}
              />
            </Form.Item>
            <Form.Item
              key="Prise2_mesurés_P2"
              style={{width: '10%', marginRight: '5px'}}
              label="Prise2"
              name="Prise2_mesurés_P2">
              <Input
                type="number"
                step="0.01"
                tabIndex={10}
                placeholder="Prise2 P2"
                onChange={e => {
                  UpdateData('Prise2_mesurés_P2', e.target.value, setFinaldata);
                }}
              />
            </Form.Item>
            <Form.Item
              key="Prise3_mesurés_P2"
              style={{width: '10%', marginRight: '5px'}}
              label="Prise3"
              name="Prise3_mesurés_P2">
              <Input
                type="number"
                step="0.01"
                tabIndex={11}
                placeholder="Prise3 P2"
                onChange={e => {
                  UpdateData('Prise3_mesurés_P2', e.target.value, setFinaldata);
                }}
              />
            </Form.Item>
            <Form.Item
              key="Prise4_mesurés_P2"
              style={{width: '10%', marginRight: '5px'}}
              label="Prise4"
              name="Prise4_mesurés_P2">
              <Input
                type="number"
                step="0.01"
                tabIndex={12}
                placeholder="Prise4 P2"
                onChange={e => {
                  UpdateData('Prise4_mesurés_P2', e.target.value, setFinaldata);
                }}
              />
            </Form.Item>
            <Form.Item
              key="Prise5_mesurés_P2"
              style={{width: '10%', marginRight: '5px'}}
              label="Prise5"
              name="Prise5_mesurés_P2">
              <Input
                type="number"
                step="0.01"
                tabIndex={13}
                placeholder="Prise5 P2"
                onChange={e => {
                  UpdateData('Prise5_mesurés_P2', e.target.value, setFinaldata);
                }}
              />
            </Form.Item>
          </Row>
        </>
      </div>
    </div>
  );
}
