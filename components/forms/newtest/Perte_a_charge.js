import React from 'react';
import {Form, Input, Row, Divider} from 'antd';

export default function Perte_a_charge({
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
        {!miseenplaceok.state && (
          <div>
            <Row style={{justifyContent: 'center'}}>
              <Form.Item
                label="Muliplicateur Volts"
                style={{marginBottom: 0, width: '60%'}}>
                <Form.Item
                  name="Multiplicateur_Volts_Charge_P1"
                  rules={[{required: true, message: 'Champ Requis'}]}
                  style={{display: 'inline-block', width: 'calc(50% - 8px)'}}>
                  <Input
                    placeholder="Position 1"
                    onChange={e =>
                      UpdateData(
                        'Multiplicateur_volts_charge_P1',
                        e.target.value,
                        setFinaldata
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
                      UpdateData(
                        'Multiplicateur_volts_charge_P2',
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
                label="Mulitiplicateur Amperes"
                style={{marginBottom: 0, width: '60%'}}>
                <Form.Item
                  name="Muliplicateur_Amperes_Charge_P1"
                  rules={[{required: true, message: 'Champ Requis'}]}
                  style={{display: 'inline-block', width: 'calc(50% - 8px)'}}>
                  <Input
                    placeholder="Position 1"
                    onChange={e =>
                      UpdateData(
                        'Multiplicateur_amperes_charge_P1',
                        e.target.value,
                        setFinaldata
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
                      UpdateData(
                        'Multiplicateur_amperes_charge_P2',
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
                label="Perte Table"
                style={{marginBottom: 0, width: '60%'}}>
                <Form.Item
                  name="Perte_Table_Charge_P1"
                  rules={[{required: true, message: 'Champ Requis'}]}
                  style={{display: 'inline-block', width: 'calc(50% - 8px)'}}>
                  <Input
                    placeholder="Position 1"
                    onChange={e =>
                      UpdateData(
                        'Perte_table_charge_P1',
                        e.target.value,
                        setFinaldata
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
                    placeholder="Position 2"
                    onChange={e =>
                      UpdateData(
                        'Perte_table_charge_P2',
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
                label="Courant de Correction"
                style={{marginBottom: 0, width: '60%'}}>
                <Form.Item
                  name="Courant_de_Correction_P1"
                  rules={[{required: true, message: 'Champ Requis'}]}
                  style={{display: 'inline-block', width: 'calc(50% - 8px)'}}>
                  <Input
                    placeholder="Position 1"
                    onChange={e =>
                      UpdateData(
                        'Courant_de_correction_P1',
                        e.target.value,
                        setFinaldata
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
                      UpdateData(
                        'Courant_de_correction_P2',
                        e.target.value,
                        setFinaldata
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
                    placeholder="Position 1"
                    onChange={e =>
                      UpdateData(
                        'Courant_appliquié_transfo_P1',
                        e.target.value,
                        setFinaldata
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
                      UpdateData(
                        'Courant_appliquié_transfo_P2',
                        e.target.value,
                        setFinaldata
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
                  name="No_Cavalier_P1"
                  rules={[{required: true, message: 'Champ Requis'}]}
                  style={{display: 'inline-block', width: 'calc(50% - 8px)'}}>
                  <Input
                    placeholder="Position 1"
                    onChange={e =>
                      UpdateData('No_cavalier_P1', e.target.value, setFinaldata)
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
                      UpdateData('No_cavalier_P2', e.target.value, setFinaldata)
                    }
                  />
                </Form.Item>
              </Form.Item>
            </Row>
            <Row style={{justifyContent: 'center'}}>
              <Form.Item
                label="Perte Cavalier"
                style={{marginBottom: 0, width: '60%'}}>
                <Form.Item
                  name="Perte_Cavalier_P1"
                  rules={[{required: true, message: 'Champ Requis'}]}
                  style={{display: 'inline-block', width: 'calc(50% - 8px)'}}>
                  <Input
                    placeholder="Position 1"
                    onChange={e =>
                      UpdateData(
                        'Perte_cavalier_P1',
                        e.target.value,
                        setFinaldata
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
                      UpdateData(
                        'Perte_cavalier_P2',
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
                label="Resistance HT "
                style={{marginBottom: 0, width: '60%'}}>
                <Form.Item
                  name="Resistance_HT_P1"
                  rules={[{required: true, message: 'Champ Requis'}]}
                  style={{display: 'inline-block', width: 'calc(50% - 8px)'}}>
                  <Input
                    placeholder="Position 1"
                    onChange={e =>
                      UpdateData(
                        'Resistance_ht_P1',
                        e.target.value,
                        setFinaldata
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
                    placeholder="Position 2"
                    onChange={e =>
                      UpdateData(
                        'Resistance_ht_P2',
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
                label="Resistance BT"
                style={{marginBottom: 0, width: '60%'}}>
                <Form.Item
                  name="Resistance_BT_P1"
                  rules={[{required: true, message: 'Champ Requis'}]}
                  style={{display: 'inline-block', width: 'calc(50% - 8px)'}}>
                  <Input
                    placeholder="Position 1"
                    onChange={e =>
                      UpdateData(
                        'Resistance_bt_P1',
                        e.target.value,
                        setFinaldata
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
                    placeholder="Position 2"
                    onChange={e =>
                      UpdateData(
                        'Resistance_bt_P2',
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
            label="Perte A Charge Mesuré (W)"
            style={{marginBottom: 0, width: '60%'}}>
            <Form.Item
              name="Perte_Charge_Mesuré_P1"
              rules={[{required: true, message: 'Champ Requis'}]}
              style={{display: 'inline-block', width: 'calc(50% - 8px)'}}>
              <Input
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
