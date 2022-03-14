import React, {useState} from 'react';
import {Alert} from 'antd';
import BornesForm from '@/components/forms/newtest/Bornes';
import Ratio_PolariteForm_P1 from '@/components/forms/newtest/Ratio_Polarite_P1';
import Ratio_PolariteForm_P2 from '@/components/forms/newtest/Ratio_Polarite_P2';
import InduitForm_P1 from '@/components/forms/newtest/Induit_P1';
import InduitForm_P2 from '@/components/forms/newtest/Induit_P2';

import HipotForm_HT from '@/components/forms/newtest/Hipot_HT';
import HipotForm_BT from '@/components/forms/newtest/Hipot_BT';

import Perte_a_VideForm_P1 from '@/components/forms/newtest/Perte_a_vide_P1';
import Perte_a_VideForm_P2 from '@/components/forms/newtest/Perte_a_vide_P2';
import RivForm from '@/components/forms/newtest/RIV_Form';
import Perte_a_ChargeForm_P1 from '@/components/forms/newtest/Perte_a_charge_P1';
import Perte_a_ChargeForm_P2 from '@/components/forms/newtest/Perte_a_charge_P2';

import Facteur_DissipationForm from '@/components/forms/newtest/Facteur_dissipation';
import Decharges_PartiellesForm from '@/components/forms/newtest/Decharges_Partielles';
import SignatureForm from '@/components/forms/newtest/Signature';
import {
  Steps,
  Button,
  Row,
  Col,
  Divider,
  Form,
  Modal,
  Space,
  Spin,
  Input,
} from 'antd';

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
  commande,
  etapeName,
  UpdateData,
  mise_en_placeById,
  test_type_selected,
  setFinaldata,
  Prise,
  setNewMisePlace,
  error,
  Finaldata,
  form,

  // props button reussi
  next,
}) {
  const [chance, setchance] = useState(0);
  const NewTestHome = () => {
    return mise_en_placeById !== null ? (
      <div className="Containertest">
        <Alert
          message="Prét a Tester!"
          description={`Veuillez cliquer sur le Boutton Commencer en bas pour Tester le transfo en utilisant le type de test ${mise_en_placeById.Type_test}`}
          type="success"
          showIcon
        />
      </div>
    ) : (
      <div className="Containertest">
        <Alert
          message="Mise en place du produit"
          description="Veuillez cliquer sur le boutton commencer pour tester le premier produit de catalogue."
          type="info"
          showIcon
        />
      </div>
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
          // props button reussi
          next={next}
        />
      );
    case 'Induit P2':
      return (
        <InduitForm_P2
          UpdateData={UpdateData}
          miseenplaceok={mise_en_placeById}
          Finaldata={Finaldata}
          setFinaldata={setFinaldata}
          error={error}
          setNewMisePlace={setNewMisePlace}
          // props button reussi
          next={next}
        />
      );
    case 'Hipot HT':
      return (
        <HipotForm_HT
          UpdateData={UpdateData}
          miseenplaceok={mise_en_placeById}
          setFinaldata={setFinaldata}
          error={error}
          // props button reussi
          next={next}
        />
      );
    case 'Hipot BT':
      return (
        <HipotForm_BT
          UpdateData={UpdateData}
          miseenplaceok={mise_en_placeById}
          setFinaldata={setFinaldata}
          error={error}
          // props button reussi
          next={next}
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
        <RivForm
          UpdateData={UpdateData}
          setFinaldata={setFinaldata}
          setNewMisePlace={setNewMisePlace}
        />
      );
    case 'Pertes a Charge P1':
      return (
        <Perte_a_ChargeForm_P1
          commande={commande}
          Finaldata={Finaldata}
          UpdateData={UpdateData}
          miseenplaceok={mise_en_placeById}
          setFinaldata={setFinaldata}
          setNewMisePlace={setNewMisePlace}
          form={form}
        />
      );
    case 'Pertes a Charge P2':
      return (
        <Perte_a_ChargeForm_P2
          commande={commande}
          Finaldata={Finaldata}
          UpdateData={UpdateData}
          miseenplaceok={mise_en_placeById}
          setFinaldata={setFinaldata}
          setNewMisePlace={setNewMisePlace}
          form={form}
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
          Finaldata={Finaldata}
          setFinaldata={setFinaldata}
          setNewMisePlace={setNewMisePlace}
          error={error}
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
