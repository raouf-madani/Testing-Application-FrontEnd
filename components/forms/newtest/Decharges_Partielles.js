import React, {useState, useRef, useEffect} from 'react';
import {Form, Input, Space, Button, Row, Divider, Select} from 'antd';
import {PlusOutlined, MinusCircleOutlined} from '@ant-design/icons';

export default function Decharges_Partielles({
  UpdateData,
  miseenplaceok,
  setFinaldata,
  setNewMisePlace,
}) {
  const inputEl = useRef(null);
  useEffect(() => {
    if (inputEl.current) {
      inputEl.current.focus();
    }
  }, [inputEl]);
  const [stopaddrow, setstopaddrow] = useState(false);
  const SKE77 = [
    {label: 'off', value: 'off'},
    {label: 16, value: 16},
    {label: 32, value: 32},
  ];
  const SKE17 = [
    {label: 'off', value: 'off'},
    {label: 1, value: 1},
    {label: 3, value: 3},
    {label: 5, value: 5},
    {label: 7, value: 7},
    {label: 9, value: 9},
    {label: 10, value: 10},
    {label: 11, value: 11},
    {label: 12, value: 12},
    {label: 13, value: 13},
    {label: 14, value: 14},
    {label: 15, value: 15},
  ];
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
        {miseenplaceok ? (
          <Row style={{justifyContent: 'center'}}>
            <Form.Item key="1.5pu" className="show_item" style={{width: '40%'}}>
              Réactance SKE77 p1:
              {miseenplaceok.Decharges_Partielles.Réactance_ske77_DP_P1}
            </Form.Item>
            <Form.Item key="1.5pu" className="show_item" style={{width: '40%'}}>
              Réactance SKE17 p1 :
              {miseenplaceok.Decharges_Partielles.Réactance_ske17_DP_P1}
            </Form.Item>
          </Row>
        ) : (
          <>
            <Row style={{justifyContent: 'center'}}>
              <Form.Item
                label="Réactance SKE77"
                style={{display: 'inline-block', width: 'calc(30% - 8px)'}}>
                <Form.Item
                  name="Réactance_SKE77_DP_P1"
                  rules={[{required: true, message: 'Champ Requis'}]}>
                  <Select
                    ref={inputEl}
                    tabIndex={1}
                    defaultValue=""
                    options={SKE77}
                    onChange={value => {
                      UpdateData(
                        'Réactance_ske77_DP_P1',
                        value,
                        setNewMisePlace
                      );
                      UpdateData('Réactance_ske77_DP_P1', value, setFinaldata);
                    }}
                  />
                </Form.Item>
              </Form.Item>
              <Form.Item
                label="Réactance SKE17"
                style={{
                  display: 'inline-block',
                  width: 'calc(30% - 8px)',
                  margin: '0 8px',
                }}>
                <Form.Item
                  name="Réactance_SKE17_DP_P1"
                  rules={[{required: true, message: 'Champ Requis'}]}>
                  <Select
                    defaultValue=""
                    tabIndex={2}
                    options={SKE17}
                    onChange={value => {
                      UpdateData(
                        'Réactance_ske17_DP_P1',
                        value,
                        setNewMisePlace
                      );
                      UpdateData('Réactance_ske17_DP_P1', value, setFinaldata);
                    }}
                  />
                </Form.Item>
              </Form.Item>
            </Row>
          </>
        )}
        <Row style={{justifyContent: 'center'}}>
          <Form.Item
            key="15_Sec"
            style={{width: '10%', marginRight: '5px'}}
            label="15 Sec"
            name="15"
            rules={[{required: true, message: 'Champ Requis'}]}>
            <Input
              ref={!miseenplaceok ? null : inputEl}
              type="number"
              tabIndex={3}
              min={10}
              max={1000}
              placeholder="10 Sec"
            />
          </Form.Item>
          <Form.Item
            key="30_Sec"
            style={{width: '10%', marginRight: '5px'}}
            label="30 Sec"
            name="30"
            rules={[{required: true, message: 'Champ Requis'}]}>
            <Input
              type="number"
              tabIndex={4}
              min={10}
              max={1000}
              placeholder="30 Sec"
            />
          </Form.Item>
          <Form.Item
            key="45_Sec"
            style={{width: '10%', marginRight: '5px'}}
            label="45 Sec"
            name="45"
            rules={[{required: true, message: 'Champ Requis'}]}>
            <Input
              type="number"
              tabIndex={5}
              min={10}
              max={1000}
              placeholder="45 Sec"
            />
          </Form.Item>
          <Form.Item
            key="60_Sec"
            style={{width: '10%', marginRight: '5px'}}
            label="60 Sec"
            name="60"
            rules={[{required: true, message: 'Champ Requis'}]}>
            <Input
              type="number"
              tabIndex={6}
              min={10}
              max={1000}
              placeholder="60 Sec"
            />
          </Form.Item>
        </Row>
        <Form.List name="" style={{width: '50%'}}>
          {(fields, {add, remove}) => (
            <>
              {fields.map(({key, name, fieldKey, ...restField}) => (
                <Row
                  style={{
                    justifyContent: 'center',
                    display: 'flex',
                  }}>
                  <Form.Item
                    {...restField}
                    key={[name == 0 ? '75_Sec' : '135_Sec']}
                    style={{width: '10%', marginRight: '5px'}}
                    label={[name == 0 ? '75 Sec' : '135 Sec']}
                    name={[name, name == 0 ? '75' : '135']}
                    fieldKey={[fieldKey, 's']}
                    rules={[{required: true, message: 'Champ Requis'}]}>
                    <Input
                      type="number"
                      min={10}
                      max={1000}
                      onChange={e => {
                        e.target.value > 50 ? add() : null;
                      }}
                      placeholder={name == 0 ? '75 Sec' : '135 Sec'}
                    />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    key={[name == 0 ? '90_Sec' : '150_Sec']}
                    style={{width: '10%', marginRight: '5px'}}
                    label={[name == 0 ? '90 Sec' : '150 Sec']}
                    name={[name, name == 0 ? '90' : '150']}
                    fieldKey={[fieldKey, 's']}
                    rules={[{required: true, message: 'Champ Requis'}]}>
                    <Input
                      type="number"
                      min={10}
                      max={1000}
                      placeholder={[name == 0 ? '90 Sec' : '150 Sec']}
                    />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    key={[name == 0 ? '105_Sec' : '165_Sec']}
                    style={{width: '10%', marginRight: '5px'}}
                    label={[name == 0 ? '105 Sec' : '165 Sec']}
                    name={[name, name == 0 ? '105' : '165']}
                    fieldKey={[fieldKey, 's']}
                    rules={[{required: true, message: 'Champ Requis'}]}>
                    <Input
                      type="number"
                      min={10}
                      max={1000}
                      placeholder={[name == 0 ? '105 Sec' : '165 Sec']}
                    />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    key={[name == 0 ? '120_Sec' : '180_Sec']}
                    style={{width: '10%', marginRight: '5px'}}
                    label={[name == 0 ? '120 Sec' : '180 Sec']}
                    name={[name, name == 0 ? '120' : '180']}
                    fieldKey={[fieldKey, 's']}
                    rules={[{required: true, message: 'Champ Requis'}]}>
                    <Input
                      type="number"
                      min={10}
                      max={1000}
                      placeholder={[name == 0 ? '120 Sec' : '180 Sec']}
                    />
                  </Form.Item>
                  <MinusCircleOutlined
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                    }}
                    onClick={() => remove(name)}
                  />

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
