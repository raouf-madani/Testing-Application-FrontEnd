import React, {useState} from 'react';
import {Form, Input, Button, Select, DatePicker, Space} from 'antd';

export default function Bornes() {
  return (
    <div>
      <Form.Item
        name="Hinot"
        label="Hinot"
        rules={[
          {
            required: true,
            message: 'Hinot  est Requis',
          },
        ]}>
        <Input />
      </Form.Item>
    </div>
  );
}
