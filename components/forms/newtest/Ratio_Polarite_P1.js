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
        style={{color: '#34b1ab', marginBottom: '40px'}}>
        <h3>Ratio et Polarité Position 1</h3>
      </Divider>
      <div>
        {!miseenplaceok && (
          <div>
            <Row style={{justifyContent: 'center'}}>
              <Form.Item
                label="Tension à appliquer"
                name="Volts_Apluiqés_P1"
                rules={[{required: true, message: 'Champ Requis'}]}
                className="show_item_input">
                <Input
                  type="number"
                  tabIndex={1}
                  ref={inputEl}
                  min={10}
                  max={1000}
                  step="0.0001"
                  placeholder="Position 1"
                  onChange={e => {
                    UpdateData(
                      'Volts_apluiqés_P1',
                      e.target.value,
                      setNewMisePlace
                    );
                  }}
                />
              </Form.Item>
            </Row>
            <Row style={{justifyContent: 'center'}}>
              <Form.Item
                name="Volts_HT_P1"
                label="Tension HT théorique"
                rules={[{required: true, message: 'Champ Requis'}]}
                className="show_item_input">
                <Input
                  type="number"
                  tabIndex={2}
                  min={10}
                  max={1000}
                  step="0.0001"
                  placeholder="Position 1"
                  onChange={e => {
                    UpdateData('Volts_ht_P1', e.target.value, setNewMisePlace);
                  }}
                />
              </Form.Item>
            </Row>
            <Row style={{justifyContent: 'center'}}>
              <Form.Item
                label=" Polarité théorique"
                name="Polarité_Volts_P1"
                rules={[{required: true, message: 'Champ Requis'}]}
                className="show_item_input">
                <Input
                  type="number"
                  tabIndex={3}
                  min={10}
                  max={1000}
                  step="0.0001"
                  placeholder="Position 1"
                  onChange={e => {
                    UpdateData(
                      'Polarite_volts_P1',
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
              Volte Apluiqués P1: {miseenplaceok.Ratio.Volts_apluiqés_P1}
            </Form.Item>
          </Row>
        )}
        <Row style={{justifyContent: 'center'}}>
          {Prise == 'AP' ? (
            <Form.Item
              label=" Tension mesurée "
              name="Tension_HT_Mesuré"
              rules={[{required: true, message: 'Champ Requis'}]}
              className="show_item_input">
              <Input
                ref={!miseenplaceok ? null : inputEl}
                tabIndex={4}
                type="number"
                min={10}
                max={1000}
                step="0.0001"
                placeholder="Position 1"
                onChange={e =>
                  UpdateData('Tension_ht_mesuré', e.target.value, setFinaldata)
                }
              />
            </Form.Item>
          ) : (
            <Row style={{justifyContent: 'center'}}>
              <Form.Item
                key="P1"
                style={{width: '16%', marginRight: '5px'}}
                label="Prise1"
                name="Tension_HT_Mesuré_P1">
                <Input
                  ref={!miseenplaceok ? null : inputEl}
                  type="number"
                  tabIndex={4}
                  min={10}
                  max={1000}
                  placeholder="Prise1"
                  onChange={e =>
                    UpdateData(
                      'Tension_ht_mesuré_P1',
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
                name="Tension_HT_Mesuré_P2">
                <Input
                  type="number"
                  tabIndex={5}
                  min={10}
                  max={1000}
                  placeholder="Prise2"
                  onChange={e =>
                    UpdateData(
                      'Tension_ht_mesuré_P2',
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
                name="Tension_HT_Mesuré_P3">
                <Input
                  type="number"
                  tabIndex={6}
                  min={10}
                  max={1000}
                  placeholder="Prise1"
                  onChange={e =>
                    UpdateData(
                      'Tension_ht_mesuré_P3',
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
                name="Tension_HT_Mesuré_P4">
                <Input
                  type="number"
                  tabIndex={7}
                  min={10}
                  max={1000}
                  placeholder="Prise4"
                  onChange={e =>
                    UpdateData(
                      'Tension_ht_mesuré_P4',
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
                name="Tension_HT_Mesuré_P5">
                <Input
                  type="number"
                  tabIndex={8}
                  min={10}
                  max={1000}
                  placeholder="Prise5"
                  onChange={e =>
                    UpdateData(
                      'Tension_ht_mesuré_P5',
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
            label="Polarité mesurée "
            name="Polarité_V_Mesuré_P1"
            rules={[{required: true, message: 'Champ Requis'}]}
            className="show_item_input">
            <Input
              type="number"
              tabIndex={Prise == 'AP' ? 5 : 9}
              min={10}
              max={1000}
              step="0.0001"
              placeholder="Position 1"
              onChange={e =>
                UpdateData(
                  'Polarite_volts_Mesure_P1',
                  e.target.value,
                  setFinaldata
                )
              }
            />
          </Form.Item>
        </Row>
      </div>
    </div>
  );
}
