import React from 'react';
import Basepage from '@/components/Basepage';
import {Form, Input, Button, Checkbox} from 'antd';

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
      <div
        style={{
          backgroundColor: 'white',
          alignItems: 'center',
          padding: '40px 20px',
          borderRadius: '2%',
          marginTop: '50px',
          height: '300px',
        }}>
        <Form
          name="basic"
          layout="horizontal"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
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

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}>
            <Button type="primary" htmlType="submit">
              <a href="api/V1/login"> Login</a>
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Basepage>
  );
}

export default index;
