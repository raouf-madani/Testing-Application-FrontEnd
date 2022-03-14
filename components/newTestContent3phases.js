import React, {useState} from 'react';
import {Alert} from 'antd';
import Essai_Continuite from '@/components/forms/newtest3phases/Essai_Continuite';
import Resistance from '@/components/forms/newtest3phases/Resistance';
import Facteur_DissipationForm from '@/components/forms/newtest3phases/Facteur_dissipation';
import HipotForm from '@/components/forms/newtest3phases/Hipot';
import Ratio_P1_Form from '@/components/forms/newtest3phases/Ratio_P1';
import Ratio_P2_Form from '@/components/forms/newtest3phases/Ratio_P2';
import PolariteForm from '@/components/forms/newtest3phases/Polarite';
import InduitForm_P1 from '@/components/forms/newtest3phases/Induit_P1';
import InduitForm_P2 from '@/components/forms/newtest3phases/Induit_P2';
import Perte_a_VideForm_P1 from '@/components/forms/newtest3phases/Perte_a_vide_P1';
import Perte_a_VideForm_P2 from '@/components/forms/newtest3phases/Perte_a_vide_P2';
import RivForm from '@/components/forms/newtest3phases/RIV_Form';
import Perte_a_ChargeForm_P1 from '@/components/forms/newtest3phases/Perte_a_charge_P1';
import Perte_a_ChargeForm_P2 from '@/components/forms/newtest3phases/Perte_a_charge_P2';

import Decharges_PartiellesForm from '@/components/forms/newtest3phases/Decharges_Partielles';
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
  etapeName,
  UpdateData,
  commande,
  mise_en_placeById,
  test_type_selected,
  setFinaldata,
  Prise,
  setNewMisePlace,
  error,
  Finaldata,
  form,
}) {
  const [chance, setchance] = useState(0);
  const NewTestHome = () => {
    return mise_en_placeById !== null ? (
      <div className="Containertest">
        <Alert
          message="Prét a Tester!"
          description={`Veuillez cliquer sur le Boutton Commencer en bas pour Tester le transfo en utilisant le type de test ${mise_en_placeById.test_type}`}
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
    case 'Essai continuité':
      return <Essai_Continuite />;
    case 'Resistance':
      return (
        <Resistance
          commande={commande}
          mise_en_placeById={mise_en_placeById}
          setFinaldata={setFinaldata}
          Finaldata={Finaldata}
          form={form}
        />
      );

    case 'Facteur de dissipation':
      return (
        <Facteur_DissipationForm
          commande={commande}
          mise_en_placeById={mise_en_placeById}
          setFinaldata={setFinaldata}
        />
      );
    case 'Hi-Pot':
      return (
        <HipotForm
          commande={commande}
          mise_en_placeById={mise_en_placeById}
          setFinaldata={setFinaldata}
        />
      );
    case 'Ratio P1':
      return (
        <Ratio_P1_Form
          commande={commande}
          mise_en_placeById={mise_en_placeById}
          setFinaldata={setFinaldata}
        />
      );
    case 'Ratio P2':
      return (
        <Ratio_P2_Form
          commande={commande}
          mise_en_placeById={mise_en_placeById}
          setFinaldata={setFinaldata}
        />
      );
    case 'Polarité':
      return (
        <PolariteForm
          commande={commande}
          mise_en_placeById={mise_en_placeById}
          setFinaldata={setFinaldata}
        />
      );
    case 'Induit P1':
      return (
        <InduitForm_P1
          commande={commande}
          mise_en_placeById={mise_en_placeById}
          setFinaldata={setFinaldata}
        />
      );
    case 'Induit P2':
      return (
        <InduitForm_P2
          commande={commande}
          mise_en_placeById={mise_en_placeById}
          setFinaldata={setFinaldata}
        />
      );
    case 'Pertes à vide P1':
      return (
        <Perte_a_VideForm_P1
          commande={commande}
          mise_en_placeById={mise_en_placeById}
          setFinaldata={setFinaldata}
        />
      );
    case 'Pertes à vide P2':
      return (
        <Perte_a_VideForm_P2
          commande={commande}
          mise_en_placeById={mise_en_placeById}
          setFinaldata={setFinaldata}
        />
      );
    case 'Riv':
      return (
        <RivForm
          commande={commande}
          mise_en_placeById={mise_en_placeById}
          setFinaldata={setFinaldata}
        />
      );
    case 'Pertes a Charge P1':
      return (
        <Perte_a_ChargeForm_P1
          commande={commande}
          mise_en_placeById={mise_en_placeById}
          setFinaldata={setFinaldata}
        />
      );
    case 'Pertes a Charge P2':
      return (
        <Perte_a_ChargeForm_P2
          commande={commande}
          mise_en_placeById={mise_en_placeById}
          setFinaldata={setFinaldata}
        />
      );

    case 'Décharges Partielles':
      return (
        <Decharges_PartiellesForm
          commande={commande}
          mise_en_placeById={mise_en_placeById}
          setFinaldata={setFinaldata}
          Finaldata={Finaldata}
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
