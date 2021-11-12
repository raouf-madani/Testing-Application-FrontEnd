import React, {useState} from 'react';
import {Form, Input, Button, Select, DatePicker, Space} from 'antd';

export default function Ratio_Polarite() {
  return (
    <div>
      <Form.Item
        name="Ratio_Polarite"
        label="Ratio_Polarite"
        rules={[
          {
            required: true,
            message: 'Ratio  est Requis',
          },
        ]}>
        <Input />
      </Form.Item>
    </div>
  );
}
