import React from 'react';
import {Form, Input, Button, Select, DatePicker, Space} from 'antd';

export default function addValeursrow(props) {
  const {handleAdd, setisaddingrow, setisadding} = props;
  const onFinish = values => {
    console.log(values);
    handleAdd();
  };

  const Types = [
    {label: 'Text', value: 'Text'},
    {label: 'Nombre', value: 'Nombre'},
    {label: 'Liste', value: 'Liste'},
    {label: 'Date', value: 'Date'},
  ];

  function onChange(value, dateString) {
    console.log('Selected Time: ', value);
    console.log('Formatted Selected Time: ', dateString);
    setisaddingrow(pre => {
      return {...pre, listevaleurs: dateString};
    });
  }

  return (
    <div>
      <Form layout="vertical" name="control-ref" onFinish={onFinish}>
        <Form.Item
          name="Nom du champ"
          label="Nom du champ"
          rules={[
            {
              required: true,
              message: 'Nom Du Champ est Requis',
            },
          ]}>
          <Input
            onChange={e => {
              setisaddingrow(pre => {
                return {...pre, champs: e.target.value};
              });
            }}
          />
        </Form.Item>

        <Form.Item
          name="type"
          label="Type"
          rules={[
            {
              required: true,
              message: 'Type est Requis',
            },
          ]}>
          <Select
            options={Types}
            onChange={value => {
              setisaddingrow(pre => {
                return {...pre, type: value};
              });
            }}
          />
        </Form.Item>
        <Form.Item
          noStyle
          shouldUpdate={(prevValues, currentValues) =>
            prevValues.type !== currentValues.type
          }>
          {({getFieldValue}) =>
            getFieldValue('type') === 'Text' ? (
              <Form.Item
                name="Liste des Valeurs"
                label="Liste des Valeurs"
                rules={[
                  {
                    required: true,
                    message: 'Liste des Valeurs est Requis',
                  },
                ]}>
                <Input
                  onChange={e => {
                    setisaddingrow(pre => {
                      return {...pre, listevaleurs: e.target.value};
                    });
                  }}
                />
              </Form.Item>
            ) : null
          }
        </Form.Item>

        <Form.Item
          noStyle
          shouldUpdate={(prevValues, currentValues) =>
            prevValues.type !== currentValues.type
          }>
          {({getFieldValue}) =>
            getFieldValue('type') === 'Nombre' ? (
              <Form.Item
                name="Liste des Valeurs"
                label="Liste des Valeurs"
                rules={[
                  {
                    required: true,
                    message: 'Liste des Valeurs est Requis',
                  },
                ]}>
                <Input
                  type="number"
                  onChange={e => {
                    setisaddingrow(pre => {
                      return {...pre, listevaleurs: e.target.value};
                    });
                  }}
                />
              </Form.Item>
            ) : null
          }
        </Form.Item>

        <Form.Item
          noStyle
          shouldUpdate={(prevValues, currentValues) =>
            prevValues.type !== currentValues.type
          }>
          {({getFieldValue}) =>
            getFieldValue('type') === 'Date' ? (
              <Form.Item
                name="Liste des Valeurs"
                label="Liste des Valeurs"
                rules={[
                  {
                    required: false,
                    message: 'Liste des Valeurs est Requis',
                  },
                ]}>
                <Space direction="vertical" size={12}>
                  <DatePicker onChange={onChange} />
                </Space>
              </Form.Item>
            ) : null
          }
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
