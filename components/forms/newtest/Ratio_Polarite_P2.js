import React, {useState, useRef, useEffect} from 'react';
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
  setNewMisePlace,
  Prise,
}) {
  const inputEl = useRef(null);
  useEffect(() => {
    if (inputEl.current) {
      inputEl.current.focus();
    }
  }, [inputEl]);
  return (
    <div className="Containertest">
      <Divider
        dashed
        orientation="left"
        style={{color: '#503662', marginBottom: '40px'}}>
        <h3>Ratio et Polarité Position 2</h3>
      </Divider>
      <div>
        {!miseenplaceok && (
          <div>
            <Row style={{justifyContent: 'center'}}>
              <Form.Item
                name="Volts_Apluiqés_P2"
                label="Tension à appliquer"
                className="show_item_input">
                <Input
                  className="ratio_form"
                  type="number"
                  ref={inputEl}
                  step="0.0001"
                  placeholder="Position 2"
                  onChange={e => {
                    UpdateData(
                      'Volts_apluiqés_P2',
                      e.target.value,
                      setNewMisePlace
                    );
                  }}
                />
              </Form.Item>
            </Row>
            <Row style={{justifyContent: 'center'}}>
              <Form.Item
                label="Tension HT théorique"
                name="Volts_HT_P2"
                className="show_item_input">
                <Input
                  type="number"
                  step="0.0001"
                  placeholder="Position 2"
                  onChange={e => {
                    UpdateData('Volts_ht_P2', e.target.value, setNewMisePlace);
                  }}
                />
              </Form.Item>
            </Row>
            <Row style={{justifyContent: 'center'}}>
              <Form.Item
                label=" Polarité théorique"
                className="show_item_input"
                name="Polarité_Volts_P2">
                <Input
                  type="number"
                  step="0.0001"
                  placeholder="Position 2"
                  onChange={e => {
                    UpdateData(
                      'Polarite_volts_P2',
                      e.target.value,
                      setNewMisePlace
                    );
                  }}
                />
              </Form.Item>
            </Row>
          </div>
        )}
        {miseenplaceok && (
          <Row
            style={{
              justifyContent: 'center',
            }}>
            <Form.Item className="show_item">
              Volte Apluiqués P2: {miseenplaceok.Ratio.Volts_apluiqés_P2}
            </Form.Item>
          </Row>
        )}
        <Row style={{justifyContent: 'center'}}>
          {Prise !== 'AP' ? (
            <Form.Item
              label=" Tension mesurée "
              name="Tension_mesurée_P2"
              className="show_item_input">
              <Input
                ref={!miseenplaceok ? null : inputEl}
                type="number"
                step="0.0001"
                placeholder="Position 1"
                onChange={e =>
                  UpdateData('Tension_mesurée_P2', e.target.value, setFinaldata)
                }
              />
            </Form.Item>
          ) : (
            <Row style={{justifyContent: 'center'}}>
              <Form.Item
                key="P1"
                style={{width: '16%', marginRight: '5px'}}
                label="Prise1"
                name="Tension_mesurée_P1_P2">
                <Input
                  ref={!miseenplaceok ? null : inputEl}
                  type="number"
                  placeholder="Prise1"
                  onChange={e =>
                    UpdateData(
                      'Tension_mesurée_P1_P2',
                      e.target.value,
                      setFinaldata
                    )
                  }
                />
              </Form.Item>
              <Form.Item
                key="P2"
                style={{width: '16%', marginRight: '5px'}}
                label="Prise2"
                name="Tension_mesurée_P2_P2">
                <Input
                  type="number"
                  placeholder="Prise2"
                  onChange={e =>
                    UpdateData(
                      'Tension_mesurée_P2_P2',
                      e.target.value,
                      setFinaldata
                    )
                  }
                />
              </Form.Item>
              <Form.Item
                key="P3"
                style={{width: '16%', marginRight: '5px'}}
                label="Prise3"
                name="Tension_mesurée_P3_P2">
                <Input
                  type="number"
                  placeholder="Prise1"
                  onChange={e =>
                    UpdateData(
                      'Tension_mesurée_P3_P2',
                      e.target.value,
                      setFinaldata
                    )
                  }
                />
              </Form.Item>
              <Form.Item
                key="P4"
                style={{width: '16%', marginRight: '5px'}}
                label="Prise4"
                name="Tension_mesurée_P4_P2">
                <Input
                  type="number"
                  placeholder="Prise4"
                  onChange={e =>
                    UpdateData(
                      'Tension_mesurée_P4_P2',
                      e.target.value,
                      setFinaldata
                    )
                  }
                />
              </Form.Item>
              <Form.Item
                key="P5"
                style={{width: '16%', marginRight: '5px'}}
                label="Prise5"
                name="Tension_mesurée_P5_P2">
                <Input
                  type="number"
                  placeholder="Prise5"
                  onChange={e =>
                    UpdateData(
                      'Tension_mesurée_P5_P2',
                      e.target.value,
                      setFinaldata
                    )
                  }
                />
              </Form.Item>
            </Row>
          )}
        </Row>
        <Row style={{justifyContent: 'center'}}>
          <Form.Item
            name="Polarité_Mesuré_P2"
            label="Polarité mesurée "
            className="show_item_input">
            <Input
              type="number"
              step="0.0001"
              placeholder="Position 2"
              onChange={e =>
                UpdateData('Polarité_mesurée_P2', e.target.value, setFinaldata)
              }
            />
          </Form.Item>
        </Row>
      </div>
    </div>
  );
}
