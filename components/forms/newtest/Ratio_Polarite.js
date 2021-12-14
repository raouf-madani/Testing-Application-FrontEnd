import React, {useState} from 'react';
import {
  Form,
  Input,
  Button,
  Select,
  DatePicker,
  Space,
  Row,
  Divider,
} from 'antd';

export default function Ratio_Polarite({
  UpdateData,
  miseenplaceok,
  setFinaldata,
}) {
  return (
    <div className="Containertest">
      <Divider
        dashed
        orientation="left"
        style={{color: '#34b1ab', marginBottom: '40px'}}>
        <h3>Ratio et Polarité</h3>
      </Divider>
      <div>
        {!miseenplaceok.state && (
          <div>
            <Row style={{justifyContent: 'center'}}>
              <Form.Item
                label="Volts Apluiqés"
                style={{marginBottom: 0, width: '60%'}}>
                <Form.Item
                  rules={[{required: true, message: 'Champ Requis'}]}
                  style={{display: 'inline-block', width: 'calc(50% - 8px)'}}>
                  <Input
                    placeholder="Position 1"
                    onChange={e =>
                      UpdateData(
                        'Volts_apluiqés_P1',
                        e.target.value,
                        setFinaldata
                      )
                    }
                  />
                </Form.Item>
                <Form.Item
                  name="Volts_Apluiqés_P2"
                  style={{
                    display: 'inline-block',
                    width: 'calc(50% - 8px)',
                    margin: '0 8px',
                  }}>
                  <Input
                    placeholder="Position 2"
                    onChange={e =>
                      UpdateData(
                        'Volts_apluiqés_P2',
                        e.target.value,
                        setFinaldata
                      )
                    }
                  />
                </Form.Item>
              </Form.Item>
            </Row>
            <Row style={{justifyContent: 'center'}}>
              <Form.Item
                label="Volts HT"
                style={{marginBottom: 0, width: '60%'}}>
                <Form.Item
                  name="Volts_HT_P1"
                  rules={[{required: true, message: 'Champ Requis'}]}
                  style={{display: 'inline-block', width: 'calc(50% - 8px)'}}>
                  <Input
                    placeholder="Position 1"
                    onChange={e =>
                      UpdateData('Volts_ht_P1', e.target.value, setFinaldata)
                    }
                  />
                </Form.Item>
                <Form.Item
                  name="Volts_HT_P2"
                  style={{
                    display: 'inline-block',
                    width: 'calc(50% - 8px)',
                    margin: '0 8px',
                  }}>
                  <Input
                    placeholder="Position 2"
                    onChange={e =>
                      UpdateData('Volts_ht_P2', e.target.value, setFinaldata)
                    }
                  />
                </Form.Item>
              </Form.Item>
            </Row>
            <Row style={{justifyContent: 'center'}}>
              <Form.Item
                label="Polarité Volts"
                style={{marginBottom: 0, width: '60%'}}>
                <Form.Item
                  name="Polarité_Volts_P1"
                  rules={[{required: true, message: 'Champ Requis'}]}
                  style={{display: 'inline-block', width: 'calc(50% - 8px)'}}>
                  <Input
                    placeholder="Position 1"
                    onChange={e =>
                      UpdateData(
                        'Polarite_volts_P1',
                        e.target.value,
                        setFinaldata
                      )
                    }
                  />
                </Form.Item>
                <Form.Item
                  name="Polarité_Volts_P2"
                  style={{
                    display: 'inline-block',
                    width: 'calc(50% - 8px)',
                    margin: '0 8px',
                  }}>
                  <Input
                    placeholder="Position 2"
                    onChange={e =>
                      UpdateData(
                        'Polarite_volts_P2',
                        e.target.value,
                        setFinaldata
                      )
                    }
                  />
                </Form.Item>
              </Form.Item>
            </Row>
          </div>
        )}
        <Row style={{justifyContent: 'center'}}>
          <Form.Item
            label="Volts HT Mesuré"
            style={{marginBottom: 0, width: '60%'}}>
            <Form.Item
              name="Volts_HT_Mesuré_P1"
              rules={[{required: true, message: 'Champ Requis'}]}
              style={{display: 'inline-block', width: 'calc(50% - 8px)'}}>
              <Input
                placeholder="Position 1"
                onChange={e =>
                  UpdateData('Volts_ht_mesuré_P1', e.target.value, setFinaldata)
                }
              />
            </Form.Item>

            <Form.Item
              name="Volts_HT_Mesuré_P2"
              style={{
                display: 'inline-block',
                width: 'calc(50% - 8px)',
                margin: '0 8px',
              }}>
              <Input
                placeholder="Position 2"
                onChange={e =>
                  UpdateData('Volts_ht_mesuré_P2', e.target.value, setFinaldata)
                }
              />
            </Form.Item>
          </Form.Item>
        </Row>
        <Row style={{justifyContent: 'center'}}>
          <Form.Item
            label="Polarité V Mesuré"
            style={{marginBottom: 0, width: '60%'}}>
            <Form.Item
              name="Polarité_V_Mesuré_P1"
              rules={[{required: true, message: 'Champ Requis'}]}
              style={{display: 'inline-block', width: 'calc(50% - 8px)'}}>
              <Input
                placeholder="Position 1"
                onChange={e =>
                  UpdateData(
                    'Polarite_volts_Mesure_P1',
                    e.target.value,
                    setFinaldata
                  )
                }
              />
            </Form.Item>

            <Form.Item
              name="Polarité_V_Mesuré_P2"
              style={{
                display: 'inline-block',
                width: 'calc(50% - 8px)',
                margin: '0 8px',
              }}>
              <Input
                placeholder="Position 2"
                onChange={e =>
                  UpdateData(
                    'Polarite_volts_Mesure_P2',
                    e.target.value,
                    setFinaldata
                  )
                }
              />
            </Form.Item>
          </Form.Item>
        </Row>
      </div>
    </div>
  );
}
