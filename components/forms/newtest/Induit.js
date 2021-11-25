import React, {useState} from 'react';
import {Form, Input, Radio, Button} from 'antd';

export default function Induit({UpdateData, miseenplaceok}) {
  return (
    <div>
      {!miseenplaceok && (
        <div>
          {' '}
          Affichage : Tension applique position1
          <Form.Item label="Fréquence Genératrice" style={{marginBottom: 0}}>
            <Form.Item
              name="Fréquence_Genératrice_P1"
              rules={[{required: true, message: 'Champ Requis'}]}
              style={{display: 'inline-block', width: 'calc(50% - 8px)'}}>
              <Input
                placeholder="Position 1"
                onChange={e =>
                  UpdateData('Fréquence_genératrice_P1', e.target.value)
                }
              />
            </Form.Item>
            <Form.Item
              name="Fréquence_Genératrice_P2"
              style={{
                display: 'inline-block',
                width: 'calc(50% - 8px)',
                margin: '0 8px',
              }}>
              <Input
                placeholder="Position 2"
                onChange={e =>
                  UpdateData('Fréquence_genératrice_P2', e.target.value)
                }
              />
            </Form.Item>
          </Form.Item>
          <Form.Item label="Réactance SKE77" style={{marginBottom: 0}}>
            <Form.Item
              name="Réactance_SKE77_P1"
              rules={[{required: true, message: 'Champ Requis'}]}
              style={{display: 'inline-block', width: 'calc(50% - 8px)'}}>
              <Input
                placeholder="Position 1"
                onChange={e => UpdateData('Réactance_ske77_P1', e.target.value)}
              />
            </Form.Item>
            <Form.Item
              name="Réactance_SKE77_P2"
              style={{
                display: 'inline-block',
                width: 'calc(50% - 8px)',
                margin: '0 8px',
              }}>
              <Input
                placeholder="Position 2"
                onChange={e => UpdateData('Réactance_ske77_P2', e.target.value)}
              />
            </Form.Item>
          </Form.Item>
          <Form.Item label="Réactance SKE17" style={{marginBottom: 0}}>
            <Form.Item
              name="Réactance_SKE17_P1"
              rules={[{required: true, message: 'Champ Requis'}]}
              style={{display: 'inline-block', width: 'calc(50% - 8px)'}}>
              <Input
                placeholder="Position 1"
                onChange={e => UpdateData('Réactance_ske17_P1', e.target.value)}
              />
            </Form.Item>
            <Form.Item
              name="Réactance_SKE17_P2"
              style={{
                display: 'inline-block',
                width: 'calc(50% - 8px)',
                margin: '0 8px',
              }}>
              <Input
                placeholder="Position 2"
                onChange={e => UpdateData('Réactance_ske17_P2', e.target.value)}
              />
            </Form.Item>
          </Form.Item>
        </div>
      )}

      <Form.Item style={{marginBottom: 0}}>
        <Form.Item
          name="Resultat_P1"
          rules={[{required: true, message: 'Champ Requis'}]}
          style={{display: 'inline-block', width: 'calc(50% - 8px)'}}>
          <Radio.Group buttonStyle="solid">
            <Radio.Button value={true}>Test reussit</Radio.Button>
            <Radio.Button value={false}>Test echoue</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          name="Resultat_P2"
          style={{
            display: 'inline-block',
            width: 'calc(50% - 8px)',
            margin: '0 8px',
          }}>
          <Radio.Group buttonStyle="solid">
            <Radio.Button value={true}>Test reussit </Radio.Button>
            <Radio.Button value={false}>Test echoue</Radio.Button>
          </Radio.Group>
        </Form.Item>
      </Form.Item>
    </div>
  );
}
