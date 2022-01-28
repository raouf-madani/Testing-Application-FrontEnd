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
        <h3>Ratio et Polarité</h3>
      </Divider>
      <div>
        {!miseenplaceok && (
          <div>
            <Row style={{justifyContent: 'center'}}>
              <Form.Item
                label="Volts Apluiqés"
                style={{marginBottom: 0, width: '60%'}}>
                <Form.Item
                  name="Volts_Apluiqés_P1"
                  rules={[{required: true, message: 'Champ Requis'}]}
                  style={{display: 'inline-block', width: 'calc(50% - 8px)'}}>
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
                        setFinaldata
                      );
                      UpdateData(
                        'Volts_apluiqés_P1',
                        e.target.value,
                        setNewMisePlace
                      );
                    }}
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
                      UpdateData(
                        'Volts_apluiqés_P2',
                        e.target.value,
                        setFinaldata
                      );
                    }}
                  />
                </Form.Item>
              </Form.Item>
            </Row>
            <Row style={{justifyContent: 'center'}}>
              <Form.Item
                label="Volts HT"
                style={{marginBottom: 0, width: '60%'}}>
                <Form.Item
                  name="Volts_HT_P1"
                  rules={[{required: true, message: 'Champ Requis'}]}
                  style={{display: 'inline-block', width: 'calc(50% - 8px)'}}>
                  <Input
                    type="number"
                    tabIndex={2}
                    min={10}
                    max={1000}
                    step="0.0001"
                    placeholder="Position 1"
                    onChange={e => {
                      UpdateData('Volts_ht_P1', e.target.value, setFinaldata);
                      UpdateData(
                        'Volts_ht_P1',
                        e.target.value,
                        setNewMisePlace
                      );
                    }}
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
                    type="number"
                    tabIndex={7}
                    min={10}
                    max={1000}
                    step="0.0001"
                    placeholder="Position 2"
                    onChange={e => {
                      UpdateData('Volts_ht_P2', e.target.value, setFinaldata);
                      UpdateData(
                        'Volts_ht_P2',
                        e.target.value,
                        setNewMisePlace
                      );
                    }}
                  />
                </Form.Item>
              </Form.Item>
            </Row>
            <Row style={{justifyContent: 'center'}}>
              <Form.Item
                label="Polarité Volts"
                style={{marginBottom: 0, width: '60%'}}>
                <Form.Item
                  name="Polarité_Volts_P1"
                  rules={[{required: true, message: 'Champ Requis'}]}
                  style={{display: 'inline-block', width: 'calc(50% - 8px)'}}>
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
                      UpdateData(
                        'Polarite_volts_P1',
                        e.target.value,
                        setFinaldata
                      );
                    }}
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
                      UpdateData(
                        'Polarite_volts_P2',
                        e.target.value,
                        setFinaldata
                      );
                    }}
                  />
                </Form.Item>
              </Form.Item>
            </Row>
          </div>
        )}
        {miseenplaceok && (
          <Row
            style={{
              justifyContent: 'center',
            }}>
            <Form.Item
              style={{
                width: '70%',
                marginBottom: '5px',
              }}>
              <Form.Item className="show_item">
                Volte Apluiqués P1: {miseenplaceok.Ratio.Volts_apluiqés_P1}
              </Form.Item>
              <Form.Item
                className="show_item"
                style={{
                  margin: '0 8px',
                }}>
                Volte Apluiqués P2: {miseenplaceok.Ratio.Volts_apluiqés_P2}
              </Form.Item>
            </Form.Item>
          </Row>
        )}
        <Row style={{justifyContent: 'center'}}>
          <Form.Item
            label="Volts HT Mesuré"
            style={{marginBottom: 0, width: '60%'}}>
            <Form.Item
              name="Volts_HT_Mesuré_P1"
              rules={[{required: true, message: 'Champ Requis'}]}
              style={{display: 'inline-block', width: 'calc(50% - 8px)'}}>
              <Input
                ref={!miseenplaceok ? null : inputEl}
                tabIndex={4}
                type="number"
                min={10}
                max={1000}
                step="0.0001"
                placeholder="Position 1"
                onChange={e =>
                  UpdateData('Volts_ht_mesuré_P1', e.target.value, setFinaldata)
                }
              />
            </Form.Item>

            <Form.Item
              name="Volts_HT_Mesuré_P2"
              style={{
                display: 'inline-block',
                width: 'calc(50% - 8px)',
                margin: '0 8px',
              }}>
              <Input
                type="number"
                tabIndex={9}
                min={10}
                max={1000}
                step="0.0001"
                placeholder="Position 2"
                onChange={e =>
                  UpdateData('Volts_ht_mesuré_P2', e.target.value, setFinaldata)
                }
              />
            </Form.Item>
          </Form.Item>
        </Row>
        <Row style={{justifyContent: 'center'}}>
          <Form.Item
            label="Polarité V Mesuré"
            style={{marginBottom: 0, width: '60%'}}>
            <Form.Item
              name="Polarité_V_Mesuré_P1"
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
                    'Polarite_volts_Mesure_P1',
                    e.target.value,
                    setFinaldata
                  )
                }
              />
            </Form.Item>

            <Form.Item
              name="Polarité_V_Mesuré_P2"
              style={{
                display: 'inline-block',
                width: 'calc(50% - 8px)',
                margin: '0 8px',
              }}>
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
          </Form.Item>
        </Row>
      </div>
    </div>
  );
}
