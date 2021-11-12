import React, {useState} from 'react';
import {Form, Input, Button, Select, DatePicker, Space} from 'antd';

export default function Bornes() {
  return (
    <div>
      <Form.Item
        name="Perte a Vide"
        label="Perte a Vide"
        rules={[
          {
            required: true,
            message: 'Perte a Vide detape est Requis',
          },
        ]}>
        <Input />
      </Form.Item>
    </div>
  );
}
