import React, {useRef, useEffect, useState} from 'react';
import {Form, Input, Row, Divider, Select, Switch} from 'antd';

export default function Perte_a_charge({
  UpdateData,
  miseenplaceok,
  setFinaldata,
  setNewMisePlace,
}) {
  const [resistance_P2, setresistance_P2] = useState(false);
  const inputEl = useRef(null);
  useEffect(() => {
    if (inputEl.current) {
      inputEl.current.focus();
    }
  }, [inputEl]);
  const Multiplicateur_Volts = [
    {label: 0.4, value: 0.4},
    {label: 1, value: 1},
    {label: 2, value: 2},
    {label: 4, value: 4},
    {label: 8, value: 8},
    {label: 16, value: 16},
    {label: 24, value: 24},
    {label: 40, value: 40},
    {label: 48, value: 48},
  ];
  const Multiplicateur_Amperes = [
    {label: 1, value: 1},
    {label: 2, value: 2},
    {label: 5, value: 5},
    {label: 10, value: 10},
    {label: 20, value: 20},
  ];
  const NO_Cavalier = [
    {label: '27', value: '27'},
    {label: '38', value: '38'},
    {label: '39', value: '39'},
    {label: '37 + sfils', value: '37 + sfils'},
    {label: '38 + sfils', value: '38 + sfils'},
    {label: '39 + sfils', value: '39 + sfils'},
  ];
  return (
    <div className="Containertest">
      <Divider
        dashed
        orientation="left"
        style={{color: '#34b1ab', marginBottom: '40px'}}>
        <h3>Perte A Charge Position 2</h3>{' '}
      </Divider>
      <div>
        <Row style={{justifyContent: 'center'}}>
          <Form.Item className="show_item">
            Courant Appliqué Appareil P2 : 20
          </Form.Item>
        </Row>
        {!miseenplaceok && (
          <div>
            <Row style={{justifyContent: 'center'}}>
              <Form.Item
                label="Muliplicateur Volts"
                name="Multiplicateur_Volts_Charge_P2"
                className="show_item_input">
                <Select
                  placeholder="Muliplicateur Volts"
                  showSearch
                  initialvalues=""
                  ref={inputEl}
                  tabIndex={1}
                  options={Multiplicateur_Volts}
                  onChange={value =>
                    UpdateData(
                      'Multiplicateur_volts_charge_P2',
                      value,
                      setNewMisePlace
                    )
                  }
                />
              </Form.Item>
            </Row>
            <Row style={{justifyContent: 'center'}}>
              <Form.Item
                label="Mulitiplicateur Amperes"
                name="Muliplicateur_Amperes_Charge_P2"
                className="show_item_input">
                <Select
                  placeholder="Muliplicateur Amperes"
                  showSearch
                  initialvalues=""
                  tabIndex={2}
                  options={Multiplicateur_Amperes}
                  onChange={value =>
                    UpdateData(
                      'Multiplicateur_amperes_charge_P2',
                      value,
                      setNewMisePlace
                    )
                  }
                />
              </Form.Item>
            </Row>
            <Row style={{justifyContent: 'center'}}>
              <Form.Item
                label="Perte Table"
                name="Perte_Table_Charge_P2"
                className="show_item_input">
                <Input
                  type="number"
                  tabIndex={3}
                  step="0.0001"
                  placeholder="Position 2"
                  onChange={e =>
                    UpdateData(
                      'Perte_table_charge_P2',
                      e.target.value,
                      setNewMisePlace
                    )
                  }
                />
              </Form.Item>
            </Row>
            <Row style={{justifyContent: 'center'}}>
              <Form.Item
                label="Courant de Correction"
                name="Courant_de_Correction_P2"
                className="show_item_input">
                <Input
                  type="number"
                  tabIndex={4}
                  step="0.0001"
                  placeholder="Position 2"
                  onChange={e =>
                    UpdateData(
                      'Courant_de_correction_P2',
                      e.target.value,
                      setNewMisePlace
                    )
                  }
                />
              </Form.Item>
            </Row>
            <Row style={{justifyContent: 'center'}}>
              <Form.Item
                className="show_item"
                style={{
                  margin: '0 8px',
                }}>
                Pertes table totales P2 (W) : 20 W
              </Form.Item>
            </Row>
            <Row style={{justifyContent: 'center'}}>
              <Form.Item
                label="Courant Appliquiué Au Transfo"
                name="Courant_Appliquié_Transfo_P2"
                className="show_item_input">
                <Input
                  type="number"
                  tabIndex={5}
                  step="0.0001"
                  placeholder="Position 2"
                  onChange={e =>
                    UpdateData(
                      'Courant_appliquié_transfo_P2',
                      e.target.value,
                      setNewMisePlace
                    )
                  }
                />
              </Form.Item>
            </Row>
            <Row style={{justifyContent: 'center'}}>
              <Form.Item className="show_item">
                Courant Appliqué P2 (Appareil) : 20
              </Form.Item>
            </Row>

            <Row style={{justifyContent: 'center'}}>
              <Form.Item className="show_item">
                Pertes Cavalier P2 : 30
              </Form.Item>
            </Row>

            <Row style={{justifyContent: 'center'}}>
              <Form.Item
                name="Resistance_Switch_P2"
                style={{marginBottom: 0, width: '70%'}}>
                <Switch
                  checked={resistance_P2}
                  checkedChildren="Résistances"
                  unCheckedChildren="Résistances"
                  onChange={() => setresistance_P2(!resistance_P2)}
                />
              </Form.Item>
            </Row>
            {resistance_P2 && (
              <div>
                <Row style={{justifyContent: 'center'}}>
                  <Form.Item
                    label="Resistance HT "
                    name="Resistance_HT_P2"
                    className="show_item_input">
                    <Input
                      type="number"
                      tabIndex={6}
                      step="0.0001"
                      placeholder="Position 2"
                      onChange={e =>
                        UpdateData(
                          'Resistance_ht_P2',
                          e.target.value,
                          setNewMisePlace
                        )
                      }
                    />
                  </Form.Item>
                </Row>
                <Row style={{justifyContent: 'center'}}>
                  <Form.Item
                    label="Resistance BT"
                    name="Resistance_BT_P2"
                    className="show_item_input">
                    <Input
                      type="number"
                      tabIndex={7}
                      step="0.0000001"
                      placeholder="Position 2"
                      onChange={e =>
                        UpdateData(
                          'Resistance_bt_P2',
                          e.target.value,
                          setNewMisePlace
                        )
                      }
                    />
                  </Form.Item>
                </Row>
              </div>
            )}
          </div>
        )}
        {miseenplaceok && (
          <div>
            <Row style={{justifyContent: 'center'}}>
              <Form.Item className="show_item">
                Multiplicateur Volts :{' '}
                {miseenplaceok.Perte_a_Charge.Multiplicateur_volts_charge_P2}
              </Form.Item>
            </Row>
            <Row style={{justifyContent: 'center'}}>
              <Form.Item className="show_item">
                Multiplicateur Ampéres :{' '}
                {miseenplaceok.Perte_a_Charge.Multiplicateur_amperes_charge_P2}
              </Form.Item>
            </Row>
          </div>
        )}
        <Row style={{justifyContent: 'center'}}>
          <Form.Item
            label="Perte A Charge Mesuré (W)"
            name="Perte_Charge_Mesuré_P2"
            className="show_item_input">
            <Input
              type="number"
              tabIndex={8}
              ref={!miseenplaceok ? null : inputEl}
              step="0.0001"
              placeholder="Position 2"
              onChange={e =>
                UpdateData(
                  'Perte_charge_mesuré_P2',
                  e.target.value,
                  setFinaldata
                )
              }
            />
          </Form.Item>
        </Row>
        <Row style={{justifyContent: 'center'}}>
          <Form.Item
            label="Impédance Mesuré"
            name="Impédance_Mesuré_P2"
            className="show_item_input">
            <Input
              type="number"
              tabIndex={9}
              step="0.0001"
              placeholder="Position 2"
              onChange={e =>
                UpdateData('Impédance_mesuré_P2', e.target.value, setFinaldata)
              }
            />
          </Form.Item>
        </Row>
      </div>
    </div>
  );
}
