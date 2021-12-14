export const Fakedata = [
  {
    numcommand: '',
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
  },
];

//////// mise en place data

export const Mise_fakeData = {
  numcommand: '',
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
    Multiplicateur_volts_P1: 2,
    Multiplicateur_amperes_P1: 2,
    Perte_table_P1: 2,

    //Position 2
    Multiplicateur_volts_P2: 2,
    Multiplicateur_amperes_P2: 2,
    Perte_table_P2: 2,
  },
  RIV: {riv_P1: 2, riv_P2: 2},
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
  state: false,
};

export const CommandeFake = [
  {id: '1', numcommand: 'CP20134', numproduit: 'Produit1'},
  {id: '2', numcommand: 'CP20135', numproduit: 'Produit2'},
  {id: '3', numcommand: 'CP20136', numproduit: 'Produit3'},
  {id: '4', numcommand: 'CP20137', numproduit: 'Produit4'},
  {id: '5', numcommand: 'CP20138', numproduit: 'Produit5'},
  {id: '6', numcommand: 'CP20139', numproduit: 'Produit6'},
  {id: '7', numcommand: 'CP20140', numproduit: 'Produit7'},
  {id: '8', numcommand: 'CP20141', numproduit: 'Produit8'},
  {id: '9', numcommand: 'CP20142', numproduit: 'Produit9'},
];
