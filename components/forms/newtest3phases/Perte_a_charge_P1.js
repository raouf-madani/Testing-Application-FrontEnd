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

export default function Perte_a_Charge_p1({
  commande,
  mise_en_placeById,
  setFinaldata,
}) {
  const Raccord_Flexible = [
    {label: '5', value: 5},
    {label: '25AB', value: '25AB'},
    {label: '32', value: '32'},
    {label: '38X', value: '38X'},
    {label: '39X', value: '39X'},
    {label: '250 Sfils', value: '250 Sfils'},
    {label: '333 Tressé', value: '333 Tressé'},
    {label: '500 Tressé', value: '500 Tressé'},
    {label: '500ABC', value: '500ABC'},
    {label: '750A', value: '750A'},
    {label: '750AB', value: '750AB'},
    {label: '750ABCD', value: '750ABCD'},
    {label: '808', value: '808'},
    {label: '1500ABC', value: '1500ABC'},
    {label: '2000AB', value: '2000AB'},
    {label: '2000ABC', value: '2000ABC'},
    {label: '2500A', value: '2500A'},
    {label: '2500ABC', value: '2500ABC'},
    {label: 'BC', value: 'BC'},
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
        <h3>Perte a Charge P1</h3>
      </Divider>
      <div>
        {!mise_en_placeById && (
          <Row style={{justifyContent: 'center'}}>
            <Form.Item
              key="Pertes_câble_PerteCharge_P1"
              label="Pertes câble"
              name="Pertes_câble_PerteCharge_P1 "
              rules={[{required: true, message: 'Champ Requis'}]}
              className="show_item_input">
              <Input
                type="number"
                step="0.01"
                ref={inputEl}
                tabIndex={1}
                placeholder="Pertes câble P1"
                onChange={e => {
                  UpdateData(
                    'Pertes_câble_PerteCharge_P1',
                    e.target.value,
                    setFinaldata
                  );
                }}
              />
            </Form.Item>
          </Row>
        )}

        <Row style={{justifyContent: 'center'}}>
          {!mise_en_placeById ? (
            <Form.Item
              key="Raccord_flexible_PerteCharge_P1"
              label="Raccord flexible"
              name="Raccord_flexible_PerteCharge_P1"
              rules={[{required: true, message: 'Champ Requis'}]}
              className="show_item_input">
              <Select
                placeholder="Raccord flexible P1"
                showSearch
                initialvalues=""
                tabIndex={2}
                options={Raccord_Flexible}
                onChange={value => {
                  UpdateData(
                    'Raccord_flexible_PerteCharge_P1',
                    value,
                    setFinaldata
                  );
                }}
              />
            </Form.Item>
          ) : (
            <Form.Item className="show_item">Raccord flexible :</Form.Item>
          )}
        </Row>
        {!mise_en_placeById && (
          <Row style={{justifyContent: 'center'}}>
            <Form.Item
              key="Pertes_raccord_PerteCharge_P1"
              label="Pertes raccord"
              name="Pertes_raccord_PerteCharge_P1 "
              rules={[{required: true, message: 'Champ Requis'}]}
              className="show_item_input">
              <Input
                type="number"
                tabIndex={3}
                placeholder="Pertes raccord P1"
                onChange={e => {
                  UpdateData(
                    'Pertes_raccord_PerteCharge_P1',
                    e.target.value,
                    setFinaldata
                  );
                }}
              />
            </Form.Item>
          </Row>
        )}

        <Row style={{justifyContent: 'center'}}>
          {!mise_en_placeById ? (
            <Form.Item
              key="TR_Charge_PerteCharge_P1"
              label="TR Charge "
              name="TR_Charge_PerteCharge_P1"
              rules={[{required: true, message: 'Champ Requis'}]}
              className="show_item_input">
              <Select
                placeholder="TR Charge P1"
                showSearch
                initialvalues=""
                tabIndex={4}
                options={TR_Charge}
                onChange={value => {
                  UpdateData('TR_Charge_PerteCharge_P1', value, setFinaldata);
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
              key="TR_Courant_PerteCharge_P1"
              label="TR Courant"
              name="TR_Courant_PerteCharge_P1 "
              rules={[{required: true, message: 'Champ Requis'}]}
              className="show_item_input">
              <Select
                placeholder="TR Courant P1 "
                showSearch
                initialvalues=""
                tabIndex={5}
                options={TR_Courant}
                onChange={value => {
                  UpdateData('TR_Courant_PerteCharge_P1', value, setFinaldata);
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
              key="TR_Voltage_PerteCharge_P1"
              label="TR Voltage"
              name="TR_Voltage_PerteCharge_P1 "
              rules={[{required: true, message: 'Champ Requis'}]}
              className="show_item_input">
              <Select
                placeholder="TR Voltage P1 "
                showSearch
                initialvalues=""
                tabIndex={6}
                options={TR_Voltage}
                onChange={value => {
                  UpdateData('TR_Voltage_PerteCharge_P1', value, setFinaldata);
                }}
              />
            </Form.Item>
          ) : (
            <Form.Item className="show_item">TR Voltage :</Form.Item>
          )}
        </Row>

        <Row style={{justifyContent: 'center'}}>
          {!mise_en_placeById ? (
            <Form.Item
              key="Courant_à_appliqué_PerteCharge_P1"
              label="Courant à appliqué"
              name="Courant_à_appliqué_PerteCharge_P1 "
              rules={[{required: true, message: 'Champ Requis'}]}
              className="show_item_input">
              <Input
                type="number"
                step="0.0001"
                tabIndex={7}
                placeholder="Courant à appliqué P1"
                onChange={e => {
                  UpdateData(
                    'Courant_à_appliqué_PerteCharge_P1',
                    e.target.value,
                    setFinaldata
                  );
                }}
              />
            </Form.Item>
          ) : (
            <Form.Item className="show_item">Courant à appliqué :</Form.Item>
          )}
        </Row>
        {commande.type_command == '3phase' ? (
          <>
            <Row style={{justifyContent: 'center'}}>
              <Form.Item
                key="PC_mesurés_Ph1_PerteCharge_P1"
                label="PC (W) mesurés Ph1"
                name="PC_mesurés_Ph1_PerteCharge_P1 "
                rules={[{required: true, message: 'Champ Requis'}]}
                style={{width: '16%', marginRight: '5px'}}>
                <Input
                  type="number"
                  tabIndex={8}
                  placeholder="PC (W) mesurés Ph1 P1"
                  onChange={e => {
                    UpdateData(
                      'PC_mesurés_Ph1_PerteCharge_P1',
                      e.target.value,
                      setFinaldata
                    );
                  }}
                />
              </Form.Item>
              <Form.Item
                key="Imp_V_mesuré_Ph1_PerteCharge_P1"
                label="Imp. (V) mesuré Ph1"
                name="Imp_V_mesuré_Ph1_PerteCharge_P1 "
                rules={[{required: true, message: 'Champ Requis'}]}
                style={{width: '16%', marginRight: '5px'}}>
                <Input
                  type="number"
                  tabIndex={8}
                  placeholder="PC (W) mesurés Ph1 P1"
                  onChange={e => {
                    UpdateData(
                      'Imp_V_mesuré_Ph1_PerteCharge_P1',
                      e.target.value,
                      setFinaldata
                    );
                  }}
                />
              </Form.Item>
            </Row>

            <Row style={{justifyContent: 'center'}}>
              <Form.Item
                key="PC_mesurés_Ph2_PerteCharge_P1"
                label="PC (W) mesurés Ph2"
                name="PC_mesurés_Ph2_PerteCharge_P1 "
                rules={[{required: true, message: 'Champ Requis'}]}
                style={{width: '16%', marginRight: '5px'}}>
                <Input
                  type="number"
                  tabIndex={8}
                  placeholder="PC (W) mesurés Ph2 P1"
                  onChange={e => {
                    UpdateData(
                      'PC_mesurés_Ph2_PerteCharge_P1',
                      e.target.value,
                      setFinaldata
                    );
                  }}
                />
              </Form.Item>
              <Form.Item
                key="Imp_V_mesuré_Ph2_PerteCharge_P1"
                label="Imp. (V) mesuré Ph2"
                name="Imp_V_mesuré_Ph2_PerteCharge_P1 "
                rules={[{required: true, message: 'Champ Requis'}]}
                style={{width: '16%', marginRight: '5px'}}>
                <Input
                  type="number"
                  tabIndex={8}
                  placeholder="PC (W) mesurés Ph2 P1"
                  onChange={e => {
                    UpdateData(
                      'Imp_V_mesuré_Ph2_PerteCharge_P1',
                      e.target.value,
                      setFinaldata
                    );
                  }}
                />
              </Form.Item>
            </Row>
            <Row style={{justifyContent: 'center'}}>
              <Form.Item
                key="PC_mesurés_Ph3_PerteCharge_P1"
                label="PC (W) mesurés Ph3"
                name="PC_mesurés_Ph3_PerteCharge_P1 "
                rules={[{required: true, message: 'Champ Requis'}]}
                style={{width: '16%', marginRight: '5px'}}>
                <Input
                  type="number"
                  tabIndex={8}
                  placeholder="PC (W) mesurés Ph3 P1"
                  onChange={e => {
                    UpdateData(
                      'PC_mesurés_Ph3_PerteCharge_P1',
                      e.target.value,
                      setFinaldata
                    );
                  }}
                />
              </Form.Item>
              <Form.Item
                key="Imp_V_mesuré_Ph3_PerteCharge_P1"
                label="Imp. (V) mesuré Ph3"
                name="Imp_V_mesuré_Ph3_PerteCharge_P1 "
                rules={[{required: true, message: 'Champ Requis'}]}
                style={{width: '16%', marginRight: '5px'}}>
                <Input
                  type="number"
                  tabIndex={8}
                  placeholder="PC (W) mesurés Ph3 P1"
                  onChange={e => {
                    UpdateData(
                      'Imp_V_mesuré_Ph3_PerteCharge_P1',
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
                key="Pertes_mesurées_PerteCharge_P1"
                label="Pertes mesurées"
                name="Pertes_mesurées_PerteCharge_P1 "
                rules={[{required: true, message: 'Champ Requis'}]}
                className="show_item_input">
                <Input
                  type="number"
                  tabIndex={8}
                  placeholder="Pertes mesurées P1"
                  onChange={e => {
                    UpdateData(
                      'Pertes_mesurées_PerteCharge_P1',
                      e.target.value,
                      setFinaldata
                    );
                  }}
                />
              </Form.Item>
            </Row>
            <Row style={{justifyContent: 'center'}}>
              <Form.Item
                key="Impédance_mesurée_PerteCharge_P1"
                label="Impédance  mesuré"
                name="Impédance_mesurée_PerteCharge_P1 "
                rules={[{required: true, message: 'Champ Requis'}]}
                className="show_item_input">
                <Input
                  type="number"
                  tabIndex={9}
                  placeholder="Impédance mesurée P1"
                  onChange={e => {
                    UpdateData(
                      'Impédance_mesurée_PerteCharge_P1',
                      e.target.value,
                      setFinaldata
                    );
                  }}
                />
              </Form.Item>
            </Row>
          </>
        )}
      </div>
    </div>
  );
}
