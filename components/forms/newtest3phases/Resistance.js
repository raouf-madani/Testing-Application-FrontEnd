import React, {useState, useRef, useEffect} from 'react';
import {UpdateData} from '@/actions/newtestupdate';

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
  Switch,
} from 'antd';

export default function Resistance_BT({
  setFinaldata,
  Finaldata,
  commande,
  mise_en_placeById,
  form,
}) {
  const [firstMO, setfirstMO] = useState(false);
  const [Optinal, setOptinal] = useState(
    Finaldata.Resistance.X1_X2 ? true : false
  );
  const inputEl = useRef(null);
  useEffect(() => {
    if (inputEl.current) {
      inputEl.current.focus();
    }
  }, [inputEl]);

  useEffect(() => {
    if (!Optinal) {
      form.resetFields(['Resistance_ht_P1']),
        form.resetFields(['Resistance_ht_P2']),
        form.resetFields(['Resistance_bt']),
        form.resetFields(['X1_X2']),
        form.resetFields(['X1_X3']),
        form.resetFields(['X2_X3']),
        form.resetFields(['H1_H2_P1']),
        form.resetFields(['H1_H3_P1']),
        form.resetFields(['H2_H3_P1']),
        form.resetFields(['H1_H2_P2']),
        form.resetFields(['H1_H3_P2']),
        form.resetFields(['H2_H3_P2']),
        UpdateData('Resistance_ht_P1', '', setFinaldata),
        UpdateData('Resistance_ht_P2', '', setFinaldata),
        UpdateData('Resistance_bt', '', setFinaldata),
        UpdateData('X1_X2', '', setFinaldata),
        UpdateData('X1_X3', '', setFinaldata),
        UpdateData('X2_X3', '', setFinaldata),
        UpdateData('H1_H2_P1', '', setFinaldata),
        UpdateData('H1_H3_P1', '', setFinaldata),
        UpdateData('H2_H3_P1', '', setFinaldata),
        UpdateData('H1_H2_P2', '', setFinaldata),
        UpdateData('H1_H3_P2', '', setFinaldata),
        UpdateData('H2_H3_P2', '', setFinaldata);
    }
  }, [Optinal]);
  return (
    <div className="Containertest">
      <Divider
        dashed
        orientation="left"
        style={{color: '#34b1ab', marginBottom: '40px'}}>
        <h3>Resistance </h3>
      </Divider>
      <div>
        {mise_en_placeById && !firstMO && (
          <Row style={{justifyContent: 'center'}}>
            <Form.Item
              name="Resistance_Option"
              style={{marginBottom: 0, width: '70%'}}>
              <Switch
                checked={Optinal}
                checkedChildren="Résistance"
                unCheckedChildren="Résistance"
                onChange={() => setOptinal(!Optinal)}
                onChange={() =>
                  Optinal != true ? setOptinal(true) : setOptinal(false)
                }
              />
            </Form.Item>
          </Row>
        )}
        {(!mise_en_placeById ||
          (mise_en_placeById && firstMO) ||
          (mise_en_placeById && Optinal)) &&
          (commande.type_command == '1phase' ? (
            <>
              <Row style={{justifyContent: 'center'}}>
                <Form.Item
                  label="Resistance HT P1 "
                  className="show_item_input"
                  name="Resistance_HT_P1">
                  <Input
                    ref={inputEl}
                    type="number"
                    tabIndex={2}
                    placeholder="Resistance HT P1"
                    onChange={e => {
                      UpdateData(
                        'Resistance_ht_P1',
                        e.target.value,
                        setFinaldata
                      );
                    }}
                  />
                </Form.Item>
              </Row>
              <Row style={{justifyContent: 'center'}}>
                <Form.Item
                  label="Resistance HT P2 "
                  className="show_item_input"
                  name="Resistance_HT_P2">
                  <Input
                    type="number"
                    tabIndex={2}
                    placeholder="Resistance HT P2"
                    onChange={e => {
                      UpdateData(
                        'Resistance_ht_P2',
                        e.target.value,
                        setFinaldata
                      );
                    }}
                  />
                </Form.Item>
              </Row>
              <Row style={{justifyContent: 'center'}}>
                <Form.Item
                  label="Resistance BT "
                  className="show_item_input"
                  name="Resistance_BT">
                  <Input
                    type="number"
                    tabIndex={2}
                    placeholder="Resistance BT"
                    onChange={e => {
                      UpdateData('Resistance_bt', e.target.value, setFinaldata);
                    }}
                  />
                </Form.Item>
              </Row>
            </>
          ) : (
            <>
              {' '}
              <Row style={{justifyContent: 'center'}}>
                <Form.Item className="show_item">Resistance BT</Form.Item>
              </Row>
              <Row style={{justifyContent: 'center'}}>
                <Form.Item
                  key="X1_X2"
                  style={{width: '10%', marginRight: '5px'}}
                  label="X1_X2"
                  name="X1_X2"
                  rules={[{required: true, message: 'Champ Requis'}]}>
                  <Input
                    ref={inputEl}
                    tabIndex={1}
                    placeholder="X1-X2"
                    onChange={e => {
                      UpdateData('X1_X2', e.target.value, setFinaldata);
                    }}
                  />
                </Form.Item>
                <Form.Item
                  key="X1_X3"
                  style={{width: '10%', marginRight: '5px'}}
                  label="X1_X3"
                  name="X1_X3"
                  rules={[{required: true, message: 'Champ Requis'}]}>
                  <Input
                    tabIndex={2}
                    placeholder="X1-X3"
                    onChange={e => {
                      UpdateData('X1_X3', e.target.value, setFinaldata);
                    }}
                  />
                </Form.Item>
                <Form.Item
                  key="X2_X3"
                  style={{width: '10%', marginRight: '5px'}}
                  label="X2_X3"
                  name="X2_X3"
                  rules={[{required: true, message: 'Champ Requis'}]}>
                  <Input
                    tabIndex={3}
                    placeholder="X2-X3"
                    onChange={e => {
                      UpdateData('X2_X3', e.target.value, setFinaldata);
                    }}
                  />
                </Form.Item>
              </Row>
              <Row style={{justifyContent: 'center'}}>
                <Form.Item className="show_item">Position 1</Form.Item>
              </Row>
              <Row style={{justifyContent: 'center'}}>
                <Form.Item
                  key="H1_H2_P1"
                  style={{width: '10%', marginRight: '5px'}}
                  label="H1_H2"
                  name="H1_H2_P1"
                  rules={[{required: true, message: 'Champ Requis'}]}>
                  <Input
                    tabIndex={4}
                    placeholder="H1-H2_P1"
                    onChange={e => {
                      UpdateData('H1_H2_P1', e.target.value, setFinaldata);
                    }}
                  />
                </Form.Item>
                <Form.Item
                  key="H1_H3_P1"
                  style={{width: '10%', marginRight: '5px'}}
                  label="H1_H3"
                  name="H1_H3_P1"
                  rules={[{required: true, message: 'Champ Requis'}]}>
                  <Input
                    tabIndex={5}
                    placeholder="H1-H3_P1"
                    onChange={e => {
                      UpdateData('H1_H3_P1', e.target.value, setFinaldata);
                    }}
                  />
                </Form.Item>
                <Form.Item
                  key="H2_H3_P1"
                  style={{width: '10%', marginRight: '5px'}}
                  label="H2_H3"
                  name="H2_H3_P1"
                  rules={[{required: true, message: 'Champ Requis'}]}>
                  <Input
                    tabIndex={6}
                    placeholder="H2-H3_P1"
                    onChange={e => {
                      UpdateData('H2_H3_P1', e.target.value, setFinaldata);
                    }}
                  />
                </Form.Item>
              </Row>
              <Row style={{justifyContent: 'center'}}>
                <Form.Item className="show_item">Position 2</Form.Item>
              </Row>
              <Row style={{justifyContent: 'center'}}>
                <Form.Item
                  key="H1_H2_P2"
                  style={{width: '10%', marginRight: '5px'}}
                  label="H1_H2"
                  name="H1_H2_P2"
                  rules={[{required: true, message: 'Champ Requis'}]}>
                  <Input
                    tabIndex={7}
                    placeholder="H1-H2_P2"
                    onChange={e => {
                      UpdateData('H1_H2_P2', e.target.value, setFinaldata);
                    }}
                  />
                </Form.Item>
                <Form.Item
                  key="H1_H3_P2"
                  style={{width: '10%', marginRight: '5px'}}
                  label="H1_H3"
                  name="H1_H3_P2"
                  rules={[{required: true, message: 'Champ Requis'}]}>
                  <Input
                    tabIndex={8}
                    placeholder="H1-H3_P2"
                    onChange={e => {
                      UpdateData('H1_H3_P2', e.target.value, setFinaldata);
                    }}
                  />
                </Form.Item>
                <Form.Item
                  key="H2_H3_P2"
                  style={{width: '10%', marginRight: '5px'}}
                  label="H2_H3"
                  name="H2_H3_P2"
                  rules={[{required: true, message: 'Champ Requis'}]}>
                  <Input
                    tabIndex={9}
                    placeholder="H2-H3_P2"
                    onChange={e => {
                      UpdateData('H2_H3_P2', e.target.value, setFinaldata);
                    }}
                  />
                </Form.Item>
              </Row>
            </>
          ))}
      </div>
    </div>
  );
}
