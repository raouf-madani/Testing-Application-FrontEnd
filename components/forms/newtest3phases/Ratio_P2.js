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

export default function Ratio_p2({commande, mise_en_placeById}) {
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
        <h3>Ratio P2</h3>
      </Divider>
      <div>
        {!mise_en_placeById ? (
          <>
            <Row style={{justifyContent: 'center'}}>
              <Form.Item
                key="Tension_a_appliquer_Ratio_P2"
                label="Tension à appliquer"
                name="Tension_a_appliquer_Ratio_P2 "
                rules={[{required: true, message: 'Champ Requis'}]}
                className="show_item_input">
                <Input
                  type="number"
                  ref={inputEl}
                  tabIndex={1}
                  placeholder="Tension à appliquer P2 "
                />
              </Form.Item>
            </Row>
            <Row style={{justifyContent: 'center'}}>
              <Form.Item
                key="Tension_côté_primaire_P2"
                label="Tension côté primaire "
                name="Tension_côté_primaire_P2"
                rules={[{required: true, message: 'Champ Requis'}]}
                className="show_item_input">
                <Input
                  type="number"
                  tabIndex={1}
                  placeholder="Tension côté primaire P2  "
                />
              </Form.Item>
            </Row>
            <Row style={{justifyContent: 'center'}}>
              <Form.Item
                key="TR_Charge_Ratio_P2"
                label="TR Charge "
                name="TR_Charge_Ratio_P2"
                rules={[{required: true, message: 'Champ Requis'}]}
                className="show_item_input">
                <Select
                  placeholder="TR Charge P2"
                  showSearch
                  initialvalues=""
                  tabIndex={2}
                  options={TR_Charge}
                />
              </Form.Item>
            </Row>
            <Row style={{justifyContent: 'center'}}>
              <Form.Item
                key="TR_Courant_Courant_P2"
                label="TR Courant  "
                name="TR_Courant_Courant_P2 "
                rules={[{required: true, message: 'Champ Requis'}]}
                className="show_item_input">
                <Select
                  placeholder="TR Courant P2  "
                  showSearch
                  initialvalues=""
                  tabIndex={3}
                  options={TR_Courant}
                />
              </Form.Item>
            </Row>
            <Row style={{justifyContent: 'center'}}>
              <Form.Item
                key="TR_Voltage_Voltage_P2"
                label="TR Voltage  "
                name="TR_Voltage_Voltage_P2 "
                rules={[{required: true, message: 'Champ Requis'}]}
                className="show_item_input">
                <Select
                  placeholder="TR Voltage P2"
                  showSearch
                  initialvalues=""
                  tabIndex={4}
                  options={TR_Voltage}
                />
              </Form.Item>
            </Row>
            <Row style={{justifyContent: 'center'}}>
              <Form.Item className="show_item">Résultats théoriques</Form.Item>
            </Row>
            <Row style={{justifyContent: 'center'}}>
              <Form.Item
                key="Prise1_théoriques_P2"
                style={{width: '10%', marginRight: '5px'}}
                label="Prise1"
                name="Prise1_théoriques_P2"
                rules={[{required: true, message: 'Champ Requis'}]}>
                <Input tabIndex={5} placeholder="Prise1 P2" />
              </Form.Item>
              <Form.Item
                key="Prise2_théoriques_P2"
                style={{width: '10%', marginRight: '5px'}}
                label="Prise2"
                name="Prise2_théoriques_P2"
                rules={[{required: true, message: 'Champ Requis'}]}>
                <Input tabIndex={6} placeholder="Prise2 P2" />
              </Form.Item>
              <Form.Item
                key="Prise3_théoriques_P2"
                style={{width: '10%', marginRight: '5px'}}
                label="Prise3"
                name="Prise3_théoriques_P2"
                rules={[{required: true, message: 'Champ Requis'}]}>
                <Input tabIndex={7} placeholder="Prise3 P2" />
              </Form.Item>
              <Form.Item
                key="Prise4_théoriques_P2"
                style={{width: '10%', marginRight: '5px'}}
                label="Prise4"
                name="Prise4_théoriques_P2"
                rules={[{required: true, message: 'Champ Requis'}]}>
                <Input tabIndex={8} placeholder="Prise4 P2" />
              </Form.Item>
              <Form.Item
                key="Prise5_théoriques_P2"
                style={{width: '10%', marginRight: '5px'}}
                label="Prise5"
                name="Prise5_théoriques_P2"
                rules={[{required: true, message: 'Champ Requis'}]}>
                <Input tabIndex={8} placeholder="Prise5 P2" />
              </Form.Item>
            </Row>

            <Row style={{justifyContent: 'center'}}>
              <Form.Item className="show_item">Résultats mesurés</Form.Item>
            </Row>
            <Row style={{justifyContent: 'center'}}>
              <Form.Item
                key="Prise1_mesurés_P2"
                style={{width: '10%', marginRight: '5px'}}
                label="Prise1"
                name="Prise1_mesurés_P2"
                rules={[{required: true, message: 'Champ Requis'}]}>
                <Input tabIndex={9} placeholder="Prise1 P2" />
              </Form.Item>
              <Form.Item
                key="Prise2_mesurés_P2"
                style={{width: '10%', marginRight: '5px'}}
                label="Prise2"
                name="Prise2_mesurés_P2"
                rules={[{required: true, message: 'Champ Requis'}]}>
                <Input tabIndex={10} placeholder="Prise2 P2" />
              </Form.Item>
              <Form.Item
                key="Prise3_mesurés_P2"
                style={{width: '10%', marginRight: '5px'}}
                label="Prise3"
                name="Prise3_mesurés_P2"
                rules={[{required: true, message: 'Champ Requis'}]}>
                <Input tabIndex={11} placeholder="Prise3 P2" />
              </Form.Item>
              <Form.Item
                key="Prise4_mesurés_P2"
                style={{width: '10%', marginRight: '5px'}}
                label="Prise4"
                name="Prise4_mesurés_P2"
                rules={[{required: true, message: 'Champ Requis'}]}>
                <Input tabIndex={12} placeholder="Prise4 P2" />
              </Form.Item>
              <Form.Item
                key="Prise5_mesurés_P2"
                style={{width: '10%', marginRight: '5px'}}
                label="Prise5"
                name="Prise5_mesurés_P2"
                rules={[{required: true, message: 'Champ Requis'}]}>
                <Input tabIndex={13} placeholder="Prise5 P2" />
              </Form.Item>
            </Row>
          </>
        ) : (
          <> test regulier pour 3 phases Ratio</>
        )}
      </div>
    </div>
  );
}
