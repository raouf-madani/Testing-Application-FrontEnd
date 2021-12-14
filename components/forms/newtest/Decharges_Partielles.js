import React, {useState} from 'react';
import {Form, Input, Space, Button, Row, Divider} from 'antd';
import {PlusOutlined, MinusCircleOutlined} from '@ant-design/icons';

export default function Decharges_Partielles({UpdateData, miseenplaceok}) {
  const [stopaddrow, setstopaddrow] = useState(false);
  return (
    <div className="Containertest">
      <Divider
        dashed
        orientation="left"
        style={{color: '#34b1ab', marginBottom: '40px'}}>
        <h3>Decharges Partielles</h3>
      </Divider>
      <div>
        <Row style={{justifyContent: 'center'}}>
          <Form.Item>
            <Form.Item
              key="1.7pu"
              className="show_item"
              style={{width: '100%'}}>
              TENSION APPLIQUÉ HAUTE TENSION 1.7pu (V)
            </Form.Item>
          </Form.Item>
        </Row>
        <Row style={{justifyContent: 'center'}}>
          <Form.Item>
            <Form.Item
              key="1.5pu"
              className="show_item"
              style={{width: '100%'}}>
              TENSION APPLIQUÉ HAUTE TENSION 1.5pu (V)
            </Form.Item>
          </Form.Item>
        </Row>
        <Row style={{justifyContent: 'center'}}>
          <Form.Item
            key="15_Sec"
            style={{width: '10%', marginRight: '5px'}}
            label="15 Sec"
            name="15"
            rules={[{required: true, message: 'Champ Requis'}]}>
            <Input placeholder="10 Sec" />
          </Form.Item>
          <Form.Item
            key="30_Sec"
            style={{width: '10%', marginRight: '5px'}}
            label="30 Sec"
            name="30"
            rules={[{required: true, message: 'Champ Requis'}]}>
            <Input placeholder="30 Sec" />
          </Form.Item>
          <Form.Item
            key="45_Sec"
            style={{width: '10%', marginRight: '5px'}}
            label="45 Sec"
            name="45"
            rules={[{required: true, message: 'Champ Requis'}]}>
            <Input placeholder="45 Sec" />
          </Form.Item>
          <Form.Item
            key="60_Sec"
            style={{width: '10%', marginRight: '5px'}}
            label="60 Sec"
            name="60"
            rules={[{required: true, message: 'Champ Requis'}]}>
            <Input placeholder="60 Sec" />
          </Form.Item>
        </Row>
        <Form.List name="" style={{width: '50%'}}>
          {(fields, {add, remove}) => (
            <>
              {fields.map(({key, name, fieldKey, ...restField}) => (
                <Row style={{justifyContent: 'center'}}>
                  <Form.Item
                    {...restField}
                    key={[name == 0 ? '75_Sec' : '135_Sec']}
                    style={{width: '10%', marginRight: '5px'}}
                    label={[name == 0 ? '75 Sec' : '135 Sec']}
                    name={[name, name == 0 ? '75' : '135']}
                    fieldKey={[fieldKey, 's']}
                    rules={[{required: true, message: 'Champ Requis'}]}>
                    <Input placeholder={name == 0 ? '75 Sec' : '135 Sec'} />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    key={[name == 0 ? '90_Sec' : '150_Sec']}
                    style={{width: '10%', marginRight: '5px'}}
                    label={[name == 0 ? '90 Sec' : '150 Sec']}
                    name={[name, name == 0 ? '90' : '150']}
                    fieldKey={[fieldKey, 's']}
                    rules={[{required: true, message: 'Champ Requis'}]}>
                    <Input placeholder={[name == 0 ? '90 Sec' : '150 Sec']} />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    key={[name == 0 ? '105_Sec' : '165_Sec']}
                    style={{width: '10%', marginRight: '5px'}}
                    label={[name == 0 ? '105 Sec' : '165 Sec']}
                    name={[name, name == 0 ? '105' : '165']}
                    fieldKey={[fieldKey, 's']}
                    rules={[{required: true, message: 'Champ Requis'}]}>
                    <Input placeholder={[name == 0 ? '105 Sec' : '165 Sec']} />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    key={[name == 0 ? '120_Sec' : '180_Sec']}
                    style={{width: '10%', marginRight: '5px'}}
                    label={[name == 0 ? '120 Sec' : '180 Sec']}
                    name={[name, name == 0 ? '120' : '180']}
                    fieldKey={[fieldKey, 's']}
                    rules={[{required: true, message: 'Champ Requis'}]}>
                    <Input placeholder={[name == 0 ? '120 Sec' : '180 Sec']} />
                  </Form.Item>
                  <MinusCircleOutlined onClick={() => remove(name)} />

                  {name < 1 ? setstopaddrow(false) : setstopaddrow(true)}
                </Row>
              ))}
              {!stopaddrow && (
                <Row style={{justifyContent: 'center'}}>
                  <Form.Item key="Add_Button" name="buttons">
                    <Button
                      type="dashed"
                      onClick={() => add()}
                      block
                      icon={<PlusOutlined />}>
                      Add field
                    </Button>
                  </Form.Item>
                </Row>
              )}
            </>
          )}
        </Form.List>
      </div>
    </div>
  );
}
