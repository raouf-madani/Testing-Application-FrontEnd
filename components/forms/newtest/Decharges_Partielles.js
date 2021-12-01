import React, {useState} from 'react';
import {Form, Input, Space, Button, Row} from 'antd';
import {PlusOutlined, MinusCircleOutlined} from '@ant-design/icons';

export default function Decharges_Partielles({UpdateData, miseenplaceok}) {
  //const [chance, setchance] = useState(0);
  let chance = 0;
  return (
    <div>
      <Row style={{justifyContent: 'center'}}>
        <Form.Item
          name=" TENSION APPLIQUÉ HAUTE TENSION 1.7pu (V)"
          label=" Tension appliqué haute tension 1.7pu (V)"
          style={{marginBottom: 5, width: '27%'}}
          rules={[
            {
              required: true,
              message: 'Champ Requis',
            },
          ]}>
          <Input onChange={e => UpdateData('Borne_rouge', e.target.value)} />
        </Form.Item>
      </Row>
      <Row style={{justifyContent: 'center'}}>
        <Form.Item
          name=" TENSION APPLIQUÉ HAUTE TENSION 1.5pu (V)"
          label=" Tension appliqué haute tension 1.5pu (V)"
          style={{marginBottom: 5, width: '27%'}}
          rules={[
            {
              required: true,
              message: 'Champ Requis',
            },
          ]}>
          <Input onChange={e => UpdateData('Borne_verte', e.target.value)} />
        </Form.Item>
      </Row>
      <Row style={{justifyContent: 'center'}}>
        <Form.Item
          label="15s"
          name="15s"
          style={{width: '10%', marginRight: '5px'}}
          rules={[{required: true, message: 'Missing price'}]}>
          <Input />
        </Form.Item>
        <Form.Item
          label="30s"
          name="30s"
          style={{width: '10%', marginRight: '5px'}}
          rules={[{required: true, message: 'Missing price'}]}>
          <Input />
        </Form.Item>
        <Form.Item
          label="45s"
          name="45s"
          style={{width: '10%', marginRight: '5px'}}
          rules={[{required: true, message: 'Missing price'}]}>
          <Input />
        </Form.Item>
        <Form.Item
          label="60s"
          name="60s"
          style={{width: '10%', marginRight: '5px'}}
          rules={[{required: true, message: 'Missing price'}]}>
          <Input />
        </Form.Item>
      </Row>
      {chance > 0 && (
        <Row style={{justifyContent: 'center'}}>
          <Form.Item
            label="75s"
            name="75s"
            style={{width: '10%', marginRight: '5px'}}
            rules={[{required: true, message: 'Missing price'}]}>
            <Input />
          </Form.Item>
          <Form.Item
            label="90s"
            name="90s"
            style={{width: '10%', marginRight: '5px'}}
            rules={[{required: true, message: 'Missing price'}]}>
            <Input />
          </Form.Item>
          <Form.Item
            label="105s"
            name="105s"
            style={{width: '10%', marginRight: '5px'}}
            rules={[{required: true, message: 'Missing price'}]}>
            <Input />
          </Form.Item>
          <Form.Item
            label="120s"
            name="120s"
            style={{width: '10%', marginRight: '5px'}}
            rules={[{required: true, message: 'Missing price'}]}>
            <Input />
          </Form.Item>
        </Row>
      )}
      {chance > 1 && (
        <Row style={{justifyContent: 'center'}}>
          <Form.Item
            label="135s"
            name="135s"
            style={{width: '10%', marginRight: '5px'}}
            rules={[{required: true, message: 'Missing price'}]}>
            <Input />
          </Form.Item>
          <Form.Item
            label="150s"
            name="150s"
            style={{width: '10%', marginRight: '5px'}}
            rules={[{required: true, message: 'Missing price'}]}>
            <Input />
          </Form.Item>
          <Form.Item
            label="165s"
            name="165s"
            style={{width: '10%', marginRight: '5px'}}
            rules={[{required: true, message: 'Missing price'}]}>
            <Input />
          </Form.Item>
          <Form.Item
            label="180s"
            name="180s"
            style={{width: '10%', marginRight: '5px'}}
            rules={[{required: true, message: 'Missing price'}]}>
            <Input />
          </Form.Item>
        </Row>
      )}

      <Row style={{justifyContent: 'center'}}>
        <Form.Item style={{marginBottom: 5, width: '30%'}}>
          <Button
            type="dashed"
            block
            icon={chance > 1 ? <PlusOutlined /> : <PlusOutlined />}
            onClick={() => {
              chance = chance + 1;
            }}>
            Add sights
          </Button>
        </Form.Item>
      </Row>
      {chance}
    </div>
  );
}
