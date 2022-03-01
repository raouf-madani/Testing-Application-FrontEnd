export const Fakedata = {
  numcommand: '',
  temperature_affected: null,
  Date_Heure: {},
  id_employe: '',
  test_type: null,
  Ratio: {
    //Position1

    Tension_mesurée_P1: '',
    Tension_mesurée_P1_P1: '',
    Tension_mesurée_P2_P1: '',
    Tension_mesurée_P3_P1: '',
    Tension_mesurée_P4_P1: '',
    Tension_mesurée_P5_P1: '',
    //Position2
    Tension_mesurée_P2: '',
    Tension_mesurée_P1_P2: '',
    Tension_mesurée_P2_P2: '',
    Tension_mesurée_P3_P2: '',
    Tension_mesurée_P4_P2: '',
    Tension_mesurée_P5_P2: '',
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
    Resistance_ht_P1: '',
    Resistance_bt_P1: '',
    //Position 2
    Perte_charge_mesuré_P2: '',
    Impédance_mesuré_P2: '',
    Resistance_ht_P2: '',
    Resistance_bt_P2: '',
  },
  Decharges_Partielles: {
    //Position 1
    S_15: '',
    S_30: '',
    S_45: '',
    S_60: '',
    S_75: '',
    S_90: '',
    S_105: '',
    S_120: '',
    S_135: '',
    S_150: '',
    S_165: '',
    S_180: '',
  },
  Facteur_Dissipation: {
    //Position 1
    H: '',
    L: '',
  },
};

//////// mise en place data 1 phase

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
    },
    Decharges_Partielles: {
      Réactance_ske77_DP_P1: '',
      Réactance_ske17_DP_P1: '',
    },
  },
];
// Final Data 3 phases

