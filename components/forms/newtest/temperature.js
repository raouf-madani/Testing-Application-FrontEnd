import React, {useState} from 'react';
import {Form, Input, Button, Select, DatePicker, Space} from 'antd';

export default function TemperatureForm() {
  return (
    <div>
      <Form.Item
        name="Temperature"
        label="Temperature"
        rules={[
          {
            required: true,
            message: 'Temperature est Requis',
          },
        ]}>
        <Input />
      </Form.Item>
    </div>
  );
}
