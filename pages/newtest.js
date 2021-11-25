import React, {useState} from 'react';
import Head from 'next/head';
import Baselayout from '@/components/layouts/baselayout';
import Basepage from '@/components/Basepage';
import EtapeContent from '@/components/newTestContent';

import Updat_mise_place_modal from '@/components/updat_mise_place';
import HistoriqueModal from '@/components/modals/historique/historiquemodal';
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
  Input,
  Tabs,
  Modal,
  Alert,
  InputNumber,
  Space,
} from 'antd';
import {CheckOutlined} from '@ant-design/icons';
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
    title: 'Pertes a Charge',
    content: 'Pertes a Charge',
  },

  {
    title: 'Décharges Partielles',
    content: 'Décharges Partielles',
  },

  {
    title: 'Gravure',
    content: 'Gravure',
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
    temperature: '',
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
    Perte_a_vide: {
      multiplicateur_volts_P1: 1,
      Multiplicateur_amperes_P1: 3,
      Perte_table_P1: 3,
      riv_P1: 5,
      Pertes_mesurés_P1: 9,
      Courant_excitation_mesurés_P1: 5,
      //Position 2
      multiplicateur_volts_P2: 13,
      Multiplicateur_amperes_P2: 3,
      Perte_table_P2: 5,
      riv_P2: 5,
      Pertes_mesurés_P2: 9,
      Courant_excitation_mesurés_P2: 5,
    },
    Perte_a_charge: {
      //Position 1
      Multiplicateur_volts_charge_P1: 'volta1',
      Multiplicateur_amperes_charge_P1: 'ampere1',
      Perte_table_charge_P1: 'table1',
      Courant_de_correction_P1: 'correction1',
      Perte_table_totale_P1: 'tabletotal1',
      Courant_appliquié_transfo_P1: 'transfo1',
      Courant_appliqué_appareil_P1: 'appareil1',
      No_cavalier_P1: 'nocavalier1',
      Perte_cavalier_P1: 'pertecavalier1',
      Resistance_ht_P1: 11,
      Resistance_bt_P1: 21,
      Perte_charge_mesuré_P1: 'chargemesure1',
      Impédance_mesuré_P1: 'impedance1',
      //Position 2
      Multiplicateur_volts_charge_P2: '2',
      Multiplicateur_amperes_charge_P2: '3',
      Perte_table_charge_P2: 'd',
      Courant_de_correction_P2: 'd',
      Perte_table_totale_P2: 'd',
      Courant_appliquié_transfo_P2: 'sds',
      Courant_appliqué_appareil_P2: 'd',
      No_cavalier_P2: 'ds',
      Perte_cavalier_P2: 'ds',
      Resistance_ht_P2: 22,
      Resistance_bt_P2: 22,
      Perte_charge_mesuré_P2: 'd',
      Impédance_mesuré_P2: 'd',
    },
    type: '3phases',
  });
  const initial_testform_values = {
    //bornes initial data
    Borne_Rouge: Finaldata.Bornes.Borne_rouge,
    Borne_Verte: Finaldata.Bornes.Borne_verte,
    Borne_Jaune: Finaldata.Bornes.Borne_jaune,
    //ratio initial data P1
    Volts_Apluiqés_P1: Finaldata.Ratio.Volts_apluiqés_P1,
    Volts_HT_P1: Finaldata.Ratio.Volts_ht_P1,
    Polarité_Volts_P1: Finaldata.Ratio.Polarite_volts_P1,
    Volts_HT_Mesuré_P1: Finaldata.Ratio.Volts_ht_mesuré_P1,
    Polarité_V_Mesuré_P1: Finaldata.Ratio.Polarite_volts_Mesure_P1,
    //ratio initial data P2
    Volts_Apluiqés_P2: Finaldata.Ratio.Volts_apluiqés_P2,
    Volts_HT_P2: Finaldata.Ratio.Volts_ht_P2,
    Polarité_Volts_P2: Finaldata.Ratio.Polarite_volts_P2,
    Volts_HT_Mesuré_P2: Finaldata.Ratio.Volts_ht_mesuré_P2,
    Polarité_V_Mesuré_P2: Finaldata.Ratio.Polarite_volts_Mesure_P2,
    //Induit data P1
    Fréquence_Genératrice_P1: Finaldata.Induit.Fréquence_genératrice_P1,
    Réactance_SKE77_P1: Finaldata.Induit.Réactance_ske77_P1,
    Réactance_SKE17_P1: Finaldata.Induit.Réactance_ske17_P1,
    //Induit data P2
    Fréquence_Genératrice_P2: Finaldata.Induit.Fréquence_genératrice_P2,
    Réactance_SKE77_P2: Finaldata.Induit.Réactance_ske77_P2,
    Réactance_SKE17_P2: Finaldata.Induit.Réactance_ske17_P2,
    //Perte a vide P1
    multiplicateur_Volts_P1: Finaldata.Perte_a_vide.multiplicateur_volts_P1,
    Multiplicateur_Amprers_P1: Finaldata.Perte_a_vide.Multiplicateur_amperes_P1,
    Perte_Table_P1: Finaldata.Perte_a_vide.Perte_table_P1,
    Riv_P1: Finaldata.Perte_a_vide.riv_P1,
    Pertes_Mesurés_P1: Finaldata.Perte_a_vide.Pertes_mesurés_P1,
    Courant_Excitation_Mesurés_P1:
      Finaldata.Perte_a_vide.Courant_excitation_mesurés_P1,
    // Perte a vide P2
    multiplicateur_Volts_P2: Finaldata.Perte_a_vide.multiplicateur_volts_P2,
    Multiplicateur_Amprers_P2: Finaldata.Perte_a_vide.Multiplicateur_amperes_P2,
    Perte_Table_P2: Finaldata.Perte_a_vide.Perte_table_P2,
    Riv_P2: Finaldata.Perte_a_vide.riv_P2,
    Pertes_Mesurés_P2: Finaldata.Perte_a_vide.Pertes_mesurés_P2,
    Courant_Excitation_Mesurés_P2:
      Finaldata.Perte_a_vide.Courant_excitation_mesurés_P2,
    // Perte a Charge P1

    Multiplicateur_Volts_Charge_P1:
      Finaldata.Perte_a_charge.Multiplicateur_volts_charge_P1,
    Muliplicateur_Amperes_Charge_P1:
      Finaldata.Perte_a_charge.Multiplicateur_amperes_charge_P1,
    Perte_Table_Charge_P1: Finaldata.Perte_a_charge.Perte_table_charge_P1,
    Courant_de_Correction_P1: Finaldata.Perte_a_charge.Courant_de_correction_P1,
    Perte_Table_Totale_P1: Finaldata.Perte_a_charge.Perte_table_totale_P1,
    Courant_Appliquié_Transfo_P1:
      Finaldata.Perte_a_charge.Courant_appliquié_transfo_P1,
    Courant_Appliqué_Appareil_P1:
      Finaldata.Perte_a_charge.Courant_appliqué_appareil_P1,
    No_Cavalier_P1: Finaldata.Perte_a_charge.No_cavalier_P1,
    Perte_Cavalier_P1: Finaldata.Perte_a_charge.Perte_cavalier_P1,
    Resistance_HT_P1: Finaldata.Perte_a_charge.Resistance_ht_P1,
    Resistance_BT_P1: Finaldata.Perte_a_charge.Resistance_bt_P1,
    Perte_Charge_Mesuré_P1: Finaldata.Perte_a_charge.Perte_charge_mesuré_P1,
    Impédance_Mesuré_P1: Finaldata.Perte_a_charge.Impédance_mesuré_P1,
    // Perte a Charge P2

    Multiplicateur_Volts_Charge_P2:
      Finaldata.Perte_a_charge.Multiplicateur_volts_charge_P2,
    Muliplicateur_Amperes_Charge_P2:
      Finaldata.Perte_a_charge.Multiplicateur_amperes_charge_P2,
    Perte_Table_Charge_P2: Finaldata.Perte_a_charge.Perte_table_charge_P2,
    Courant_de_Correction_P2: Finaldata.Perte_a_charge.Courant_de_correction_P2,
    Perte_Table_Totale_P2: Finaldata.Perte_a_charge.Perte_table_totale_P2,
    Courant_Appliquié_Transfo_P2:
      Finaldata.Perte_a_charge.Courant_appliquié_transfo_P2,
    Courant_Appliqué_Appareil_P2:
      Finaldata.Perte_a_charge.Courant_appliqué_appareil_P2,
    No_Cavalier_P2: Finaldata.Perte_a_charge.No_cavalier_P2,
    Resistance_HT_P2: Finaldata.Perte_a_charge.Resistance_ht_P2,
    Resistance_BT_P2: Finaldata.Perte_a_charge.Resistance_bt_P2,
    Perte_Cavalier_P2: Finaldata.Perte_a_charge.Perte_cavalier_P2,
    Perte_Charge_Mesuré_P2: Finaldata.Perte_a_charge.Perte_charge_mesuré_P2,
    Impédance_Mesuré_P2: Finaldata.Perte_a_charge.Impédance_mesuré_P2,
  };
  //
  const [mise_page_data, setmise_page_data] = useState({
    Bornes: {Borne_jaune: 12, Borne_rouge: 13, Borne_verte: 14},
    Ratio: {
      //Position 1
      Volts_apluiqés_P1: 1,
      Volts_ht_P1: 6,
      Polarité_volts_P1: 6,
      //Position 2
      Volts_apluiqés_P2: 1,
      Volts_ht_P2: 6,
      Polarité_volts_P2: 6,
    },
    Induit: {
      // Position 1
      Fruequence_generatrice_P1: 10,
      Réactance_ske77_P1: 77,
      Réactance_ske17_P1: 17,
      // Position 2
      Fruequence_generatrice_P2: 12,
      Réactance_ske77_P2: 17,
      Réactance_ske17_P2: 37,
    },
    Perte_a_Vide: {
      //Position 1
      Multiplicateur_volts_P1: 10,
      Multiplicateur_amprers_P1: 12,
      Perte_table_P1: 1,
      riv_P1: 9,
      //Position 2
      Multiplicateur_volts_P2: 10,
      Multiplicateur_amprers_P2: 12,
      Perte_table_P2: 1,
      riv_P2: 9,
    },
    Perte_a_Charge: {
      //Position 1
      Multiplicateur_volts_P1: 2,
      Muliplicateur_amperes_P1: 2,
      Perte_table_P1: 2,
      Courant_de_correction_P1: 2,
      Perte_table_totale_P1: 2,
      Courant_appliquié_transfo_P1: 2,
      Courant_appliqué_appareil_P1: 2,
      No_cavalier_P1: 2,
      Perte_cavalier_P1: 2,
      //Position 2
      Multiplicateur_volts_P2: 24,
      Muliplicateur_amperes_P2: 24,
      Perte_table_P2: 24,
      Courant_de_correction_P2: 24,
      Perte_table_totale_P2: 24,
      Courant_appliquié_transfo_P2: 22,
      Courant_appliqué_appareil_P2: 21,
      No_cavalier_P2: 24,
      Perte_cavalier_P2: 26,
    },
    state: true,
  });
  const initial_mise_placefrom_values = {
    //bornes initial data
    Borne_Rouge: mise_page_data.Bornes.Borne_rouge,
    Borne_Verte: mise_page_data.Bornes.Borne_verte,
    Borne_Jaune: mise_page_data.Bornes.Borne_jaune,
    //ratio initial data
    //P1
    Volts_Apluiqés_P1: mise_page_data.Ratio.Volts_apluiqés_P1,
    Volts_HT_P1: mise_page_data.Ratio.Volts_ht_P1,
    Polarité_Volts_P1: mise_page_data.Ratio.Polarité_volts_P1,
    //P2
    Volts_Apluiqés_P2: mise_page_data.Ratio.Volts_apluiqés_P2,
    Volts_HT_P2: mise_page_data.Ratio.Volts_ht_P2,
    Polarité_Volts_P2: mise_page_data.Ratio.Polarité_volts_P2,

    // Induit
    //P1
    Fréquence_Genératrice_P1: mise_page_data.Induit.Fruequence_generatrice_P1,
    Réactance_SKE77_P1: mise_page_data.Induit.Réactance_ske77_P1,
    Réactance_SKE17_P1: mise_page_data.Induit.Réactance_ske77_P1,
    //P2
    Fréquence_Genératrice_P2: mise_page_data.Induit.Fruequence_generatrice_P2,
    Réactance_SKE77_P2: mise_page_data.Induit.Réactance_ske77_P2,
    Réactance_SKE17_P2: mise_page_data.Induit.Réactance_ske77_P2,
    // Perte a vide
    //P1
    Multiplicateur_Volts_P1:
      mise_page_data.Perte_a_Vide.Multiplicateur_volts_P1,
    Multiplicateur_Amprers_P1:
      mise_page_data.Perte_a_Vide.Multiplicateur_amprers_P1,
    Perte_Table_P1: mise_page_data.Perte_a_Vide.Perte_table_P1,
    Riv_P1: mise_page_data.Perte_a_Vide.riv_P1,
    //P2
    Multiplicateur_Volts_P2:
      mise_page_data.Perte_a_Vide.Multiplicateur_volts_P2,
    Multiplicateur_Amprers_P2:
      mise_page_data.Perte_a_Vide.Multiplicateur_amprers_P2,
    Perte_Table_P2: mise_page_data.Perte_a_Vide.Perte_table_P2,
    Riv_P2: mise_page_data.Perte_a_Vide.riv_P2,
    // Perte a Charge
    //P1
    Multiplicateur_Volts_Charge_P1:
      mise_page_data.Perte_a_Charge.Multiplicateur_volts_P1,
    Muliplicateur_Amperes_Charge_P1:
      mise_page_data.Perte_a_Charge.Muliplicateur_amperes_P1,
    Perte_Table__Charge_P1: mise_page_data.Perte_a_Charge.Perte_table_P1,
    Courant_de_Correction_P1:
      mise_page_data.Perte_a_Charge.Courant_de_correction_P1,
    Perte_Table_Totale_P1: mise_page_data.Perte_a_Charge.Perte_table_totale_P1,
    Courant_Appliquié_Transfo_P1:
      mise_page_data.Perte_a_Charge.Courant_appliquié_transfo_P1,
    Courant_Appliqué_Appareil_P1:
      mise_page_data.Perte_a_Charge.Courant_appliqué_appareil_P1,
    No_Cavalier_P1: mise_page_data.Perte_a_Charge.No_cavalier_P1,
    Perte_Cavalier_P1: mise_page_data.Perte_a_Charge.Perte_cavalier_P1,
    //P2
    Multiplicateur_Volts_Charge_P2:
      mise_page_data.Perte_a_Charge.Multiplicateur_volts_P2,
    Muliplicateur_Amperes_Charge_P2:
      mise_page_data.Perte_a_Charge.Muliplicateur_amperes_P2,
    Perte_Table__Charge_P2: mise_page_data.Perte_a_Charge.Perte_table_P2,
    Courant_de_Correction_P2:
      mise_page_data.Perte_a_Charge.Courant_de_correction_P2,
    Perte_Table_Totale_P2: mise_page_data.Perte_a_Charge.Perte_table_totale_P2,
    Courant_Appliquié_Transfo_P2:
      mise_page_data.Perte_a_Charge.Courant_appliquié_transfo_P2,
    Courant_Appliqué_Appareil_P2:
      mise_page_data.Perte_a_Charge.Courant_appliqué_appareil_P2,
    No_Cavalier_P2: mise_page_data.Perte_a_Charge.No_cavalier_P2,
    Perte_Cavalier_P2: mise_page_data.Perte_a_Charge.Perte_cavalier_P2,
  };

  const [Commandes, setModels] = useState([
    {id: '1', numcommand: 'CP20136', numproduit: 'Produit1'},
    {id: '2', numcommand: 'CP20135', numproduit: 'Produit2'},
    {id: '3', numcommand: 'CP20136', numproduit: 'Produit3'},
    {id: '4', numcommand: 'CP20137', numproduit: 'Produit4'},
    {id: '5', numcommand: 'CP20138', numproduit: 'Produit5'},
    {id: '6', numcommand: 'CP20139', numproduit: 'Produit6'},
    {id: '7', numcommand: 'CP20140', numproduit: 'Produit7'},
    {id: '8', numcommand: 'CP20141', numproduit: 'Produit8'},
    {id: '9', numcommand: 'CP20142', numproduit: 'Produit9'},
  ]);

  const Haut = () => {
    const [miseenplacemodal, setmiseenplacemodal] = useState(false);

    const [form] = Form.useForm();

    const handleCancel = () => {
      setmiseenplacemodal(false);
      form.resetFields();
    };

    return (
      <Collapse
        defaultActiveKey={['0']}
        style={
          mise_page_data.state == true
            ? {background: 'linear-gradient(90deg, #446960 0%, #348181 100%)'}
            : {}
        }>
        <Panel
          header="Detaille de la Commande"
          key="1"
          extra={
            mise_page_data.state == true ? (
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
          <div className="flex-div" style={{justifyContent: 'center'}}>
            {mise_page_data.state == true && (
              <Button
                onClick={() => setmiseenplacemodal(true)}
                type="link"
                block>
                Mise En Place Du Produit
              </Button>
            )}
          </div>

          <Modal
            title="Modifier la Mise en place"
            centered
            onCancel={handleCancel}
            visible={miseenplacemodal}
            width={600}
            footer={[
              <Button form="mise_en_placeform" type="primary" htmlType="submit">
                Enregistrer
              </Button>,
              <Button
                form="mise_en_placeform"
                style={{margin: '0 8px'}}
                onClick={handleCancel}>
                Annuler
              </Button>,
            ]}>
            <Form
              id="mise_en_placeform"
              form={form}
              onFinish={handleCancel}
              layout="vertical"
              initialValues={initial_mise_placefrom_values}>
              <Updat_mise_place_modal />
            </Form>
          </Modal>

          <div className="flex-div" style={{justifyContent: 'space-between'}}>
            <Card
              title="Model : 1AE654"
              extra="Type : 1Phases"
              style={{width: 300, backgroundColor: '#eee'}}>
              <div
                className="flex-div"
                style={{justifyContent: 'space-between'}}>
                <p>Temps : 12:00</p>
                <p>ecoule : 7:00</p>
              </div>
            </Card>
            <Card
              title="Detaille Du Produit"
              extra={<a href="#">Informations Detaille</a>}
              style={{width: 400, backgroundColor: '#eee'}}>
              <div
                className="flex-div"
                style={{justifyContent: 'space-between'}}>
                <p>#Mo : {noCommande}</p>
                <p>Kva : 10 </p>
              </div>
              <div className="flex-div" style={{justifyContent: 'left'}}>
                <p>Numero de serie : 05 </p>
                <p>Voltage HT : 12470Grdy/7200v </p>
              </div>
              <div
                className="flex-div"
                style={{justifyContent: 'space-between'}}>
                <p>Quantity : 4/23</p>
                <p>Voltage BT : 120/240v </p>
              </div>
            </Card>
          </div>
        </Panel>
        <Row className="flex-div" style={{padding: '15px'}}>
          <Col flex={4}>
            <span> Temps : 12 + 15 MIN </span>
          </Col>
          <Col flex={1}>
            <Space>Temperature Affectée : ""</Space>
            <Space>
              Temperature Non Affectée :{' '}
              <InputNumber
                defaultValue={0}
                formatter={value => ` ${value}°C`}
              />
            </Space>
          </Col>
        </Row>
      </Collapse>
    );
  };
  const UpdatemiseData = (type, newData) => {
    setmise_page_data(data => {
      return {...data, [type]: newData};
    });
  };
  const next = () => {
    if (current < 9) {
      setCurrent(current + 1);
    } else {
      message.success('Test Finit!');
      UpdatemiseData('state', true);
      form.resetFields();
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
  const UpdateData = (type, newData) => {
    switch (type) {
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
              <Haut />
              <Divider dashed orientation="left" style={{color: 'white'}}>
                Étapes de Test
              </Divider>
              <Row>
                <Col flex={1}>
                  <Steps size="small" current={current} direction="vertical">
                    {steps.map(item => (
                      <Step id="newtest" key={item.title} title={item.title} />
                    ))}
                  </Steps>
                </Col>
                <Col flex={4}>
                  <Form
                    form={form}
                    layout="vertical"
                    name="control-ref"
                    onFinish={next}
                    initialValues={initial_testform_values}>
                    <div className="steps-content">
                      <EtapeContent
                        UpdateData={UpdateData}
                        etapeName={steps[current].content}
                        miseenplaceok={mise_page_data.state}
                        Finaldata={Finaldata}
                      />
                    </div>
                    <div className="steps-action">
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
                  {Finaldata.Perte_a_charge.Resistance_ht_P2}
                  {Finaldata.Bornes.Borne_rouge}
                  {Finaldata.Bornes.Borne_verte}
                  {Finaldata.Bornes.Borne_jaune}
                </Col>
              </Row>
            </div>
          ) : (
            <div>model not found</div>
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
