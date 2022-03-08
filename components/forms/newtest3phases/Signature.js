import Head from 'next/head';
import React, {useState} from 'react';
import {UseGetUser} from '@/actions/user';

import {Form, Input, Button, Select, DatePicker, Space, Divider} from 'antd';

export default function Signature({UpdateData, setFinaldata}) {
  const {data, loading} = UseGetUser();
  const [signature, setsignature] = useState(false);

  return (
    <div className="Containertest">
      <Divider
        dashed
        orientation="center"
        style={{color: '#34b1ab', marginBottom: '40px'}}>
        <h3>Signature et Gravure</h3>
      </Divider>
      {signature && <h2 className="Signature">{data.nickname}</h2>}
      <Button
        onClick={() => {
          setsignature(true);
          UpdateData('id_employe', data.sub, setFinaldata);
        }}>
        Signer
      </Button>
    </div>
  );
}
