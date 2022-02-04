import React, {useRef, useEffect} from 'react';
import {Form, Input, Row, Divider, Select} from 'antd';

export default function Perte_a_charge({
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
    {label: '38 + sfils', value: '38 + sfils'},
    {label: '38 + sfils', value: '38 + sfils'},
    {label: '38 + sfils', value: '38 + sfils'},
  ];
  return (
    <div className="Containertest">
      <Divider
        dashed
        orientation="left"
        style={{color: '#34b1ab', marginBottom: '40px'}}>
        <h3>Perte A Charge</h3>{' '}
      </Divider>
      <div>
        <Row style={{justifyContent: 'center'}}>
          <Form.Item
            style={{
              marginBottom: 0,
              width: '70%',
            }}>
            <Form.Item className="show_item">
              Courant Appliqué Appareil P1 : 20
            </Form.Item>
            <Form.Item
              className="show_item"
              style={{
                margin: '0 8px',
              }}>
              Courant Appliqué Appareil P2 : 20
            </Form.Item>
          </Form.Item>
        </Row>
        {!miseenplaceok && (
          <div>
            <Row style={{justifyContent: 'center'}}>
              <Form.Item
                label="Muliplicateur Volts"
                style={{marginBottom: 0, width: '60%'}}>
                <Form.Item
                  name="Multiplicateur_Volts_Charge_P1"
                  rules={[{required: true, message: 'Champ Requis'}]}
                  style={{display: 'inline-block', width: 'calc(50% - 8px)'}}>
                  <Select
                    ref={inputEl}
                    tabIndex={1}
                    defaultValue=""
                    options={Multiplicateur_Volts}
                    onChange={value =>
                      UpdateData(
                        'Multiplicateur_volts_charge_P1',
                        value,
                        setNewMisePlace
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
                  <Select
                    defaultValue=""
                    tabIndex={11}
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
              </Form.Item>
            </Row>
            <Row style={{justifyContent: 'center'}}>
              <Form.Item
                label="Mulitiplicateur Amperes"
                style={{marginBottom: 0, width: '60%'}}>
                <Form.Item
                  name="Muliplicateur_Amperes_Charge_P1"
                  rules={[{required: true, message: 'Champ Requis'}]}
                  style={{display: 'inline-block', width: 'calc(50% - 8px)'}}>
                  <Select
                    defaultValue=""
                    tabIndex={2}
                    options={Multiplicateur_Amperes}
                    onChange={value =>
                      UpdateData(
                        'Multiplicateur_amperes_charge_P1',
                        value,
                        setNewMisePlace
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
                  <Select
                    defaultValue=""
                    tabIndex={12}
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
              </Form.Item>
            </Row>
            <Row style={{justifyContent: 'center'}}>
              <Form.Item
                label="Perte Table"
                style={{marginBottom: 0, width: '60%'}}>
                <Form.Item
                  name="Perte_Table_Charge_P1"
                  rules={[{required: true, message: 'Champ Requis'}]}
                  style={{display: 'inline-block', width: 'calc(50% - 8px)'}}>
                  <Input
                    type="number"
                    tabIndex={3}
                    min={10}
                    max={1000}
                    step="0.0001"
                    placeholder="Position 1"
                    onChange={e =>
                      UpdateData(
                        'Perte_table_charge_P1',
                        e.target.value,
                        setNewMisePlace
                      )
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
                    type="number"
                    tabIndex={13}
                    min={10}
                    max={1000}
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
              </Form.Item>
            </Row>
            <Row style={{justifyContent: 'center'}}>
              <Form.Item
                label="Courant de Correction"
                style={{marginBottom: 0, width: '60%'}}>
                <Form.Item
                  name="Courant_de_Correction_P1"
                  rules={[{required: true, message: 'Champ Requis'}]}
                  style={{display: 'inline-block', width: 'calc(50% - 8px)'}}>
                  <Input
                    type="number"
                    tabIndex={4}
                    min={10}
                    max={1000}
                    step="0.0001"
                    placeholder="Position 1"
                    onChange={e =>
                      UpdateData(
                        'Courant_de_correction_P1',
                        e.target.value,
                        setNewMisePlace
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
                    type="number"
                    tabIndex={14}
                    min={10}
                    max={1000}
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
              </Form.Item>
            </Row>
            <Row style={{justifyContent: 'center'}}>
              <Form.Item style={{marginBottom: 0, width: '70%'}}>
                <Form.Item className="show_item">
                  Pertes table totales P1 (W) : 20 W
                </Form.Item>
                <Form.Item
                  className="show_item"
                  style={{
                    margin: '0 8px',
                  }}>
                  Pertes table totales P2 (W) : 20 W
                </Form.Item>
              </Form.Item>
            </Row>
            <Row style={{justifyContent: 'center'}}>
              <Form.Item
                label="Courant Appliquiué Au Transfo"
                style={{marginBottom: 0, width: '60%'}}>
                <Form.Item
                  name="Courant_Appliquié_Transfo_P1"
                  rules={[{required: true, message: 'Champ Requis'}]}
                  style={{display: 'inline-block', width: 'calc(50% - 8px)'}}>
                  <Input
                    type="number"
                    tabIndex={5}
                    min={10}
                    max={1000}
                    step="0.0001"
                    placeholder="Position 1"
                    onChange={e =>
                      UpdateData(
                        'Courant_appliquié_transfo_P1',
                        e.target.value,
                        setNewMisePlace
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
                    type="number"
                    tabIndex={15}
                    min={10}
                    max={1000}
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
              </Form.Item>
            </Row>
            <Row style={{justifyContent: 'center'}}>
              <Form.Item style={{marginBottom: 0, width: '70%'}}>
                <Form.Item className="show_item">
                  Courant Appliqué P1 (Appareil) : 20
                </Form.Item>
                <Form.Item
                  className="show_item"
                  style={{
                    margin: '0 8px',
                  }}>
                  Courant Appliqué P2 (Appareil) : 20
                </Form.Item>
              </Form.Item>
            </Row>
            <Row style={{justifyContent: 'center'}}>
              <Form.Item
                label="NO Cavalier"
                style={{marginBottom: 0, width: '60%'}}>
                <Form.Item
                  name="No_Cavalier"
                  rules={[{required: true, message: 'Champ Requis'}]}
                  style={{display: 'inline-block', width: 'calc(50% - 8px)'}}>
                  <Select
                    defaultValue=""
                    tabIndex={6}
                    options={NO_Cavalier}
                    onChange={value =>
                      UpdateData('No_cavalier', value, setNewMisePlace)
                    }
                  />
                </Form.Item>
                <Form.Item
                  style={{
                    display: 'inline-block',
                    width: 'calc(50% - 8px)',
                    margin: '0 8px',
                  }}></Form.Item>
              </Form.Item>
            </Row>
            <Row style={{justifyContent: 'center'}}>
              <Form.Item style={{marginBottom: 0, width: '70%'}}>
                <Form.Item className="show_item">
                  Pertes Cavalier P1 : 20
                </Form.Item>
                <Form.Item
                  className="show_item"
                  style={{
                    margin: '0 8px',
                  }}>
                  Pertes Cavalier P2 : 30
                </Form.Item>
              </Form.Item>
            </Row>
            <Row style={{justifyContent: 'center'}}>
              <Form.Item
                label="Resistance HT "
                style={{marginBottom: 0, width: '60%'}}>
                <Form.Item
                  name="Resistance_HT_P1"
                  rules={[{required: true, message: 'Champ Requis'}]}
                  style={{display: 'inline-block', width: 'calc(50% - 8px)'}}>
                  <Input
                    type="number"
                    tabIndex={7}
                    min={10}
                    max={1000}
                    step="0.0001"
                    placeholder="Position 1"
                    onChange={e =>
                      UpdateData(
                        'Resistance_ht_P1',
                        e.target.value,
                        setNewMisePlace
                      )
                    }
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
                    type="number"
                    tabIndex={16}
                    min={10}
                    max={1000}
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
              </Form.Item>
            </Row>
            <Row style={{justifyContent: 'center'}}>
              <Form.Item
                label="Resistance BT"
                style={{marginBottom: 0, width: '60%'}}>
                <Form.Item
                  name="Resistance_BT_P1"
                  rules={[{required: true, message: 'Champ Requis'}]}
                  style={{display: 'inline-block', width: 'calc(50% - 8px)'}}>
                  <Input
                    type="number"
                    tabIndex={8}
                    min={10}
                    max={1000}
                    step="0.0000001"
                    placeholder="Position 1"
                    onChange={e =>
                      UpdateData(
                        'Resistance_bt_P1',
                        e.target.value,
                        setNewMisePlace
                      )
                    }
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
                    type="number"
                    tabIndex={17}
                    min={10}
                    max={1000}
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
              </Form.Item>
            </Row>
          </div>
        )}
        {miseenplaceok && (
          <div>
            <Row style={{justifyContent: 'center'}}>
              <Form.Item style={{marginBottom: 0, width: '70%'}}>
                <Form.Item className="show_item">
                  Multiplicateur Volts :{' '}
                  {miseenplaceok.Perte_a_Charge.Multiplicateur_volts_charge_P1}
                </Form.Item>
                <Form.Item
                  className="show_item"
                  style={{
                    margin: '0 8px',
                  }}>
                  Multiplicateur Volts :{' '}
                  {miseenplaceok.Perte_a_Charge.Multiplicateur_volts_charge_P2}
                </Form.Item>
              </Form.Item>
            </Row>
            <Row style={{justifyContent: 'center'}}>
              <Form.Item style={{marginBottom: 0, width: '70%'}}>
                <Form.Item className="show_item">
                  Multiplicateur Ampéres :{' '}
                  {
                    miseenplaceok.Perte_a_Charge
                      .Multiplicateur_amperes_charge_P1
                  }
                </Form.Item>
                <Form.Item
                  className="show_item"
                  style={{
                    margin: '0 8px',
                  }}>
                  Multiplicateur Ampéres :{' '}
                  {
                    miseenplaceok.Perte_a_Charge
                      .Multiplicateur_amperes_charge_P2
                  }
                </Form.Item>
              </Form.Item>
            </Row>
          </div>
        )}
        <Row style={{justifyContent: 'center'}}>
          <Form.Item
            label="Perte A Charge Mesuré (W)"
            style={{marginBottom: 0, width: '60%'}}>
            <Form.Item
              name="Perte_Charge_Mesuré_P1"
              rules={[{required: true, message: 'Champ Requis'}]}
              style={{display: 'inline-block', width: 'calc(50% - 8px)'}}>
              <Input
                ref={!miseenplaceok ? null : inputEl}
                tabIndex={9}
                type="number"
                min={10}
                max={1000}
                step="0.0001"
                placeholder="Position 1"
                onChange={e =>
                  UpdateData(
                    'Perte_charge_mesuré_P1',
                    e.target.value,
                    setFinaldata
                  )
                }
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
                type="number"
                tabIndex={18}
                min={10}
                max={1000}
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
          </Form.Item>
        </Row>
        <Row style={{justifyContent: 'center'}}>
          <Form.Item
            label="Impédance Mesuré"
            style={{marginBottom: 0, width: '60%'}}>
            <Form.Item
              name="Impédance_Mesuré_P1"
              rules={[{required: true, message: 'Champ Requis'}]}
              style={{display: 'inline-block', width: 'calc(50% - 8px)'}}>
              <Input
                type="number"
                tabIndex={10}
                min={10}
                max={1000}
                step="0.0001"
                placeholder="Position 1"
                onChange={e =>
                  UpdateData(
                    'Impédance_mesuré_P1',
                    e.target.value,
                    setFinaldata
                  )
                }
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
                type="number"
                tabIndex={19}
                min={10}
                max={1000}
                step="0.0001"
                placeholder="Position 2"
                onChange={e =>
                  UpdateData(
                    'Impédance_mesuré_P2',
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
