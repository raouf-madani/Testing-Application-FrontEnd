import React, {useState, useRef, useEffect} from 'react';
import {UpdateData} from '@/actions/newtestupdate';

import {Form, Input, Space, Select, DatePicker, Row, Divider} from 'antd';

export default function Facteur_dissipation({setFinaldata}) {
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
                step="0.000001"
                tabIndex={1}
                placeholder="H"
                onChange={e => {
                  UpdateData('H', e.target.value, setFinaldata);
                }}
              />
            </Form.Item>
          </Form.Item>
        </Row>
        <Row style={{justifyContent: 'center'}}>
          <Form.Item label="L" style={{marginBottom: 0, width: '30%'}}>
            <Form.Item name="L" noStyle>
              <Input
                type="number"
                step="0.000001"
                tabIndex={2}
                placeholder="L"
                onChange={e => {
                  UpdateData('L', e.target.value, setFinaldata);
                }}
              />
            </Form.Item>
          </Form.Item>
        </Row>
      </div>
    </div>
  );
}
