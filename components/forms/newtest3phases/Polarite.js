import React, {useState, useEffect, useRef} from 'react';
import {UpdateData} from '@/actions/newtestupdate';

import {TR_Charge, TR_Courant, TR_Voltage} from '@/FakeData/TestData';

import {
  Form,
  Input,
  Button,
  Select,
  Card,
  Space,
  Radio,
  Row,
  Col,
  Divider,
} from 'antd';

export default function Polarite({commande, mise_en_placeById, setFinaldata}) {
  const Position_TX = [
    {label: 'Étoile-Phase', value: 'Étoile-Phase'},
    {label: 'Triangle-Ligne', value: 'Triangle-Ligne'},
  ];
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
        <h3>Polarite</h3>
      </Divider>
      <div>
        <>
          <Row style={{justifyContent: 'center'}}>
            {!mise_en_placeById ? (
              <Form.Item
                key="Tension_a_appliquer_Polarite"
                label="Tension à appliquer"
                name="Tension_a_appliquer_Polarite "
                rules={[{required: true, message: 'Champ Requis'}]}
                className="show_item_input">
                <Input
                  type="number"
                  ref={inputEl}
                  tabIndex={1}
                  placeholder="Tension à appliquer "
                  onChange={e => {
                    UpdateData(
                      'Tension_a_appliquer_Polarite',
                      e.target.value,
                      setFinaldata
                    );
                  }}
                />
              </Form.Item>
            ) : (
              <Form.Item className="show_item">
                Tension à appliquer :{' '}
              </Form.Item>
            )}
          </Row>

          <Row style={{justifyContent: 'center'}}>
            {!mise_en_placeById ? (
              <Form.Item
                key="Position_du_sélecteur_Tx_Polarite"
                label="Position du sélecteur Tx"
                name="Position_du_sélecteur_Tx_Polarite"
                rules={[{required: true, message: 'Champ Requis'}]}
                className="show_item_input">
                <Input
                  type="number"
                  tabIndex={2}
                  placeholder="Position du sélecteur Tx"
                  onChange={e => {
                    UpdateData(
                      'Position_du_sélecteur_Tx_Polarite',
                      e.target.value,
                      setFinaldata
                    );
                  }}
                />
              </Form.Item>
            ) : (
              <Form.Item className="show_item">
                Position du sélecteur Tx :{' '}
              </Form.Item>
            )}
          </Row>
          <Row style={{justifyContent: 'center'}}>
            {!mise_en_placeById ? (
              <Form.Item
                key="Sélecteur_phase_ligne_Polarite"
                label="Sélecteur phase ligne"
                name="Sélecteur_phase_ligne_Polarite"
                rules={[{required: true, message: 'Champ Requis'}]}
                className="show_item_input">
                <Select
                  placeholder="Sélecteur phase ligne"
                  showSearch
                  initialvalues=""
                  tabIndex={3}
                  options={Position_TX}
                  onChange={value => {
                    UpdateData(
                      'Sélecteur_phase_ligne_Polarite',
                      value,
                      setFinaldata
                    );
                  }}
                />
              </Form.Item>
            ) : (
              <Form.Item className="show_item">
                Sélecteur phase ligne :{' '}
              </Form.Item>
            )}
          </Row>
          <Row style={{justifyContent: 'center'}}>
            {!mise_en_placeById ? (
              <Form.Item
                key="TR_Charge_Polarite"
                label="TR Charge "
                name="TR_Charge_Polarite"
                rules={[{required: true, message: 'Champ Requis'}]}
                className="show_item_input">
                <Select
                  placeholder="TR Charge"
                  showSearch
                  initialvalues=""
                  tabIndex={4}
                  options={TR_Charge}
                  onChange={value => {
                    UpdateData('TR_Charge_Polarite', value, setFinaldata);
                  }}
                />
              </Form.Item>
            ) : (
              <Form.Item className="show_item">TR Charge :</Form.Item>
            )}
          </Row>
          <Row style={{justifyContent: 'center'}}>
            {!mise_en_placeById ? (
              <Form.Item
                key="TR_Courant_Polarite"
                label="TR Courant"
                name="TR_Courant_Polarite "
                rules={[{required: true, message: 'Champ Requis'}]}
                className="show_item_input">
                <Select
                  placeholder="TR Courant  "
                  showSearch
                  initialvalues=""
                  tabIndex={5}
                  options={TR_Courant}
                  onChange={value => {
                    UpdateData('TR_Courant_Polarite', value, setFinaldata);
                  }}
                />
              </Form.Item>
            ) : (
              <Form.Item className="show_item">TR Courant :</Form.Item>
            )}
          </Row>
          <Row style={{justifyContent: 'center'}}>
            {!mise_en_placeById ? (
              <Form.Item
                key="TR_Voltage_Polarite"
                label="TR Voltage  "
                name="TR_Voltage_Polarite"
                rules={[{required: true, message: 'Champ Requis'}]}
                className="show_item_input">
                <Select
                  placeholder="TR Voltage"
                  showSearch
                  initialvalues=""
                  tabIndex={6}
                  options={TR_Voltage}
                  onChange={value => {
                    UpdateData('TR_Voltage_Polarite', value, setFinaldata);
                  }}
                />
              </Form.Item>
            ) : (
              <Form.Item className="show_item">TR Voltage :</Form.Item>
            )}
          </Row>
          {commande.type_command == '1phase' ? (
            <>
              <Row style={{justifyContent: 'center'}}>
                <Form.Item className="show_item">Résultats</Form.Item>
              </Row>
              <Row style={{justifyContent: 'center'}}>
                <Form.Item
                  key="Lecteur_1PH_Polarite"
                  label="Lecteur 1PH"
                  name="Lecteur_1PH_Polarite "
                  rules={[{required: true, message: 'Champ Requis'}]}
                  className="show_item_input">
                  <Input
                    type="number"
                    step="0.01"
                    tabIndex={7}
                    placeholder="Lecteur 1PH "
                    onChange={e => {
                      UpdateData(
                        'Lecteur_1PH_Polarite',
                        e.target.value,
                        setFinaldata
                      );
                    }}
                  />
                </Form.Item>
              </Row>
            </>
          ) : (
            <>
              <Row style={{justifyContent: 'center'}}>
                <Form.Item className="show_item">Lecture #1</Form.Item>
              </Row>
              <Row style={{justifyContent: 'center'}}>
                <Form.Item
                  key="H2_X2_Polarite"
                  style={{width: '15%', marginRight: '5px'}}
                  label="H2-X2"
                  name="H2_X2_Polarite"
                  rules={[{required: true, message: 'Champ Requis'}]}>
                  <Input
                    type="number"
                    step="0.01"
                    tabIndex={8}
                    placeholder="H2-X2"
                    onChange={e => {
                      UpdateData(
                        'H2_X2_Polarite',
                        e.target.value,
                        setFinaldata
                      );
                    }}
                  />
                </Form.Item>
                <Form.Item
                  key="H3_X3_Polarite"
                  style={{width: '15%', marginRight: '5px'}}
                  label="H3-X3"
                  name="H3_X3_Polarite"
                  rules={[{required: true, message: 'Champ Requis'}]}>
                  <Input
                    type="number"
                    step="0.01"
                    tabIndex={9}
                    placeholder="H3-X3"
                    onChange={e => {
                      UpdateData(
                        'H3_X3_Polarite',
                        e.target.value,
                        setFinaldata
                      );
                    }}
                  />
                </Form.Item>
              </Row>
              <Row style={{justifyContent: 'center'}}>
                <Form.Item className="show_item">Lecture #2</Form.Item>
              </Row>
              <Row style={{justifyContent: 'center'}}>
                <Form.Item
                  key="H3_X2_Polarite"
                  style={{width: '15%', marginRight: '5px'}}
                  label="H3-X2"
                  name="H3_X2_Polarite"
                  rules={[{required: true, message: 'Champ Requis'}]}>
                  <Input
                    type="number"
                    step="0.01"
                    tabIndex={10}
                    placeholder="H3-X2"
                    onChange={e => {
                      UpdateData(
                        'H3_X2_Polarite',
                        e.target.value,
                        setFinaldata
                      );
                    }}
                  />
                </Form.Item>
                <Form.Item
                  key="H2_X3_Polarite"
                  style={{width: '15%', marginRight: '5px'}}
                  label="H2-X3"
                  name="H2_X3_Polarite"
                  rules={[{required: true, message: 'Champ Requis'}]}>
                  <Input
                    type="number"
                    step="0.01"
                    tabIndex={11}
                    placeholder="H2-X3"
                    onChange={e => {
                      UpdateData(
                        'H2_X3_Polarite',
                        e.target.value,
                        setFinaldata
                      );
                    }}
                  />
                </Form.Item>
              </Row>
            </>
          )}
        </>
      </div>
    </div>
  );
}
