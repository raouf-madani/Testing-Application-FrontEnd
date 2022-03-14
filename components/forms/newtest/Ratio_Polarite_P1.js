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
        <h3>Ratio et Polarité Position 1</h3>
      </Divider>
      <div>
        {!miseenplaceok && (
          <div>
            <Row style={{justifyContent: 'center'}}>
              <Form.Item
                label="Tension à appliquer"
                name="Tension_à_Appliquer_P1"
                rules={[{required: true, message: 'Champ Requis'}]}
                className="show_item_input">
                <Input
                  type="number"
                  step="0.0001"
                  ref={inputEl}
                  placeholder="Position 1"
                  onChange={e => {
                    UpdateData(
                      'Tension_à_appliquer_P1',
                      e.target.value,
                      setNewMisePlace
                    );
                  }}
                />
              </Form.Item>
            </Row>
            <Row style={{justifyContent: 'center'}}>
              <Form.Item
                name="Tension_HT_P1"
                label="Tension HT théorique"
                rules={[{required: true, message: 'Champ Requis'}]}
                className="show_item_input">
                <Input
                  type="number"
                  step="0.0001"
                  placeholder="Position 1"
                  onChange={e => {
                    UpdateData(
                      'Tension_ht_P1',
                      e.target.value,
                      setNewMisePlace
                    );
                  }}
                />
              </Form.Item>
            </Row>
            <Row style={{justifyContent: 'center'}}>
              <Form.Item
                label=" Polarité théorique"
                name="Polarite_Théorique_P1"
                rules={[{required: true, message: 'Champ Requis'}]}
                className="show_item_input">
                <Input
                  type="number"
                  step="0.0001"
                  placeholder="Position 1"
                  onChange={e => {
                    UpdateData(
                      'Polarite_théorique_P1',
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
              Tension à appliquer : {miseenplaceok.Ratio.Tension_à_appliquer_P1}
            </Form.Item>
          </Row>
        )}
        <Row style={{justifyContent: 'center'}}>
          {Prise !== 'AP' ? (
            <Form.Item
              label=" Tension mesurée "
              name="Tension_mesurée_P1"
              rules={[{required: true, message: 'Champ Requis'}]}
              className="show_item_input">
              <Input
                ref={!miseenplaceok ? null : inputEl}
                type="number"
                step="0.0001"
                placeholder="Position 1"
                onChange={e =>
                  UpdateData('Tension_mesurée_P1', e.target.value, setFinaldata)
                }
              />
            </Form.Item>
          ) : (
            <Row style={{justifyContent: 'center'}}>
              <Form.Item
                key="P1"
                style={{width: '16%', marginRight: '5px'}}
                label="Prise1"
                name="Tension_mesurée_P1_P1"
                rules={[{required: true, message: 'Champ Requis'}]}>
                <Input
                  ref={!miseenplaceok ? null : inputEl}
                  type="number"
                  step="0.0001"
                  placeholder="Prise1"
                  onChange={e =>
                    UpdateData(
                      'Tension_mesurée_P1_P1',
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
                name="Tension_mesurée_P2_P1"
                rules={[{required: true, message: 'Champ Requis'}]}>
                <Input
                  type="number"
                  step="0.0001"
                  placeholder="Prise2"
                  onChange={e =>
                    UpdateData(
                      'Tension_mesurée_P2_P1',
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
                name="Tension_mesurée_P3_P1"
                rules={[{required: true, message: 'Champ Requis'}]}>
                <Input
                  type="number"
                  step="0.0001"
                  placeholder="Prise1"
                  onChange={e =>
                    UpdateData(
                      'Tension_mesurée_P3_P1',
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
                name="Tension_mesurée_P4_P1"
                rules={[{required: true, message: 'Champ Requis'}]}>
                <Input
                  type="number"
                  step="0.0001"
                  placeholder="Prise4"
                  onChange={e =>
                    UpdateData(
                      'Tension_mesurée_P4_P1',
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
                name="Tension_mesurée_P5_P1"
                rules={[{required: true, message: 'Champ Requis'}]}>
                <Input
                  type="number"
                  step="0.0001"
                  placeholder="Prise5"
                  onChange={e =>
                    UpdateData(
                      'Tension_mesurée_P5_P1',
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
            name="Polarité_Mesuré_P1"
            rules={[{required: true, message: 'Champ Requis'}]}
            className="show_item_input">
            <Input
              type="number"
              step="0.0001"
              placeholder="Position 1"
              onChange={e =>
                UpdateData('Polarité_mesurée_P1', e.target.value, setFinaldata)
              }
            />
          </Form.Item>
        </Row>
      </div>
    </div>
  );
}
