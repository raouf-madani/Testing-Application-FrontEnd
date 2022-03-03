import React, {useState, useEffect, useRef} from 'react';
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
        <h3>Hipot</h3>{' '}
      </Divider>
      <div>
        <Row style={{justifyContent: 'center'}} align="middle">
          <Form.Item className="show_item">
            TENSION APPLIQUÉ BASSE TENSION A la durée de 60 sec : 50 V
          </Form.Item>
          <Form.Item
            name="test_50"
            style={{display: 'inline-block', width: 'calc(50% - 8px)'}}>
            <Radio.Group
              defaultValue="reussit"
              buttonStyle="solid"
              key="Hipot_50">
              <Radio.Button
                tabIndex={1}
                ref={inputEl}
                style={{margin: '5px'}}
                value="reussit"
                onKeyPress={() => {
                  UpdateData('Test_Hipot_50', true, setFinaldata);
                }}
                onClick={() => {
                  UpdateData('Test_Hipot_50', true, setFinaldata);
                }}>
                Test reussit
              </Radio.Button>
              <Radio.Button
                onClick={() => {
                  console.log('Test echoue'),
                    UpdateData(
                      'Test_Hipot_50',
                      'test Hipot echoue',
                      setFinaldata
                    );
                  error(
                    'Le Test de Hipot a une tension appluiqué de 50 V est echoué...'
                  );
                }}
                style={{margin: '5px'}}
                value="echoue">
                Test echoue
              </Radio.Button>
            </Radio.Group>
          </Form.Item>
        </Row>
      </div>
    </div>
  );
}
