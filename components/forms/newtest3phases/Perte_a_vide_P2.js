import React, {useState, useRef, useEffect} from 'react';
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

export default function Perte_a_vide_p2({commande, mise_en_placeById}) {
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
  const Reactance = [
    {label: 'A1B1C1', value: 'A1B1C1'},
    {label: 'A3B3C3', value: 'A3B3C3'},
    {label: 'A4B4C4', value: 'A4B4C4'},
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
        <h3>Perte a Vide P2</h3>
      </Divider>
      <div>
        {' '}
        {!mise_en_placeById ? (
          <>
            <Row style={{justifyContent: 'center'}}>
              <Form.Item
                key="Pertes_câble_PerteVide_P2"
                label="Pertes câble"
                name="Pertes_câble_PerteVide_P2 "
                rules={[{required: true, message: 'Champ Requis'}]}
                className="show_item_input">
                <Input
                  type="number"
                  ref={inputEl}
                  tabIndex={1}
                  placeholder="Pertes câble P2"
                />
              </Form.Item>
            </Row>
            <Row style={{justifyContent: 'center'}}>
              <Form.Item
                key="TR_Charge_PerteVide_P2"
                label="TR Charge "
                name="TR_Charge_PerteVide_P2"
                rules={[{required: true, message: 'Champ Requis'}]}
                className="show_item_input">
                <Select
                  placeholder="TR Charge P2"
                  showSearch
                  initialvalues=""
                  tabIndex={2}
                  options={TR_Charge}
                />
              </Form.Item>
            </Row>
            <Row style={{justifyContent: 'center'}}>
              <Form.Item
                key="TR_Courant_Courant_PerteVide_P2"
                label="TR Courant"
                name="TR_Courant_Courant_PerteVide_P2 "
                rules={[{required: true, message: 'Champ Requis'}]}
                className="show_item_input">
                <Select
                  placeholder="TR Courant P2 "
                  showSearch
                  initialvalues=""
                  tabIndex={3}
                  options={TR_Courant}
                />
              </Form.Item>
            </Row>
            <Row style={{justifyContent: 'center'}}>
              <Form.Item
                key="TR_Voltage_Voltage_PerteVide_P2"
                label="TR Voltage  "
                name="TR_Voltage_Voltage_PerteVide_P2"
                rules={[{required: true, message: 'Champ Requis'}]}
                className="show_item_input">
                <Select
                  placeholder="TR Voltage P2"
                  showSearch
                  initialvalues=""
                  tabIndex={4}
                  options={TR_Voltage}
                />
              </Form.Item>
            </Row>
            <Row style={{justifyContent: 'center'}}>
              <Form.Item
                key="Tension_nominale_PerteVide_P2"
                label="% Tension nominale"
                name="Tension_nominale_PerteVide_P2 "
                rules={[{required: true, message: 'Champ Requis'}]}
                className="show_item_input">
                <Input
                  type="number"
                  tabIndex={5}
                  placeholder="% Tension nominale P2"
                />
              </Form.Item>
            </Row>
            <Row style={{justifyContent: 'center'}}>
              <Form.Item
                key="Tension_à_appliqué_PerteVide_P2"
                label="Tension à appliqué"
                name="Tension_à_appliqué_PerteVide_P2 "
                rules={[{required: true, message: 'Champ Requis'}]}
                className="show_item_input">
                <Input
                  type="number"
                  tabIndex={6}
                  placeholder="Tension à appliqué P2"
                />
              </Form.Item>
            </Row>
            {commande.type_command == '1phase' ? (
              <>
                <Row style={{justifyContent: 'center'}}>
                  <Form.Item
                    key="Pertes_mesurées_PerteVide_P2"
                    label="Pertes mesurées"
                    name="Pertes_mesurées_PerteVide_P2 "
                    rules={[{required: true, message: 'Champ Requis'}]}
                    className="show_item_input">
                    <Input
                      type="number"
                      tabIndex={7}
                      placeholder="Pertes mesurées P2"
                    />
                  </Form.Item>
                </Row>
                <Row style={{justifyContent: 'center'}}>
                  <Form.Item
                    key="Courant_excitation_mesuré_PerteVide_P2"
                    label="Courant excitation mesuré"
                    name="Courant_excitation_mesuré_PerteVide_P2 "
                    rules={[{required: true, message: 'Champ Requis'}]}
                    className="show_item_input">
                    <Input
                      type="number"
                      tabIndex={8}
                      placeholder="Courant excitation mesuré P2"
                    />
                  </Form.Item>
                </Row>
              </>
            ) : (
              <>
                <Row style={{justifyContent: 'center'}}>
                  <Form.Item
                    key="PV_mesurés_Ph1_PerteVide_P2"
                    label="PV (W) mesurés Ph1"
                    name="PV_mesurés_Ph1_PerteVide_P2 "
                    rules={[{required: true, message: 'Champ Requis'}]}
                    className="show_item_input">
                    <Input
                      type="number"
                      tabIndex={9}
                      placeholder="PV (W) mesurés Ph1 P2"
                    />
                  </Form.Item>
                </Row>
                <Row style={{justifyContent: 'center'}}>
                  <Form.Item
                    key="PV_mesurés_Ph2_PerteVide_P2"
                    label="PV (W) mesurés Ph1"
                    name="PV_mesurés_Ph2_PerteVide_P2 "
                    rules={[{required: true, message: 'Champ Requis'}]}
                    className="show_item_input">
                    <Input
                      type="number"
                      tabIndex={10}
                      placeholder="PV (W) mesurés Ph2 P2"
                    />
                  </Form.Item>
                </Row>
                <Row style={{justifyContent: 'center'}}>
                  <Form.Item
                    key="PV_mesurés_Ph3_PerteVide_P2"
                    label="PV (W) mesurés Ph1"
                    name="PV_mesurés_Ph3_PerteVide_P2 "
                    rules={[{required: true, message: 'Champ Requis'}]}
                    className="show_item_input">
                    <Input
                      type="number"
                      tabIndex={11}
                      placeholder="PV (W) mesurés Ph3 P2"
                    />
                  </Form.Item>
                </Row>
              </>
            )}
          </>
        ) : (
          <>test regulier perte a vide</>
        )}
      </div>
    </div>
  );
}
