import React, {useState} from 'react';
import {Form, Input, Radio, Button, Row, List} from 'antd';

export default function Induit({UpdateData, miseenplaceok}) {
  return (
    <div>
      {!miseenplaceok.state && (
        <div>
          {' '}
          <Row
            style={{
              justifyContent: 'center',
              marginBottom: '10px',
            }}>
            <h3>Induit</h3>
          </Row>
          <Row
            style={{
              justifyContent: 'center',
            }}>
            <Form.Item
              style={{
                width: '60%',
                marginBottom: '5px',
                borderBottom: '1px solid green',
              }}>
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
                    UpdateData('Fréquence_genératrice_P1', e.target.value)
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
                    UpdateData('Fréquence_genératrice_P2', e.target.value)
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
                    UpdateData('Réactance_ske77_P1', e.target.value)
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
                    UpdateData('Réactance_ske77_P2', e.target.value)
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
                    UpdateData('Réactance_ske17_P1', e.target.value)
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
                    UpdateData('Réactance_ske17_P2', e.target.value)
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
              <Radio.Button value={true}>Test reussit</Radio.Button>
              <Radio.Button value={false}>Test echoue</Radio.Button>
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
              <Radio.Button value={true}>Test reussit </Radio.Button>
              <Radio.Button value={false}>Test echoue</Radio.Button>
            </Radio.Group>
          </Form.Item>
        </Form.Item>
      </Row>
    </div>
  );
}
