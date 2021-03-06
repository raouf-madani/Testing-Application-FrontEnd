import React, {useState, useRef, useEffect} from 'react';
import {Form, Input, Button, Select, DatePicker, Row, Divider} from 'antd';

export default function RIV({UpdateData, setNewMisePlace, setFinaldata}) {
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
        style={{color: '#503662', marginBottom: '40px'}}>
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
              step="0.0001"
              placeholder="RIV"
              onChange={e => UpdateData('riv', e.target.value, setFinaldata)}
            />
          </Form.Item>
        </Row>
      </div>
    </div>
  );
}
