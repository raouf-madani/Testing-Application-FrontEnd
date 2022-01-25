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

export default function Bornes({
  UpdateData,
  miseenplaceok,
  setFinaldata,
  setNewMisePlace,
}) {
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
                    UpdateData('Borne_rouge', e.target.value, setFinaldata);
                  }}>
                  <Space direction="vertical">
                    <Radio.Button
                      style={{width: '100px', marginBottom: '10px'}}
                      value="1000">
                      1000
                    </Radio.Button>
                    <Radio.Button
                      style={{width: '100px', marginBottom: '10px'}}
                      value="500">
                      500
                    </Radio.Button>
                    <Radio.Button
                      style={{width: '100px', marginBottom: '10px'}}
                      value="800">
                      800
                    </Radio.Button>
                  </Space>
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
                    UpdateData('Borne_verte', e.target.value, setFinaldata);
                  }}>
                  <Space direction="vertical">
                    <Radio.Button
                      style={{width: '100px', marginBottom: '10px'}}
                      value="1000">
                      1000
                    </Radio.Button>
                    <Radio.Button
                      style={{width: '100px', marginBottom: '10px'}}
                      value="500">
                      500
                    </Radio.Button>
                    <Radio.Button
                      style={{width: '100px', marginBottom: '10px'}}
                      value="800">
                      800
                    </Radio.Button>
                  </Space>
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
                    UpdateData('Borne_jaune', e.target.value, setFinaldata);
                  }}>
                  <Space direction="vertical">
                    <Radio.Button
                      style={{width: '100px', marginBottom: '10px'}}
                      value="1000">
                      1000
                    </Radio.Button>
                    <Radio.Button
                      style={{width: '100px', marginBottom: '10px'}}
                      value="500">
                      500
                    </Radio.Button>
                    <Radio.Button
                      style={{width: '100px', marginBottom: '10px'}}
                      value="800">
                      800
                    </Radio.Button>
                  </Space>
                </Radio.Group>
              </Form.Item>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}
