export const UpdateData = (type, newData, setmise_data) => {
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
      setmise_data(data => {
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
