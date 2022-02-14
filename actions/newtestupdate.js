export const UpdateData = (type, newData, setData) => {
  switch (type) {
    //employe id
    case 'id_employe':
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
    case 'Riv':
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

    // Ratio

    case 'Tension_ht_mesuré':
    case 'Tension_ht_mesuré_P1':
    case 'Tension_ht_mesuré_P2':
    case 'Tension_ht_mesuré_P3':
    case 'Tension_ht_mesuré_P4':
    case 'Tension_ht_mesuré_P5':
    //
    case 'Volts_apluiqés_P1':
    case 'Volts_ht_P1':
    case 'Polarite_volts_P1':
    case 'Polarite_volts_Mesure_P1':
    case 'Volts_apluiqés_P2':
    case 'Volts_ht_P2':
    case 'Polarite_volts_P2':
    case 'Polarite_volts_Mesure_P2':
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
    case 'Comment':
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

    //Position 2
    case 'Multiplicateur_volts_P2':
    case 'Multiplicateur_amperes_P2':
    case 'Perte_table_P2':
    case 'Pertes_mesurés_P2':
    case 'Courant_excitation_mesurés_P2':
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
    case 'Resistance_bt_P1':
    case 'Perte_charge_mesuré_P1':
    case 'Impédance_mesuré_P1':
    //no position
    case 'No_cavalier':
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
    case 'Resistance_bt_P2':
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

    default:
      return null;
  }
};
