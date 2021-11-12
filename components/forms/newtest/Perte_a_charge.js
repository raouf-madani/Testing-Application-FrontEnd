import React, {useState} from 'react';
import {Form, Input, Button, Select, DatePicker, Space} from 'antd';

export default function Bornes() {
  return (
    <div>
      <Form.Item
        name="Perte a Charge"
        label="Perte a Charge"
        rules={[
          {
            required: true,
            message: 'Perte a Charge detape est Requis',
          },
        ]}>
        <Input />
      </Form.Item>
    </div>
  );
}
