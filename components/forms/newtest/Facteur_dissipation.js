import React, {useState, useRef, useEffect} from 'react';
import {Form, Input, Space, Select, DatePicker, Row, Divider} from 'antd';

export default function Facteur_dissipation() {
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
        <h3>Facteur Dissipation</h3>
      </Divider>{' '}
      <div>
        <Row style={{justifyContent: 'center'}}>
          <Form.Item label="H" style={{marginBottom: 5, width: '30%'}}>
            <Form.Item
              name="H"
              noStyle
              rules={[{required: true, message: 'H required'}]}>
              <Input
                ref={inputEl}
                type="number"
                tabIndex={1}
                min={10}
                max={1000}
                placeholder="H"
              />
            </Form.Item>
          </Form.Item>
        </Row>
        <Row style={{justifyContent: 'center'}}>
          <Form.Item label="L" style={{marginBottom: 0, width: '30%'}}>
            <Form.Item name="L" noStyle>
              <Input
                type="number"
                tabIndex={2}
                min={10}
                max={1000}
                placeholder="L"
              />
            </Form.Item>
          </Form.Item>
        </Row>
      </div>
    </div>
  );
}
