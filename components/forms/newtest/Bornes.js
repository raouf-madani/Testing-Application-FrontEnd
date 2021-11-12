import React, {useState} from 'react';
import {Form, Input, Button, Select, DatePicker, Space} from 'antd';

export default function Bornes() {
  return (
    <div>
      <Form.Item
        name="Bornes"
        label="Bornes"
        rules={[
          {
            required: true,
            message: 'Bornes detape est Requis',
          },
        ]}>
        <Input />
      </Form.Item>
    </div>
  );
}
