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
            border: '2px solid rgb(61 34 98)',
            borderRadius: '5px',
            // backgroundImage:
            //   'linear-gradient(-28deg, rgb(15 152 159) 0%, rgb(18 83 133) 100%)',
          }}>
          <Row>
            <img
              style={{marginBottom: '5px'}}
              src="https://brandville.siemens-energy.com/sites/default/files/c2cms_instance_settings/logo/SE_Logo_White_RGB_green.svg"
              height="45px"
              alt="se-logo"
            />
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
                  <Button type="primary" htmlType="submit" block>
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
              '-webkit-linear-gradient(top, rgba(0, 200, 255, 0.1) 0%, rgba(0, 200, 255, 0) 90%), -webkit-radial-gradient(735px -370px, circle cover, rgb(157 71 145 / 65%) 0%, rgba(0, 200, 255, 0) 55%)',
          }}></div>
      </Row>
    </Basepage>
  );
}

export default index;
