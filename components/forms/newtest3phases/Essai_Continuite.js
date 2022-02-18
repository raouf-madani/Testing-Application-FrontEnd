import React, {useState} from 'react';
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

export default function Essai_Continuite() {
  return (
    <div className="Containertest">
      <Divider
        dashed
        orientation="left"
        style={{color: '#34b1ab', marginBottom: '40px'}}>
        <h3>Essai Continuite</h3>
      </Divider>
      <div> Essai Continuite on Road</div>
    </div>
  );
}
