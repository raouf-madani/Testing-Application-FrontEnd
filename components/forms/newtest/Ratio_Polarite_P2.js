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
  Finaldata,
  UpdateData,
  miseenplaceok,
  setFinaldata,
  setNewMisePlace,
  Prise,
}) {
  const [required, setrequired] = useState(
    // Finaldata.Ratio.Tension_à_appliquer_P2 != '' ||
    // Finaldata.Ratio.Tension_ht_P2 != '' ||
    //   Finaldata.Ratio.Polarite_théorique_P2 != '' ||
    //   Finaldata.Ratio.Tension_mesurée_P2 != '' ||
    //   Finaldata.Ratio.Tension_mesurée_P1_P2 != '' ||
    //   Finaldata.Ratio.Tension_mesurée_P2_P2 != '' ||
    //   Finaldata.Ratio.Tension_mesurée_P3_P2 != '' ||
    //   Finaldata.Ratio.Tension_mesurée_P4_P2 != '' ||
    //   Finaldata.Ratio.Tension_mesurée_P5_P2 != '' ||
    //   Finaldata.Ratio.Polarité_mesurée_P2 != ''
    //   ? true
    //   : false
    false
  );
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
                label="Tension à appliquer"
                name="Tension_à_Appliquer_P2"
                className="show_item_input"
                rules={[{required: required, message: 'Champ Requis'}]}>
                <Input
                  type="number"
                  step="0.0001"
                  ref={inputEl}
                  placeholder="Position 2"
                  onChange={e => {
                    UpdateData(
                      'Tension_à_appliquer_P2',
                      e.target.value,
                      setNewMisePlace
                    );
                  }}
                />
              </Form.Item>
            </Row>
            <Row style={{justifyContent: 'center'}}>
              <Form.Item
                name="Tension_HT_P2"
                label="Tension HT théorique"
                className="show_item_input"
                rules={[{required: required, message: 'Champ Requis'}]}>
                <Input
                  type="number"
                  step="0.0001"
                  placeholder="Position 2"
                  onChange={e => {
                    UpdateData(
                      'Tension_ht_P2',
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
                name="Polarite_Théorique_P2"
                className="show_item_input"
                rules={[{required: required, message: 'Champ Requis'}]}>
                <Input
                  type="number"
                  step="0.0001"
                  placeholder="Position 2"
                  onChange={e => {
                    UpdateData(
                      'Polarite_théorique_P2',
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
              Tension à appliquer : {miseenplaceok.Ratio.Tension_à_appliquer_P2}
            </Form.Item>
          </Row>
        )}
        <Row style={{justifyContent: 'center'}}>
          {Prise !== 'AP' ? (
            <Form.Item
              label=" Tension mesurée "
              name="Tension_mesurée_P2"
              className="show_item_input"
              rules={[{required: required, message: 'Champ Requis'}]}>
              <Input
                ref={!miseenplaceok ? null : inputEl}
                type="number"
                step="0.0001"
                placeholder="Position 2"
                onChange={e => {
                  UpdateData(
                    'Tension_mesurée_P2',
                    e.target.value,
                    setFinaldata
                  );
                }}
              />
            </Form.Item>
          ) : (
            <Row style={{justifyContent: 'center'}}>
              <Form.Item
                key="P1"
                style={{width: '16%', marginRight: '5px'}}
                label="Prise1"
                name="Tension_mesurée_P1_P2"
                rules={[{required: required, message: 'Champ Requis'}]}>
                <Input
                  ref={!miseenplaceok ? null : inputEl}
                  type="number"
                  step="0.0001"
                  placeholder="Prise1"
                  onChange={e => {
                    UpdateData(
                      'Tension_mesurée_P1_P2',
                      e.target.value,
                      setFinaldata
                    );
                  }}
                />
              </Form.Item>
              <Form.Item
                key="P2"
                style={{width: '16%', marginRight: '5px'}}
                label="Prise2"
                name="Tension_mesurée_P2_P2"
                rules={[{required: required, message: 'Champ Requis'}]}>
                <Input
                  type="number"
                  step="0.0001"
                  placeholder="Prise2"
                  onChange={e => {
                    UpdateData(
                      'Tension_mesurée_P2_P2',
                      e.target.value,
                      setFinaldata
                    );
                  }}
                />
              </Form.Item>
              <Form.Item
                key="P3"
                style={{width: '16%', marginRight: '5px'}}
                label="Prise3"
                name="Tension_mesurée_P3_P2"
                rules={[{required: required, message: 'Champ Requis'}]}>
                <Input
                  type="number"
                  step="0.0001"
                  placeholder="Prise1"
                  onChange={e => {
                    UpdateData(
                      'Tension_mesurée_P3_P2',
                      e.target.value,
                      setFinaldata
                    );
                  }}
                />
              </Form.Item>
              <Form.Item
                key="P4"
                style={{width: '16%', marginRight: '5px'}}
                label="Prise4"
                name="Tension_mesurée_P4_P2"
                rules={[{required: required, message: 'Champ Requis'}]}>
                <Input
                  type="number"
                  step="0.0001"
                  placeholder="Prise4"
                  onChange={e => {
                    UpdateData(
                      'Tension_mesurée_P4_P2',
                      e.target.value,
                      setFinaldata
                    );
                  }}
                />
              </Form.Item>
              <Form.Item
                key="P5"
                style={{width: '16%', marginRight: '5px'}}
                label="Prise5"
                name="Tension_mesurée_P5_P2"
                rules={[{required: required, message: 'Champ Requis'}]}>
                <Input
                  type="number"
                  step="0.0001"
                  placeholder="Prise5"
                  onChange={e => {
                    UpdateData(
                      'Tension_mesurée_P5_P2',
                      e.target.value,
                      setFinaldata
                    );
                  }}
                />
              </Form.Item>
            </Row>
          )}
        </Row>
        <Row style={{justifyContent: 'center'}}>
          <Form.Item
            label="Polarité mesurée "
            name="Polarité_Mesuré_P2"
            className="show_item_input"
            rules={[{required: required, message: 'Champ Requis'}]}>
            <Input
              type="number"
              step="0.0001"
              placeholder="Position 2"
              onChange={e => {
                UpdateData('Polarité_mesurée_P2', e.target.value, setFinaldata);
              }}
            />
          </Form.Item>
        </Row>
      </div>
    </div>
  );
}
