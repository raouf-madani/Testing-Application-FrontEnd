import React, {useState} from 'react';
import {Form, Input, Radio, Select, DatePicker, Space} from 'antd';

export default function Hipot({miseenplaceok}) {
  return (
    <div>
      {!miseenplaceok && (
        <div>
          <Form.Item
            name="Tension_appliqué_basse_Tension "
            label="Tension Appliqué Basse Tension "
            rules={[
              {
                required: true,
                message: 'Champ Requis',
              },
            ]}>
            <Input />
          </Form.Item>
          <Form.Item
            name="Tension_appliqué_haute_Tension "
            label="Tension Appliqué Haute Tension "
            rules={[
              {
                required: true,
                message: 'Champ Requis',
              },
            ]}>
            <Input />
          </Form.Item>
        </div>
      )}

      <Form.Item style={{marginBottom: 0, marginTop: '40px'}}>
        <Form.Item
          name="Resultat_P1"
          rules={[{required: true, message: 'Champ Requis'}]}
          style={{display: 'inline-block', width: 'calc(50% - 8px)'}}>
          <Radio.Group buttonStyle="solid">
            <Radio.Button value={true}>Test reussit</Radio.Button>
            <Radio.Button value={false}>Test echoue</Radio.Button>
          </Radio.Group>
        </Form.Item>
      </Form.Item>
    </div>
  );
}
