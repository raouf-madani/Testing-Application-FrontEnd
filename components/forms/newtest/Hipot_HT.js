import React, {useState, useRef, useEffect} from 'react';
import {
  Form,
  Input,
  Radio,
  Select,
  DatePicker,
  Space,
  Row,
  Divider,
} from 'antd';

export default function Hipot({error, UpdateData, setFinaldata}) {
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
        style={{color: '#503662', marginBottom: '40px'}}>
        <h3>Hipot HT</h3>{' '}
      </Divider>
      <div>
        <Row style={{justifyContent: 'center'}} align="middle">
          <Form.Item className="show_item">
            Tension à appliquer : 70 V
          </Form.Item>
          <Form.Item
            name="test_70"
            style={{display: 'inline-block', width: 'calc(50% - 8px)'}}>
            <Radio.Group
              defaultValue="Réussi"
              buttonStyle="solid"
              key="Hipot_70">
              <Radio.Button
                tabIndex={1}
                ref={inputEl}
                style={{margin: '5px'}}
                value="Réussi"
                onKeyPress={() => {
                  UpdateData('Test_Hipot_70', true, setFinaldata);
                }}
                onClick={() => {
                  console.log('Test reussi'),
                    UpdateData('Test_Hipot_70', true, setFinaldata);
                }}>
                Réussi
              </Radio.Button>
              <Radio.Button
                onClick={() => {
                  UpdateData('Test_Hipot_70', false, setFinaldata);
                  error(
                    'Le Test de Hipot a une tension appluiqué de 70 V est echoué...'
                  );
                }}
                style={{margin: '5px'}}
                value="Échoué">
                Échoué
              </Radio.Button>
            </Radio.Group>
          </Form.Item>
        </Row>
      </div>
    </div>
  );
}
