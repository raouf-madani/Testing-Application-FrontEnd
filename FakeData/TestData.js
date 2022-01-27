export const Fakedata = {
  numcommand: '',
  temperature_affected: null,
  test_type: null,
  Riv: '',
  Bornes: {Borne_jaune: '', Borne_rouge: '', Borne_verte: ''},
  Date_Heure: {},
  Num_employe: '',
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
    Test_Induit_P1: '',
    //Position 2
    Fréquence_genératrice_P2: '',
    Réactance_ske77_P2: '',
    Réactance_ske17_P2: '',
    Test_Induit_P2: '',
  },
  Hipot: {
    //Position 1
    Test_Hipot_50: '',
    //Position 2
    Test_Hipot_70: '',
  },
  Perte_a_vide: {
    Multiplicateur_volts_P1: '',
    Multiplicateur_amperes_P1: '',
    Perte_table_P1: '',
    Pertes_mesurés_P1: '',
    Courant_excitation_mesurés_P1: '',
    //Position 2
    Multiplicateur_volts_P2: '',
    Multiplicateur_amperes_P2: '',
    Perte_table_P2: '',
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
    No_cavalier: '',
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
    Perte_cavalier_P2: '',
    Resistance_ht_P2: '',
    Resistance_bt_P2: '',
    Perte_charge_mesuré_P2: '',
    Impédance_mesuré_P2: '',
  },
  Decharges_Partielles: {
    Tension_applique_ht_17: '',
    Tension_applique_ht_15: '',
    Réactance_ske77_DP_P1: '',
    Réactance_ske17_DP_P1: '',
  },
};

//////// mise en place data

export const Mise_NewData = [
  {
    Riv: '',
    Bornes: {Borne_jaune: '', Borne_rouge: '', Borne_verte: ''},
    Ratio: {
      //Position 1
      Volts_apluiqés_P1: '',
      Volts_ht_P1: '',
      Polarite_volts_P1: '',
      //Position 2
      Volts_apluiqés_P2: '',
      Volts_ht_P2: '',
      Polarite_volts_P2: '',
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
      Multiplicateur_volts_P1: '',
      Multiplicateur_amperes_P1: '',
      Perte_table_P1: '',
      //Position 2
      Multiplicateur_volts_P2: '',
      Multiplicateur_amperes_P2: '',
      Perte_table_P2: '',
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
      Perte_cavalier_P1: '',
      // no position
      No_cavalier: '',
      //Position 2
      Multiplicateur_volts_charge_P2: '',
      Multiplicateur_amperes_charge_P2: '',
      Perte_table_charge_P2: '',
      Courant_de_correction_P2: '',
      Perte_table_totale_P2: '',
      Courant_appliquié_transfo_P2: '',
      Courant_appliqué_appareil_P2: '',
      Perte_cavalier_P2: '',
    },
    Decharges_Partielles: {
      Réactance_ske77_DP_P1: '',
      Réactance_ske17_DP_P1: '',
    },
  },
];
