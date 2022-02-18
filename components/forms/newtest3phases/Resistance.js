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

export default function Resistance_BT({commande, mise_en_placeById}) {
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
        <h3>Resistance </h3>
      </Divider>
      <div>
        {!mise_en_placeById ? (
          commande.type_command == '1phase' ? (
            <>
              {/* <Row style={{justifyContent: 'center'}}>
                <Form.Item className="show_item">Position 1</Form.Item>
              </Row> */}
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
                  key="X1-X2"
                  style={{width: '10%', marginRight: '5px'}}
                  label="X1-X2"
                  name="X1-X2"
                  rules={[{required: true, message: 'Champ Requis'}]}>
                  <Input ref={inputEl} tabIndex={1} placeholder="X1-X2" />
                </Form.Item>
                <Form.Item
                  key="X1-X3"
                  style={{width: '10%', marginRight: '5px'}}
                  label="X1-X3"
                  name="X1-X3"
                  rules={[{required: true, message: 'Champ Requis'}]}>
                  <Input tabIndex={2} placeholder="X1-X3" />
                </Form.Item>
                <Form.Item
                  key="X2-X3"
                  style={{width: '10%', marginRight: '5px'}}
                  label="X2-X3"
                  name="X2-X3"
                  rules={[{required: true, message: 'Champ Requis'}]}>
                  <Input tabIndex={3} placeholder="X2-X3" />
                </Form.Item>
              </Row>
              <Row style={{justifyContent: 'center'}}>
                <Form.Item className="show_item">Position 1</Form.Item>
              </Row>
              <Row style={{justifyContent: 'center'}}>
                <Form.Item
                  key="H1-H2_P1"
                  style={{width: '10%', marginRight: '5px'}}
                  label="H1-H2"
                  name="H1-H2_P1"
                  rules={[{required: true, message: 'Champ Requis'}]}>
                  <Input tabIndex={4} placeholder="H1-H2_P1" />
                </Form.Item>
                <Form.Item
                  key="H1-H3_P1"
                  style={{width: '10%', marginRight: '5px'}}
                  label="H1-H3"
                  name="H1-H3_P1"
                  rules={[{required: true, message: 'Champ Requis'}]}>
                  <Input tabIndex={5} placeholder="H1-H3_P1" />
                </Form.Item>
                <Form.Item
                  key="H2-H3_P1"
                  style={{width: '10%', marginRight: '5px'}}
                  label="H2-H3"
                  name="H2-H3_P1"
                  rules={[{required: true, message: 'Champ Requis'}]}>
                  <Input tabIndex={6} placeholder="H2-H3_P1" />
                </Form.Item>
              </Row>
              <Row style={{justifyContent: 'center'}}>
                <Form.Item className="show_item">Position 2</Form.Item>
              </Row>
              <Row style={{justifyContent: 'center'}}>
                <Form.Item
                  key="H1-H2_P2"
                  style={{width: '10%', marginRight: '5px'}}
                  label="H1-H2"
                  name="H1-H2_P2"
                  rules={[{required: true, message: 'Champ Requis'}]}>
                  <Input tabIndex={7} placeholder="H1-H2_P2" />
                </Form.Item>
                <Form.Item
                  key="H1-H3_P2"
                  style={{width: '10%', marginRight: '5px'}}
                  label="H1-H3"
                  name="H1-H3_P2"
                  rules={[{required: true, message: 'Champ Requis'}]}>
                  <Input tabIndex={8} placeholder="H1-H3_P2" />
                </Form.Item>
                <Form.Item
                  key="H2-H3_P2"
                  style={{width: '10%', marginRight: '5px'}}
                  label="H2-H3"
                  name="H2-H3_P2"
                  rules={[{required: true, message: 'Champ Requis'}]}>
                  <Input tabIndex={9} placeholder="H2-H3_P2" />
                </Form.Item>
              </Row>
            </>
          )
        ) : (
          <>test regulier on Road</>
        )}
      </div>
    </div>
  );
}
