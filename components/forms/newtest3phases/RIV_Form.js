import React, {useState, useRef, useEffect} from 'react';
import {UpdateData} from '@/actions/newtestupdate';

import {TR_Charge, TR_Courant} from '@/FakeData/TestData';

import {Form, Input, Button, Select, DatePicker, Row, Divider} from 'antd';

export default function RIV({commande, mise_en_placeById, setFinaldata}) {
  const inputEl = useRef(null);
  useEffect(() => {
    if (inputEl.current) {
      inputEl.current.focus();
    }
  }, [inputEl]);
  const TR_Tension = [
    {label: '240/X2', value: '240/X2'},
    {label: '480 / X4', value: '480 / X4'},
    {label: '600/X5', value: '600/X5'},
    {label: '1200 / X10', value: '1200 / X10'},
    {label: '2400/X20', value: '2400/X20'},
    {label: '4800 / X40', value: '4800 / X40'},
    {label: 'N/A', value: 'N/A'},
  ];
  return (
    <div className="Containertest">
      <Divider
        dashed
        orientation="left"
        style={{color: '#34b1ab', marginBottom: '40px'}}>
        <h3>Riv</h3>
      </Divider>
      <div>
        <Row style={{justifyContent: 'center'}}>
          <Form.Item
            key="TR_Charge_RIV"
            label="TR Charge "
            name="TR_Charge_RIV"
            rules={[{required: true, message: 'Champ Requis'}]}
            className="show_item_input">
            <Select
              ref={inputEl}
              placeholder="TR Charge"
              showSearch
              initialvalues=""
              tabIndex={1}
              options={TR_Charge}
              onChange={value => {
                UpdateData('TR_Charge_RIV', value, setFinaldata);
              }}
            />
          </Form.Item>
        </Row>
        <Row style={{justifyContent: 'center'}}>
          <Form.Item
            key="TR_Courant_RIV"
            label="TR Courant"
            name="TR_Courant_RIV "
            rules={[{required: true, message: 'Champ Requis'}]}
            className="show_item_input">
            <Select
              placeholder="TR Courant  "
              showSearch
              initialvalues=""
              tabIndex={2}
              options={TR_Courant}
              onChange={value => {
                UpdateData('TR_Courant_RIV', value, setFinaldata);
              }}
            />
          </Form.Item>
        </Row>
        <Row style={{justifyContent: 'center'}}>
          <Form.Item
            key="TR_Tension_RIV"
            label="TR Tension"
            name="TR_Tension_RIV "
            rules={[{required: true, message: 'Champ Requis'}]}
            className="show_item_input">
            <Select
              placeholder="TR Tension  "
              showSearch
              initialvalues=""
              tabIndex={3}
              options={TR_Tension}
              onChange={value => {
                UpdateData('TR_Tension_RIV', value, setFinaldata);
              }}
            />
          </Form.Item>
        </Row>
        <Row style={{justifyContent: 'center'}}>
          <Form.Item
            key="Tension_a_appliquer_RIV"
            label="Tension à appliquer"
            name="Tension_a_appliquer_RIV "
            rules={[{required: true, message: 'Champ Requis'}]}
            className="show_item_input">
            <Input
              type="number"
              tabIndex={4}
              placeholder="Tension à appliquer "
              onChange={e => {
                UpdateData(
                  'Tension_a_appliquer_RIV',
                  e.target.value,
                  setFinaldata
                );
              }}
            />
          </Form.Item>
        </Row>
        <Row style={{justifyContent: 'center'}}>
          <Form.Item
            key="Valeur_mesurée_RIV"
            label="Valeur mesurée"
            name="Valeur_mesurée_RIV "
            rules={[{required: true, message: 'Champ Requis'}]}
            className="show_item_input">
            <Input
              type="number"
              tabIndex={5}
              placeholder="Valeur mesurée"
              onChange={e => {
                UpdateData('Valeur_mesurée_RIV', e.target.value, setFinaldata);
              }}
            />
          </Form.Item>
        </Row>
      </div>
    </div>
  );
}
