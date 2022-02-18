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

export default function Perte_a_Charge_p1({commande, mise_en_placeById}) {
  const TR_Charge = [
    {label: '347/600', value: 347 / 600},
    {label: '693/1200', value: 693 / 1200},
    {label: '1385/2400', value: 1385 / 2400},
    {label: '2771/4800', value: 2771 / 4800},
    {label: 'N/A', value: 'N/A'},
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
        <Row style={{justifyContent: 'center'}}>
          <Form.Item
            key="Pertes_câble_PerteCharge_P1"
            label="Pertes câble"
            name="Pertes_câble_PerteCharge_P1 "
            rules={[{required: true, message: 'Champ Requis'}]}
            className="show_item_input">
            <Input
              type="number"
              ref={inputEl}
              tabIndex={1}
              placeholder="Pertes câble P1"
            />
          </Form.Item>
        </Row>
        <Row style={{justifyContent: 'center'}}>
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
            />
          </Form.Item>
        </Row>
        <Row style={{justifyContent: 'center'}}>
          <Form.Item
            key="Pertes_raccord_PerteVide_P1"
            label="Pertes raccord"
            name="Pertes_raccord_PerteVide_P1 "
            rules={[{required: true, message: 'Champ Requis'}]}
            className="show_item_input">
            <Input type="number" tabIndex={3} placeholder="Pertes raccord P1" />
          </Form.Item>
        </Row>
        <Row style={{justifyContent: 'center'}}>
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
            />
          </Form.Item>
        </Row>
        <Row style={{justifyContent: 'center'}}>
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
            />
          </Form.Item>
        </Row>
        <Row style={{justifyContent: 'center'}}>
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
            />
          </Form.Item>
        </Row>
        <Row style={{justifyContent: 'center'}}>
          <Form.Item
            key="Courant_à_appliqué_PerteCharge_P1"
            label="Courant à appliqué"
            name="Courant_à_appliqué_PerteCharge_P1 "
            rules={[{required: true, message: 'Champ Requis'}]}
            className="show_item_input">
            <Input
              type="number"
              tabIndex={7}
              placeholder="Courant à appliqué P1"
            />
          </Form.Item>
        </Row>
        {commande.type_command == '3phase' ? (
          <>
            <Row style={{justifyContent: 'center'}}>
              <Form.Item
                key="PV_mesurés_Ph1_PerteCharge_P1"
                label="PV (W) mesurés Ph1"
                name="PV_mesurés_Ph1_PerteCharge_P1 "
                rules={[{required: true, message: 'Champ Requis'}]}
                className="show_item_input">
                <Input
                  type="number"
                  tabIndex={8}
                  placeholder="PV (W) mesurés Ph1 P1"
                />
              </Form.Item>
            </Row>
            <Row style={{justifyContent: 'center'}}>
              <Form.Item
                key="PV_mesurés_Ph2_PerteCharge_P1"
                label="PV (W) mesurés Ph1"
                name="PV_mesurés_Ph2_PerteCharge_P1 "
                rules={[{required: true, message: 'Champ Requis'}]}
                className="show_item_input">
                <Input
                  type="number"
                  tabIndex={9}
                  placeholder="PV (W) mesurés Ph2 P1"
                />
              </Form.Item>
            </Row>
            <Row style={{justifyContent: 'center'}}>
              <Form.Item
                key="PV_mesurés_Ph3_PerteCharge_P1"
                label="PV (W) mesurés Ph1"
                name="PV_mesurés_Ph3_PerteCharge_P1 "
                rules={[{required: true, message: 'Champ Requis'}]}
                className="show_item_input">
                <Input
                  type="number"
                  tabIndex={10}
                  placeholder="PV (W) mesurés Ph3 P1"
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
                />
              </Form.Item>
            </Row>
          </>
        )}
      </div>
    </div>
  );
}
