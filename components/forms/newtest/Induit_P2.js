import React, {useState, useRef, useEffect} from 'react';
import {Form, Input, Radio, Row, Divider, Select} from 'antd';

export default function Induit({
  UpdateData,
  miseenplaceok,
  setFinaldata,
  setNewMisePlace,
  error,
}) {
  const {TextArea} = Input;
  const inputEl = useRef(null);
  useEffect(() => {
    if (inputEl.current) {
      inputEl.current.focus();
    }
  }, [inputEl]);
  const Frequence_Gen = [
    {label: 400, value: 400},
    {label: 208, value: 208},
  ];
  const SKE77 = [
    {label: 'off', value: 'off'},
    {label: 16, value: 16},
    {label: 32, value: 32},
  ];
  const SKE17 = [
    {label: 'off', value: 'off'},
    {label: 1, value: 1},
    {label: 3, value: 3},
    {label: 5, value: 5},
    {label: 7, value: 7},
    {label: 9, value: 9},
    {label: 10, value: 10},
    {label: 11, value: 11},
    {label: 12, value: 12},
    {label: 13, value: 13},
    {label: 14, value: 14},
    {label: 15, value: 15},
  ];
  return (
    <div className="Containertest">
      <Divider
        dashed
        orientation="left"
        style={{color: '#34b1ab', marginBottom: '40px'}}>
        <h3>Induit Position 2</h3>{' '}
      </Divider>
      <div>
        {miseenplaceok && (
          <div>
            <Row
              style={{
                justifyContent: 'center',
              }}>
              <Form.Item className="show_item">
                Réactance SKE77 : {miseenplaceok.Induit.Réactance_ske77_P2}
              </Form.Item>{' '}
            </Row>
            <Row
              style={{
                justifyContent: 'center',
              }}>
              <Form.Item className="show_item">
                Réactance SKE17 : {miseenplaceok.Induit.Réactance_ske17_P2}
              </Form.Item>
            </Row>
            <Row
              style={{
                justifyContent: 'center',
              }}>
              <Form.Item className="show_item">
                Fréquence : {miseenplaceok.Induit.Fréquence_genératrice_P2}
              </Form.Item>
            </Row>
          </div>
        )}
        {!miseenplaceok && (
          <div>
            <Row style={{justifyContent: 'center'}}>
              <Form.Item
                label="Réactance SKE77"
                name="Réactance_SKE77_P2"
                className="show_item_input">
                <Select
                  placeholder="Réactance SKE77"
                  showSearch
                  ref={inputEl}
                  tabIndex={1}
                  initialvalues=""
                  options={SKE77}
                  onChange={value => {
                    UpdateData('Réactance_ske77_P2', value, setNewMisePlace);
                  }}
                />
              </Form.Item>
            </Row>
            <Row style={{justifyContent: 'center'}}>
              <Form.Item
                label="Réactance SKE17"
                name="Réactance_SKE17_P2"
                className="show_item_input">
                <Select
                  placeholder="Réactance SKE17"
                  showSearch
                  tabIndex={2}
                  initialvalues=""
                  options={SKE17}
                  onChange={value => {
                    UpdateData('Réactance_ske17_P2', value, setNewMisePlace);
                  }}
                />
              </Form.Item>
            </Row>
            <Row
              style={{
                justifyContent: 'center',
              }}>
              <Form.Item
                label="Fréquence"
                name="Fréquence_Genératrice_P2"
                className="show_item_input">
                <Select
                  placeholder="Fréquence"
                  showSearch
                  tabIndex={3}
                  initialvalues=""
                  options={Frequence_Gen}
                  onChange={value => {
                    UpdateData(
                      'Fréquence_genératrice_P2',
                      value,
                      setNewMisePlace
                    );
                  }}
                />
              </Form.Item>
            </Row>
          </div>
        )}
        <Row
          style={{
            justifyContent: 'center',
          }}>
          <Form.Item className="show_item">
            Tension applique position2 : 20V
          </Form.Item>
        </Row>

        <Row style={{justifyContent: 'center'}}>
          <Form.Item
            name="Resultat_P2"
            style={{
              display: 'inline-block',
              width: 'calc(50% - 8px)',
              margin: '0 8px',
            }}>
            <Radio.Group buttonStyle="solid">
              <Radio.Button
                ref={!miseenplaceok ? null : inputEl}
                tabIndex={!miseenplaceok ? 4 : 1}
                style={{margin: '5px'}}
                value={true}
                onClick={() =>
                  UpdateData('Test_Induit_P2', true, setFinaldata)
                }>
                reussit{' '}
              </Radio.Button>
              <Radio.Button
                onClick={() => {
                  UpdateData('Test_Induit_P2', false, setFinaldata);
                  error('Le Test de Induit Position 2 est echoué...');
                }}
                style={{margin: '5px'}}
                value={false}>
                echoue
              </Radio.Button>
            </Radio.Group>
          </Form.Item>
        </Row>
      </div>
    </div>
  );
}
