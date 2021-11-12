import React, {useState} from 'react';
import {Form, Input, Button, Select, DatePicker, Space} from 'antd';

export default function Bornes() {
  return (
    <div>
      <Form.Item
        name="Induit"
        label="Induit"
        rules={[
          {
            required: true,
            message: 'Induit est Requis',
          },
        ]}>
        <Input />
      </Form.Item>
    </div>
  );
}
