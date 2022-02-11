import React, {useState} from 'react';
import {Alert} from 'antd';
import BornesForm from '@/components/forms/newtest/Bornes';
import Ratio_PolariteForm_P1 from '@/components/forms/newtest/Ratio_Polarite_P1';
import Ratio_PolariteForm_P2 from '@/components/forms/newtest/Ratio_Polarite_P2';
import InduitForm_P1 from '@/components/forms/newtest/Induit_P1';
import InduitForm_P2 from '@/components/forms/newtest/Induit_P2';

import HipotForm from '@/components/forms/newtest/Hipot';
import Perte_a_VideForm_P1 from '@/components/forms/newtest/Perte_a_vide_P1';
import Perte_a_VideForm_P2 from '@/components/forms/newtest/Perte_a_vide_P2';
import RivForm from '@/components/forms/newtest/RIV_Form';
import Perte_a_ChargeForm_P1 from '@/components/forms/newtest/Perte_a_charge_P1';
import Perte_a_ChargeForm_P2 from '@/components/forms/newtest/Perte_a_charge_P2';

import Facteur_DissipationForm from '@/components/forms/newtest/Facteur_dissipation';
import Decharges_PartiellesForm from '@/components/forms/newtest/Decharges_Partielles';
import SignatureForm from '@/components/forms/newtest/Signature';
import {Steps, Button, Row, Col, Divider, Form, Modal, Space, Spin} from 'antd';

const {Step} = Steps;
export const Steps1phase = ({current, steps}) => {
  return (
    <Steps size="small" current={current} direction="vertical">
      {steps.map(item => (
        <Step key={item.title} id="newtest" title={item.title} />
      ))}
    </Steps>
  );
};
function NewTestContent({
  etapeName,
  UpdateData,
  mise_en_placeById,
  test_type_selected,
  setFinaldata,
  Prise,
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
    case 'Ratio/Polarite P1':
      return (
        <Ratio_PolariteForm_P1
          UpdateData={UpdateData}
          miseenplaceok={mise_en_placeById}
          setFinaldata={setFinaldata}
          setNewMisePlace={setNewMisePlace}
          Prise={Prise}
        />
      );
    case 'Ratio/Polarite P2':
      return (
        <Ratio_PolariteForm_P2
          UpdateData={UpdateData}
          miseenplaceok={mise_en_placeById}
          setFinaldata={setFinaldata}
          setNewMisePlace={setNewMisePlace}
          Prise={Prise}
        />
      );
    case 'Induit P1':
      return (
        <InduitForm_P1
          UpdateData={UpdateData}
          miseenplaceok={mise_en_placeById}
          setFinaldata={setFinaldata}
          error={error}
          setNewMisePlace={setNewMisePlace}
        />
      );
    case 'Induit P2':
      return (
        <InduitForm_P2
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
    case 'Pertes a Vide P1':
      return (
        <Perte_a_VideForm_P1
          UpdateData={UpdateData}
          miseenplaceok={mise_en_placeById}
          setFinaldata={setFinaldata}
          setNewMisePlace={setNewMisePlace}
        />
      );
    case 'Pertes a Vide P2':
      return (
        <Perte_a_VideForm_P2
          UpdateData={UpdateData}
          miseenplaceok={mise_en_placeById}
          setFinaldata={setFinaldata}
          setNewMisePlace={setNewMisePlace}
        />
      );
    case 'RIV':
      return (
        <RivForm UpdateData={UpdateData} setNewMisePlace={setNewMisePlace} />
      );
    case 'Pertes a Charge P1':
      return (
        <Perte_a_ChargeForm_P1
          UpdateData={UpdateData}
          miseenplaceok={mise_en_placeById}
          setFinaldata={setFinaldata}
          setNewMisePlace={setNewMisePlace}
        />
      );
    case 'Pertes a Charge P2':
      return (
        <Perte_a_ChargeForm_P2
          UpdateData={UpdateData}
          miseenplaceok={mise_en_placeById}
          setFinaldata={setFinaldata}
          setNewMisePlace={setNewMisePlace}
        />
      );
    case 'Facteur de dissipation':
      return (
        <Facteur_DissipationForm
          UpdateData={UpdateData}
          setFinaldata={setFinaldata}
        />
      );

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

export default NewTestContent;
