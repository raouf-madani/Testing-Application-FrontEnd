import React, {useState, useEffect, memo, useMemo} from 'react';
import Updat_mise_place_modal from '@/components/updat_mise_place';

import DisplayComponent from '@/components/Timer';

import {
  Steps,
  Button,
  message,
  Row,
  Col,
  Divider,
  Form,
  Card,
  Collapse,
  Modal,
  Alert,
  Input,
  InputNumber,
  Space,
  Tag,
  Select,
} from 'antd';
import {
  CheckOutlined,
  CloseCircleOutlined,
  HistoryOutlined,
} from '@ant-design/icons';
import Marquee from 'react-fast-marquee';
const {Panel} = Collapse;
const Haut = ({
  Finaldata,
  UpdateData,
  commande,
  setFinaldata,
  mise_en_placeById,
  Tests_length,
  useUpdateMisePlace,
  allCommandesById_length,
  temperature_noaffected,
  settemperature_noaffected,
}) => {
  const [miseenplacemodal, setmiseenplacemodal] = useState(false);
  const [mise_data, setmise_data] = useState(mise_en_placeById);
  const [updateMise_place, {data, error, loading}] = useUpdateMisePlace();
  const _updateMisePlace = async (id, data) => {
    await updateMise_place(id, data);
  };

  // useEffect(() => {
  //   const affecter = () => {
  //     if (temperature_noaffected) {
  //       UpdateData(
  //         'temperature_affected',
  //         temperature_noaffected,
  //         setFinaldata
  //       );
  //     }
  //   };
  //   affecter();
  // }, []);

  let initial_mise_placefrom_values = null;
  if (mise_data !== null) {
    initial_mise_placefrom_values = {
      //bornes initial data
      Borne_Rouge: mise_data.Bornes.Borne_rouge,
      Borne_Verte: mise_data.Bornes.Borne_verte,
      Borne_Jaune: mise_data.Bornes.Borne_jaune,
      //ratio initial data
      //P1
      Volts_Apluiqés_P1: mise_data.Ratio.Volts_apluiqés_P1,
      Volts_HT_P1: mise_data.Ratio.Volts_ht_P1,
      Polarité_Volts_P1: mise_data.Ratio.Polarite_volts_P1,
      //P2
      Volts_Apluiqés_P2: mise_data.Ratio.Volts_apluiqés_P2,
      Volts_HT_P2: mise_data.Ratio.Volts_ht_P2,
      Polarité_Volts_P2: mise_data.Ratio.Polarite_volts_P2,

      // Induit
      //P1
      Fréquence_Genératrice_P1: mise_data.Induit.Fréquence_genératrice_P1,
      Réactance_SKE77_P1: mise_data.Induit.Réactance_ske77_P1,
      Réactance_SKE17_P1: mise_data.Induit.Réactance_ske17_P1,
      //P2
      Fréquence_Genératrice_P2: mise_data.Induit.Fréquence_genératrice_P2,
      Réactance_SKE77_P2: mise_data.Induit.Réactance_ske77_P2,
      Réactance_SKE17_P2: mise_data.Induit.Réactance_ske17_P2,
      // Perte a vide
      //P1
      Multiplicateur_Volts_P1: mise_data.Perte_a_Vide.Multiplicateur_volts_P1,
      Multiplicateur_Amperes_P1:
        mise_data.Perte_a_Vide.Multiplicateur_amperes_P1,
      Perte_Table_P1: mise_data.Perte_a_Vide.Perte_table_P1,

      //P2
      Multiplicateur_Volts_P2: mise_data.Perte_a_Vide.Multiplicateur_volts_P2,
      Multiplicateur_Amperes_P2:
        mise_data.Perte_a_Vide.Multiplicateur_amperes_P2,
      Perte_Table_P2: mise_data.Perte_a_Vide.Perte_table_P2,

      //RIV
      Riv: mise_data.riv,
      // Perte a Charge
      //P1
      Multiplicateur_Volts_Charge_P1:
        mise_data.Perte_a_Charge.Multiplicateur_volts_charge_P1,
      Muliplicateur_Amperes_Charge_P1:
        mise_data.Perte_a_Charge.Multiplicateur_amperes_charge_P1,
      Perte_Table__Charge_P1: mise_data.Perte_a_Charge.Perte_table_charge_P1,
      Courant_de_Correction_P1:
        mise_data.Perte_a_Charge.Courant_de_correction_P1,
      Perte_Table_Totale_P1: mise_data.Perte_a_Charge.Perte_table_totale_P1,
      Courant_Appliquié_Transfo_P1:
        mise_data.Perte_a_Charge.Courant_appliquié_transfo_P1,
      Courant_Appliqué_Appareil_P1:
        mise_data.Perte_a_Charge.Courant_appliqué_appareil_P1,
      No_Cavalier: mise_data.Perte_a_Charge.No_cavalier,
      Perte_Cavalier_P1: mise_data.Perte_a_Charge.Perte_cavalier_P1,
      Resistance_HT_P1: mise_data.Perte_a_Charge.Resistance_ht_P1,
      Resistance_BT_P1: mise_data.Perte_a_Charge.Resistance_bt_P1,
      //P2
      Multiplicateur_Volts_Charge_P2:
        mise_data.Perte_a_Charge.Multiplicateur_volts_charge_P2,
      Muliplicateur_Amperes_Charge_P2:
        mise_data.Perte_a_Charge.Multiplicateur_amperes_charge_P2,
      Perte_Table__Charge_P2: mise_data.Perte_a_Charge.Perte_table_charge_P2,
      Courant_de_Correction_P2:
        mise_data.Perte_a_Charge.Courant_de_correction_P2,
      Perte_Table_Totale_P2: mise_data.Perte_a_Charge.Perte_table_totale_P2,
      Courant_Appliquié_Transfo_P2:
        mise_data.Perte_a_Charge.Courant_appliquié_transfo_P2,
      Courant_Appliqué_Appareil_P2:
        mise_data.Perte_a_Charge.Courant_appliqué_appareil_P2,
      Perte_Cavalier_P2: mise_data.Perte_a_Charge.Perte_cavalier_P2,
      Resistance_HT_P2: mise_data.Perte_a_Charge.Resistance_ht_P2,
      Resistance_BT_P2: mise_data.Perte_a_Charge.Resistance_bt_P2,
      //Decharges Partielles
      //P1
      Réactance_SKE77_DP_P1:
        mise_data.Decharges_Partielles.Réactance_ske77_DP_P1,
      Réactance_SKE17_DP_P1:
        mise_data.Decharges_Partielles.Réactance_ske17_DP_P1,
    };
  }

  const [form] = Form.useForm();

  const handleCancel = () => {
    setmise_data(mise_en_placeById);
    setmiseenplacemodal(false);
    form.resetFields();
  };
  const handleSubmit = () => {
    _updateMisePlace(mise_data._id, mise_data);
    setmiseenplacemodal(false);
    form.resetFields();
  };
  console.log('Haut rundered');

  return (
    <Collapse
      defaultActiveKey=""
      onChange={key => {
        console.log(key);
      }}
      style={
        mise_data !== null
          ? {
              background:
                'linear-gradient(90deg, rgb(61 124 155) 0%, rgb(99 221 221) 100%)',
              boxShadow: '0 5px 10px rgb(163 234 237 / 77%)',
            }
          : {}
      }>
      <Panel
        key="1"
        header="Detaille de la Commande"
        extra={
          mise_data !== null ? (
            <Button
              type="primary"
              icon={
                <HistoryOutlined style={{color: '#00ffff', fontSize: '20px'}} />
              }>
              Historique
            </Button>
          ) : (
            <Alert
              banner
              message={
                <Marquee pauseOnHover gradient={false}>
                  Commencer le premier test pour ce Produit.
                </Marquee>
              }
            />
          )
        }>
        <Row className="flex-div" style={{justifyContent: 'center'}}>
          {mise_data !== null && (
            <Button
              onClick={() => {
                setmiseenplacemodal(!miseenplacemodal);
                console.log('model clicked ');
              }}
              type="link">
              Mise En Place Du Produit
            </Button>
          )}
        </Row>
        <Modal
          title="Modifier la Mise en place"
          centered
          onCancel={handleCancel}
          maskClosable={false}
          visible={miseenplacemodal}
          width={520}
          footer={[
            <Button
              key="1"
              form="mise_en_placeform"
              type="primary"
              htmlType="submit">
              Enregistrer
            </Button>,
            <Button
              key="2"
              form="mise_en_placeform"
              style={{margin: '0 8px'}}
              onClick={handleCancel}>
              Annuler
            </Button>,
          ]}>
          <Form
            id="mise_en_placeform"
            form={form}
            onFinish={handleSubmit}
            layout="vertical"
            initialValues={initial_mise_placefrom_values}>
            <Updat_mise_place_modal setmise_data={setmise_data} />
          </Form>
        </Modal>
        <Row justify="space-between">
          <Col key="1" lg={{span: 6}}>
            <Divider plain>Informations du Model</Divider>
            <div
              style={{
                padding: '10px',
                background: '#d4e9e9',
                border: '1px solid black',
              }}>
              <Row>Model : {commande.id_product}</Row>
              <Row>
                {/* {mise_data == null ? (
                  Finaldata.test_type == null ? (
                    <>
                      Type :
                      <Select
                        defaultValue=""
                        options={Type_Test}
                        onChange={value => {
                          settest_type_selected(value);
                        }}
                      />
                    </>
                  ) : (
                    <>Type : {Finaldata.test_type}</>
                  )
                ) : (
                  <>Type : {mise_data.Type_test}</>
                )}{' '} */}
                <>Type : {commande.type_command}</>
              </Row>
              <Row>Temps de Test: {mise_data == null ? 12 + 15 : 12} MIN</Row>
            </div>
          </Col>
          <Divider type="vertical" />
          <Col key="2" lg={{span: 9}}>
            <Divider plain>Information de Commande</Divider>
            <div
              className="flex-div"
              style={{
                justifyContent: 'space-between',
                padding: '10px',
                background: '#d4e9e9',
                border: '1px solid black',
              }}>
              <div>
                <Row>#Mo : {commande && commande.id_commande}</Row>
                <Row>Numero de serie :{commande && commande.num_serie}</Row>
                <Row>
                  Quantity : {Tests_length + 1}/{allCommandesById_length}
                </Row>
              </div>
              <Divider type="vertical" plain />

              <div>
                <Row>Kva : {commande.kva}</Row>
                <Row>Voltage HT : {commande.voltage_ht}Grdy/7200v</Row>
                <Row>Voltage BT : {commande.voltage_bt}/240v</Row>
              </div>
            </div>
          </Col>
        </Row>
      </Panel>
      <div key="2">
        <Row
          align="middle"
          justify="space-between"
          style={{padding: '5px 10px', background: 'white'}}>
          <Col>
            {mise_data !== null && (
              <>
                <Space>
                  Bornes :
                  <Tag color="rgb(207 231 12)">
                    {mise_data.Bornes.Borne_jaune}
                  </Tag>
                  <Tag color="#f50">{mise_data.Bornes.Borne_rouge}</Tag>
                  <Tag color="#87d068">{mise_data.Bornes.Borne_verte}</Tag>
                </Space>
                <Space>
                  No Cavalier :<Tag>{mise_data.Perte_a_Charge.No_cavalier}</Tag>
                </Space>
              </>
            )}
          </Col>

          <Col lg={{span: 12}}>
            <Row justify="end">
              <Space style={{marginRight: '10px'}}>
                Temperature Affectée :
                {Finaldata.temperature_affected == null ? (
                  <Button
                    size="small"
                    disabled={temperature_noaffected == null ? true : false}
                    onClick={() => {
                      UpdateData(
                        'temperature_affected',
                        temperature_noaffected,
                        setFinaldata
                      );
                      settemperature_noaffected(null);
                    }}>
                    Affecter
                  </Button>
                ) : (
                  <Tag
                    color="blue"
                    closable
                    onClose={() =>
                      UpdateData('temperature_affected', null, setFinaldata)
                    }>
                    {` ${Finaldata.temperature_affected}°C`}
                  </Tag>
                )}
              </Space>

              <Space>
                Temperature Non Affectée :
                <InputNumber
                  size="small"
                  min={0}
                  max={50}
                  style={{width: '60px'}}
                  onChange={settemperature_noaffected}
                  value={temperature_noaffected}
                />
              </Space>
            </Row>
          </Col>
        </Row>
      </div>
    </Collapse>
  );
};

export default memo(Haut);
