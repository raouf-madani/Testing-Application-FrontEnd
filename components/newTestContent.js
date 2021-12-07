import React, {useState} from 'react';
import {Alert} from 'antd';
import BornesForm from '@/components/forms/newtest/Bornes';
import Ratio_PolariteForm from '@/components/forms/newtest/Ratio_Polarite';
import InduitForm from '@/components/forms/newtest/Induit';
import HipotForm from '@/components/forms/newtest/Hipot';
import Perte_a_VideForm from '@/components/forms/newtest/Perte_a_vide';
import RivForm from '@/components/forms/newtest/RIV_Form';
import Perte_a_ChargeForm from '@/components/forms/newtest/Perte_a_charge';
import Facteur_DissipationForm from '@/components/forms/newtest/Facteur_dissipation';
import Decharges_PartiellesForm from '@/components/forms/newtest/Decharges_Partielles';
import SignatureForm from '@/components/forms/newtest/Signature';

function newTestContent({etapeName, UpdateData, miseenplaceok}) {
  const [chance, setchance] = useState(0);
  const NewTestHome = () => {
    return miseenplaceok.state === true ? (
      <Alert
        message="Prét a Tester!"
        description="Veuillez cliquer sur le Boutton Commencer en bas pour Tester le transfo"
        type="success"
        showIcon
      />
    ) : (
      <Alert
        message="Mise en place du produit"
        description="Veuillez cliquer sur le boutton commencer pour tester le premier produit de catalogue."
        type="info"
        showIcon
      />
    );
  };

  switch (etapeName) {
    case 'newtest':
      return <NewTestHome />;
    case 'Placer Borne':
      return (
        <BornesForm UpdateData={UpdateData} miseenplaceok={miseenplaceok} />
      );
    case 'Ratio/Polarite':
      return (
        <Ratio_PolariteForm
          UpdateData={UpdateData}
          miseenplaceok={miseenplaceok}
        />
      );
    case 'Induit':
      return (
        <InduitForm UpdateData={UpdateData} miseenplaceok={miseenplaceok} />
      );
    case 'Hipot':
      return (
        <HipotForm UpdateData={UpdateData} miseenplaceok={miseenplaceok} />
      );
    case 'Pertes a Vide':
      return (
        <Perte_a_VideForm
          UpdateData={UpdateData}
          miseenplaceok={miseenplaceok}
        />
      );
    case 'RIV':
      return <RivForm UpdateData={UpdateData} />;
    case 'Pertes a Charge':
      return (
        <Perte_a_ChargeForm
          UpdateData={UpdateData}
          miseenplaceok={miseenplaceok}
        />
      );
    case 'Facteur de dissipation':
      return <Facteur_DissipationForm />;

    case 'Décharges Partielles':
      return (
        <Decharges_PartiellesForm
          UpdateData={UpdateData}
          miseenplaceok={miseenplaceok}
          chance={chance}
          setchance={setchance}
        />
      );

    case 'Signature':
      return <SignatureForm UpdateData={UpdateData} />;
    default:
      return null;
  }
}

export default newTestContent;
