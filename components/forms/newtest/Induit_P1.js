import React, {useState, useRef, useEffect} from 'react';
import {Form, Input, Radio, Row, Divider, Select} from 'antd';

export default function Induit({
  UpdateData,
  miseenplaceok,
  setFinaldata,
  setNewMisePlace,
  error,
  // props button reussi
  next,
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
        <h3>Induit Position 1</h3>{' '}
      </Divider>
      <div>
        {miseenplaceok && (
          <div>
            <Row
              style={{
                justifyContent: 'center',
              }}>
              <Form.Item
                className="show_item"
                style={{
                  width: '40%',
                  marginBottom: '15px',
                }}>
                Réactance SKE77 : {miseenplaceok.Induit.Réactance_ske77_P1}
              </Form.Item>
            </Row>
            <Row
              style={{
                justifyContent: 'center',
              }}>
              <Form.Item className="show_item">
                Réactance SKE17 : {miseenplaceok.Induit.Réactance_ske17_P1}
              </Form.Item>
            </Row>
            <Row
              style={{
                justifyContent: 'center',
              }}>
              <Form.Item className="show_item">
                Fréquence : {miseenplaceok.Induit.Fréquence_genératrice_P1}
              </Form.Item>
            </Row>
          </div>
        )}
        {!miseenplaceok && (
          <div>
            <Row style={{justifyContent: 'center'}}>
              <Form.Item
                name="Réactance_SKE77_P1"
                label="Réactance SKE77"
                className="show_item_input"
                rules={[{required: true, message: 'Champ Requis'}]}>
                <Select
                  placeholder="Réactance SKE77"
                  showSearch
                  ref={inputEl}
                  initialvalues=""
                  tabIndex={1}
                  options={SKE77}
                  onChange={value => {
                    UpdateData('Réactance_ske77_P1', value, setNewMisePlace);
                  }}
                />
              </Form.Item>
            </Row>
            <Row style={{justifyContent: 'center'}}>
              <Form.Item
                label="Réactance SKE17"
                name="Réactance_SKE17_P1"
                rules={[{required: true, message: 'Champ Requis'}]}
                className="show_item_input">
                <Select
                  placeholder="Réactance SKE17"
                  showSearch
                  initialvalues=""
                  tabIndex={2}
                  options={SKE17}
                  onChange={value => {
                    UpdateData('Réactance_ske17_P1', value, setNewMisePlace);
                  }}
                />
              </Form.Item>
            </Row>
            <Row
              style={{
                justifyContent: 'center',
              }}>
              <Form.Item
                label="Fréquence "
                name="Fréquence_Genératrice_P1"
                rules={[{required: true, message: 'Champ Requis'}]}
                className="show_item_input">
                <Select
                  placeholder="Fréquence"
                  showSearch
                  tabIndex={3}
                  initialvalues=""
                  options={Frequence_Gen}
                  onChange={value => {
                    UpdateData(
                      'Fréquence_genératrice_P1',
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
            Tension applique position1 : 20V
          </Form.Item>
        </Row>
        {!miseenplaceok ? (
          <Row
            style={{
              justifyContent: 'center',
              marginBottom: '10px',
            }}>
            <Form.Item
              name="Commentaire"
              label="Commentaire"
              style={{
                width: '60%',
                marginBottom: '5px',
              }}>
              <TextArea
                ref={!miseenplaceok ? null : inputEl}
                tabIndex={!miseenplaceok ? 4 : 1}
                rows={4}
                onChange={e => {
                  UpdateData('Comment', e.target.value, setFinaldata);
                }}
              />
            </Form.Item>
          </Row>
        ) : (
          <>
            <Row
              style={{
                justifyContent: 'center',
              }}>
              <Form.Item className="show_item">
                {miseenplaceok.Induit.Comment}
              </Form.Item>
            </Row>
          </>
        )}
        <Row style={{justifyContent: 'center'}}>
          <Form.Item
            name="Resultat_P1"
            rules={[{required: true, message: 'Champ Requis'}]}>
            <Radio.Group initialvalues="reussit" buttonStyle="solid">
              <Radio.Button
                tabIndex={!miseenplaceok ? 5 : 2}
                style={{margin: '5px'}}
                value="reussit"
                onClick={() =>
                  UpdateData('Test_Induit_P1', true, setFinaldata)
                }>
                reussit
              </Radio.Button>
              <Radio.Button
                style={{margin: '5px'}}
                onClick={() => {
                  UpdateData('Test_Induit_P1', false, setFinaldata);
                  error('Le Test de Induit Position 1 est echoué...');
                }}
                value="echoue">
                echoue
              </Radio.Button>
            </Radio.Group>
          </Form.Item>
        </Row>
      </div>
    </div>
  );
}
