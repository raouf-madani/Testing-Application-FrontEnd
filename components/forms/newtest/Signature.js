import React, {useState} from 'react';
import {Form, Input, Button, Select, DatePicker, Space} from 'antd';

export default function Bornes() {
  return (
    <div>
      <Form.Item
        name="Signature"
        label="Signature"
        rules={[
          {
            required: true,
            message: 'Signature  est Requis',
          },
        ]}>
        <Input />
      </Form.Item>
    </div>
  );
}
