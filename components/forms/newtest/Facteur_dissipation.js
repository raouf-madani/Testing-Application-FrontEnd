import React, {useState} from 'react';
import {Form, Input, Space, Select, DatePicker, Row, Divider} from 'antd';

export default function Facteur_dissipation() {
  return (
    <div className="Containertest">
      <Divider
        dashed
        orientation="left"
        style={{color: '#34b1ab', marginBottom: '40px'}}>
        <h3>Facteur Dissipation</h3>
      </Divider>{' '}
      <div>
        <Row style={{justifyContent: 'center'}}>
          <Form.Item label="H" style={{marginBottom: 5, width: '30%'}}>
            <Form.Item
              name="H"
              noStyle
              rules={[{required: true, message: 'H required'}]}>
              <Input placeholder="H" />
            </Form.Item>
          </Form.Item>
        </Row>
        <Row style={{justifyContent: 'center'}}>
          <Form.Item label="L" style={{marginBottom: 0, width: '30%'}}>
            <Form.Item name="L" noStyle>
              <Input placeholder="L" />
            </Form.Item>
          </Form.Item>
        </Row>
      </div>
    </div>
  );
}
