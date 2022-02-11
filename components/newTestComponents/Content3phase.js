import React, {useState, useEffect} from 'react';
import EtapeContent from '@/components/newTestContent';
import EtapeContent3phase from '@/components/newTestContent3phases';
import DisplayComponent from '@/components/Timer';

import {Steps, Button, Row, Col, Divider, Form, Modal, Space, Spin} from 'antd';

const {Step} = Steps;
import {Fakedata, Mise_NewData} from '@/FakeData/TestData';

const steps3phase = [
  {
    title: 'Nouveau Test',
    content: 'newtest',
  },
  {
    title: 'Ratio/Polarite',
    content: 'Ratio/Polarite',
  },
  {
    title: 'Induit',
    content: 'Induit',
  },
  {
    title: 'Hipot',
    content: 'Hipot',
  },
  {
    title: 'Pertes a Vide',
    content: 'Pertes a Vide',
  },
  {
    title: 'RIV ',
    content: 'RIV',
  },
  {
    title: 'Pertes a Charge',
    content: 'Pertes a Charge',
  },
  {
    title: 'Décharges Partielles',
    content: 'Décharges Partielles',
  },
  {
    title: 'Facteur de dissipation',
    content: 'Facteur de dissipation',
  },

  {
    title: 'Signature',
    content: 'Signature',
  },
];

function ContentAndSteps1phase({
  mise_en_placeById,
  test_type_selected,
  current,
  Finaldata,
  Prise,
  setFinaldata,
  setNewMisePlace,
  error,
}) {
  return (
    <div>
      <Row justify="space-between">
        <Col
          key="steps"
          span={6}
          style={{
            padding: '10px',
            borderRadius: '10px',
            boxShadow: '3px 4px 5px 1px rgb(163 234 237 / 77%)',
          }}>
          <Steps size="small" current={current} direction="vertical">
            {steps3phase.map(item => (
              <Step key={item.title} id="newtest" title={item.title} />
            ))}
          </Steps>
        </Col>
        <Col
          key="content"
          span={17}
          style={{
            borderRadius: '10px',
          }}>
          <div className="steps-content">
            {/* <EtapeContent
              UpdateData={UpdateData}
              etapeName={steps3phase[current].content}
              mise_en_placeById={mise_en_placeById}
              test_type_selected={test_type_selected}
              Finaldata={Finaldata}
              Prise={Prise}
              setFinaldata={setFinaldata}
              setNewMisePlace={setNewMisePlace}
              error={error}
            /> */}
            <h1> 3 phase content on Road ...</h1>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default ContentAndSteps1phase;
