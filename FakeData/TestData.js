export const Fakedata = {
  numcommand: '',
  temperature_affected: null,
  Date_Heure: {},
  id_employe: '',
  test_type: null,
  Ratio: {
    Tension_ht_mesuré: '',
    Tension_ht_mesuré_P1: '',
    Tension_ht_mesuré_P2: '',
    Tension_ht_mesuré_P3: '',
    Tension_ht_mesuré_P4: '',
    Tension_ht_mesuré_P5: '',
    //Position 1
    Polarite_volts_Mesure_P1: '',
    //Position 2
    Polarite_volts_Mesure_P2: '',
  },
  Induit: {
    //Position 1
    Test_Induit_P1: '',
    //Position 2
    Test_Induit_P2: '',
    // comment
    Comment: '',
  },
  Hipot: {
    //Position 1
    Test_Hipot_50: '',
    //Position 2
    Test_Hipot_70: '',
  },
  Perte_a_vide: {
    Pertes_mesurés_P1: '',
    Courant_excitation_mesurés_P1: '',
    //Position 2
    Pertes_mesurés_P2: '',
    Courant_excitation_mesurés_P2: '',
  },
  Perte_a_charge: {
    //Position 1
    Perte_charge_mesuré_P1: '',
    Impédance_mesuré_P1: '',
    //Position 2
    Perte_charge_mesuré_P2: '',
    Impédance_mesuré_P2: '',
  },
  Decharges_Partielles: {
    //Position 1
    S_15: '',
    S_30: '',
    S_45: '',
    S_60: '',
  },
  Facteur_Dissipation: {
    //Position 1
    H: '',
    L: '',
  },
};

//////// mise en place data

export const Mise_NewData = [
  {
    numcommand: '',
    test_type: '',
    Date_Heure: {},
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
      Perte_cavalier_P1: '',
      Resistance_ht_P1: '',
      Resistance_bt_P1: '',
      // no position
      No_cavalier: '',
      //Position 2
      Multiplicateur_volts_charge_P2: '',
      Multiplicateur_amperes_charge_P2: '',
      Perte_table_charge_P2: '',
      Courant_de_correction_P2: '',
      Perte_table_totale_P2: '',
      Courant_appliquié_transfo_P2: '',
      Perte_cavalier_P2: '',
      Resistance_ht_P2: '',
      Resistance_bt_P2: '',
    },
    Decharges_Partielles: {
      Réactance_ske77_DP_P1: '',
      Réactance_ske17_DP_P1: '',
    },
  },
];

// steps 1 phase
export const steps1phase = [
  {
    title: 'Nouveau Test',
    content: 'newtest',
  },
  {
    title: 'Placer Borne',
    content: 'Placer Borne',
  },
  {
    title: 'Ratio/Polarite P1',
    content: 'Ratio/Polarite P1',
  },
  {
    title: 'Ratio/Polarite P2',
    content: 'Ratio/Polarite P2',
  },
  {
    title: 'Induit P1',
    content: 'Induit P1',
  },
  {
    title: 'Induit P2',
    content: 'Induit P2',
  },
  {
    title: 'Hipot',
    content: 'Hipot',
  },
  {
    title: 'Pertes a Vide P1',
    content: 'Pertes a Vide P1',
  },
  {
    title: 'Pertes a Vide P2',
    content: 'Pertes a Vide P2',
  },
  {
    title: 'RIV ',
    content: 'RIV',
  },
  {
    title: 'Pertes a Charge P1',
    content: 'Pertes a Charge P1',
  },
  {
    title: 'Pertes a Charge P2',
    content: 'Pertes a Charge P2',
  },
  {
    title: 'Décharges Partielles',
    content: 'Décharges Partielles',
  },
  {
    title: 'Facteur de dissipation',
    content: 'Facteur de dissipation',
  },

  {
    title: 'Signature',
    content: 'Signature',
  },
];

// steps 3 phase
export const steps3phase = [
  {
    title: 'Nouveau Test',
    content: 'newtest',
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
    title: 'Décharges Partielles',
    content: 'Décharges Partielles',
  },
  {
    title: 'Facteur de dissipation',
    content: 'Facteur de dissipation',
  },

  {
    title: 'Signature',
    content: 'Signature',
  },
];
