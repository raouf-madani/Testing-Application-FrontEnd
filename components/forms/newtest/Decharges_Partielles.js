import React, {useState} from 'react';
import {Form, Input, Radio, Button} from 'antd';

export default function Decharges_Partielles({UpdateData, miseenplaceok}) {
  return (
    <div>
      {!miseenplaceok && (
        <div>
          <Form.Item
            name=" TENSION APPLIQUÉ HAUTE TENSION 1.7pu (V)"
            label=" TENSION APPLIQUÉ HAUTE TENSION 1.7pu (V)"
            rules={[
              {
                required: true,
                message: 'Champ Requis',
              },
            ]}>
            <Input onChange={e => UpdateData('Borne_rouge', e.target.value)} />
          </Form.Item>
          <Form.Item
            name=" TENSION APPLIQUÉ HAUTE TENSION 1.5pu (V)"
            label=" TENSION APPLIQUÉ HAUTE TENSION 1.5pu (V)"
            rules={[
              {
                required: true,
                message: 'Champ Requis',
              },
            ]}>
            <Input onChange={e => UpdateData('Borne_verte', e.target.value)} />
          </Form.Item>
          <Form.Item style={{marginBottom: 0}}>
            <Form.Item
              label="RIV"
              name="Riv_P1"
              rules={[{required: true, message: 'Champ Requis'}]}
              style={{display: 'inline-block', width: 'calc(50% - 8px)'}}>
              <Input
                placeholder="Position 1"
                onChange={e => UpdateData('riv_P1', e.target.value)}
              />
            </Form.Item>
            <Form.Item
              label="RIV"
              name="Riv_P2"
              style={{
                display: 'inline-block',
                width: 'calc(50% - 8px)',
                margin: '0 8px',
              }}>
              <Input
                placeholder="Position 2"
                onChange={e => UpdateData('riv_P2', e.target.value)}
              />
            </Form.Item>
          </Form.Item>
          <Form.Item style={{marginBottom: 0}}>
            <Form.Item
              label="RIV"
              name="Riv_P1"
              rules={[{required: true, message: 'Champ Requis'}]}
              style={{display: 'inline-block', width: 'calc(50% - 8px)'}}>
              <Input
                placeholder="Position 1"
                onChange={e => UpdateData('riv_P1', e.target.value)}
              />
            </Form.Item>
            <Form.Item
              label="RIV"
              name="Riv_P2"
              style={{
                display: 'inline-block',
                width: 'calc(50% - 8px)',
                margin: '0 8px',
              }}>
              <Input
                placeholder="Position 2"
                onChange={e => UpdateData('riv_P2', e.target.value)}
              />
            </Form.Item>
          </Form.Item>
        </div>
      )}
    </div>
  );
}
