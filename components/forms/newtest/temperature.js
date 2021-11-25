import React, {useState} from 'react';
import {Form, Input, Button, Select, DatePicker, Space} from 'antd';

export default function TemperatureForm({UpdateData}) {
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
        <Input onChange={e => UpdateData('temperature', e.target.value)} />
      </Form.Item>
    </div>
  );
}
