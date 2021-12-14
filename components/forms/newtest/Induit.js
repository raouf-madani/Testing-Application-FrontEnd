import React, {useState} from 'react';
import {Form, Input, Radio, Row, Divider} from 'antd';

export default function Induit({
  UpdateData,
  miseenplaceok,
  setFinaldata,
  error,
}) {
  return (
    <div className="Containertest">
      <Divider
        dashed
        orientation="left"
        style={{color: '#34b1ab', marginBottom: '40px'}}>
        <h3>Induit</h3>{' '}
      </Divider>
      <div>
        <Row
          style={{
            justifyContent: 'center',
          }}>
          <Form.Item
            style={{
              width: '70%',
              marginBottom: '5px',
            }}>
            <Form.Item className="show_item">
              Tension applique position1 : 20V
            </Form.Item>
            <Form.Item
              className="show_item"
              style={{
                margin: '0 8px',
              }}>
              Tension applique position2 : 20V
            </Form.Item>
          </Form.Item>
        </Row>
        {!miseenplaceok.state && (
          <div>
            <Row
              style={{
                justifyContent: 'center',
              }}>
              <Form.Item
                label="Fréquence Genératrice"
                style={{width: '60%', marginBottom: '5px'}}>
                <Form.Item
                  name="Fréquence_Genératrice_P1"
                  rules={[{required: true, message: 'Champ Requis'}]}
                  style={{display: 'inline-block', width: 'calc(50% - 8px)'}}>
                  <Input
                    placeholder="Position 1"
                    onChange={e =>
                      UpdateData(
                        'Fréquence_genératrice_P1',
                        e.target.value,
                        setFinaldata
                      )
                    }
                  />
                </Form.Item>
                <Form.Item
                  name="Fréquence_Genératrice_P2"
                  style={{
                    display: 'inline-block',
                    width: 'calc(50% - 8px)',
                    margin: '0 8px',
                  }}>
                  <Input
                    placeholder="Position 2"
                    onChange={e =>
                      UpdateData(
                        'Fréquence_genératrice_P2',
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
                label="Réactance SKE77"
                style={{width: '60%', marginBottom: '5px'}}>
                <Form.Item
                  name="Réactance_SKE77_P1"
                  rules={[{required: true, message: 'Champ Requis'}]}
                  style={{display: 'inline-block', width: 'calc(50% - 8px)'}}>
                  <Input
                    placeholder="Position 1"
                    onChange={e =>
                      UpdateData(
                        'Réactance_ske77_P1',
                        e.target.value,
                        setFinaldata
                      )
                    }
                  />
                </Form.Item>
                <Form.Item
                  name="Réactance_SKE77_P2"
                  style={{
                    display: 'inline-block',
                    width: 'calc(50% - 8px)',
                    margin: '0 8px',
                  }}>
                  <Input
                    placeholder="Position 2"
                    onChange={e =>
                      UpdateData(
                        'Réactance_ske77_P2',
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
                label="Réactance SKE17"
                style={{width: '60%', marginBottom: '5px'}}>
                <Form.Item
                  name="Réactance_SKE17_P1"
                  rules={[{required: true, message: 'Champ Requis'}]}
                  style={{display: 'inline-block', width: 'calc(50% - 8px)'}}>
                  <Input
                    placeholder="Position 1"
                    onChange={e =>
                      UpdateData(
                        'Réactance_ske17_P1',
                        e.target.value,
                        setFinaldata
                      )
                    }
                  />
                </Form.Item>
                <Form.Item
                  name="Réactance_SKE17_P2"
                  style={{
                    display: 'inline-block',
                    width: 'calc(50% - 8px)',
                    margin: '0 8px',
                  }}>
                  <Input
                    placeholder="Position 2"
                    onChange={e =>
                      UpdateData(
                        'Réactance_ske17_P2',
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
          <Form.Item style={{width: '60%', marginBottom: '5px'}}>
            <Form.Item
              name="Resultat_P1"
              rules={[{required: true, message: 'Champ Requis'}]}
              style={{display: 'inline-block', width: 'calc(50% - 8px)'}}>
              <Radio.Group buttonStyle="solid">
                <Radio.Button style={{margin: '5px'}} value="reussit">
                  reussit
                </Radio.Button>
                <Radio.Button
                  style={{margin: '5px'}}
                  onClick={() => {
                    error('Le Test de Induit Position 1 est echoué...');
                  }}
                  value="echoue">
                  echoue
                </Radio.Button>
              </Radio.Group>
            </Form.Item>
            <Form.Item
              name="Resultat_P2"
              style={{
                display: 'inline-block',
                width: 'calc(50% - 8px)',
                margin: '0 8px',
              }}>
              <Radio.Group buttonStyle="solid">
                <Radio.Button style={{margin: '5px'}} value={true}>
                  reussit{' '}
                </Radio.Button>
                <Radio.Button
                  onClick={() => {
                    error('Le Test de Induit Position 2 est echoué...');
                  }}
                  style={{margin: '5px'}}
                  value={false}>
                  echoue
                </Radio.Button>
              </Radio.Group>
            </Form.Item>
          </Form.Item>
        </Row>
      </div>
    </div>
  );
}
