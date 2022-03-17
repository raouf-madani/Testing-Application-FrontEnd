import React, {useState, useRef, useEffect} from 'react';
import {
  Form,
  Input,
  Row,
  Divider,
  Select,
  Radio,
  Button,
  Checkbox,
  Alert,
} from 'antd';

export default function Resistance({
  Finaldata,
  UpdateData,
  miseenplaceok,
  setFinaldata,
  error,
}) {
  const inputEl = useRef(null);
  useEffect(() => {
    if (inputEl.current) {
      inputEl.current.focus();
    }
  }, [inputEl]);
  const [validationchamps, setvalidationchamps] = useState(false);
  const validationTest = () => {
    if (Finaldata.Perte_a_charge.Resistance_ht_P1 >= 10) {
      UpdateData('testValidation', true, setFinaldata);
    } else {
      if (Finaldata.Perte_a_charge.Resistance_ht_P1 !== '') {
        error('Le Test de Résistance est echoué...');
      } else {
        setvalidationchamps(true);
      }
    }
  };
  return (
    <div className="Containertest">
      <Divider
        dashed
        orientation="left"
        style={{color: '#503662', marginBottom: '40px'}}>
        <h3>Résistances</h3>
      </Divider>
      <div>
        <Row style={{justifyContent: 'center'}}>
          <Form.Item
            label="Résistance HT P1"
            name="Resistance_HT_P1"
            className="show_item_input">
            <Input
              type="number"
              ref={inputEl}
              step="0.0001"
              placeholder="Position 1"
              onChange={e => {
                UpdateData('Resistance_ht_P1', e.target.value, setFinaldata);
                Finaldata.Perte_a_charge.Resistance_ht_P1 < 100 &&
                  UpdateData('testValidation', false, setFinaldata);
                setvalidationchamps(false);
              }}
            />
          </Form.Item>
          <Form.Item
            label="Résistance HT P2"
            name="Resistance_HT_P2"
            className="show_item_input">
            <Input
              type="number"
              step="0.0001"
              placeholder="Position 2"
              onChange={e =>
                UpdateData('Resistance_ht_P2', e.target.value, setFinaldata)
              }
            />
          </Form.Item>
        </Row>
        <Row style={{justifyContent: 'center'}}>
          <Form.Item
            label="Résistance BT"
            name="Resistance_BT"
            className="show_item_input">
            <Input
              type="number"
              step="0.001"
              placeholder="Resistance BT"
              onChange={e =>
                UpdateData('Resistance_bt', e.target.value, setFinaldata)
              }
            />
          </Form.Item>
        </Row>
        {validationchamps && (
          <Row justify="center">
            <Alert
              message="Veuillez ne pas laisser les champs vides"
              type="error"
            />
          </Row>
        )}

        <Row style={{justifyContent: 'center'}}>
          {Finaldata.Perte_a_charge.testValidation ? (
            <Alert
              message="teste de Résistance Réussit"
              type="success"
              showIcon
            />
          ) : (
            <Form.Item
              label="Validation"
              name="testValidation"
              rules={[{required: true, message: 'Action Requise'}]}>
              {' '}
              <Button onClick={() => validationTest()}>Valider</Button>
            </Form.Item>
          )}
        </Row>
      </div>
    </div>
  );
}
