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

function newTestContent({
  etapeName,
  UpdateData,
  mise_en_placeById,
  setFinaldata,
  setNewMisePlace,
  error,
}) {
  const [chance, setchance] = useState(0);
  const NewTestHome = () => {
    return mise_en_placeById !== null ? (
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
        <BornesForm
          UpdateData={UpdateData}
          miseenplaceok={mise_en_placeById}
          setFinaldata={setFinaldata}
          setNewMisePlace={setNewMisePlace}
        />
      );
    case 'Ratio/Polarite':
      return (
        <Ratio_PolariteForm
          UpdateData={UpdateData}
          miseenplaceok={mise_en_placeById}
          setFinaldata={setFinaldata}
          setNewMisePlace={setNewMisePlace}
        />
      );
    case 'Induit':
      return (
        <InduitForm
          UpdateData={UpdateData}
          miseenplaceok={mise_en_placeById}
          setFinaldata={setFinaldata}
          error={error}
          setNewMisePlace={setNewMisePlace}
        />
      );
    case 'Hipot':
      return (
        <HipotForm
          UpdateData={UpdateData}
          miseenplaceok={mise_en_placeById}
          setFinaldata={setFinaldata}
          error={error}
        />
      );
    case 'Pertes a Vide':
      return (
        <Perte_a_VideForm
          UpdateData={UpdateData}
          miseenplaceok={mise_en_placeById}
          setFinaldata={setFinaldata}
          setNewMisePlace={setNewMisePlace}
        />
      );
    case 'RIV':
      return <RivForm UpdateData={UpdateData} setFinaldata={setFinaldata} />;
    case 'Pertes a Charge':
      return (
        <Perte_a_ChargeForm
          UpdateData={UpdateData}
          miseenplaceok={mise_en_placeById}
          setFinaldata={setFinaldata}
        />
      );
    case 'Facteur de dissipation':
      return <Facteur_DissipationForm />;

    case 'Décharges Partielles':
      return (
        <Decharges_PartiellesForm
          UpdateData={UpdateData}
          miseenplaceok={mise_en_placeById}
          chance={chance}
          setchance={setchance}
          setFinaldata={setFinaldata}
          setNewMisePlace={setNewMisePlace}
        />
      );

    case 'Signature':
      return (
        <SignatureForm UpdateData={UpdateData} setFinaldata={setFinaldata} />
      );
    default:
      return null;
  }
}

export default newTestContent;
