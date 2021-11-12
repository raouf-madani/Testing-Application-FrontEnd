import React, {useState} from 'react';
import Valeursref from '@/components/tables/Editeur/valeursref';
import Listvaleurs from '@/components/tables/Editeur/listvaleurs';
import Listcalcule from '@/components/tables/Editeur/listcalcule';
import ListEtapes from '@/components/tables/Editeur/listeetapes';
import {Input, Space} from 'antd';

import {Button} from 'reactstrap';

import Modal from '@/components/modals/editeur/editeurmodal';

const Header = () => {
  const [modal1, setModal1] = useState(false);
  const toggle1 = () => setModal1(!modal1);

  const [modal2, setModal2] = useState(false);
  const toggle2 = () => setModal2(!modal2);

  const [modal3, setModal3] = useState(false);
  const toggle3 = () => setModal3(!modal3);

  const [modal4, setModal4] = useState(false);
  const toggle4 = () => setModal4(!modal4);

  const [searchref, setsearchref] = useState('');
  const [searchval, setsearchval] = useState('');
  const [searchcalcules, setsearchcalcules] = useState('');

  const {Search} = Input;
  const onSearch = value => console.log(value);
  return (
    <div className="editeur-header row">
      <div className="leftside  col-md-4 col-lg-4 ">
        <Button outline color="primary">
          Menu
        </Button>
        <span>
          <h2> Editeur d'etapes </h2>
        </span>
      </div>
      <div className="rightside  col-md-8 col-lg-8 ">
        <Button outline color="primary" onClick={toggle1}>
          Voir les etapes
        </Button>
        <Button outline color="secondary" onClick={toggle2}>
          Voir les valeurs de ref
        </Button>
        <Button outline color="info" onClick={toggle3}>
          Voir les valeurs
        </Button>
        <Button outline color="primary" onClick={toggle4}>
          Voir les calcules
        </Button>
      </div>
      <Modal
        toggle={toggle1}
        modal={modal1}
        title="Liste des etapes"
        className="modalContainer"
        width="100%">
        <ListEtapes />
      </Modal>
      <Modal
        toggle={toggle2}
        modal={modal2}
        title="Valeurs de reference"
        className="modalContainer"
        width="50%">
        {/* <div className="flex-div" style={{justifyContent:"end"}}>
        <Space direction="vertical">
        <Search placeholder="input search text" onSearch={onSearch} onChange={(e) => setsearchref(e.target.value)} enterButton allowClear  />
        </Space>
        </div> */}
        <Valeursref className="modal-table" searchtext={searchref} />
      </Modal>
      <Modal
        toggle={toggle3}
        modal={modal3}
        title="Liste des Valeurs"
        className="modalContainer"
        width="50%">
        {/* <div className="flex-div" style={{justifyContent:"end"}}>
          <Space direction="vertical">
          <Search placeholder="input search text" onSearch={onSearch} onChange={(e) => setsearchval(e.target.value)}  enterButton allowClear />
          </Space>
        </div> */}
        <Listvaleurs searchtext={searchval} />
      </Modal>
      <Modal
        toggle={toggle4}
        modal={modal4}
        title="Liste des calculees"
        className="modalContainer"
        width="100%"
        minwidth="700px">
        <Listcalcule searchtext={searchcalcules} />
      </Modal>
    </div>
  );
};

export default Header;