export const Fakedata3phases = {
  numcommand: 888,
  temperature_affected: null,
  Date_Heure: {},
  id_employe: '',
  test_type: null,
  Resistance: {
    //Position 1 1phase
    Resistance_ht_P1: '',
    //Position 2 1phase
    Resistance_ht_P2: '',
    // 1phase
    Resistance_bt: '',
    //Position 1 3phase
    H1_H2_P1: '',
    H1_H3_P1: '',
    H2_H3_P1: '',
    //Position 2 3phase
    H1_H2_P2: '',
    H1_H3_P2: '',
    H2_H3_P2: '',
    // 3phase
    X1_X2: '',
    X1_X3: '',
    X2_X3: '',
  },
  Facteur_Dissipation: {
    //Position 1
    H: '',
    L: '',
  },
  Hipot: {
    //Position 1
    Tension_a_appliquer_Hipot: '',
    TR_Charge_Hipot: '',
    TR_Courant_Hipot: '',
    TR_Voltage_Hipot: '',
    test_50_Hipot: '',
    Tension_au_transformateur_BT_Hipot: '',
    Tension_au_transformateur_HT_Hipot: '',
    Hipot_3Phases_Hipot: '',
  },
  Ratio: {
    //Position1
    Tension_a_appliquer_Ratio_P1: '',
    Tension_côté_primaire_P1: '',
    TR_Charge_Ratio_P1: '',
    TR_Courant_Ratio_P1: '',
    TR_Voltage_Ratio_P1: '',
    Prise1_théoriques_P1: '',
    Prise2_théoriques_P1: '',
    Prise3_théoriques_P1: '',
    Prise4_théoriques_P1: '',
    Prise5_théoriques_P1: '',
    Prise1_mesurés_P1: '',
    Prise2_mesurés_P1: '',
    Prise3_mesurés_P1: '',
    Prise4_mesurés_P1: '',
    Prise5_mesurés_P1: '',
    //Position2
    Tension_a_appliquer_Ratio_P2: '',
    Tension_côté_primaire_P2: '',
    TR_Charge_Ratio_P2: '',
    TR_Courant_Courant_P2: '',
    TR_Voltage_Voltage_P2: '',
    Prise1_théoriques_P2: '',
    Prise2_théoriques_P2: '',
    Prise3_théoriques_P2: '',
    Prise4_théoriques_P2: '',
    Prise5_théoriques_P2: '',
    Prise1_mesurés_P2: '',
    Prise2_mesurés_P2: '',
    Prise3_mesurés_P2: '',
    Prise4_mesurés_P2: '',
    Prise5_mesurés_P2: '',
  },
  Polarité: {
    Tension_a_appliquer_Polarite: '',
    Position_du_sélecteur_Tx_Polarite: '',
    Sélecteur_phase_ligne_Polarite: '',
    TR_Charge_Polarite: '',
    TR_Courant_Polarite: '',
    TR_Voltage_Polarite: '',
    Lecteur_1PH_Polarite: '',
    H2_X2_Polarite: '',
    H3_X3_Polarite: '',
    H3_X2_Polarite: '',
    H2_X3_Polarite: '',
  },
  Induit: {
    //Position 1
    Valeur_Induit_P1: '',
    Réactance_induit_P1: '',
    TR_Charge_Induit_P1: '',
    TR_Courant_Induit_P1: '',
    TR_Voltage_Induit_P1: '',
    Tension_a_appliquer_Induit_P1: '',
    Induit_P1_test: '',
    //Position 2
    Valeur_Induit_P2: '',
    Réactance_induit_P2: '',
    TR_Charge_Induit_P2: '',
    TR_Courant_Induit_P2: '',
    TR_Voltage_Induit_P2: '',
    Tension_a_appliquer_Induit_P2: '',
    Induit_P1_test: '',
  },

  Perte_a_vide: {
    //Position 1
    Pertes_câble_PerteVide_P1: '',
    TR_Charge_PerteVide_P1: '',
    TR_Courant_PerteVide_P1: '',
    TR_Voltage_PerteVide_P1: '',
    Tension_nominale_PerteVide_P1: '',
    Tension_à_appliqué_PerteVide_P1: '',
    Pertes_mesurées_PerteVide_P1: '',
    Courant_excitation_mesuré_PerteVide_P1: '',
    PV_mesurés_Ph1_PerteVide_P1: '',
    PV_mesurés_Ph2_PerteVide_P1: '',
    PV_mesurés_Ph3_PerteVide_P1: '',
    Exc_amp_mesuré_Ph1_PerteVide_P1: '',
    Exc_amp_mesuré_Ph2_PerteVide_P1: '',
    Exc_amp_mesuré_Ph3_PerteVide_P1: '',
    //Position 2
    Pertes_câble_PerteVide_P2: '',
    TR_Charge_PerteVide_P2: '',
    TR_Courant_PerteVide_P2: '',
    TR_Voltage_PerteVide_P2: '',
    Tension_nominale_PerteVide_21: '',
    Tension_à_appliqué_PerteVide_P2: '',
    Pertes_mesurées_PerteVide_P2: '',
    Courant_excitation_mesuré_PerteVide_P2: '',
    PV_mesurés_Ph1_PerteVide_P2: '',
    PV_mesurés_Ph2_PerteVide_P2: '',
    PV_mesurés_Ph3_PerteVide_P2: '',
    Exc_amp_mesuré_Ph1_PerteVide_P2: '',
    Exc_amp_mesuré_Ph2_PerteVide_P2: '',
    Exc_amp_mesuré_Ph3_PerteVide_P2: '',
  },
  RIV: {
    TR_Charge_RIV: '',
    TR_Courant_RIV: '',
    TR_Tension_RIV: '',
    Tension_a_appliquer_RIV: '',
    Valeur_mesurée_RIV: '',
  },
  Perte_a_charge: {
    //Position 1
    Pertes_câble_PerteCharge_P1: '',
    Raccord_flexible_PerteCharge_P1: '',
    Pertes_raccord_PerteCharge_P1: '',
    TR_Charge_PerteCharge_P1: '',
    TR_Courant_PerteCharge_P1: '',
    TR_Voltage_PerteCharge_P1: '',
    Courant_à_appliqué_PerteCharge_P1: '',
    PC_mesurés_Ph1_PerteCharge_P1: '',
    PC_mesurés_Ph2_PerteCharge_P1: '',
    PC_mesurés_Ph3_PerteCharge_P1: '',
    Imp_V_mesuré_Ph1_PerteCharge_P1: '',
    Imp_V_mesuré_Ph2_PerteCharge_P1: '',
    Imp_V_mesuré_Ph3_PerteCharge_P1: '',
    Pertes_mesurées_PerteCharge_P1: '',
    Impédance_mesurée_PerteCharge_P1: '',
    //Position 2
    Pertes_câble_PerteCharge_P2: '',
    Raccord_flexible_PerteCharge_P2: '',
    Pertes_raccord_PerteCharge_P2: '',
    TR_Charge_PerteCharge_P2: '',
    TR_Courant_PerteCharge_P2: '',
    TR_Voltage_PerteCharge_P2: '',
    Courant_à_appliqué_PerteCharge_P2: '',
    PC_mesurés_Ph1_PerteCharge_P2: '',
    PC_mesurés_Ph2_PerteCharge_P2: '',
    PC_mesurés_Ph3_PerteCharge_P2: '',
    Imp_V_mesuré_Ph1_PerteCharge_P2: '',
    Imp_V_mesuré_Ph2_PerteCharge_P2: '',
    Imp_V_mesuré_Ph3_PerteCharge_P2: '',
    Pertes_mesurées_PerteCharge_P2: '',
    Impédance_mesurée_PerteCharge_P2: '',
  },
  Decharges_Partielles: {
    //Position 1
    Sélecteur_de_prise_DechargeP: '',
    Sélecteur_de_tension_DechargeP: '',
    Réactance_DechargeP: '',
    TR_Charge_DechargeP: '',
    TR_Courant_DechargeP: '',
    TR_Voltage_DechargeP: '',
    Tension_appliqué_1_7_pu_DechargeP: '',
    Tension_appliqué_1_5_pu_DechargeP: '',
    S_15: '',
    S_30: '',
    S_45: '',
    S_60: '',
    S_75: '',
    S_90: '',
    S_105: '',
    S_120: '',
    S_135: '',
    S_150: '',
    S_165: '',
    S_180: '',
  },
};

