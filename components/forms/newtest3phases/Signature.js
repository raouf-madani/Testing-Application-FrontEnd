import Head from 'next/head';
import React, {useState} from 'react';
import {useGetUser} from '@/actions/user';

import {Form, Input, Button, Select, DatePicker, Space, Divider} from 'antd';

export default function Signature({UpdateData, setFinaldata}) {
  const {data, loading} = useGetUser();
  const [signature, setsignature] = useState(false);

  return (
    <div className="Containertest">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Corinthia:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Divider
        dashed
        orientation="center"
        style={{color: '#34b1ab', marginBottom: '40px'}}>
        <h3>Signature et Gravure</h3>
      </Divider>
      {signature && (
        <h2 className="Signature">
          {data.given_name}
          {data.family_name}
        </h2>
      )}
      <Button
        onClick={() => {
          setsignature(true);
          UpdateData('id_employe', data.family_name, setFinaldata);
        }}>
        Signer
      </Button>
    </div>
  );
}
