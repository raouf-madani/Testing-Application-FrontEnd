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

export default function Induit_p1({commande, mise_en_placeById, setFinaldata}) {
  const Reactance = [
    {label: 'A1B1C1', value: 'A1B1C1'},
    {label: 'A3B3C3', value: 'A3B3C3'},
    {label: 'A4B4C4', value: 'A4B4C4'},
  ];
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
        <h3>Induit P1</h3>
      </Divider>
      <div>
        <>
          {!mise_en_placeById && (
            <Row style={{justifyContent: 'center'}}>
              <Form.Item
                key="Valeur_induit_P1 "
                label="Valeur induit "
                name="Valeur_Induit_P1 "
                rules={[{required: true, message: 'Champ Requis'}]}
                className="show_item_input">
                <Input
                  type="number"
                  ref={inputEl}
                  tabIndex={1}
                  placeholder="Valeur induit P1"
                  onChange={e => {
                    UpdateData(
                      'Valeur_Induit_P1',
                      e.target.value,
                      setFinaldata
                    );
                  }}
                />
              </Form.Item>
            </Row>
          )}

          <Row style={{justifyContent: 'center'}}>
            {!mise_en_placeById ? (
              <Form.Item
                key="Réactance_induit_P1"
                label="Réactance"
                name="Réactance_induit_P1"
                rules={[{required: true, message: 'Champ Requis'}]}
                className="show_item_input">
                <Select
                  placeholder="Réactance P1"
                  showSearch
                  initialvalues=""
                  tabIndex={2}
                  options={Reactance}
                  onChange={value => {
                    UpdateData('Réactance_induit_P1', value, setFinaldata);
                  }}
                />
              </Form.Item>
            ) : (
              <Form.Item className="show_item">Réactance :</Form.Item>
            )}
          </Row>

          <Row style={{justifyContent: 'center'}}>
            {!mise_en_placeById ? (
              <Form.Item
                key="TR_Charge_Induit_P1"
                label="TR Charge "
                name="TR_Charge_Induit_P1"
                rules={[{required: true, message: 'Champ Requis'}]}
                className="show_item_input">
                <Select
                  placeholder="TR Charge P1"
                  showSearch
                  initialvalues=""
                  tabIndex={3}
                  options={TR_Charge}
                  onChange={value => {
                    UpdateData('TR_Charge_Induit_P1', value, setFinaldata);
                  }}
                />
              </Form.Item>
            ) : (
              <Form.Item className="show_item">TR Charge :</Form.Item>
            )}
          </Row>
          <Row style={{justifyContent: 'center'}}>
            {!mise_en_placeById ? (
              <Form.Item
                key="TR_Courant_Induit_P1"
                label="TR Courant"
                name="TR_Courant_Induit_P1 "
                rules={[{required: true, message: 'Champ Requis'}]}
                className="show_item_input">
                <Select
                  placeholder="TR Courant P1 "
                  showSearch
                  initialvalues=""
                  tabIndex={4}
                  options={TR_Courant}
                  onChange={value => {
                    UpdateData('TR_Courant_Induit_P1', value, setFinaldata);
                  }}
                />
              </Form.Item>
            ) : (
              <Form.Item className="show_item">TR Courant :</Form.Item>
            )}
          </Row>
          <Row style={{justifyContent: 'center'}}>
            {!mise_en_placeById ? (
              <Form.Item
                key="TR_Voltage_Induit_P1"
                label="TR Voltage  "
                name="TR_Voltage_Induit_P1"
                rules={[{required: true, message: 'Champ Requis'}]}
                className="show_item_input">
                <Select
                  placeholder="TR Voltage P1"
                  showSearch
                  initialvalues=""
                  tabIndex={5}
                  options={TR_Voltage}
                  onChange={value => {
                    UpdateData('TR_Voltage_Induit_P1', value, setFinaldata);
                  }}
                />
              </Form.Item>
            ) : (
              <Form.Item className="show_item">TR Voltage :</Form.Item>
            )}
          </Row>
          <Row style={{justifyContent: 'center'}}>
            <Form.Item
              key="Tension_a_appliquer_Induit_P1"
              label="Tension à appliquer"
              name="Tension_a_appliquer_Induit_P1 "
              rules={[{required: true, message: 'Champ Requis'}]}
              className="show_item_input">
              <Input
                type="number"
                step="0.01"
                tabIndex={6}
                placeholder="Tension à appliquer "
                onChange={e => {
                  UpdateData(
                    'Tension_a_appliquer_Induit_P1',
                    e.target.value,
                    setFinaldata
                  );
                }}
              />
            </Form.Item>
          </Row>

          <Row style={{justifyContent: 'center'}}>
            <Form.Item
              name="Induit_P1_test"
              rules={[{required: true, message: 'Champ Requis'}]}
              style={{display: 'inline-block', width: 'calc(50% - 8px)'}}>
              <Radio.Group buttonStyle="solid" key="Induit_P1_test">
                <Radio.Button
                  tabIndex={7}
                  style={{margin: '5px'}}
                  value={true}
                  onKeyPress={() => {
                    UpdateData('Induit_P1_test', true, setFinaldata);
                  }}
                  onClick={() => {
                    UpdateData('Induit_P1_test', true, setFinaldata);
                  }}>
                  Test Réussi
                </Radio.Button>
                <Radio.Button
                  style={{margin: '5px'}}
                  value={false}
                  onKeyPress={() => {
                    UpdateData('Induit_P1_test', false, setFinaldata);
                  }}
                  onClick={() => {
                    UpdateData('Induit_P1_test', false, setFinaldata);
                  }}>
                  Test Échoué
                </Radio.Button>
              </Radio.Group>
            </Form.Item>
          </Row>
        </>
      </div>
    </div>
  );
}
