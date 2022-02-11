import React, {useState} from 'react';
import {
  Form,
  Input,
  Button,
  Select,
  Card,
  Space,
  Radio,
  Row,
  Col,
  Divider,
} from 'antd';

export default function Bornes({UpdateData, setNewMisePlace}) {
  const Bornes_values = [
    {label: 1600, value: 1600},
    {label: 1000, value: 1000},
    {label: 600, value: 600},
    {label: 480, value: 480},
    {label: 300, value: 300},
    {label: 150, value: 150},
    {label: 75, value: 75},
  ];
  const items = [];
  for (let i = 0; i < Bornes_values.length; i++) {
    const element = Bornes_values[i];
    items.push(
      <Radio.Button
        key={i}
        style={{width: '100px', marginBottom: '5px'}}
        value={element.value}>
        {element.label}
      </Radio.Button>
    );
  }
  return (
    <div className="Containertest">
      <Divider
        dashed
        orientation="left"
        style={{color: '#34b1ab', marginBottom: '40px'}}>
        <h3>Placement des Bornes</h3>
      </Divider>
      <div>
        <Row style={{justifyContent: 'space-around'}}>
          <Col>
            <Card
              title="Borne Rouge"
              bordered={false}
              style={{width: '200px', marginBottom: '10px'}}>
              <Form.Item
                name="Borne_Rouge"
                rules={[
                  {
                    required: true,
                    message: 'Champ Requis',
                  },
                ]}>
                <Radio.Group
                  buttonStyle="solid"
                  onChange={e => {
                    UpdateData('Borne_rouge', e.target.value, setNewMisePlace);
                  }}>
                  <Space direction="vertical">{items}</Space>
                </Radio.Group>
              </Form.Item>
            </Card>
          </Col>
          <Col>
            <Card
              title="Borne Verte"
              bordered={false}
              style={{width: '200px', marginBottom: '10px'}}>
              <Form.Item
                name="Borne_Verte"
                rules={[
                  {
                    required: true,
                    message: 'Champ Requis',
                  },
                ]}>
                <Radio.Group
                  buttonStyle="solid"
                  onChange={e => {
                    UpdateData('Borne_verte', e.target.value, setNewMisePlace);
                  }}>
                  <Space direction="vertical">{items}</Space>
                </Radio.Group>
              </Form.Item>
            </Card>
          </Col>
          <Col>
            <Card
              title="Borne Jaune"
              bordered={false}
              style={{width: '200px', marginBottom: '10px'}}>
              <Form.Item
                name="Borne_Jaune"
                rules={[
                  {
                    required: true,
                    message: 'Champ Requis',
                  },
                ]}>
                <Radio.Group
                  buttonStyle="solid"
                  onChange={e => {
                    UpdateData('Borne_jaune', e.target.value, setNewMisePlace);
                  }}>
                  <Space direction="vertical">{items}</Space>
                </Radio.Group>
              </Form.Item>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}
