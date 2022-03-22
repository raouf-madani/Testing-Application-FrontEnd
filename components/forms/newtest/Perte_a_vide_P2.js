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

export default function Perte_a_vide({
  commande,
  Finaldata,
  NewMisePlace,
  UpdateData,
  miseenplaceok,
  setFinaldata,
  setNewMisePlace,
  error,
}) {
  const inputEl = useRef(null);
  useEffect(() => {
    if (inputEl.current) {
      inputEl.current.focus();
    }
  }, [inputEl]);

  const Multiplicateur_Volts = [
    {label: 0.4, value: 0.4},
    {label: 1, value: 1},
    {label: 2, value: 2},
    {label: 4, value: 4},
    {label: 8, value: 8},
    {label: 16, value: 16},
    {label: 24, value: 24},
    {label: 40, value: 40},
    {label: 48, value: 48},
  ];
  const Multiplicateur_Amperes = [
    {label: 1, value: 1},
    {label: 2, value: 2},
    {label: 5, value: 5},
    {label: 10, value: 10},
    {label: 20, value: 20},
  ];
  const tblDataEntry = {
    Volt_BT: 10,
    PVPERCENT: 20,
    PV_Gar: 15,
    Temp_PV_Gar: 30,
    Courent_Exc_Gar: 6,
  };
  const table_tolerance = {PV: 3, INTPV: 5, IEXC: 10, INTIEXC: 20};
  const Formules = {
    Tension_Nominale: tblDataEntry.Volt_BT * tblDataEntry.PVPERCENT,
    PV_Courant_mesuré: miseenplaceok
      ? miseenplaceok.Perte_a_Vide.Multiplicateur_amperes_P2 *
        Finaldata.Perte_a_Vide.Courant_excitation_mesurés_P2
      : NewMisePlace.Perte_a_Vide.Multiplicateur_amperes_P2 *
        Finaldata.Perte_a_Vide.Courant_excitation_mesurés_P2,
    Perte_A_Vide_mesuré: miseenplaceok
      ? miseenplaceok.Perte_a_Vide.Multiplicateur_amperes_P2 *
        miseenplaceok.Perte_a_Vide.Multiplicateur_volts_P2 *
        Finaldata.Perte_a_Vide.Pertes_mesurés_P2
      : NewMisePlace.Perte_a_Vide.Multiplicateur_amperes_P2 *
        NewMisePlace.Perte_a_Vide.Multiplicateur_volts_P2 *
        Finaldata.Perte_a_Vide.Pertes_mesurés_P2,
    RatioPV: miseenplaceok
      ? miseenplaceok.Perte_a_Vide.Multiplicateur_amperes_P2 *
          miseenplaceok.Perte_a_Vide.Multiplicateur_volts_P2 *
          Finaldata.Perte_a_Vide.Pertes_mesurés_P2 -
        miseenplaceok.Perte_a_Vide.Perte_table_P2
      : NewMisePlace.Perte_a_Vide.Multiplicateur_amperes_P2 *
          NewMisePlace.Perte_a_Vide.Multiplicateur_volts_P2 *
          Finaldata.Perte_a_Vide.Pertes_mesurés_P2 -
        NewMisePlace.Perte_a_Vide.Perte_table_P2,
    Perte_A_Vide_85:
      table_tolerance.PV *
      (1 +
        (Finaldata.temperature_affected - tblDataEntry.Temp_PV_Gar) * 0.00065),
    Perte_A_Vide_Eff:
      table_tolerance.PV *
      (1 + (Finaldata.temperature_affected - 20.0) * 0.00065),
    PV_Err_Gar:
      ((table_tolerance.PV *
        (1 +
          (Finaldata.temperature_affected - tblDataEntry.Temp_PV_Gar) *
            0.00065) -
        tblDataEntry.PV_Gar) /
        tblDataEntry.PV_Gar) *
      100,
    Courant_BT: (commande.kva * 1000) / tblDataEntry.Volt_BT,
  };
  const validationTest = () => {
    let Courant_Exc =
      Finaldata.Perte_a_Vide.Courant_excitation_mesurés_P2 == ''
        ? alert('affecter le courrant dexcitation mesure')
        : (Finaldata.Perte_a_Vide.Courant_excitation_mesurés_P2 * 100) /
          Formules.Courant_BT;
    let Courant_Exc_Err_Gar =
      ((Courant_Exc - tblDataEntry.Courent_Exc_Gar) /
        tblDataEntry.Courent_Exc_Gar) *
      100;

    // beginning the test
    if (Formules.PV_Err_Gar > table_tolerance.PV) {
      error('Perte à vide dépasse tolérance de la norme....');
    } else {
      Formules.PV_Err_Gar > table_tolerance.INTPV &&
        alert('AVERTISSEMENT : Perte à vide dépasse tolérance interne');

      if (Courant_Exc_Err_Gar > table_tolerance.IEXC) {
        error('Courant dexcitation dépasse tolérance de la norme.....');
      } else {
        Courant_Exc_Err_Gar > table_tolerance.INTIEXC &&
          alert(
            "AVERTISSEMENT: Courant d'excitation dépasse tolérance interne."
          );
        UpdateData('testValidation_P2', true, setFinaldata);
      }
    }
  };

  return (
    <div className="Containertest">
      <Divider
        dashed
        orientation="left"
        style={{color: '#503662', marginBottom: '40px'}}>
        <h3>Pertes à vide Position 2</h3>
      </Divider>
      <div>
        <Row style={{justifyContent: 'center'}}>
          <Form.Item className="show_item">
            Tension_Nominale :{Formules.Tension_Nominale}
          </Form.Item>
        </Row>
        <Row style={{justifyContent: 'center'}}>
          <Form.Item className="show_item">
            Tension à appliquer Position 2 :
            {miseenplaceok
              ? Formules.Tension_Nominale /
                miseenplaceok.Perte_a_Vide.Multiplicateur_volts_P2
              : Formules.Tension_Nominale /
                NewMisePlace.Perte_a_Vide.Multiplicateur_volts_P2}
          </Form.Item>
        </Row>

        <Row style={{justifyContent: 'center'}}>
          <Form.Item className="show_item">
            PV_Courant_mesuré :{Formules.PV_Courant_mesuré}
          </Form.Item>
        </Row>

        <Row style={{justifyContent: 'center'}}>
          <Form.Item className="show_item">
            Perte_A_Vide_mesuré :{Formules.Perte_A_Vide_mesuré}
          </Form.Item>
        </Row>
        <Row style={{justifyContent: 'center'}}>
          <Form.Item className="show_item">
            RatioPV :{Formules.RatioPV}
          </Form.Item>
        </Row>
        <Row style={{justifyContent: 'center'}}>
          <Form.Item className="show_item">
            Perte_A_Vide_85 :{Formules.Perte_A_Vide_85}
          </Form.Item>
        </Row>
        <Row style={{justifyContent: 'center'}}>
          <Form.Item className="show_item">
            Perte_A_Vide_Eff :{Formules.Perte_A_Vide_Eff}
          </Form.Item>
        </Row>
        <Row style={{justifyContent: 'center'}}>
          <Form.Item className="show_item">
            PV_Err_Gar :{Formules.PV_Err_Gar}
          </Form.Item>
        </Row>
        <Row style={{justifyContent: 'center'}}>
          <Form.Item className="show_item">
            Courant_BT :{Formules.Courant_BT}
          </Form.Item>
        </Row>

        {miseenplaceok && (
          <div>
            <Row style={{justifyContent: 'center'}}>
              <Form.Item className="show_item">
                Multiplicateur Volts :{' '}
                {miseenplaceok.Perte_a_Vide.Multiplicateur_volts_P2}
              </Form.Item>
            </Row>
            <Row style={{justifyContent: 'center'}}>
              <Form.Item className="show_item">
                Multiplicateur Ampéres :{' '}
                {miseenplaceok.Perte_a_Vide.Multiplicateur_amperes_P2}
              </Form.Item>
            </Row>
          </div>
        )}
        {!miseenplaceok && (
          <div>
            <Row style={{justifyContent: 'center'}}>
              <Form.Item
                label="Multiplicateur Volts"
                name="multiplicateur_Volts_P2"
                className="show_item_input">
                <Select
                  placeholder="Multiplicateur Volts"
                  showSearch
                  ref={inputEl}
                  tabIndex={1}
                  initialvalues=""
                  options={Multiplicateur_Volts}
                  onChange={value => {
                    UpdateData(
                      'Multiplicateur_volts_P2',
                      value,
                      setNewMisePlace
                    );
                  }}
                />
              </Form.Item>
            </Row>
            <Row style={{justifyContent: 'center'}}>
              <Form.Item
                label="Multiplicateur Ampéres"
                name="Multiplicateur_Amprers_P2"
                className="show_item_input">
                <Select
                  placeholder="Multiplicateur Ampéres"
                  showSearch
                  initialvalues=""
                  tabIndex={2}
                  options={Multiplicateur_Amperes}
                  onChange={value => {
                    UpdateData(
                      'Multiplicateur_amperes_P2',
                      value,
                      setNewMisePlace
                    );
                  }}
                />
              </Form.Item>
            </Row>
          </div>
        )}
        <Row style={{justifyContent: 'center'}}>
          <Form.Item
            label="Pertes à vide mesurées (W)"
            name="Pertes_Mesurés_P2"
            className="show_item_input">
            <Input
              ref={!miseenplaceok ? null : inputEl}
              type="number"
              tabIndex={4}
              step="0.0001"
              placeholder="Position 2"
              onChange={e =>
                UpdateData('Pertes_mesurés_P2', e.target.value, setFinaldata)
              }
            />
          </Form.Item>
        </Row>
        <Row style={{justifyContent: 'center'}}>
          <Form.Item
            label="Courant d’excitation mesuré (A)"
            name="Courant_Excitation_Mesurés_P2"
            className="show_item_input">
            <Input
              type="number"
              tabIndex={5}
              step="0.0001"
              placeholder="Position 2"
              onChange={e =>
                UpdateData(
                  'Courant_excitation_mesurés_P2',
                  e.target.value,
                  setFinaldata
                )
              }
            />
          </Form.Item>
        </Row>

        <Row style={{justifyContent: 'center'}}>
          {Finaldata.Perte_a_Vide.testValidation_P2 ? (
            <Alert
              message="teste de Perte a vide Réussit"
              type="success"
              showIcon
            />
          ) : (
            <Form.Item
              label="Validation"
              name="testValidation"
              rules={[{required: false, message: 'Action Requise'}]}>
              {' '}
              <Button onClick={() => validationTest()}>Valider</Button>
            </Form.Item>
          )}
        </Row>
      </div>
    </div>
  );
}
