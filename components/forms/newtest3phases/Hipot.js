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

export default function Hipot({commande, mise_en_placeById}) {
  const TR_Charge = [
    {label: '347/600', value: 347 / 600},
    {label: '693/1200', value: 693 / 1200},
    {label: '1385/2400', value: 1385 / 2400},
    {label: '2771/4800', value: 2771 / 4800},
    {label: 'N/A', value: 'N/A'},
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
        <h3>Hi-Pot</h3>
      </Divider>
      <div>
        {!mise_en_placeById ? (
          <>
            <Row style={{justifyContent: 'center'}}>
              <Form.Item
                label="Tension à appliquer "
                name="Tension_a_appliquer_Hipot "
                rules={[{required: true, message: 'Champ Requis'}]}
                className="show_item_input">
                <Input
                  ref={inputEl}
                  type="number"
                  tabIndex={1}
                  placeholder="Tension à appliquer "
                />
              </Form.Item>
            </Row>
            <Row style={{justifyContent: 'center'}}>
              <Form.Item
                label="TR Charge "
                name="TR_Charge_Hipot"
                rules={[{required: true, message: 'Champ Requis'}]}
                className="show_item_input">
                <Select
                  placeholder="TR Charge "
                  showSearch
                  initialvalues=""
                  tabIndex={2}
                  options={TR_Charge}
                />
              </Form.Item>
            </Row>
            <Row style={{justifyContent: 'center'}}>
              <Form.Item
                label="TR Courant  "
                name="TR_Courant_Hipot "
                rules={[{required: true, message: 'Champ Requis'}]}
                className="show_item_input">
                <Select
                  placeholder="TR Courant  "
                  showSearch
                  initialvalues=""
                  tabIndex={3}
                  options={TR_Courant}
                />
              </Form.Item>
            </Row>
            <Row style={{justifyContent: 'center'}}>
              <Form.Item
                label="TR Voltage  "
                name="TR_Voltage_Hipot "
                rules={[{required: true, message: 'Champ Requis'}]}
                className="show_item_input">
                <Select
                  placeholder="TR Voltage  "
                  showSearch
                  initialvalues=""
                  tabIndex={4}
                  options={TR_Voltage}
                />
              </Form.Item>
            </Row>
            <Row style={{justifyContent: 'center'}}>
              <Form.Item
                label="Sélecteur Hi-Pot"
                name="test_50_Hipot"
                rules={[{required: true, message: 'Champ Requis'}]}>
                <Radio.Group buttonStyle="solid" key="Sélecteur_Hi-Pot ">
                  <Radio.Button tabIndex={5} style={{margin: '5px'}} value={20}>
                    20
                  </Radio.Button>
                  <Radio.Button style={{margin: '5px'}} value={40}>
                    40
                  </Radio.Button>
                </Radio.Group>
              </Form.Item>
            </Row>

            <Row style={{justifyContent: 'center'}}>
              <Form.Item
                label="Tension au transformateur BT  "
                name="Tension_au_transformateur_BT_Hipot  "
                rules={[{required: true, message: 'Champ Requis'}]}
                className="show_item_input">
                <Input
                  type="number"
                  tabIndex={6}
                  placeholder="Tension au transformateur BT  "
                />
              </Form.Item>
            </Row>

            <Row style={{justifyContent: 'center'}}>
              <Form.Item
                label="Tension au transformateur HT  "
                name="Tension_au_transformateur_HT_Hipot  "
                rules={[{required: true, message: 'Champ Requis'}]}
                className="show_item_input">
                <Input
                  type="number"
                  tabIndex={7}
                  placeholder="Tension au transformateur HT  "
                />
              </Form.Item>
            </Row>
            <Row style={{justifyContent: 'center'}}>
              <Form.Item
                name="Hipot_3Phases_Hipot"
                rules={[{required: true, message: 'Champ Requis'}]}
                style={{display: 'inline-block', width: 'calc(50% - 8px)'}}>
                <Radio.Group buttonStyle="solid" key="Hipot_3Phases">
                  <Radio.Button
                    tabIndex={8}
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
          <> test regulier pour 3 phases</>
        )}
      </div>
    </div>
  );
}
