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

export default function Decharges_Partielles({
  commande,
  mise_en_placeById,
  setFinaldata,
  Finaldata,
  error,
}) {
  const [Line2, setLine2] = useState();
  const [Line3, setLine3] = useState();
  const inputEl = useRef(null);
  useEffect(() => {
    if (inputEl.current) {
      inputEl.current.focus();
    }
  }, [inputEl]);

  useEffect(() => {
    if (
      Finaldata.Decharges_Partielles.S_15 < 500 &&
      Finaldata.Decharges_Partielles.S_30 < 500 &&
      Finaldata.Decharges_Partielles.S_45 < 500 &&
      Finaldata.Decharges_Partielles.S_60 < 500
    ) {
      setLine2(false);
    } else {
      setLine2(true);
    }
    if (
      Finaldata.Decharges_Partielles.S_75 < 500 &&
      Finaldata.Decharges_Partielles.S_90 < 500 &&
      Finaldata.Decharges_Partielles.S_105 < 500 &&
      Finaldata.Decharges_Partielles.S_120 < 500
    ) {
      setLine3(false);
    } else {
      setLine3(true);
    }
  }, [Finaldata]);

  useEffect(() => {
    if (Line2 == false) {
      console.log('supprimer la 2eme et la 3eme ligne');
      UpdateData('S_75', '', setFinaldata);
      UpdateData('S_90', '', setFinaldata);
      UpdateData('S_105', '', setFinaldata);
      UpdateData('S_120', '', setFinaldata);
      UpdateData('S_135', '', setFinaldata);
      UpdateData('S_150', '', setFinaldata);
      UpdateData('S_165', '', setFinaldata);
      UpdateData('S_180', '', setFinaldata);
    }
  }, [Line2]);
  const Reactance = [
    {label: 'A1B1C1', value: 'A1B1C1'},
    {label: 'A3B3C3', value: 'A3B3C3'},
    {label: 'A4B4C4', value: 'A4B4C4'},
  ];

  return (
    <div className="Containertest">
      <Divider
        dashed
        orientation="left"
        style={{color: '#34b1ab', marginBottom: '40px'}}>
        <h3>Decharges Partielles</h3>
      </Divider>
      <div>
        <Row style={{justifyContent: 'center'}}>
          <Form.Item
            key="Sélecteur_de_prise_DechargeP"
            label="Sélecteur de prise"
            name="Sélecteur_de_prise_DechargeP "
            rules={[{required: true, message: 'Champ Requis'}]}
            className="show_item_input">
            <Input
              ref={inputEl}
              type="number"
              placeholder="Sélecteur de prise"
              onChange={e => {
                UpdateData(
                  'Sélecteur_de_prise_DechargeP',
                  e.target.value,
                  setFinaldata
                );
              }}
            />
          </Form.Item>
        </Row>
        <Row style={{justifyContent: 'center'}}>
          <Form.Item
            key="Sélecteur_de_tension_DechargeP"
            label="Sélecteur de tension"
            name="Sélecteur_de_tension_DechargeP "
            rules={[{required: true, message: 'Champ Requis'}]}
            className="show_item_input">
            <Input
              type="number"
              placeholder="Sélecteur de tension"
              onChange={e => {
                UpdateData(
                  'Sélecteur_de_tension_DechargeP',
                  e.target.value,
                  setFinaldata
                );
              }}
            />
          </Form.Item>
        </Row>
        <Row style={{justifyContent: 'center'}}>
          <Form.Item
            key="Réactance_DechargeP"
            label="Réactance "
            name="Réactance_DechargeP"
            rules={[{required: true, message: 'Champ Requis'}]}
            className="show_item_input">
            <Select
              placeholder="Réactance"
              showSearch
              initialvalues=""
              options={Reactance}
              onChange={value => {
                UpdateData('Réactance_DechargeP', value, setFinaldata);
              }}
            />
          </Form.Item>
        </Row>
        <Row style={{justifyContent: 'center'}}>
          <Form.Item
            key="TR_Charge_DechargeP"
            label="TR Charge "
            name="TR_Charge_DechargeP"
            rules={[{required: true, message: 'Champ Requis'}]}
            className="show_item_input">
            <Select
              placeholder="TR Charge"
              showSearch
              initialvalues=""
              options={TR_Charge}
              onChange={value => {
                UpdateData('TR_Charge_DechargeP', value, setFinaldata);
              }}
            />
          </Form.Item>
        </Row>
        <Row style={{justifyContent: 'center'}}>
          <Form.Item
            key="TR_Courant_DechargeP"
            label="TR Courant"
            name="TR_Courant_DechargeP "
            rules={[{required: true, message: 'Champ Requis'}]}
            className="show_item_input">
            <Select
              placeholder="TR Courant "
              showSearch
              initialvalues=""
              options={TR_Courant}
              onChange={value => {
                UpdateData('TR_Courant_DechargeP', value, setFinaldata);
              }}
            />
          </Form.Item>
        </Row>
        <Row style={{justifyContent: 'center'}}>
          <Form.Item
            key="TR_Voltage_DechargeP"
            label="TR Voltage"
            name="TR_Voltage_DechargeP "
            rules={[{required: true, message: 'Champ Requis'}]}
            className="show_item_input">
            <Select
              placeholder="TR Voltage "
              showSearch
              initialvalues=""
              options={TR_Voltage}
              onChange={value => {
                UpdateData('TR_Voltage_DechargeP', value, setFinaldata);
              }}
            />
          </Form.Item>
        </Row>
        <Row style={{justifyContent: 'center'}}>
          <Form.Item
            key="Tension_appliqué_1_7_pu_DechargeP"
            label="Tension appliqué 1.7 pu"
            name="Tension_appliqué_1_7_pu_DechargeP "
            rules={[{required: true, message: 'Champ Requis'}]}
            className="show_item_input">
            <Input
              type="number"
              placeholder="Tension appliqué 1.7 pu"
              onChange={e => {
                UpdateData(
                  'Tension_appliqué_1_7_pu_DechargeP',
                  e.target.value,
                  setFinaldata
                );
              }}
            />
          </Form.Item>
        </Row>
        <Row style={{justifyContent: 'center'}}>
          <Form.Item
            key="Tension_appliqué_1_5_pu_DechargeP"
            label="Tension appliqué 1.5 pu"
            name="Tension_appliqué_1_5_pu_DechargeP "
            rules={[{required: true, message: 'Champ Requis'}]}
            className="show_item_input">
            <Input
              type="number"
              placeholder="Tension appliqué 1.5 pu"
              onChange={e => {
                UpdateData(
                  'Tension_appliqué_1_5_pu_DechargeP',
                  e.target.value,
                  setFinaldata
                );
              }}
            />
          </Form.Item>
        </Row>
        <Row style={{justifyContent: 'center'}}>
          <Form.Item
            key="15_Sec"
            style={{width: '80px', marginRight: '5px'}}
            label="15 Sec"
            name="S_15"
            rules={[{required: true, message: 'Champ Requis'}]}>
            <Input
              type="number"
              ref={!mise_en_placeById ? null : inputEl}
              placeholder="15 Sec"
              onChange={e => {
                UpdateData('S_15', e.target.value, setFinaldata);
              }}
            />
          </Form.Item>
          <Form.Item
            key="30_Sec"
            style={{width: '80px', marginRight: '5px'}}
            label="30 Sec"
            name="S_30"
            rules={[{required: true, message: 'Champ Requis'}]}>
            <Input
              type="number"
              placeholder="30 Sec"
              onChange={e => {
                UpdateData('S_30', e.target.value, setFinaldata);
              }}
            />
          </Form.Item>
          <Form.Item
            key="45_Sec"
            style={{width: '80px', marginRight: '5px'}}
            label="45 Sec"
            name="S_45"
            rules={[{required: true, message: 'Champ Requis'}]}>
            <Input
              type="number"
              placeholder="45 Sec"
              onChange={e => {
                UpdateData('S_45', e.target.value, setFinaldata);
              }}
            />
          </Form.Item>
          <Form.Item
            key="60_Sec"
            style={{width: '80px', marginRight: '5px'}}
            label="60 Sec"
            name="S_60"
            rules={[{required: true, message: 'Champ Requis'}]}>
            <Input
              type="number"
              placeholder="60 Sec"
              onChange={e => {
                UpdateData('S_60', e.target.value, setFinaldata);
              }}
            />
          </Form.Item>
        </Row>
        {Line2 && (
          <Row style={{justifyContent: 'center'}}>
            <Form.Item
              key="75_Sec"
              style={{width: '80px', marginRight: '5px'}}
              label="75 Sec"
              name="S_75"
              rules={[{required: true, message: 'Champ Requis'}]}>
              <Input
                type="number"
                ref={!mise_en_placeById ? null : inputEl}
                placeholder="75 Sec"
                onChange={e => {
                  UpdateData('S_75', e.target.value, setFinaldata);
                }}
              />
            </Form.Item>
            <Form.Item
              key="90_Sec"
              style={{width: '80px', marginRight: '5px'}}
              label="90 Sec"
              name="S_90"
              rules={[{required: true, message: 'Champ Requis'}]}>
              <Input
                type="number"
                placeholder="90 Sec"
                onChange={e => {
                  UpdateData('S_90', e.target.value, setFinaldata);
                }}
              />
            </Form.Item>
            <Form.Item
              key="105_Sec"
              style={{width: '80px', marginRight: '5px'}}
              label="105 Sec"
              name="S_105"
              rules={[{required: true, message: 'Champ Requis'}]}>
              <Input
                type="number"
                placeholder="105 Sec"
                onChange={e => {
                  UpdateData('S_105', e.target.value, setFinaldata);
                }}
              />
            </Form.Item>
            <Form.Item
              key="120_Sec"
              style={{width: '80px', marginRight: '5px'}}
              label="120 Sec"
              name="S_120"
              rules={[{required: true, message: 'Champ Requis'}]}>
              <Input
                type="number"
                placeholder="120 Sec"
                onChange={e => {
                  UpdateData('S_120', e.target.value, setFinaldata);
                }}
              />
            </Form.Item>
          </Row>
        )}

        {Line2 && Line3 && (
          <Row style={{justifyContent: 'center'}}>
            <Form.Item
              key="135_Sec"
              style={{width: '80px', marginRight: '5px'}}
              label="135 Sec"
              name="S_135"
              rules={[{required: true, message: 'Champ Requis'}]}>
              <Input
                type="number"
                ref={!mise_en_placeById ? null : inputEl}
                placeholder="135 Sec"
                onChange={e => {
                  UpdateData('S_135', e.target.value, setFinaldata);
                  e.target.value > 500 &&
                    error('Le Test avec cette valeur est echoué...');
                }}
              />
            </Form.Item>
            <Form.Item
              key="150_Sec"
              style={{width: '80px', marginRight: '5px'}}
              label="150 Sec"
              name="S_150"
              rules={[{required: true, message: 'Champ Requis'}]}>
              <Input
                type="number"
                placeholder="150 Sec"
                onChange={e => {
                  UpdateData('S_150', e.target.value, setFinaldata);
                  e.target.value > 500 &&
                    error('Le Test avec cette valeur est echoué...');
                }}
              />
            </Form.Item>
            <Form.Item
              key="165_Sec"
              style={{width: '80px', marginRight: '5px'}}
              label="165 Sec"
              name="S_165"
              rules={[{required: true, message: 'Champ Requis'}]}>
              <Input
                type="number"
                placeholder="165 Sec"
                onChange={e => {
                  UpdateData('S_165', e.target.value, setFinaldata);
                  e.target.value > 500 &&
                    error('Le Test avec cette valeur est echoué...');
                }}
              />
            </Form.Item>
            <Form.Item
              key="180_Sec"
              style={{width: '80px', marginRight: '5px'}}
              label="180 Sec"
              name="S_180"
              rules={[{required: true, message: 'Champ Requis'}]}>
              <Input
                type="number"
                placeholder="180 Sec"
                onChange={e => {
                  UpdateData('S_180', e.target.value, setFinaldata);
                  e.target.value > 500 &&
                    error('Le Test avec cette valeur est echoué...');
                }}
              />
            </Form.Item>
          </Row>
        )}
        {Line2 ? <>line 2 active</> : <>line 2 no active</>}
        {Line3 ? <>line 3 active</> : <>line 3 no active</>}
      </div>
    </div>
  );
}
