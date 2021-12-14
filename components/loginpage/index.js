import React from 'react';
import Basepage from '@/components/Basepage';
import {Form, Input, Button, Checkbox, Row} from 'antd';

function index() {
  const onFinish = values => {
    console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
  return (
    <Basepage>
      {' '}
      <Row
        style={{
          height: '500px',
        }}
        justify="center"
        align="bottom">
        <div
          style={{
            padding: '20px 25px',
            height: '400px',
            width: '600px',
            border: '2px solid #356493',
            borderRadius: '5px',
            backgroundImage:
              'linear-gradient(-28deg, rgb(15 152 159) 0%, rgb(18 83 133) 100%)',
          }}>
          <Row style={{marginBottom: '20px'}}>
            <span className="siemens">Siemens </span>{' '}
            <span className="energy">Energy</span>
          </Row>
          <Row justify="end" style={{marginBottom: '20px', fontSize: '20px'}}>
            Trois Rivieres
            <font size="1" sty>
              ®
            </font>
            &nbsp;
            <p style={{fontSize: '12px'}}>Version 1.0.0</p>
          </Row>
          <Row justify="center">
            <Form
              name="basic"
              layout="vertical"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off">
              <Form.Item
                label="Username"
                name="username"
                rules={[
                  {
                    required: true,
                    message: 'Please input your username!',
                  },
                ]}>
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                ]}>
                <Input.Password />
              </Form.Item>

              <Form.Item>
                <Row justify="center">
                  <Button type="primary" htmlType="submit">
                    <a href="api/V1/login"> Login</a>
                  </Button>
                </Row>
              </Form.Item>
            </Form>
          </Row>{' '}
        </div>
        <div
          style={{
            height: '100px',
            width: '600px',
            borderRadius: '5px',
            backgroundImage:
              '-webkit-linear-gradient(top, rgba(0,200,255,.1) 0%, rgba(0,200,255,0) 90%), -webkit-radial-gradient(735px -370px, circle cover, rgba(0,200,255,.65) 0%,rgba(0,200,255,0) 55%)',
          }}></div>
      </Row>
    </Basepage>
  );
}

export default index;
