import React from 'react';
import {InputNumber, Form, Tabs, Input, Row, Select} from 'antd';
import {InfoCircleOutlined} from '@ant-design/icons';
const {TabPane} = Tabs;
function newTestContent({UpdatemiseData, setmise_data}) {
  const Borne_Rouge = [
    {label: '100', value: '100'},
    {label: '200', value: '200'},
    {label: '300', value: '300'},
    {label: '600', value: '600'},
  ];
  const Borne_Verte = [
    {label: '100', value: '100'},
    {label: '200', value: '200'},
    {label: '300', value: '300'},
    {label: '600', value: '600'},
  ];
  const Borne_Jaune = [
    {label: '100', value: '100'},
    {label: '200', value: '200'},
    {label: '300', value: '300'},
    {label: '600', value: '600'},
  ];
  // decharges partielle
  const SKE77 = [
    {label: '100', value: '100'},
    {label: '200', value: '200'},
    {label: '300', value: '300'},
    {label: '600', value: '600'},
  ];
  const SKE17 = [
    {label: '100', value: '100'},
    {label: '200', value: '200'},
    {label: '300', value: '300'},
    {label: '600', value: '600'},
  ];
  return (
    <Tabs tabPosition="top">
      <TabPane tab="Bornes" key="1">
        <Row justify="space-between">
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
              {/* <Input
                onChange={e =>
                  UpdatemiseData('Borne_jaune', e.target.value, setmise_data)
                }
              /> */}
              <Select
                options={Borne_Jaune}
                onChange={value => {
                  UpdatemiseData('Borne_jaune', value, setmise_data);
                }}
              />
            </Form.Item>
          </Form.Item>
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
              {/* <Select
                labelInValue={true}
                defaultValue={{value: 100}}
                style={{width: 120}}
                onChange={handleChange}>
                <Option value="100">100</Option>
                <Option value="200">200</Option>
                <Option value="300">300</Option>
              </Select> */}
              <Select
                options={Borne_Rouge}
                onChange={value => {
                  UpdatemiseData('Borne_rouge', value, setmise_data);
                }}
              />
              {/* <Input
                onChange={e =>
                  UpdatemiseData('Borne_rouge', e.target.value, setmise_data)
                }
              /> */}
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
              {/* <Input
                onChange={e =>
                  UpdatemiseData('Borne_verte', e.target.value, setmise_data)
                }
              /> */}
              <Select
                options={Borne_Verte}
                onChange={value => {
                  UpdatemiseData('Borne_verte', value, setmise_data);
                }}
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
                  'Polarite_volts_P1',
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
                  'Polarite_volts_P2',
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
            name="Riv"
            rules={[{required: true, message: 'Champ Requis'}]}>
            <Input
              placeholder="Position 1"
              onChange={e =>
                UpdatemiseData('riv', e.target.value, setmise_data)
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
            name="No_Cavalier"
            rules={[{required: true, message: 'Champ Requis'}]}
            style={{display: 'inline-block', width: 'calc(50% - 8px)'}}>
            <Input
              placeholder="Position 1"
              onChange={e =>
                UpdatemiseData('No_cavalier', e.target.value, setmise_data)
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

      <TabPane tab="Decharges Partielles" key="8">
        <Row style={{justifyContent: 'center'}}>
          <Form.Item
            label="Réactance SKE77"
            style={{display: 'inline-block', width: 'calc(50% - 8px)'}}>
            <Form.Item
              name="Réactance_SKE77_DP_P1"
              rules={[{required: true, message: 'Champ Requis'}]}>
              <Select
                defaultValue=""
                options={SKE77}
                onChange={value => {
                  UpdatemiseData('Réactance_ske77_DP_P1', value, setmise_data);
                }}
              />
            </Form.Item>
          </Form.Item>
          <Form.Item
            label="Réactance SKE17"
            style={{
              display: 'inline-block',
              width: 'calc(50% - 8px)',
              margin: '0 8px',
            }}>
            <Form.Item
              name="Réactance_SKE17_DP_P1"
              rules={[{required: true, message: 'Champ Requis'}]}>
              <Select
                defaultValue=""
                options={SKE77}
                onChange={value => {
                  UpdatemiseData('Réactance_ske17_DP_P1', value, setmise_data);
                }}
              />
            </Form.Item>
          </Form.Item>
        </Row>
      </TabPane>
    </Tabs>
  );
}

export default newTestContent;
