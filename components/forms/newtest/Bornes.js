import React, {useState} from 'react';
import {Form, Input, Button, Select, Card, Space, Radio, Row, Col} from 'antd';

export default function Bornes({UpdateData, miseenplaceok}) {
  return (
    <div>
      <Row style={{justifyContent: 'center', marginBottom: '20px'}}>
        <h3>Placement des Bornes</h3>
      </Row>
      <Row style={{justifyContent: 'space-around'}}>
        <Col>
          <Card title="Borne Rouge" bordered={false} style={{width: '200px'}}>
            {!miseenplaceok.state ? (
              <Form.Item style={{marginBottom: 0}}>
                <Form.Item
                  name="Borne_Rouge"
                  rules={[{required: true, message: 'Champ Requis'}]}>
                  <Radio.Group
                    buttonStyle="solid"
                    onChange={e => UpdateData('Borne_rouge', e.target.value)}>
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
              </Form.Item>
            ) : (
              // <Form.Item
              //   name="Borne_Rouge"
              //   rules={[
              //     {
              //       required: true,
              //       message: 'Champ Requis',
              //     },
              //   ]}>
              //   <Radio.Group
              //     buttonStyle="solid"
              //     onChange={e => UpdateData('Borne_rouge', e.target.value)}>
              //     <Space direction="vertical">
              //       <Radio.Button
              //         style={{width: '100px', marginBottom: '10px'}}
              //         value="1000">
              //         1000
              //       </Radio.Button>
              //       <Radio.Button
              //         style={{width: '100px', marginBottom: '10px'}}
              //         value="500">
              //         500
              //       </Radio.Button>
              //       <Radio.Button
              //         style={{width: '100px', marginBottom: '10px'}}
              //         value="800">
              //         800
              //       </Radio.Button>
              //     </Space>
              //   </Radio.Group>
              // </Form.Item>
              miseenplaceok.Bornes.Borne_rouge
            )}
          </Card>
        </Col>
        <Col>
          <Card title="Borne Verte" bordered={false} style={{width: '200px'}}>
            {!miseenplaceok.state ? (
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
                  onChange={e => UpdateData('Borne_verte', e.target.value)}>
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
            ) : (
              miseenplaceok.Bornes.Borne_verte
            )}
          </Card>
        </Col>
        <Col>
          <Card title="Borne Jaune" bordered={false} style={{width: '200px'}}>
            {!miseenplaceok.state ? (
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
                  onChange={e => UpdateData('Borne_jaune', e.target.value)}>
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
            ) : (
              miseenplaceok.Bornes.Borne_verte
            )}
          </Card>
        </Col>
      </Row>
    </div>
  );
}
