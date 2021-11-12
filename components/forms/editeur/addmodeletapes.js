import React from 'react';
import {Form, Input, Button, Select, DatePicker, Space} from 'antd';

export default function addValeursrow(props) {
  const {handleAdd, setisaddingrow, setisadding} = props;
  const onFinish = () => {
    handleAdd();
  };

  return (
    <div>
      <Form layout="vertical" name="control-ref" onFinish={onFinish}>
        <Form.Item
          name="model d'etape"
          label="Model d'etape"
          rules={[
            {
              required: true,
              message: 'Model detape est Requis',
            },
          ]}>
          <Input
            onChange={e => {
              setisaddingrow(pre => {
                return {...pre, etape: e.target.value};
              });
            }}
          />
        </Form.Item>

        <Form.Item>
          <div
            style={{
              display: 'flex',
              justifyContent: 'end',
              borderTop: '1px solid gray',
              paddingTop: '10px',
            }}>
            <Button type="primary" htmlType="submit">
              Ajouter
            </Button>
            <Button
              type="secondary"
              style={{marginLeft: '5px'}}
              onClick={setisadding}>
              Annuler
            </Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
}
