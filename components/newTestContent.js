import React from 'react';
import TemperatureForm from '@/components/forms/newtest/temperature';
import BornesForm from '@/components/forms/newtest/Bornes';
import Ratio_PolariteForm from '@/components/forms/newtest/Ratio_Polarite';
import InduitForm from '@/components/forms/newtest/Induit';
import HinotForm from '@/components/forms/newtest/Hinot';
import Perte_a_ChargeForm from '@/components/forms/newtest/Perte_a_charge';
import Perte_a_VideForm from '@/components/forms/newtest/Perte_a_vide';
import GravureForm from '@/components/forms/newtest/Gravure';
import SignatureForm from '@/components/forms/newtest/Signature';

function newTestContent({etapeName, UpdateData}) {
  switch (etapeName) {
    case 'Temperature':
      return <TemperatureForm />;
    case 'Placer Borne':
      return <BornesForm />;
    case 'Ratio/Polarite':
      return <Ratio_PolariteForm />;
    case 'Induit':
      return <InduitForm />;
    case 'Hinot':
      return <HinotForm />;
    case 'Pertes a Vide':
      return <Perte_a_VideForm />;
    case 'Pertes a Charge':
      return <Perte_a_ChargeForm />;
    case 'Gravure':
      return <GravureForm />;
    case 'Signature':
      return <SignatureForm />;
    default:
      return <TemperatureForm />;
  }
}

export default newTestContent;
