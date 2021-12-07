import React, {useState} from 'react';
import {Form, Input, Row, Divider} from 'antd';

export default function Perte_a_vide({UpdateData, miseenplaceok}) {
  return (
    <div className="Containertest">
      <Divider
        dashed
        orientation="left"
        style={{color: '#34b1ab', marginBottom: '40px'}}>
        <h3>Perte A Vide</h3>
      </Divider>
      <div>
        <Row style={{justifyContent: 'center'}}>
          <Form.Item style={{marginBottom: 0, width: '60%'}}>
            <Form.Item
              name="tension applique 1"
              style={{display: 'inline-block', width: 'calc(50% - 8px)'}}>
              Tension applique position1 : 20V
            </Form.Item>
            <Form.Item
              name="tension applique 2"
              style={{
                display: 'inline-block',
                width: 'calc(50% - 8px)',
                margin: '0 8px',
              }}>
              Tension applique position2 : 20V
            </Form.Item>
          </Form.Item>
        </Row>
        {!miseenplaceok.state && (
          <div>
            <Row style={{justifyContent: 'center'}}>
              <Form.Item
                label="Multiplicateur Volts"
                style={{marginBottom: 0, width: '60%'}}>
                <Form.Item
                  name="multiplicateur_Volts_P1"
                  rules={[{required: true, message: 'Champ Requis'}]}
                  style={{display: 'inline-block', width: 'calc(50% - 8px)'}}>
                  <Input
                    placeholder="Position 1"
                    onChange={e =>
                      UpdateData('multiplicateur_volts_P1', e.target.value)
                    }
                  />
                </Form.Item>
                <Form.Item
                  name="multiplicateur_Volts_P2"
                  style={{
                    display: 'inline-block',
                    width: 'calc(50% - 8px)',
                    margin: '0 8px',
                  }}>
                  <Input
                    placeholder="Position 2"
                    onChange={e =>
                      UpdateData('multiplicateur_volts_P2', e.target.value)
                    }
                  />
                </Form.Item>
              </Form.Item>
            </Row>
            <Row style={{justifyContent: 'center'}}>
              <Form.Item
                label="Multiplicateur Ampéres"
                style={{marginBottom: 0, width: '60%'}}>
                <Form.Item
                  name="Multiplicateur_Amprers_P1"
                  rules={[{required: true, message: 'Champ Requis'}]}
                  style={{display: 'inline-block', width: 'calc(50% - 8px)'}}>
                  <Input
                    placeholder="Position 1"
                    onChange={e =>
                      UpdateData('Multiplicateur_amperes_P1', e.target.value)
                    }
                  />
                </Form.Item>
                <Form.Item
                  name="Multiplicateur_Amprers_P2"
                  style={{
                    display: 'inline-block',
                    width: 'calc(50% - 8px)',
                    margin: '0 8px',
                  }}>
                  <Input
                    placeholder="Position 2"
                    onChange={e =>
                      UpdateData('Multiplicateur_amperes_P2', e.target.value)
                    }
                  />
                </Form.Item>
              </Form.Item>
            </Row>
            <Row style={{justifyContent: 'center'}}>
              <Form.Item
                label="Perte Table"
                style={{marginBottom: 0, width: '60%'}}>
                <Form.Item
                  name="Perte_Table_P1"
                  rules={[{required: true, message: 'Champ Requis'}]}
                  style={{display: 'inline-block', width: 'calc(50% - 8px)'}}>
                  <Input
                    placeholder="Position 1"
                    onChange={e => UpdateData('Perte_table_P1', e.target.value)}
                  />
                </Form.Item>
                <Form.Item
                  name="Perte_Table_P2"
                  style={{
                    display: 'inline-block',
                    width: 'calc(50% - 8px)',
                    margin: '0 8px',
                  }}>
                  <Input
                    placeholder="Position 2"
                    onChange={e => UpdateData('Perte_table_P2', e.target.value)}
                  />
                </Form.Item>
              </Form.Item>
            </Row>
          </div>
        )}
        <Row style={{justifyContent: 'center'}}>
          <Form.Item
            label="Pertes Mesurés"
            style={{marginBottom: 0, width: '60%'}}>
            <Form.Item
              name="Pertes_Mesurés_P1"
              rules={[{required: true, message: 'Champ Requis'}]}
              style={{display: 'inline-block', width: 'calc(50% - 8px)'}}>
              <Input
                placeholder="Position 1"
                onChange={e => UpdateData('Pertes_mesurés_P1', e.target.value)}
              />
            </Form.Item>
            <Form.Item
              name="Pertes_Mesurés_P2"
              style={{
                display: 'inline-block',
                width: 'calc(50% - 8px)',
                margin: '0 8px',
              }}>
              <Input
                placeholder="Position 2"
                onChange={e => UpdateData('Pertes_mesurés_P1', e.target.value)}
              />
            </Form.Item>
          </Form.Item>
        </Row>
        <Row style={{justifyContent: 'center'}}>
          <Form.Item
            label="Courant Excitation Mesurés"
            style={{marginBottom: 0, width: '60%'}}>
            <Form.Item
              name="Courant_Excitation_Mesurés_P1"
              rules={[{required: true, message: 'Champ Requis'}]}
              style={{display: 'inline-block', width: 'calc(50% - 8px)'}}>
              <Input
                placeholder="Position 1"
                onChange={e =>
                  UpdateData('Courant_excitation_mesurés_P1', e.target.value)
                }
              />
            </Form.Item>
            <Form.Item
              name="Courant_Excitation_Mesurés_P2"
              style={{
                display: 'inline-block',
                width: 'calc(50% - 8px)',
                margin: '0 8px',
              }}>
              <Input
                placeholder="Position 2"
                onChange={e =>
                  UpdateData('Courant_excitation_mesurés_P2', e.target.value)
                }
              />
            </Form.Item>
          </Form.Item>
        </Row>
      </div>
    </div>
  );
}
