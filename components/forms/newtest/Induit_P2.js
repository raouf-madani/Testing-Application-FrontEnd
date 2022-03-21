import React, {useState, useRef, useEffect} from 'react';
import {Form, Input, Radio, Row, Divider, Select} from 'antd';

export default function Induit({
  UpdateData,
  miseenplaceok,
  Finaldata,
  setFinaldata,
  setNewMisePlace,
  error,
}) {
  const [selectedRadio, setselectedRadio] = useState(
    Finaldata.Induit.Test_Induit_P2
  );

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
    {label: '1:16', value: '1:16'},
    {label: '2:32', value: '2:32'},
  ];
  const SKE17 = [
    {label: 'off', value: 'off'},
    {label: '1:1', value: '1:1'},
    {label: '2:3', value: '2:3'},
    {label: '3:5', value: '3:5'},
    {label: '4:7', value: '4:7'},
    {label: '5:9', value: '5:9'},
    {label: '6:10', value: '6:10'},
    {label: '7:11', value: '7:11'},
    {label: '8:12', value: '8:12'},
    {label: '9:13', value: '9:13'},
    {label: '10:14', value: '10:14'},
    {label: '11:15', value: '11:15'},
  ];
  return (
    <div className="Containertest">
      <Divider
        dashed
        orientation="left"
        style={{color: '#503662', marginBottom: '40px'}}>
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
            Tension à appliquer position 2 : 20V
          </Form.Item>
        </Row>
        {!miseenplaceok ? (
          <Row
            style={{
              justifyContent: 'center',
              marginBottom: '10px',
            }}>
            <Form.Item
              name="Commentaire_P2"
              label="Commentaire"
              style={{
                width: '60%',
                marginBottom: '5px',
              }}>
              <TextArea
                tabIndex={!miseenplaceok ? 4 : 1}
                rows={4}
                onChange={e => {
                  UpdateData('Comment_P2', e.target.value, setFinaldata);
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
                {miseenplaceok.Induit.Comment_P2}
              </Form.Item>
            </Row>
          </>
        )}

        <Row style={{justifyContent: 'center'}}>
          <Form.Item
            name="Resultat_P2"
            style={{
              display: 'inline-block',
              width: 'calc(50% - 8px)',
              margin: '0 8px',
            }}>
            <Radio.Group
              defaultValue={Finaldata.Induit.Test_Induit_P2 && 'Réussi'}
              buttonStyle="solid">
              <Radio.Button
                ref={!miseenplaceok ? null : inputEl}
                tabIndex={!miseenplaceok ? 4 : 1}
                style={{margin: '5px'}}
                value="Réussi"
                onKeyPress={() => {
                  UpdateData('Test_Induit_P2', true, setFinaldata);
                  console.log('enter pressed');
                }}
                onClick={() => {
                  UpdateData('Test_Induit_P2', true, setFinaldata);
                  console.log('mouse pressed');
                }}>
                Réussi
              </Radio.Button>
              <Radio.Button
                onClick={() => {
                  UpdateData('Test_Induit_P2', false, setFinaldata);
                  error('Le Test de Induit Position 2 est echoué...');
                }}
                style={{margin: '5px'}}
                value="Échoué">
                Échoué
              </Radio.Button>
            </Radio.Group>
          </Form.Item>
        </Row>
        {selectedRadio}
      </div>
    </div>
  );
}