//////// mise en place data 3 phase

export const Mise_NewData3phases = {
  numcommand: 'test3phases',
  test_type: '',
  Date_Heure: {},
  Riv: '',
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
    Resistance_ht_P1: 10,
    Resistance_bt_P1: 10,
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
};

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
    title: 'Induit P1',
    content: 'Induit P1',
  },
  {
    title: 'Ratio/Polarite P2',
    content: 'Ratio/Polarite P2',
  },

  {
    title: 'Induit P2',
    content: 'Induit P2',
  },
  {
    title: 'Hipot BT',
    content: 'Hipot BT',
  },
  {
    title: 'Hipot HT',
    content: 'Hipot HT',
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
    title: 'Essai continuité',
    content: 'Essai continuité',
  },
  {
    title: 'Resistance ',
    content: 'Resistance ',
  },
  {
    title: 'Facteur de dissipation',
    content: 'Facteur de dissipation',
  },
  {
    title: 'Hi-Pot',
    content: 'Hi-Pot',
  },
  {
    title: 'Ratio P1',
    content: 'Ratio P1',
  },
  {
    title: 'Ratio P2',
    content: 'Ratio P2',
  },
  {
    title: 'Polarité',
    content: 'Polarité',
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
    title: 'Pertes à vide P1',
    content: 'Pertes à vide P1',
  },
  {
    title: 'Pertes à vide P2',
    content: 'Pertes à vide P2',
  },
  {
    title: 'Riv',
    content: 'Riv',
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
    title: 'Signature',
    content: 'Signature',
  },
];

// valeur de dropdown 3phases
export const TR_Charge = [
  {label: '347/600', value: 347600},
  {label: '693/1200', value: 6931200},
  {label: '1385/2400', value: 13852400},
  {label: '2771/4800', value: 27714800},
  {label: 'N/A', value: 'N/A'},
];
export const TR_Courant = [
  {label: '5/X1', value: 51},
  {label: '10/X2', value: 102},
  {label: '25/X5', value: 255},
  {label: '50/X10', value: 5010},
  {label: '100/X20', value: 10020},
  {label: '200/X40', value: 20040},
  {label: '400/X80', value: 40080},
  {label: '600/X120', value: 600120},
  {label: 'N/A', value: 'N/A'},
];
export const TR_Voltage = [
  {label: '240/X2', value: 2402},
  {label: '480/X4', value: 4804},
  {label: '600/X5', value: 6005},
  {label: '1200/X10', value: 120010},
  {label: '2400/X20', value: 240020},
  {label: '4800/X40', value: 480040},
  {label: 'N/A', value: 'N/A'},
];
