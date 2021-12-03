import React, {useState} from 'react';
import {Form, Input, Radio, Select, DatePicker, Space, Row} from 'antd';

export default function Hipot({miseenplaceok}) {
  return (
    <div>
      <Row style={{justifyContent: 'center', marginBottom: '10px'}}>
        <h3>Hipot</h3>
      </Row>
      <div
        style={{
          background: '#24717400',
          padding: '5px',
          boxShadow: '0 0 15px #00806e',
        }}>
        <Row style={{justifyContent: 'center'}}>
          <Form.Item style={{marginBottom: 0, width: '60%'}}>
            <Form.Item
              name="tension applique 1"
              style={{display: 'inline-block'}}>
              TENSION APPLIQUÉ HAUTE TENSION A la durée de 60 sec : 70 V
            </Form.Item>
            <Form.Item
              name="Resultat_Tention_Hipot_P1"
              rules={[{required: true, message: 'Champ Requis'}]}
              style={{display: 'inline-block', width: 'calc(50% - 8px)'}}>
              <Radio.Group buttonStyle="solid">
                <Radio.Button value={true}>Test reussit</Radio.Button>
                <Radio.Button value={false}>Test echoue</Radio.Button>
              </Radio.Group>
            </Form.Item>
          </Form.Item>
        </Row>
        <Row style={{justifyContent: 'center'}}>
          <Form.Item style={{marginBottom: 0, width: '60%'}}>
            <Form.Item
              name="tension applique 1"
              style={{display: 'inline-block'}}>
              TENSION APPLIQUÉ Basse TENSION A la durée de 60 sec : 50 V
            </Form.Item>
            <Form.Item
              name="Resultat_Tention_Hipot_P2"
              rules={[{required: true, message: 'Champ Requis'}]}
              style={{display: 'inline-block', width: 'calc(50% - 8px)'}}>
              <Radio.Group buttonStyle="solid">
                <Radio.Button value={true}>Test reussit</Radio.Button>
                <Radio.Button value={false}>Test echoue</Radio.Button>
              </Radio.Group>
            </Form.Item>
          </Form.Item>
        </Row>
        {/* <Form.Item style={{marginBottom: 0}}>
        <Form.Item
          name="Resultat_Tention_Hipot_P1"
          rules={[{required: true, message: 'Champ Requis'}]}
          style={{display: 'inline-block', width: 'calc(50% - 8px)'}}>
          <Radio.Group buttonStyle="solid">
            <Radio.Button value={true}>Test reussit</Radio.Button>
            <Radio.Button value={false}>Test echoue</Radio.Button>
          </Radio.Group>
        </Form.Item>
      </Form.Item>
      TENSION APPLIQUÉ HAUTE TENSION DURÉE 60s
      <Form.Item style={{marginBottom: 0, marginTop: '40px'}}>
        <Form.Item
          name="Resultat_Tention_Hipot_P2"
          rules={[{required: true, message: 'Champ Requis'}]}
          style={{display: 'inline-block', width: 'calc(50% - 8px)'}}>
          <Radio.Group buttonStyle="solid">
            <Radio.Button value={true}>Test reussit</Radio.Button>
            <Radio.Button value={false}>Test echoue</Radio.Button>
          </Radio.Group>
        </Form.Item>
      </Form.Item> */}
      </div>
    </div>
  );
}
