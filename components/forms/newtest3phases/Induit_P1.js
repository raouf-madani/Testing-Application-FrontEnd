import React, {useState, useRef, useEffect} from 'react';
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

export default function Induit_p1({commande, mise_en_placeById}) {
  const TR_Charge = [
    {label: '347/600', value: 347 / 600},
    {label: '693/1200', value: 693 / 1200},
    {label: '1385/2400', value: 1385 / 2400},
    {label: '2771/4800', value: 2771 / 4800},
    {label: 'N/A', value: 'N/A'},
  ];
  const Position_TX = [
    {label: 'Étoile-Phase', value: 'Étoile-Phase'},
    {label: 'Triangle-Ligne', value: 'Triangle-Ligne'},
  ];
  const Reactance = [
    {label: 'A1B1C1', value: 'A1B1C1'},
    {label: 'A3B3C3', value: 'A3B3C3'},
    {label: 'A4B4C4', value: 'A4B4C4'},
  ];
  const TR_Courant = [
    {label: '5/X1', value: 5 / 1},
    {label: '10/X2', value: 10 / 2},
    {label: '25/X5', value: 25 / 5},
    {label: '50/X10', value: 50 / 10},
    {label: '100/X20', value: 100 / 20},
    {label: '200/X40', value: 200 / 40},
    {label: '400/X80', value: 400 / 80},
    {label: '600/X120', value: 600 / 120},
    {label: 'N/A', value: 'N/A'},
  ];
  const TR_Voltage = [
    {label: '240/X2', value: 240 / 2},
    {label: '480/X4', value: 480 / 4},
    {label: '600/X5', value: 600 / 5},
    {label: '1200/X10', value: 1200 / 10},
    {label: '2400/X20', value: 2400 / 20},
    {label: '4800/X40', value: 4800 / 40},
    {label: 'N/A', value: 'N/A'},
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
        {' '}
        {!mise_en_placeById ? (
          <>
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
                />
              </Form.Item>
            </Row>
            <Row style={{justifyContent: 'center'}}>
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
                />
              </Form.Item>
            </Row>
            <Row style={{justifyContent: 'center'}}>
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
                />
              </Form.Item>
            </Row>
            <Row style={{justifyContent: 'center'}}>
              <Form.Item
                key="TR_Courant_Courant_Induit_P1"
                label="TR Courant"
                name="TR_Courant_Courant_Induit_P1 "
                rules={[{required: true, message: 'Champ Requis'}]}
                className="show_item_input">
                <Select
                  placeholder="TR Courant P1 "
                  showSearch
                  initialvalues=""
                  tabIndex={4}
                  options={TR_Courant}
                />
              </Form.Item>
            </Row>
            <Row style={{justifyContent: 'center'}}>
              <Form.Item
                key="TR_Voltage_Voltage_Induit_P1"
                label="TR Voltage  "
                name="TR_Voltage_Voltage_Induit_P1"
                rules={[{required: true, message: 'Champ Requis'}]}
                className="show_item_input">
                <Select
                  placeholder="TR Voltage P1"
                  showSearch
                  initialvalues=""
                  tabIndex={5}
                  options={TR_Voltage}
                />
              </Form.Item>
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
                  tabIndex={6}
                  placeholder="Tension à appliquer "
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
                    value={true}>
                    Test Réussi
                  </Radio.Button>
                  <Radio.Button style={{margin: '5px'}} value={false}>
                    Test Échoué
                  </Radio.Button>
                </Radio.Group>
              </Form.Item>
            </Row>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
