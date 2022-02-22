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

export default function Hipot({commande, mise_en_placeById, setFinaldata}) {
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
                key="Tension_a_appliquer_Hipot"
                label="Tension à appliquer "
                name="Tension_a_appliquer_Hipot "
                rules={[{required: true, message: 'Champ Requis'}]}
                className="show_item_input">
                <Input
                  ref={inputEl}
                  type="number"
                  tabIndex={1}
                  placeholder="Tension à appliquer "
                  onChange={e => {
                    UpdateData(
                      'Tension_a_appliquer_Hipot',
                      e.target.value,
                      setFinaldata
                    );
                  }}
                />
              </Form.Item>
            </Row>
            <Row style={{justifyContent: 'center'}}>
              <Form.Item
                key="TR_Charge_Hipot"
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
                  onChange={value =>
                    UpdateData('TR_Charge_Hipot', value, setFinaldata)
                  }
                />
              </Form.Item>
            </Row>
            <Row style={{justifyContent: 'center'}}>
              <Form.Item
                key="TR_Courant_Hipot"
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
                  onChange={value =>
                    UpdateData('TR_Courant_Hipot', value, setFinaldata)
                  }
                />
              </Form.Item>
            </Row>
            <Row style={{justifyContent: 'center'}}>
              <Form.Item
                key="TR_Voltage_Hipot"
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
                  onChange={value =>
                    UpdateData('TR_Voltage_Hipot', value, setFinaldata)
                  }
                />
              </Form.Item>
            </Row>

            <Row style={{justifyContent: 'center'}}>
              <Form.Item
                key="test_50_Hipot"
                label="Sélecteur Hi-Pot"
                name="test_50_Hipot"
                rules={[{required: true, message: 'Champ Requis'}]}>
                <Radio.Group buttonStyle="solid" key="Sélecteur_Hi-Pot ">
                  <Radio.Button
                    tabIndex={5}
                    style={{margin: '5px'}}
                    value={20}
                    onKeyPress={() => {
                      UpdateData('test_50_Hipot', 20, setFinaldata);
                    }}
                    onClick={() => {
                      UpdateData('test_50_Hipot', 20, setFinaldata);
                    }}>
                    20
                  </Radio.Button>
                  <Radio.Button
                    style={{margin: '5px'}}
                    value={40}
                    onKeyPress={() => {
                      UpdateData('test_50_Hipot', 40, setFinaldata);
                    }}
                    onClick={() => {
                      UpdateData('test_50_Hipot', 40, setFinaldata);
                    }}>
                    40
                  </Radio.Button>
                </Radio.Group>
              </Form.Item>
            </Row>

            <Row style={{justifyContent: 'center'}}>
              <Form.Item
                key="Tension_au_transformateur_BT_Hipot"
                label="Tension au transformateur BT  "
                name="Tension_au_transformateur_BT_Hipot  "
                rules={[{required: true, message: 'Champ Requis'}]}
                className="show_item_input">
                <Input
                  type="number"
                  tabIndex={6}
                  placeholder="Tension au transformateur BT  "
                  onChange={e => {
                    UpdateData(
                      'Tension_au_transformateur_BT_Hipot',
                      e.target.value,
                      setFinaldata
                    );
                  }}
                />
              </Form.Item>
            </Row>

            <Row style={{justifyContent: 'center'}}>
              <Form.Item
                key="Tension_au_transformateur_HT_Hipot"
                label="Tension au transformateur HT  "
                name="Tension_au_transformateur_HT_Hipot  "
                rules={[{required: true, message: 'Champ Requis'}]}
                className="show_item_input">
                <Input
                  type="number"
                  tabIndex={7}
                  placeholder="Tension au transformateur HT  "
                  onChange={e => {
                    UpdateData(
                      'Tension_au_transformateur_HT_Hipot',
                      e.target.value,
                      setFinaldata
                    );
                  }}
                />
              </Form.Item>
            </Row>
            <Row style={{justifyContent: 'center'}}>
              <Form.Item
                key="Hipot_3Phases_Hipot"
                name="Hipot_3Phases_Hipot"
                rules={[{required: true, message: 'Champ Requis'}]}
                style={{display: 'inline-block', width: 'calc(50% - 8px)'}}>
                <Radio.Group buttonStyle="solid" key="Hipot_3Phases">
                  <Radio.Button
                    tabIndex={8}
                    style={{margin: '5px'}}
                    value={true}
                    onKeyPress={() => {
                      UpdateData('Hipot_3Phases_Hipot', true, setFinaldata);
                    }}
                    onClick={() => {
                      UpdateData('Hipot_3Phases_Hipot', true, setFinaldata);
                    }}>
                    Test Réussi
                  </Radio.Button>
                  <Radio.Button
                    style={{margin: '5px'}}
                    value={false}
                    onKeyPress={() => {
                      UpdateData('Hipot_3Phases_Hipot', false, setFinaldata);
                    }}
                    onClick={() => {
                      UpdateData('Hipot_3Phases_Hipot', false, setFinaldata);
                    }}>
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
