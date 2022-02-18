import React, {useState} from 'react';
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
  return (
    <div className="Containertest">
      <Divider
        dashed
        orientation="left"
        style={{color: '#34b1ab', marginBottom: '40px'}}>
        <h3>Hipot</h3>{' '}
      </Divider>
      <div>
        <Row style={{justifyContent: 'center'}} align="middle">
          <Form.Item className="show_item">
            TENSION APPLIQUÉ HAUTE TENSION A la durée de 60 sec : 70 V
          </Form.Item>
          <Form.Item
            name="test_70"
            rules={[{required: true, message: 'Champ Requis'}]}
            style={{display: 'inline-block', width: 'calc(50% - 8px)'}}>
            <Radio.Group buttonStyle="solid" key="Hipot_70">
              <Radio.Button
                tabIndex={1}
                style={{margin: '5px'}}
                value={true}
                onClick={() => {
                  console.log('Test reussi'),
                    UpdateData('Test_Hipot_70', true, setFinaldata);
                }}>
                Test reussit
              </Radio.Button>
              <Radio.Button
                onClick={() => {
                  console.log('Test echoue'),
                    UpdateData('Test_Hipot_70', false, setFinaldata);
                  error(
                    'Le Test de Hipot a une tension appluiqué de 70 V est echoué...'
                  );
                }}
                style={{margin: '5px'}}
                value={false}>
                Test echoue
              </Radio.Button>
            </Radio.Group>
          </Form.Item>
        </Row>
      </div>
    </div>
  );
}
