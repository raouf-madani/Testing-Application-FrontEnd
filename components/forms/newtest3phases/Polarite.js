import React, {useState, useEffect, useRef} from 'react';
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

export default function Polarite({commande, mise_en_placeById}) {
  const TR_Charge = [
    {label: '347/600', value: 347 / 600},
    {label: '693/1200', value: 693 / 1200},
    {label: '1385/2400', value: 1385 / 2400},
    {label: '2771/4800', value: 2771 / 4800},
    {label: 'N/A', value: 'N/A'},
  ];
  const Position_TX = [
    {label: 'Étoile-Phase', value: 'Étoile-Phase'},
    {label: 'Triangle-Ligne', value: 'Triangle-Ligne'},
  ];
  const TR_Courant = [
    {label: '5/X1', value: 5 / 1},
    {label: '10/X2', value: 10 / 2},
    {label: '25/X5', value: 25 / 5},
    {label: '50/X10', value: 50 / 10},
    {label: '100/X20', value: 100 / 20},
    {label: '200/X40', value: 200 / 40},
    {label: '400/X80', value: 400 / 80},
    {label: '600/X120', value: 600 / 120},
    {label: 'N/A', value: 'N/A'},
  ];
  const TR_Voltage = [
    {label: '240/X2', value: 240 / 2},
    {label: '480/X4', value: 480 / 4},
    {label: '600/X5', value: 600 / 5},
    {label: '1200/X10', value: 1200 / 10},
    {label: '2400/X20', value: 2400 / 20},
    {label: '4800/X40', value: 4800 / 40},
    {label: 'N/A', value: 'N/A'},
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
        {!mise_en_placeById ? (
          <>
            <Row style={{justifyContent: 'center'}}>
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
                />
              </Form.Item>
            </Row>
            <Row style={{justifyContent: 'center'}}>
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
                />
              </Form.Item>
            </Row>
            <Row style={{justifyContent: 'center'}}>
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
                />
              </Form.Item>
            </Row>
            <Row style={{justifyContent: 'center'}}>
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
                />
              </Form.Item>
            </Row>
            <Row style={{justifyContent: 'center'}}>
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
                />
              </Form.Item>
            </Row>
            <Row style={{justifyContent: 'center'}}>
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
                />
              </Form.Item>
            </Row>
            {!commande.type_command == '1phase' ? (
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
                      tabIndex={7}
                      placeholder="Lecteur 1PH "
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
                    <Input tabIndex={8} placeholder="H2-X2" />
                  </Form.Item>
                  <Form.Item
                    key="H3_X3_Polarite"
                    style={{width: '15%', marginRight: '5px'}}
                    label="H3-X3"
                    name="H3_X3_Polarite"
                    rules={[{required: true, message: 'Champ Requis'}]}>
                    <Input tabIndex={9} placeholder="H3-X3" />
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
                    <Input tabIndex={10} placeholder="H3-X2" />
                  </Form.Item>
                  <Form.Item
                    key="H2_X3_Polarite"
                    style={{width: '15%', marginRight: '5px'}}
                    label="H2-X3"
                    name="H2_X3_Polarite"
                    rules={[{required: true, message: 'Champ Requis'}]}>
                    <Input tabIndex={11} placeholder="H2-X3" />
                  </Form.Item>
                </Row>
              </>
            )}
          </>
        ) : (
          <>test regulier pour Polarite</>
        )}
      </div>
    </div>
  );
}
