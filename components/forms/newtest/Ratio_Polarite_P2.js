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
                  tabIndex={6}
                  min={10}
                  max={1000}
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
                  tabIndex={7}
                  min={10}
                  max={1000}
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
                  tabIndex={8}
                  min={10}
                  max={1000}
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
          <Form.Item
            name="Polarité_V_Mesuré_P2"
            label="Polarité mesurée "
            className="show_item_input">
            <Input
              type="number"
              tabIndex={10}
              min={10}
              max={1000}
              step="0.0001"
              placeholder="Position 2"
              onChange={e =>
                UpdateData(
                  'Polarite_volts_Mesure_P2',
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
