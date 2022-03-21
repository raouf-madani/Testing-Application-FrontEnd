export const UpdateData = (type, newData, setData) => {
  switch (type) {
    //Date et Heure
    case 'Date_Heure':
      setData(data => {
        return {
          ...data,
          [type]: newData,
        };
      });
    //employe id
    case 'id_employe':
      setData(data => {
        return {
          ...data,
          [type]: newData,
        };
      });
    //id of product
    case 'id_product':
      setData(data => {
        return {
          ...data,
          [type]: newData,
        };
      });
    //commande id
    case 'numcommand':
      setData(data => {
        return {
          ...data,
          [type]: newData,
        };
      });
    //Temperature
    case 'temperature_affected':
      setData(data => {
        return {
          ...data,
          [type]: newData,
        };
      });
    // Test Type
    case 'test_type':
      setData(data => {
        return {
          ...data,
          [type]: newData,
        };
      });
    //RIV
    case 'riv':
      setData(data => {
        return {
          ...data,
          [type]: newData,
        };
      });
    //Bornes
    case 'Borne_rouge':
    case 'Borne_verte':
    case 'Borne_jaune':
      setData(data => {
        return {
          ...data,
          Bornes: {
            ...data.Bornes,
            [type]: newData,
          },
        };
      });

    // Ratio 1 phase

    case 'Tension_mesurée_P1':
    case 'Tension_mesurée_P1_P1':
    case 'Tension_mesurée_P2_P1':
    case 'Tension_mesurée_P3_P1':
    case 'Tension_mesurée_P4_P1':
    case 'Tension_mesurée_P5_P1':
    case 'Polarité_mesurée_P1':
    case 'Tension_mesurée_P2':
    case 'Tension_mesurée_P1_P2':
    case 'Tension_mesurée_P2_P2':
    case 'Tension_mesurée_P3_P2':
    case 'Tension_mesurée_P4_P2':
    case 'Tension_mesurée_P5_P2':
    case 'Polarité_mesurée_P2':
    //mise en place
    case 'Tension_à_appliquer_P1':
    case 'Tension_ht_P1':
    case 'Polarite_théorique_P1':
    // case 'Polarite_volts_Mesure_P1':
    case 'Tension_à_appliquer_P2':
    case 'Tension_ht_P2':
    case 'Polarite_théorique_P2':
      // case 'Polarite_volts_Mesure_P2':
      setData(data => {
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
    case 'Test_Induit_P1':
    case 'Test_Induit_P2':
    case 'Comment_P1':
    case 'Comment_P2':
      setData(data => {
        return {
          ...data,
          Induit: {
            ...data.Induit,
            [type]: newData,
          },
        };
      });

    //Hipot
    case 'Test_Hipot_50':
    case 'Test_Hipot_70':
      setData(data => {
        return {
          ...data,
          Hipot: {
            ...data.Hipot,
            [type]: newData,
          },
        };
      });

    //Perte a Vide
    //Position1
    case 'Multiplicateur_volts_P1':
    case 'Multiplicateur_amperes_P1':
    case 'Perte_table_P1':
    case 'Pertes_mesurés_P1':
    case 'Courant_excitation_mesurés_P1':
    case 'testValidation_P1':

    // Calculations Values
    case 'PV_Volt_mesuré':
    case 'PV_Courant_mesuré':
    case 'Perte_A_Vide_mesuré':
    case 'PV':
    case 'Perte_A_Vide_85':
    case 'Perte_A_Vide_Efficacité':
    case 'PV_Erreur_Gar':
    case 'Courant_BT':
    // perte a vide test
    case 'testValidation_P1':

    //Position 2
    case 'Multiplicateur_volts_P2':
    case 'Multiplicateur_amperes_P2':
    case 'Perte_table_P2':
    case 'Pertes_mesurés_P2':
    case 'Courant_excitation_mesurés_P2':
    // perte a vide test
    case 'testValidation_P2':
      setData(data => {
        return {
          ...data,
          Perte_a_Vide: {
            ...data.Perte_a_Vide,
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
    case 'Perte_cavalier_P1':
    case 'Resistance_ht_P1':
    case 'Resistance_bt':
    case 'Perte_charge_mesuré_P1':
    case 'Impédance_mesuré_P1':
    //no position
    case 'No_cavalier':
    case 'testValidation':
    //Position 2
    case 'Multiplicateur_volts_charge_P2':
    case 'Multiplicateur_amperes_charge_P2':
    case 'Perte_table_charge_P2':
    case 'Courant_de_correction_P2':
    case 'Perte_table_totale_P2':
    case 'Courant_appliquié_transfo_P2':
    case 'Courant_appliqué_appareil_P2':
    case 'Perte_cavalier_P2':
    case 'Resistance_ht_P2':
    case 'Perte_charge_mesuré_P2':
    case 'Impédance_mesuré_P2':
      setData(data => {
        return {
          ...data,
          Perte_a_Charge: {
            ...data.Perte_a_Charge,
            [type]: newData,
          },
        };
      });

    //Decharges Partielles

    case 'Réactance_ske77_DP_P1':
    case 'Réactance_ske17_DP_P1':
    case 'S_15':
    case 'S_30':
    case 'S_45':
    case 'S_60':
    case 'S_75':
    case 'S_90':
    case 'S_105':
    case 'S_120':
    case 'S_135':
    case 'S_150':
    case 'S_165':
    case 'S_180':
      setData(data => {
        return {
          ...data,
          Decharges_Partielles: {
            ...data.Decharges_Partielles,
            [type]: newData,
          },
        };
      });

    //Facteur Dissipation
    case 'H':
    case 'L':
      setData(data => {
        return {
          ...data,
          Facteur_Dissipation: {
            ...data.Facteur_Dissipation,
            [type]: newData,
          },
        };
      });

    //3phases Steps
    //Resistance 1phase
    case 'Resistance_ht_P1':
    case 'Resistance_ht_P2':
    case 'Resistance_bt':
    //Resistance 3phase
    case 'H1_H2_P1':
    case 'H1_H3_P1':
    case 'H2_H3_P1':
    case 'H1_H2_P2':
    case 'H1_H3_P2':
    case 'H2_H3_P2':
    case 'X1_X2':
    case 'X1_X3':
    case 'X2_X3':
      setData(data => {
        return {
          ...data,
          Resistance: {
            ...data.Resistance,
            [type]: newData,
          },
        };
      });

    //Hipot
    case 'Tension_a_appliquer_Hipot':
    case 'TR_Charge_Hipot':
    case 'TR_Courant_Hipot':
    case 'TR_Voltage_Hipot':
    case 'test_50_Hipot':
    case 'Tension_au_transformateur_BT_Hipot':
    case 'Tension_au_transformateur_HT_Hipot':
    case 'Hipot_3Phases_Hipot':
      setData(data => {
        return {
          ...data,
          Hipot: {
            ...data.Hipot,
            [type]: newData,
          },
        };
      });
    // Ratio 3 phase
    //Position 1

    case 'Tension_a_appliquer_Ratio_P1':
    case 'Tension_côté_primaire_P1':
    case 'TR_Charge_Ratio_P1':
    case 'TR_Courant_Ratio_P1':
    case 'TR_Voltage_Ratio_P1':
    case 'Prise1_théoriques_P1':
    case 'Prise2_théoriques_P1':
    case 'Prise3_théoriques_P1':
    case 'Prise4_théoriques_P1':
    case 'Prise5_théoriques_P1':
    case 'Prise1_mesurés_P1':
    case 'Prise2_mesurés_P1':
    case 'Prise3_mesurés_P1':
    case 'Prise4_mesurés_P1':
    case 'Prise5_mesurés_P1':
    //Position 2
    case 'Tension_a_appliquer_Ratio_P2':
    case 'Tension_côté_primaire_P2':
    case 'TR_Charge_Ratio_P2':
    case 'TR_Courant_Ratio_P2':
    case 'TR_Voltage_Ratio_P2':
    case 'Prise1_théoriques_P2':
    case 'Prise2_théoriques_P2':
    case 'Prise3_théoriques_P2':
    case 'Prise4_théoriques_P2':
    case 'Prise5_théoriques_P2':
    case 'Prise1_mesurés_P2':
    case 'Prise2_mesurés_P2':
    case 'Prise3_mesurés_P2':
    case 'Prise4_mesurés_P2':
    case 'Prise5_mesurés_P2':
      setData(data => {
        return {
          ...data,
          Ratio: {
            ...data.Ratio,
            [type]: newData,
          },
        };
      });

    // Polarite 3 phase

    case 'Tension_a_appliquer_Polarite':
    case 'Position_du_sélecteur_Tx_Polarite':
    case 'Sélecteur_phase_ligne_Polarite':
    case 'TR_Charge_Polarite':
    case 'TR_Courant_Polarite':
    case 'TR_Voltage_Polarite':
    case 'Prise2_théoriques_P1':
    case 'Lecteur_1PH_Polarite':
    case 'H2_X2_Polarite':
    case 'H3_X3_Polarite':
    case 'H3_X2_Polarite':
    case 'H2_X3_Polarite':
      setData(data => {
        return {
          ...data,
          Polarité: {
            ...data.Polarité,
            [type]: newData,
          },
        };
      });

    // Induit 3 phase
    // Position 1
    case 'Valeur_Induit_P1':
    case 'Réactance_induit_P1':
    case 'TR_Charge_Induit_P1':
    case 'TR_Courant_Induit_P1':
    case 'TR_Voltage_Induit_P1':
    case 'Tension_a_appliquer_Induit_P1':
    case 'Induit_P1_test':

    // Position 2
    case 'Valeur_Induit_P2':
    case 'Réactance_induit_P2':
    case 'TR_Charge_Induit_P2':
    case 'TR_Courant_Induit_P2':
    case 'TR_Voltage_Induit_P2':
    case 'Tension_a_appliquer_Induit_P2':
    case 'Induit_P2_test':
      setData(data => {
        return {
          ...data,
          Induit: {
            ...data.Induit,
            [type]: newData,
          },
        };
      });

    // Perte a Vide 3 phase
    // Position 1
    case 'Pertes_câble_PerteVide_P1':
    case 'TR_Charge_PerteVide_P1':
    case 'TR_Courant_PerteVide_P1':
    case 'TR_Voltage_PerteVide_P1':
    case 'Tension_nominale_PerteVide_P1':
    case 'Tension_à_appliqué_PerteVide_P1':
    case 'Pertes_mesurées_PerteVide_P1':
    case 'Courant_excitation_mesuré_PerteVide_P1':
    case 'PV_mesurés_Ph1_PerteVide_P1':
    case 'PV_mesurés_Ph2_PerteVide_P1':
    case 'PV_mesurés_Ph3_PerteVide_P1':
    case 'Exc_amp_mesuré_Ph1_PerteVide_P1':
    case 'Exc_amp_mesuré_Ph2_PerteVide_P1':
    case 'Exc_amp_mesuré_Ph3_PerteVide_P1':

    // Position 2
    case 'Pertes_câble_PerteVide_P2':
    case 'TR_Charge_PerteVide_P2':
    case 'TR_Courant_PerteVide_P2':
    case 'TR_Voltage_PerteVide_P2':
    case 'Tension_nominale_PerteVide_P2':
    case 'Tension_à_appliqué_PerteVide_P2':
    case 'Pertes_mesurées_PerteVide_P2':
    case 'Courant_excitation_mesuré_PerteVide_P2':
    case 'PV_mesurés_Ph1_PerteVide_P2':
    case 'PV_mesurés_Ph2_PerteVide_P2':
    case 'PV_mesurés_Ph3_PerteVide_P2':
    case 'Exc_amp_mesuré_Ph1_PerteVide_P2':
    case 'Exc_amp_mesuré_Ph2_PerteVide_P2':
    case 'Exc_amp_mesuré_Ph3_PerteVide_P2':
      setData(data => {
        return {
          ...data,
          Perte_a_vide: {
            ...data.Perte_a_vide,
            [type]: newData,
          },
        };
      });

    // RIV 3 phase
    case 'TR_Charge_RIV':
    case 'TR_Courant_RIV':
    case 'TR_Tension_RIV':
    case 'Tension_a_appliquer_RIV':
    case 'Valeur_mesurée_RIV':
      setData(data => {
        return {
          ...data,
          RIV: {
            ...data.RIV,
            [type]: newData,
          },
        };
      });

    // Perte a Charge 3 phase
    // Position 1
    case 'Pertes_câble_PerteCharge_P1':
    case 'Raccord_flexible_PerteCharge_P1':
    case 'Pertes_raccord_PerteCharge_P1':
    case 'TR_Charge_PerteCharge_P1':
    case 'TR_Courant_PerteCharge_P1':
    case 'TR_Voltage_PerteCharge_P1':
    case 'Courant_à_appliqué_PerteCharge_P1':
    case 'PC_mesurés_Ph1_PerteCharge_P1':
    case 'PC_mesurés_Ph2_PerteCharge_P1':
    case 'PC_mesurés_Ph3_PerteCharge_P1':
    case 'Imp_V_mesuré_Ph1_PerteCharge_P1':
    case 'Imp_V_mesuré_Ph2_PerteCharge_P1':
    case 'Imp_V_mesuré_Ph3_PerteCharge_P1':
    case 'Pertes_mesurées_PerteCharge_P1':
    case 'Impédance_mesurée_PerteCharge_P1':

    // Position 2
    case 'Pertes_câble_PerteCharge_P2':
    case 'Raccord_flexible_PerteCharge_P2':
    case 'Pertes_raccord_PerteCharge_P2':
    case 'TR_Charge_PerteCharge_P2':
    case 'TR_Courant_PerteCharge_P2':
    case 'TR_Voltage_PerteCharge_P2':
    case 'Courant_à_appliqué_PerteCharge_P2':
    case 'PC_mesurés_Ph1_PerteCharge_P2':
    case 'PC_mesurés_Ph2_PerteCharge_P2':
    case 'PC_mesurés_Ph3_PerteCharge_P2':
    case 'Imp_V_mesuré_Ph1_PerteCharge_P2':
    case 'Imp_V_mesuré_Ph2_PerteCharge_P2':
    case 'Imp_V_mesuré_Ph3_PerteCharge_P2':
    case 'Pertes_mesurées_PerteCharge_P2':
    case 'Impédance_mesurée_PerteCharge_P2':
      setData(data => {
        return {
          ...data,
          Perte_a_charge: {
            ...data.Perte_a_charge,
            [type]: newData,
          },
        };
      });

    // Perte a Charge 3 phase
    // Position 1
    case 'Sélecteur_de_prise_DechargeP':
    case 'Sélecteur_de_tension_DechargeP':
    case 'Réactance_DechargeP':
    case 'TR_Charge_DechargeP':
    case 'TR_Courant_DechargeP':
    case 'TR_Voltage_DechargeP':
    case 'Tension_appliqué_1_7_pu_DechargeP':
    case 'Tension_appliqué_1_5_pu_DechargeP':
    case 'S_15':
    case 'S_30':
    case 'S_45':
    case 'S_60':
    case 'S_75':
    case 'S_90':
    case 'S_105':
    case 'S_120':
    case 'S_135':
    case 'S_150':
    case 'S_165':
    case 'S_180':
      setData(data => {
        return {
          ...data,
          Decharges_Partielles: {
            ...data.Decharges_Partielles,
            [type]: newData,
          },
        };
      });
    default:
      return null;
  }
};
