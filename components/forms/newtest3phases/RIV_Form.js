import React, {useState, useRef, useEffect} from 'react';
import {Form, Input, Button, Select, DatePicker, Row, Divider} from 'antd';

export default function RIV({UpdateData, setNewMisePlace}) {
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
        <h3>Riv</h3>
      </Divider>
      <div>
        <Row style={{justifyContent: 'center'}}>
          <Form.Item
            label="RIV"
            name="Riv"
            rules={[{required: true, message: 'Champ Requis'}]}
            style={{display: 'inline-block', width: '40%'}}>
            <Input
              ref={inputEl}
              type="number"
              tabIndex={1}
              min={10}
              max={1000}
              step="0.0001"
              placeholder="RIV"
              onChange={e => UpdateData('Riv', e.target.value, setNewMisePlace)}
            />
          </Form.Item>
        </Row>
      </div>
    </div>
  );
}
