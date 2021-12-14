import React, {useState} from 'react';
import {Form, Input, Button, Select, DatePicker, Row, Divider} from 'antd';

export default function RIV({UpdateData, setFinaldata}) {
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
          <Form.Item label="RIV" style={{marginBottom: 0, width: '60%'}}>
            <Form.Item
              name="Riv_P1"
              rules={[{required: true, message: 'Champ Requis'}]}
              style={{display: 'inline-block', width: 'calc(50% - 8px)'}}>
              <Input
                placeholder="Position 1"
                onChange={e =>
                  UpdateData('riv_P1', e.target.value, setFinaldata)
                }
              />
            </Form.Item>
            <Form.Item
              name="Riv_P2"
              style={{
                display: 'inline-block',
                width: 'calc(50% - 8px)',
                margin: '0 8px',
              }}>
              <Input
                placeholder="Position 2"
                onChange={e =>
                  UpdateData('riv_P2', e.target.value, setFinaldata)
                }
              />
            </Form.Item>
          </Form.Item>
        </Row>
      </div>
    </div>
  );
}
