import React from 'react';
import {InputNumber, Form, Tabs, Input, Row} from 'antd';
import {InfoCircleOutlined} from '@ant-design/icons';
const {TabPane} = Tabs;

function newTestContent({UpdatemiseData, setmise_data}) {
  return (
    <Tabs tabPosition="top">
      <TabPane tab="Bornes" key="1">
        <Row justify="space-between">
          <Form.Item
            label="Borne Rouge"
            tooltip={{
              title: 'Tooltip with customize icon',
              icon: <InfoCircleOutlined style={{color: 'red'}} />,
            }}
            style={{marginBottom: 0, width: '30%'}}>
            <Form.Item
              name="Borne_Rouge"
              rules={[
                {
                  required: true,
                  message: 'Champ Requis',
                },
              ]}>
              <InputNumber
                style={{width: 140}}
                onChange={value =>
                  UpdatemiseData('Borne_rouge', value, setmise_data)
                }
              />
            </Form.Item>
          </Form.Item>
          <Form.Item
            label="Borne Jaune"
            tooltip={{
              title: 'Tooltip with customize icon',
              icon: <InfoCircleOutlined style={{color: '#edf109'}} />,
            }}
            style={{marginBottom: 0, width: '30%'}}>
            <Form.Item
              name="Borne_Jaune"
              rules={[
                {
                  required: true,
                  message: 'Champ Requis',
                },
              ]}>
              <Input
                onChange={e =>
                  UpdatemiseData('Borne_jaune', e.target.value, setmise_data)
                }
              />
            </Form.Item>
          </Form.Item>
          <Form.Item
            label="Borne Verte"
            tooltip={{
              title: 'Tooltip with customize icon',
              icon: <InfoCircleOutlined style={{color: 'green'}} />,
            }}
            style={{marginBottom: 0, width: '30%'}}>
            <Form.Item
              name="Borne_Verte"
              rules={[
                {
                  required: true,
                  message: 'Champ Requis',
                },
              ]}>
              <Input
                onChange={e =>
                  UpdatemiseData('Borne_verte', e.target.value, setmise_data)
                }
              />
            </Form.Item>
          </Form.Item>
        </Row>
      </TabPane>
      <TabPane tab="Ratio/Polarite" key="2">
        <Form.Item label="Volts Apluiqés" style={{marginBottom: 0}}>
          <Form.Item
            name="Volts_Apluiqés_P1"
            rules={[{required: true, message: 'Champ Requis'}]}
            style={{display: 'inline-block', width: 'calc(50% - 8px)'}}>
            <Input
              placeholder="Position 1"
              onChange={e =>
                UpdatemiseData(
                  'Volts_apluiqés_P1',
                  e.target.value,
                  setmise_data
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
                UpdatemiseData(
                  'Volts_apluiqés_P2',
                  e.target.value,
                  setmise_data
                )
              }
            />
          </Form.Item>
        </Form.Item>
        <Form.Item label="Volts HT" style={{marginBottom: 0}}>
          <Form.Item
            name="Volts_HT_P1"
            rules={[{required: true, message: 'Champ Requis'}]}
            style={{display: 'inline-block', width: 'calc(50% - 8px)'}}>
            <Input
              placeholder="Position 1"
              onChange={e =>
                UpdatemiseData('Volts_ht_P1', e.target.value, setmise_data)
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
                UpdatemiseData('Volts_ht_P2', e.target.value, setmise_data)
              }
            />
          </Form.Item>
        </Form.Item>
        <Form.Item label="Polarité Volts" style={{marginBottom: 0}}>
          <Form.Item
            name="Polarité_Volts_P1"
            rules={[{required: true, message: 'Champ Requis'}]}
            style={{display: 'inline-block', width: 'calc(50% - 8px)'}}>
            <Input
              placeholder="Position 1"
              onChange={e =>
                UpdatemiseData(
                  'Polarité_volts_P1',
                  e.target.value,
                  setmise_data
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
                UpdatemiseData(
                  'Polarité_volts_P2',
                  e.target.value,
                  setmise_data
                )
              }
            />
          </Form.Item>
        </Form.Item>
      </TabPane>
      <TabPane tab="Induit" key="3">
        <Form.Item label="Fréquence Genératrice" style={{marginBottom: 0}}>
          <Form.Item
            name="Fréquence_Genératrice_P1"
            rules={[{required: true, message: 'Champ Requis'}]}
            style={{display: 'inline-block', width: 'calc(50% - 8px)'}}>
            <Input
              placeholder="Position 1"
              onChange={e =>
                UpdatemiseData(
                  'Fréquence_genératrice_P1',
                  e.target.value,
                  setmise_data
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
                UpdatemiseData(
                  'Fréquence_genératrice_P2',
                  e.target.value,
                  setmise_data
                )
              }
            />
          </Form.Item>
        </Form.Item>
        <Form.Item label="Réactance SKE77" style={{marginBottom: 0}}>
          <Form.Item
            name="Réactance_SKE77_P1"
            rules={[{required: true, message: 'Champ Requis'}]}
            style={{display: 'inline-block', width: 'calc(50% - 8px)'}}>
            <Input
              placeholder="Position 1"
              onChange={e =>
                UpdatemiseData(
                  'Réactance_ske77_P1',
                  e.target.value,
                  setmise_data
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
                UpdatemiseData(
                  'Réactance_ske77_P2',
                  e.target.value,
                  setmise_data
                )
              }
            />
          </Form.Item>
        </Form.Item>
        <Form.Item label="Réactance SKE17" style={{marginBottom: 0}}>
          <Form.Item
            name="Réactance_SKE17_P1"
            rules={[{required: true, message: 'Champ Requis'}]}
            style={{display: 'inline-block', width: 'calc(50% - 8px)'}}>
            <Input
              placeholder="Position 1"
              onChange={e =>
                UpdatemiseData(
                  'Réactance_ske17_P1',
                  e.target.value,
                  setmise_data
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
                UpdatemiseData(
                  'Réactance_ske17_P2',
                  e.target.value,
                  setmise_data
                )
              }
            />
          </Form.Item>
        </Form.Item>
      </TabPane>
      <TabPane tab="Perte a Vide" key="5">
        <Form.Item label="Multiplicateur Volts" style={{marginBottom: 0}}>
          <Form.Item
            name="Multiplicateur_Volts_P1"
            rules={[{required: true, message: 'Champ Requis'}]}
            style={{display: 'inline-block', width: 'calc(50% - 8px)'}}>
            <Input
              placeholder="Position 1"
              onChange={e =>
                UpdatemiseData(
                  'Multiplicateur_volts_P1',
                  e.target.value,
                  setmise_data
                )
              }
            />
          </Form.Item>
          <Form.Item
            name="Multiplicateur_Volts_P2"
            style={{
              display: 'inline-block',
              width: 'calc(50% - 8px)',
              margin: '0 8px',
            }}>
            <Input
              placeholder="Position 2"
              onChange={e =>
                UpdatemiseData(
                  'Multiplicateur_volts_P2',
                  e.target.value,
                  setmise_data
                )
              }
            />
          </Form.Item>
        </Form.Item>
        <Form.Item label="Multiplicateur Ampéres" style={{marginBottom: 0}}>
          <Form.Item
            name="Multiplicateur_Amperes_P1"
            rules={[{required: true, message: 'Champ Requis'}]}
            style={{display: 'inline-block', width: 'calc(50% - 8px)'}}>
            <Input
              placeholder="Position 1"
              onChange={e =>
                UpdatemiseData(
                  'Multiplicateur_amperes_P1',
                  e.target.value,
                  setmise_data
                )
              }
            />
          </Form.Item>
          <Form.Item
            name="Multiplicateur_Amperes_P2"
            style={{
              display: 'inline-block',
              width: 'calc(50% - 8px)',
              margin: '0 8px',
            }}>
            <Input
              placeholder="Position 2"
              onChange={e =>
                UpdatemiseData(
                  'Multiplicateur_amperes_P2',
                  e.target.value,
                  setmise_data
                )
              }
            />
          </Form.Item>
        </Form.Item>
        <Form.Item label="Perte Table" style={{marginBottom: 0}}>
          <Form.Item
            name="Perte_Table_P1"
            rules={[{required: true, message: 'Champ Requis'}]}
            style={{display: 'inline-block', width: 'calc(50% - 8px)'}}>
            <Input
              placeholder="Position 1"
              onChange={e =>
                UpdatemiseData('Perte_table_P1', e.target.value, setmise_data)
              }
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
              onChange={e =>
                UpdatemiseData('Perte_table_P2', e.target.value, setmise_data)
              }
            />
          </Form.Item>
        </Form.Item>
      </TabPane>
      <TabPane tab="RIV" key="6">
        <Form.Item label="RIV" style={{marginBottom: 0}}>
          <Form.Item
            name="Riv_P1"
            rules={[{required: true, message: 'Champ Requis'}]}
            style={{display: 'inline-block', width: 'calc(50% - 8px)'}}>
            <Input
              placeholder="Position 1"
              onChange={e =>
                UpdatemiseData('riv_P1', e.target.value, setmise_data)
              }
            />
          </Form.Item>
          <Form.Item
            name="Riv_P2"
            style={{
              display: 'inline-block',
              width: 'calc(50% - 8px)',
              margin: '0 8px',
            }}>
            <Input
              placeholder="Position 2"
              onChange={e =>
                UpdatemiseData('riv_P2', e.target.value, setmise_data)
              }
            />
          </Form.Item>
        </Form.Item>
      </TabPane>
      <TabPane tab="Perte a Charge" key="7">
        <Form.Item label="Muliplicateur Volts" style={{marginBottom: 0}}>
          <Form.Item
            name="Multiplicateur_Volts_Charge_P1"
            rules={[{required: true, message: 'Champ Requis'}]}
            style={{display: 'inline-block', width: 'calc(50% - 8px)'}}>
            <Input
              placeholder="Position 1"
              onChange={e =>
                UpdatemiseData(
                  'Multiplicateur_volts_charge_P1',
                  e.target.value,
                  setmise_data
                )
              }
            />
          </Form.Item>
          <Form.Item
            name="Multiplicateur_Volts_Charge_P2"
            style={{
              display: 'inline-block',
              width: 'calc(50% - 8px)',
              margin: '0 8px',
            }}>
            <Input
              placeholder="Position 2"
              onChange={e =>
                UpdatemiseData(
                  'Multiplicateur_volts_charge_P2',
                  e.target.value,
                  setmise_data
                )
              }
            />
          </Form.Item>
        </Form.Item>
        <Form.Item label="Mulitiplicateur Amperes" style={{marginBottom: 0}}>
          <Form.Item
            name="Muliplicateur_Amperes_Charge_P1"
            rules={[{required: true, message: 'Champ Requis'}]}
            style={{display: 'inline-block', width: 'calc(50% - 8px)'}}>
            <Input
              placeholder="Position 1"
              onChange={e =>
                UpdatemiseData(
                  'Multiplicateur_amperes_charge_P1',
                  e.target.value,
                  setmise_data
                )
              }
            />
          </Form.Item>
          <Form.Item
            name="Muliplicateur_Amperes_Charge_P2"
            style={{
              display: 'inline-block',
              width: 'calc(50% - 8px)',
              margin: '0 8px',
            }}>
            <Input
              placeholder="Position 2"
              onChange={e =>
                UpdatemiseData(
                  'Multiplicateur_amperes_charge_P2',
                  e.target.value,
                  setmise_data
                )
              }
            />
          </Form.Item>
        </Form.Item>
        <Form.Item label="Perte Table" style={{marginBottom: 0}}>
          <Form.Item
            name="Perte_Table__Charge_P1"
            rules={[{required: true, message: 'Champ Requis'}]}
            style={{display: 'inline-block', width: 'calc(50% - 8px)'}}>
            <Input
              placeholder="Position 1"
              onChange={e =>
                UpdatemiseData(
                  'Perte_table_charge_P1',
                  e.target.value,
                  setmise_data
                )
              }
            />
          </Form.Item>
          <Form.Item
            name="Perte_Table__Charge_P2"
            style={{
              display: 'inline-block',
              width: 'calc(50% - 8px)',
              margin: '0 8px',
            }}>
            <Input
              placeholder="Position 2"
              onChange={e =>
                UpdatemiseData(
                  'Perte_table_charge_P2',
                  e.target.value,
                  setmise_data
                )
              }
            />
          </Form.Item>
        </Form.Item>
        <Form.Item label="Courant de Correction" style={{marginBottom: 0}}>
          <Form.Item
            name="Courant_de_Correction_P1"
            rules={[{required: true, message: 'Champ Requis'}]}
            style={{display: 'inline-block', width: 'calc(50% - 8px)'}}>
            <Input
              placeholder="Position 1"
              onChange={e =>
                UpdatemiseData(
                  'Courant_de_correction_P1',
                  e.target.value,
                  setmise_data
                )
              }
            />
          </Form.Item>
          <Form.Item
            name="Courant_de_Correction_P2"
            style={{
              display: 'inline-block',
              width: 'calc(50% - 8px)',
              margin: '0 8px',
            }}>
            <Input
              placeholder="Position 2"
              onChange={e =>
                UpdatemiseData(
                  'Courant_de_correction_P2',
                  e.target.value,
                  setmise_data
                )
              }
            />
          </Form.Item>
        </Form.Item>
        <Form.Item label="Perte Table Total" style={{marginBottom: 0}}>
          <Form.Item
            name="Perte_Table_Totale_P1"
            rules={[{required: true, message: 'Champ Requis'}]}
            style={{display: 'inline-block', width: 'calc(50% - 8px)'}}>
            <Input
              placeholder="Position 1"
              onChange={e =>
                UpdatemiseData(
                  'Perte_table_totale_P1',
                  e.target.value,
                  setmise_data
                )
              }
            />
          </Form.Item>
          <Form.Item
            name="Perte_Table_Totale_P2"
            style={{
              display: 'inline-block',
              width: 'calc(50% - 8px)',
              margin: '0 8px',
            }}>
            <Input
              placeholder="Position 2"
              onChange={e =>
                UpdatemiseData(
                  'Perte_table_totale_P2',
                  e.target.value,
                  setmise_data
                )
              }
            />
          </Form.Item>
        </Form.Item>
        <Form.Item
          label="Courant Appliquiué Au Transfo"
          style={{marginBottom: 0}}>
          <Form.Item
            name="Courant_Appliquié_Transfo_P1"
            rules={[{required: true, message: 'Champ Requis'}]}
            style={{display: 'inline-block', width: 'calc(50% - 8px)'}}>
            <Input
              placeholder="Position 1"
              onChange={e =>
                UpdatemiseData(
                  'Courant_appliquié_transfo_P1',
                  e.target.value,
                  setmise_data
                )
              }
            />
          </Form.Item>
          <Form.Item
            name="Courant_Appliquié_Transfo_P2"
            style={{
              display: 'inline-block',
              width: 'calc(50% - 8px)',
              margin: '0 8px',
            }}>
            <Input
              placeholder="Position 2"
              onChange={e =>
                UpdatemiseData(
                  'Courant_appliquié_transfo_P2',
                  e.target.value,
                  setmise_data
                )
              }
            />
          </Form.Item>
        </Form.Item>
        <Form.Item
          label="Courant Appliqué (Appareil)"
          style={{marginBottom: 0}}>
          <Form.Item
            name="Courant_Appliqué_Appareil_P1"
            rules={[{required: true, message: 'Champ Requis'}]}
            style={{display: 'inline-block', width: 'calc(50% - 8px)'}}>
            <Input
              placeholder="Position 1"
              onChange={e =>
                UpdatemiseData(
                  'Courant_appliqué_appareil_P1',
                  e.target.value,
                  setmise_data
                )
              }
            />
          </Form.Item>
          <Form.Item
            name="Courant_Appliqué_Appareil_P2"
            style={{
              display: 'inline-block',
              width: 'calc(50% - 8px)',
              margin: '0 8px',
            }}>
            <Input
              placeholder="Position 2"
              onChange={e =>
                UpdatemiseData(
                  'Courant_appliqué_appareil_P2',
                  e.target.value,
                  setmise_data
                )
              }
            />
          </Form.Item>
        </Form.Item>
        <Form.Item label="NO Cavalier" style={{marginBottom: 0}}>
          <Form.Item
            name="No_Cavalier_P1"
            rules={[{required: true, message: 'Champ Requis'}]}
            style={{display: 'inline-block', width: 'calc(50% - 8px)'}}>
            <Input
              placeholder="Position 1"
              onChange={e =>
                UpdatemiseData('No_cavalier_P1', e.target.value, setmise_data)
              }
            />
          </Form.Item>
          <Form.Item
            name="No_Cavalier_P2"
            style={{
              display: 'inline-block',
              width: 'calc(50% - 8px)',
              margin: '0 8px',
            }}>
            <Input
              placeholder="Position 2"
              onChange={e =>
                UpdatemiseData('No_cavalier_P2', e.target.value, setmise_data)
              }
            />
          </Form.Item>
        </Form.Item>
        <Form.Item label="Perte Cavalier" style={{marginBottom: 0}}>
          <Form.Item
            name="Perte_Cavalier_P1"
            rules={[{required: true, message: 'Champ Requis'}]}
            style={{display: 'inline-block', width: 'calc(50% - 8px)'}}>
            <Input
              placeholder="Position 1"
              onChange={e =>
                UpdatemiseData(
                  'Perte_cavalier_P1',
                  e.target.value,
                  setmise_data
                )
              }
            />
          </Form.Item>
          <Form.Item
            name="Perte_Cavalier_P2"
            style={{
              display: 'inline-block',
              width: 'calc(50% - 8px)',
              margin: '0 8px',
            }}>
            <Input
              placeholder="Position 2"
              onChange={e =>
                UpdatemiseData(
                  'Perte_cavalier_P2',
                  e.target.value,
                  setmise_data
                )
              }
            />
          </Form.Item>
        </Form.Item>
      </TabPane>
    </Tabs>
  );
}

export default newTestContent;
