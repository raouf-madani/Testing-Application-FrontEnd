import React, {useState} from 'react';
import {Form, Input, Button, Select, DatePicker, Space} from 'antd';

export default function Bornes() {
  return (
    <div>
      <Form.Item
        name="Gravure"
        label="Gravure"
        rules={[
          {
            required: true,
            message: 'Gravure detape est Requis',
          },
        ]}>
        <Input />
      </Form.Item>
    </div>
  );
}
