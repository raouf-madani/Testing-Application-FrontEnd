import React, {useState} from 'react';
import {Form, Input, Button, Select, DatePicker, Row} from 'antd';

export default function Facteur_dissipation() {
  return (
    <div>
      <Row style={{justifyContent: 'center', marginBottom: '15px'}}>
        <h3>Facteur Dissipation</h3>
      </Row>
      <div
        style={{
          background: '#24717400',
          padding: '10px',
          boxShadow: '0 0 15px #00806e',
        }}>
        <Row style={{justifyContent: 'center'}}>
          <Form.Item
            label="H"
            name="H"
            style={{
              width: 'calc(50% - 8px)',
              margin: '5px 8px',
            }}
            rules={[{required: true, message: 'Champ Requis'}]}>
            <Input placeholder="Position 1" />
          </Form.Item>
          <Form.Item
            label="L"
            name="L"
            style={{
              width: 'calc(50% - 8px)',
              margin: '5px 8px',
            }}>
            <Input placeholder="Position 2" />
          </Form.Item>
        </Row>
      </div>
    </div>
  );
}
