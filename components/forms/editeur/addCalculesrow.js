import React from 'react';
import {Form, Input, Button, Select, Checkbox} from 'antd';

export default function addCalculesrow(props) {
  const {handleAdd, setisaddingrow, setisadding, data} = props;
  const onFinish = values => {
    console.log(values);
    console.log(data);
    handleAdd();
  };

  const mode = [
    {label: 'Formule', value: 'Formule'},
    {label: 'Table de référence', value: 'Table de référence'},
  ];
  const areas = [
    {label: 'Beijing', value: 'Beijing'},
    {label: 'Shanghai', value: 'Shanghai'},
  ];
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
          name="Mode"
          label="Mode"
          rules={[
            {
              required: true,
              message: 'Mode est Requis',
            },
          ]}>
          <Select
            options={mode}
            onChange={value => {
              setisaddingrow(pre => {
                return {...pre, mode: value};
              });
            }}
          />
        </Form.Item>
        <Form.Item
          name="Formule"
          label="Formule"
          rules={[
            {
              required: true,
              message: 'Formule est Requis',
            },
          ]}>
          <Input
            onChange={e => {
              setisaddingrow(pre => {
                return {...pre, formule: e.target.value};
              });
            }}
          />
        </Form.Item>
        <Form.Item
          name="valeurs recherche"
          label="Valeurs recherche"
          rules={[
            {
              required: true,
              message: 'Valeurs recherchée est Requis',
            },
          ]}>
          <Select
            options={areas}
            onChange={value => {
              setisaddingrow(pre => {
                return {...pre, valeurrech: value};
              });
            }}
          />
        </Form.Item>
        <Form.Item
          name="valeur retournee"
          label="Valeurs retourne"
          rules={[
            {
              required: true,
              message: 'Valeur Retournée est Requis',
            },
          ]}>
          <Select
            options={areas}
            onChange={value => {
              setisaddingrow(pre => {
                return {...pre, valeurretournee: value};
              });
            }}
          />
        </Form.Item>
        <Form.Item name="valeur exact" label="Valeurs exact">
          <Checkbox
            onChange={e => {
              setisaddingrow(pre => {
                let x = e.target.checked;
                return {...pre, valeurexact: x.toString()};
              });
            }}
          />
        </Form.Item>
        <Form.Item>
          <div style={{display: 'flex', justifyContent: 'end'}}>
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
