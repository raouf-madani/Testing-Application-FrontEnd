import React, {useState, useEffect, memo, useMemo} from 'react';
import Head from 'next/head';
import Baselayout from '@/components/layouts/baselayout';
import Basepage from '@/components/Basepage';
import EtapeContent from '@/components/newTestContent';
import Updat_mise_place_modal from '@/components/updat_mise_place';
import HistoriqueModal from '@/components/modals/historique/historiquemodal';
import Modalnewtest from '@/components/modals/newtest/scanmodal';
import withAuth from '@/hoc/withAuth';
import {useGetUser} from '@/actions/user';
import {useRouter} from 'next/router';
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
} from 'antd';
import {CheckOutlined, CloseCircleOutlined} from '@ant-design/icons';
import Marquee from 'react-fast-marquee';

const {Panel} = Collapse;
const {Step} = Steps;

const steps = [
  {
    title: 'Nouveau Test',
    content: 'newtest',
  },
  {
    title: 'Placer Borne',
    content: 'Placer Borne',
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
    title: 'Facteur de dissipation',
    content: 'Facteur de dissipation',
  },

  {
    title: 'Décharges Partielles',
    content: 'Décharges Partielles',
  },

  {
    title: 'Signature',
    content: 'Signature',
  },
];

const Newtest = () => {
  const {data, loading} = useGetUser();
  const [current, setCurrent] = useState(0);
  const [form] = Form.useForm();
  const [historiquemodal, sethistoriqueModal] = useState(false);
  const router = useRouter();
  const noCommande = router.query.numerocommande;

  const [Finaldata, setFinaldata] = useState({
    temperature_affected: null,
    Bornes: {Borne_jaune: '', Borne_rouge: '', Borne_verte: ''},
    Ratio: {
      //Position 1
      Volts_apluiqés_P1: '',
      Volts_ht_P1: '',
      Polarite_volts_P1: '',
      Volts_ht_mesuré_P1: '',
      Polarite_volts_Mesure_P1: '',
      //Position 2
      Volts_apluiqés_P2: '',
      Volts_ht_P2: '',
      Polarite_volts_P2: '',
      Volts_ht_mesuré_P2: '',
      Polarite_volts_Mesure_P2: '',
    },
    Induit: {
      //Position 1
      Fréquence_genératrice_P1: '',
      Réactance_ske77_P1: '',
      Réactance_ske17_P1: '',
      //Position 2
      Fréquence_genératrice_P2: '',
      Réactance_ske77_P2: '',
      Réactance_ske17_P2: '',
    },
    Hipot: {},
    Perte_a_vide: {
      multiplicateur_volts_P1: '',
      Multiplicateur_amperes_P1: '',
      Perte_table_P1: '',
      riv_P1: '',
      Pertes_mesurés_P1: '',
      Courant_excitation_mesurés_P1: '',
      //Position 2
      multiplicateur_volts_P2: '',
      Multiplicateur_amperes_P2: '',
      Perte_table_P2: '',
      riv_P2: '',
      Pertes_mesurés_P2: '',
      Courant_excitation_mesurés_P2: '',
    },
    Perte_a_charge: {
      //Position 1
      Multiplicateur_volts_charge_P1: '',
      Multiplicateur_amperes_charge_P1: '',
      Perte_table_charge_P1: '',
      Courant_de_correction_P1: '',
      Perte_table_totale_P1: '',
      Courant_appliquié_transfo_P1: '',
      Courant_appliqué_appareil_P1: '',
      No_cavalier_P1: '',
      Perte_cavalier_P1: '',
      Resistance_ht_P1: '',
      Resistance_bt_P1: '',
      Perte_charge_mesuré_P1: '',
      Impédance_mesuré_P1: '',
      //Position 2
      Multiplicateur_volts_charge_P2: '',
      Multiplicateur_amperes_charge_P2: '',
      Perte_table_charge_P2: '',
      Courant_de_correction_P2: '',
      Perte_table_totale_P2: '',
      Courant_appliquié_transfo_P2: '',
      Courant_appliqué_appareil_P2: '',
      No_cavalier_P2: '',
      Perte_cavalier_P2: '',
      Resistance_ht_P2: '',
      Resistance_bt_P2: '',
      Perte_charge_mesuré_P2: '',
      Impédance_mesuré_P2: '',
    },
    Decharges_Partielles: {
      Tension_applique_ht_17: '',
      Tension_applique_ht_15: '',
    },
    type: '3phases',
  });
  const initial_testform_values = {};
  //
  const [mise_data, setmise_data] = useState({
    Bornes: {Borne_jaune: 1000, Borne_rouge: 600, Borne_verte: 150},
    Ratio: {
      //Position 1
      Volts_apluiqés_P1: 1,
      Volts_ht_P1: 1,
      Polarité_volts_P1: 1,
      //Position 2
      Volts_apluiqés_P2: 2,
      Volts_ht_P2: 2,
      Polarité_volts_P2: 2,
    },
    Induit: {
      //Position 1
      Fréquence_genératrice_P1: 2,
      Réactance_ske77_P1: 2,
      Réactance_ske17_P1: 2,
      //Position 2
      Fréquence_genératrice_P2: 2,
      Réactance_ske77_P2: 2,
      Réactance_ske17_P2: 2,
    },
    Perte_a_Vide: {
      multiplicateur_volts_P1: 2,
      Multiplicateur_amperes_P1: 2,
      Perte_table_P1: 2,
      riv_P1: 2,
      //Position 2
      multiplicateur_volts_P2: 2,
      Multiplicateur_amperes_P2: 2,
      Perte_table_P2: 2,
      riv_P2: 2,
    },
    Perte_a_Charge: {
      //Position 1
      Multiplicateur_volts_charge_P1: 2,
      Multiplicateur_amperes_charge_P1: 2,
      Perte_table_charge_P1: 2,
      Courant_de_correction_P1: 2,
      Perte_table_totale_P1: 2,
      Courant_appliquié_transfo_P1: 2,
      Courant_appliqué_appareil_P1: 2,
      No_cavalier_P1: 2,
      Perte_cavalier_P1: 2,
      Resistance_ht_P1: 2,
      Resistance_bt_P1: 2,
      //Position 2
      Multiplicateur_volts_charge_P2: 2,
      Multiplicateur_amperes_charge_P2: 2,
      Perte_table_charge_P2: 2,
      Courant_de_correction_P2: 2,
      Perte_table_totale_P2: 2,
      Courant_appliquié_transfo_P2: 2,
      Courant_appliqué_appareil_P2: 2,
      No_cavalier_P2: 2,
      Perte_cavalier_P2: 2,
      Resistance_ht_P2: 2,
      Resistance_bt_P2: 2,
    },
    Decharges_Partielles: {
      Tension_applique_ht_17: 2,
      Tension_applique_ht_15: 2,
      Valeur_dp_15s: 2,
      Valeur_dp_30s: 2,
      Valeur_dp_45s: 2,
      Valeur_dp_60s: 2,

      Valeur_dp_75s: 2,
      Valeur_dp_90s: 2,
      Valeur_dp_105s: 2,
      Valeur_dp_120s: 2,

      Valeur_dp_135s: 2,
      Valeur_dp_150s: 2,
      Valeur_dp_165s: 2,
      Valeur_dp_180s: 2,
    },
    state: true,
  });
  const initial_mise_placefrom_values = {
    //bornes initial data
    Borne_Rouge: mise_data.Bornes.Borne_rouge,
    Borne_Verte: mise_data.Bornes.Borne_verte,
    Borne_Jaune: mise_data.Bornes.Borne_jaune,
    //ratio initial data
    //P1
    Volts_Apluiqés_P1: mise_data.Ratio.Volts_apluiqés_P1,
    Volts_HT_P1: mise_data.Ratio.Volts_ht_P1,
    Polarité_Volts_P1: mise_data.Ratio.Polarité_volts_P1,
    //P2
    Volts_Apluiqés_P2: mise_data.Ratio.Volts_apluiqés_P2,
    Volts_HT_P2: mise_data.Ratio.Volts_ht_P2,
    Polarité_Volts_P2: mise_data.Ratio.Polarité_volts_P2,

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
    Multiplicateur_Volts_P1: mise_data.Perte_a_Vide.multiplicateur_volts_P1,
    Multiplicateur_Amprers_P1: mise_data.Perte_a_Vide.Multiplicateur_amperes_P1,
    Perte_Table_P1: mise_data.Perte_a_Vide.Perte_table_P1,
    Riv_P1: mise_data.Perte_a_Vide.riv_P1,
    //P2
    Multiplicateur_Volts_P2: mise_data.Perte_a_Vide.multiplicateur_volts_P2,
    Multiplicateur_Amprers_P2: mise_data.Perte_a_Vide.Multiplicateur_amperes_P2,
    Perte_Table_P2: mise_data.Perte_a_Vide.Perte_table_P2,
    Riv_P2: mise_data.Perte_a_Vide.riv_P2,
    // Perte a Charge
    //P1
    Multiplicateur_Volts_Charge_P1:
      mise_data.Perte_a_Charge.Multiplicateur_volts_charge_P1,
    Muliplicateur_Amperes_Charge_P1:
      mise_data.Perte_a_Charge.Multiplicateur_amperes_charge_P1,
    Perte_Table__Charge_P1: mise_data.Perte_a_Charge.Perte_table_charge_P1,
    Courant_de_Correction_P1: mise_data.Perte_a_Charge.Courant_de_correction_P1,
    Perte_Table_Totale_P1: mise_data.Perte_a_Charge.Perte_table_totale_P1,
    Courant_Appliquié_Transfo_P1:
      mise_data.Perte_a_Charge.Courant_appliquié_transfo_P1,
    Courant_Appliqué_Appareil_P1:
      mise_data.Perte_a_Charge.Courant_appliqué_appareil_P1,
    No_Cavalier_P1: mise_data.Perte_a_Charge.No_cavalier_P1,
    Perte_Cavalier_P1: mise_data.Perte_a_Charge.Perte_cavalier_P1,
    //P2
    Multiplicateur_Volts_Charge_P2:
      mise_data.Perte_a_Charge.Multiplicateur_volts_charge_P2,
    Muliplicateur_Amperes_Charge_P2:
      mise_data.Perte_a_Charge.Multiplicateur_amperes_charge_P2,
    Perte_Table__Charge_P2: mise_data.Perte_a_Charge.Perte_table_charge_P2,
    Courant_de_Correction_P2: mise_data.Perte_a_Charge.Courant_de_correction_P2,
    Perte_Table_Totale_P2: mise_data.Perte_a_Charge.Perte_table_totale_P2,
    Courant_Appliquié_Transfo_P2:
      mise_data.Perte_a_Charge.Courant_appliquié_transfo_P2,
    Courant_Appliqué_Appareil_P2:
      mise_data.Perte_a_Charge.Courant_appliqué_appareil_P2,
    No_Cavalier_P2: mise_data.Perte_a_Charge.No_cavalier_P2,
    Perte_Cavalier_P2: mise_data.Perte_a_Charge.Perte_cavalier_P2,
  };

  const [Commandes, setModels] = useState([
    {id: '1', numcommand: 'CP20134', numproduit: 'Produit1'},
    {id: '2', numcommand: 'CP20135', numproduit: 'Produit2'},
    {id: '3', numcommand: 'CP20136', numproduit: 'Produit3'},
    {id: '4', numcommand: 'CP20137', numproduit: 'Produit4'},
    {id: '5', numcommand: 'CP20138', numproduit: 'Produit5'},
    {id: '6', numcommand: 'CP20139', numproduit: 'Produit6'},
    {id: '7', numcommand: 'CP20140', numproduit: 'Produit7'},
    {id: '8', numcommand: 'CP20141', numproduit: 'Produit8'},
    {id: '9', numcommand: 'CP20142', numproduit: 'Produit9'},
  ]);
  const [modal, setmodal] = useState(false);
  const Haut = ({UpdateData}) => {
    const [miseenplacemodal, setmiseenplacemodal] = useState(false);
    const [temperature_noaffected, settemperature_noaffected] = useState(null);

    const [form] = Form.useForm();

    const handleCancel = () => {
      setmiseenplacemodal(false);
      form.resetFields();
    };
    const handleSubmit = () => {
      setmiseenplacemodal(false);
      form.resetFields();
    };
    console.log('Haut rundered');
    return (
      <Collapse
        defaultActiveKey="1"
        onChange={key => {
          console.log(key);
        }}
        style={
          mise_data.state == true
            ? {background: 'linear-gradient(90deg, #446960 0%, #348181 100%)'}
            : {}
        }>
        <Panel
          key="1"
          header="Detaille de la Commande"
          extra={
            mise_data.state == true ? (
              <CheckOutlined style={{color: '#00ffff', fontSize: '20px'}} />
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
            {mise_data.state == true && (
              <Button
                onClick={() => setmiseenplacemodal(true)}
                type="link"
                block>
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
            forceRender={true}
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
              <Updat_mise_place_modal />
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
                <Row>Model : 1AE654</Row>
                <Row>Type : 1Phases</Row>
                <Row>
                  Temps de Test: {mise_data.state == false ? 12 + 15 : 12} MIN
                </Row>
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
                  <Row>#Mo : CP20135</Row>
                  <Row>Numero de serie : 05</Row>
                  <Row>Quantity : 4/23</Row>
                </div>
                <Divider type="vertical" plain />

                <div>
                  <Row>Kva : 10</Row>
                  <Row>Voltage HT : 12470Grdy/7200v</Row>
                  <Row>Voltage BT : 120/240v</Row>
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
            <Col lg={{span: 5}}>
              <Space>
                Temps ecoule: {mise_data.state == false ? 12 + 15 : 12} MIN
              </Space>
            </Col>
            {mise_data.state == true && (
              <Col>
                <Space>
                  Bornes :
                  <Tag color="rgb(207 231 12)">
                    {mise_data.Bornes.Borne_jaune}
                  </Tag>
                  <Tag color="#f50">{mise_data.Bornes.Borne_rouge}</Tag>
                  <Tag color="#87d068">{mise_data.Bornes.Borne_verte}</Tag>
                </Space>
              </Col>
            )}

            <Col lg={{span: 12}} flex>
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
                          temperature_noaffected
                        );
                        settemperature_noaffected(null);
                      }}>
                      Affecter
                    </Button>
                  ) : (
                    <Tag
                      color="blue"
                      closable
                      onClose={() => UpdateData('temperature_affected', null)}>
                      {` ${Finaldata.temperature_affected}°C`}
                    </Tag>
                  )}
                </Space>

                <Space>
                  Temperature Non Affectée :
                  <InputNumber
                    size="small"
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

  const UpdateData = (type, newData) => {
    switch (type) {
      //Temperature
      case 'temperature_affected':
        setFinaldata(data => {
          return {
            ...data,
            [type]: newData,
          };
        });
      //Bornes
      case 'Borne_rouge':
      case 'Borne_verte':
      case 'Borne_jaune':
        setFinaldata(data => {
          return {
            ...data,
            Bornes: {
              ...data.Bornes,
              [type]: newData,
            },
          };
        });

      // Ratio
      case 'Volts_apluiqés_P1':
      case 'Volts_ht_P1':
      case 'Polarite_volts_P1':
      case 'Volts_ht_mesuré_P1':
      case 'Polarite_volts_Mesure_P1':
      case 'Volts_apluiqés_P2':
      case 'Volts_ht_P2':
      case 'Polarite_volts_P2':
      case 'Volts_ht_mesuré_P2':
      case 'Polarite_volts_Mesure_P2':
        setFinaldata(data => {
          return {
            ...data,
            Ratio: {
              ...data.Ratio,
              [type]: newData,
            },
          };
        });
      //Induit

      case 'Fréquence_genératrice_P1':
      case 'Réactance_ske77_P1':
      case 'Réactance_ske17_P1':
      case 'Fréquence_genératrice_P2':
      case 'Réactance_ske77_P2':
      case 'Réactance_ske17_P2':
        setFinaldata(data => {
          return {...data, [type]: newData};
        });
        setFinaldata(data => {
          return {
            ...data,
            Induit: {
              ...data.Induit,
              [type]: newData,
            },
          };
        });

      //Perte a Vide
      case 'multiplicateur_volts_P1':
      case 'Multiplicateur_amperes_P1':
      case 'Perte_table_P1':
      case 'riv_P1':
      case 'Pertes_mesurés_P1':
      case 'Courant_excitation_mesurés_P1':
      case 'multiplicateur_volts_P2':
      case 'Multiplicateur_amperes_P2':
      case 'Perte_table_P2':
      case 'riv_P2':
      case 'Pertes_mesurés_P2':
      case 'Courant_excitation_mesurés_P2':
        setFinaldata(data => {
          return {
            ...data,
            Perte_a_vide: {
              ...data.Perte_a_vide,
              [type]: newData,
            },
          };
        });

      //Perte a Charge
      //Position 1
      case 'Multiplicateur_volts_charge_P1':
      case 'Multiplicateur_amperes_charge_P1':
      case 'Perte_table_charge_P1':
      case 'Courant_de_correction_P1':
      case 'Perte_table_totale_P1':
      case 'Courant_appliquié_transfo_P1':
      case 'Courant_appliqué_appareil_P1':
      case 'No_cavalier_P1':
      case 'Perte_cavalier_P1':
      case 'Resistance_ht_P1':
      case 'Resistance_bt_P1':
      case 'Perte_charge_mesuré_P1':
      case 'Impédance_mesuré_P1':
      //Position 2
      case 'Multiplicateur_volts_charge_P2':
      case 'Multiplicateur_amperes_charge_P2':
      case 'Perte_table_charge_P2':
      case 'Courant_de_correction_P2':
      case 'Perte_table_totale_P2':
      case 'Courant_appliquié_transfo_P2':
      case 'Courant_appliqué_appareil_P2':
      case 'No_cavalier_P2':
      case 'Perte_cavalier_P2':
      case 'Resistance_ht_P2':
      case 'Resistance_bt_P2':
      case 'Perte_charge_mesuré_P2':
      case 'Impédance_mesuré_P2':
        setFinaldata(data => {
          return {
            ...data,
            Perte_a_charge: {
              ...data.Perte_a_charge,
              [type]: newData,
            },
          };
        });

      default:
        return null;
    }
  };
  const UpdatemiseData = (type, newData) => {
    setmise_data(data => {
      return {...data, [type]: newData};
    });
  };
  useEffect(() => {
    const filter = () => {
      if (mise_data.state == true) {
        return (steps = steps.filter(
          step => !step.content.includes('Placer Borne')
        ));
      }
    };
    filter();
  }, []);
  const next = () => {
    if (current == 0 && mise_data.state == true) {
      console.log('begin the work');
      //Bornes
      UpdateData('Borne_rouge', mise_data.Bornes.Borne_rouge);
      UpdateData('Borne_verte', mise_data.Bornes.Borne_verte);
      UpdateData('Borne_jaune', mise_data.Bornes.Borne_jaune);
      //Ratio_Polarite
      UpdateData('Volts_apluiqés_P1', mise_data.Ratio.Volts_apluiqés_P1);
      UpdateData('Volts_apluiqés_P2', mise_data.Ratio.Volts_apluiqés_P2);
      UpdateData('Volts_ht_P1', mise_data.Ratio.Volts_ht_P1);
      UpdateData('Volts_ht_P2', mise_data.Ratio.Volts_ht_P2);
      UpdateData('Polarite_volts_P1', mise_data.Ratio.Polarité_volts_P1);
      UpdateData('Polarite_volts_P2', mise_data.Ratio.Polarité_volts_P2);

      setCurrent(current + 1);
    } else if (current < steps.length - 1) {
      setCurrent(current + 1);
    } else {
      UpdatemiseData('state', true);
      form.resetFields();
      setmodal(!modal);
      message.success('Test Finit!');
      console.log(Finaldata);
    }
  };

  const prev = () => {
    setCurrent(current - 1);
  };
  const annuler = () => {
    setCurrent(current - 1);
    form.resetFields();
  };

  var foundcommande = false;
  for (var i = 0; i < Commandes.length; i++) {
    if (Commandes[i].numcommand == noCommande) {
      foundcommande = true;
      break;
    }
  }
  return (
    <div>
      <Head>
        <title>Testing App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Baselayout user={data} loading={loading}>
        <Basepage className="base-page">
          {foundcommande ? (
            <div>
              <Haut UpdateData={UpdateData} />
              <Divider dashed orientation="left" style={{color: 'white'}}>
                Étapes de Test
              </Divider>
              <Row>
                <Col key="steps" span={6}>
                  <Steps size="small" current={current} direction="vertical">
                    {steps.map(item => (
                      <Step key={item.title} id="newtest" title={item.title} />
                    ))}
                  </Steps>
                </Col>
                <Col key="content" span={18}>
                  <Form
                    form={form}
                    layout="vertical"
                    name="results_form"
                    onFinish={next}
                    initialValues={initial_testform_values}>
                    <div className="steps-content">
                      <EtapeContent
                        UpdateData={UpdateData}
                        etapeName={steps[current].content}
                        miseenplaceok={mise_data}
                        Finaldata={Finaldata}
                      />
                    </div>
                    <div
                      className="steps-action"
                      style={{display: 'flex', justifyContent: 'end'}}>
                      <Form.Item>
                        {current > 0 && (
                          <Button
                            style={{margin: '0 8px'}}
                            onClick={() => (current == 1 ? annuler() : prev())}>
                            {current == 1 ? 'Annuler' : 'Retour'}
                          </Button>
                        )}
                        {current < steps.length - 1 && (
                          <Button type="primary" htmlType="submit">
                            {current == 0 ? 'Commencer' : 'Suivant'}
                          </Button>
                        )}
                        {current === steps.length - 1 && (
                          <Button type="primary" htmlType="submit">
                            enregistrer
                          </Button>
                        )}
                      </Form.Item>
                    </div>
                  </Form>
                  <Modalnewtest
                    modal={modal}
                    toggle={() => setmodal(!modal)}
                    direction="/"
                  />
                </Col>
              </Row>
            </div>
          ) : (
            <div>Commande not found</div>
          )}
          <HistoriqueModal
            noCommande={noCommande}
            toggle={() => sethistoriqueModal(!historiquemodal)}
            modal={historiquemodal}
            title="Historique"
            className="modalContainer"
            width="100%"></HistoriqueModal>
        </Basepage>
      </Baselayout>
    </div>
  );
};

export default withAuth(Newtest)();
