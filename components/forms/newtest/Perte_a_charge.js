import React from 'react';
import {Form, Input} from 'antd';

export default function Perte_a_charge({UpdateData, miseenplaceok}) {
  return (
    <div>
      {!miseenplaceok && (
        <div>
          Affichage : courant appliquie
          <Form.Item label="Muliplicateur Volts" style={{marginBottom: 0}}>
            <Form.Item
              name="Multiplicateur_Volts_Charge_P1"
              rules={[{required: true, message: 'Champ Requis'}]}
              style={{display: 'inline-block', width: 'calc(50% - 8px)'}}>
              <Input
                placeholder="Position 1"
                onChange={e =>
                  UpdateData('Multiplicateur_volts_charge_P1', e.target.value)
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
                  UpdateData('Multiplicateur_volts_charge_P2', e.target.value)
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
                  UpdateData('Multiplicateur_amperes_charge_P1', e.target.value)
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
                  UpdateData('Multiplicateur_amperes_charge_P2', e.target.value)
                }
              />
            </Form.Item>
          </Form.Item>
          <Form.Item label="Perte Table" style={{marginBottom: 0}}>
            <Form.Item
              name="Perte_Table_Charge_P1"
              rules={[{required: true, message: 'Champ Requis'}]}
              style={{display: 'inline-block', width: 'calc(50% - 8px)'}}>
              <Input
                placeholder="Position 1"
                onChange={e =>
                  UpdateData('Perte_table_charge_P1', e.target.value)
                }
              />
            </Form.Item>
            <Form.Item
              name="Perte_Table_Charge_P2"
              style={{
                display: 'inline-block',
                width: 'calc(50% - 8px)',
                margin: '0 8px',
              }}>
              <Input
                placeholder="Position 2"
                onChange={e =>
                  UpdateData('Perte_table_charge_P2', e.target.value)
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
                  UpdateData('Courant_de_correction_P1', e.target.value)
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
                  UpdateData('Courant_de_correction_P2', e.target.value)
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
                  UpdateData('Perte_table_totale_P1', e.target.value)
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
                  UpdateData('Perte_table_totale_P2', e.target.value)
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
                  UpdateData('Courant_appliquié_transfo_P1', e.target.value)
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
                  UpdateData('Courant_appliquié_transfo_P2', e.target.value)
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
                  UpdateData('Courant_appliqué_appareil_P1', e.target.value)
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
                  UpdateData('Courant_appliqué_appareil_P2', e.target.value)
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
                onChange={e => UpdateData('No_cavalier_P1', e.target.value)}
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
                onChange={e => UpdateData('No_cavalier_P2', e.target.value)}
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
                onChange={e => UpdateData('Perte_cavalier_P1', e.target.value)}
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
                onChange={e => UpdateData('Perte_cavalier_P2', e.target.value)}
              />
            </Form.Item>
          </Form.Item>
          <Form.Item label="Resistance HT " style={{marginBottom: 0}}>
            <Form.Item
              name="Resistance_HT_P1"
              rules={[{required: true, message: 'Champ Requis'}]}
              style={{display: 'inline-block', width: 'calc(50% - 8px)'}}>
              <Input
                placeholder="Position 1"
                onChange={e => UpdateData('Resistance_ht_P1', e.target.value)}
              />
            </Form.Item>
            <Form.Item
              name="Resistance_HT_P2"
              style={{
                display: 'inline-block',
                width: 'calc(50% - 8px)',
                margin: '0 8px',
              }}>
              <Input
                placeholder="Position 2"
                onChange={e => UpdateData('Resistance_ht_P2', e.target.value)}
              />
            </Form.Item>
          </Form.Item>
          <Form.Item label="Resistance BT" style={{marginBottom: 0}}>
            <Form.Item
              name="Resistance_BT_P1"
              rules={[{required: true, message: 'Champ Requis'}]}
              style={{display: 'inline-block', width: 'calc(50% - 8px)'}}>
              <Input
                placeholder="Position 1"
                onChange={e => UpdateData('Resistance_bt_P1', e.target.value)}
              />
            </Form.Item>
            <Form.Item
              name="Resistance_BT_P2"
              style={{
                display: 'inline-block',
                width: 'calc(50% - 8px)',
                margin: '0 8px',
              }}>
              <Input
                placeholder="Position 2"
                onChange={e => UpdateData('Resistance_bt_P2', e.target.value)}
              />
            </Form.Item>
          </Form.Item>
        </div>
      )}

      <Form.Item label="Perte A Charge Mesuré (W)" style={{marginBottom: 0}}>
        <Form.Item
          name="Perte_Charge_Mesuré_P1"
          rules={[{required: true, message: 'Champ Requis'}]}
          style={{display: 'inline-block', width: 'calc(50% - 8px)'}}>
          <Input
            placeholder="Position 1"
            onChange={e => UpdateData('Perte_charge_mesuré_P1', e.target.value)}
          />
        </Form.Item>
        <Form.Item
          name="Perte_Charge_Mesuré_P2"
          style={{
            display: 'inline-block',
            width: 'calc(50% - 8px)',
            margin: '0 8px',
          }}>
          <Input
            placeholder="Position 2"
            onChange={e => UpdateData('Perte_charge_mesuré_P2', e.target.value)}
          />
        </Form.Item>
      </Form.Item>
      <Form.Item label="Impédance Mesuré" style={{marginBottom: 0}}>
        <Form.Item
          name="Impédance_Mesuré_P1"
          rules={[{required: true, message: 'Champ Requis'}]}
          style={{display: 'inline-block', width: 'calc(50% - 8px)'}}>
          <Input
            placeholder="Position 1"
            onChange={e => UpdateData('Impédance_mesuré_P1', e.target.value)}
          />
        </Form.Item>
        <Form.Item
          name="Impédance_Mesuré_P2"
          style={{
            display: 'inline-block',
            width: 'calc(50% - 8px)',
            margin: '0 8px',
          }}>
          <Input
            placeholder="Position 2"
            onChange={e => UpdateData('Impédance_mesuré_P2', e.target.value)}
          />
        </Form.Item>
      </Form.Item>
    </div>
  );
}
