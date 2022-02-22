import React, {useState, useRef, useEffect} from 'react';
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

export default function Perte_a_vide_P2({
  commande,
  mise_en_placeById,
  setFinaldata,
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
                className="show_item_input">
                <Input
                  type="number"
                  ref={inputEl}
                  tabIndex={1}
                  placeholder="Pertes câble P2"
                  onChange={e => {
                    UpdateData(
                      'Pertes_câble_PerteVide_P2',
                      e.target.value,
                      setFinaldata
                    );
                  }}
                />
              </Form.Item>
            </Row>
            <Row style={{justifyContent: 'center'}}>
              <Form.Item
                key="TR_Charge_PerteVide_P2"
                label="TR Charge "
                name="TR_Charge_PerteVide_P2"
                className="show_item_input">
                <Select
                  placeholder="TR Charge P2"
                  showSearch
                  initialvalues=""
                  tabIndex={2}
                  options={TR_Charge}
                  onChange={value => {
                    UpdateData('TR_Charge_PerteVide_P2', value, setFinaldata);
                  }}
                />
              </Form.Item>
            </Row>
            <Row style={{justifyContent: 'center'}}>
              <Form.Item
                key="TR_Courant_PerteVide_P2"
                label="TR Courant"
                name="TR_Courant_PerteVide_P2 "
                className="show_item_input">
                <Select
                  placeholder="TR Courant P2 "
                  showSearch
                  initialvalues=""
                  tabIndex={3}
                  options={TR_Courant}
                  onChange={value => {
                    UpdateData('TR_Courant_PerteVide_P2', value, setFinaldata);
                  }}
                />
              </Form.Item>
            </Row>
            <Row style={{justifyContent: 'center'}}>
              <Form.Item
                key="TR_Voltage_PerteVide_P2"
                label="TR Voltage  "
                name="TR_Voltage_PerteVide_P2"
                className="show_item_input">
                <Select
                  placeholder="TR Voltage P2"
                  showSearch
                  initialvalues=""
                  tabIndex={4}
                  options={TR_Voltage}
                  onChange={value => {
                    UpdateData('TR_Voltage_PerteVide_P2', value, setFinaldata);
                  }}
                />
              </Form.Item>
            </Row>
            <Row style={{justifyContent: 'center'}}>
              <Form.Item
                key="Tension_nominale_PerteVide_P2"
                label="% Tension nominale"
                name="Tension_nominale_PerteVide_P2 "
                className="show_item_input">
                <Input
                  type="number"
                  tabIndex={5}
                  placeholder="% Tension nominale P2"
                  onChange={e => {
                    UpdateData(
                      'Tension_nominale_PerteVide_P2',
                      e.target.value,
                      setFinaldata
                    );
                  }}
                />
              </Form.Item>
            </Row>
            <Row style={{justifyContent: 'center'}}>
              <Form.Item
                key="Tension_à_appliqué_PerteVide_P2"
                label="Tension à appliqué"
                name="Tension_à_appliqué_PerteVide_P2 "
                className="show_item_input">
                <Input
                  type="number"
                  tabIndex={6}
                  placeholder="Tension à appliqué P2"
                  onChange={e => {
                    UpdateData(
                      'Tension_à_appliqué_PerteVide_P2',
                      e.target.value,
                      setFinaldata
                    );
                  }}
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
                    className="show_item_input">
                    <Input
                      type="number"
                      tabIndex={7}
                      placeholder="Pertes mesurées P2"
                      onChange={e => {
                        UpdateData(
                          'Pertes_mesurées_PerteVide_P2',
                          e.target.value,
                          setFinaldata
                        );
                      }}
                    />
                  </Form.Item>
                </Row>
                <Row style={{justifyContent: 'center'}}>
                  <Form.Item
                    key="Courant_excitation_mesuré_PerteVide_P2"
                    label="Courant excitation mesuré"
                    name="Courant_excitation_mesuré_PerteVide_P2 "
                    className="show_item_input">
                    <Input
                      type="number"
                      tabIndex={8}
                      placeholder="Courant excitation mesuré P2"
                      onChange={e => {
                        UpdateData(
                          'Courant_excitation_mesuré_PerteVide_P2',
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
                  <Form.Item
                    key="PV_mesurés_Ph1_PerteVide_P2"
                    label="PV (W) mesurés Ph1"
                    name="PV_mesurés_Ph1_PerteVide_P2 "
                    className="show_item_input">
                    <Input
                      type="number"
                      tabIndex={9}
                      placeholder="PV (W) mesurés Ph1 P2"
                      onChange={e => {
                        UpdateData(
                          'PV_mesurés_Ph1_PerteVide_P2',
                          e.target.value,
                          setFinaldata
                        );
                      }}
                    />
                  </Form.Item>
                </Row>
                <Row style={{justifyContent: 'center'}}>
                  <Form.Item
                    key="PV_mesurés_Ph2_PerteVide_P2"
                    label="PV (W) mesurés Ph1"
                    name="PV_mesurés_Ph2_PerteVide_P2 "
                    className="show_item_input">
                    <Input
                      type="number"
                      tabIndex={10}
                      placeholder="PV (W) mesurés Ph2 P2"
                      onChange={e => {
                        UpdateData(
                          'PV_mesurés_Ph2_PerteVide_P2',
                          e.target.value,
                          setFinaldata
                        );
                      }}
                    />
                  </Form.Item>
                </Row>
                <Row style={{justifyContent: 'center'}}>
                  <Form.Item
                    key="PV_mesurés_Ph3_PerteVide_P2"
                    label="PV (W) mesurés Ph1"
                    name="PV_mesurés_Ph3_PerteVide_P2 "
                    className="show_item_input">
                    <Input
                      type="number"
                      tabIndex={11}
                      placeholder="PV (W) mesurés Ph3 P2"
                      onChange={e => {
                        UpdateData(
                          'PV_mesurés_Ph3_PerteVide_P2',
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
        ) : (
          <>test regulier perte a vide</>
        )}
      </div>
    </div>
  );
}
