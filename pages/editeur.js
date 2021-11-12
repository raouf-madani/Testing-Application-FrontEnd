import React, {useState, useEffect} from 'react';
import Baselayout from '@/components/layouts/baselayout';
import Basepage from '@/components/Basepage';
import Header from '@/components/Editeurheader';
import {useGetUser} from '@/actions/user';
import withAuth from '@/hoc/withAuth';
import SortableTable from '@/components/tables/Editeur/listemodels';

import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

import {
  CaretDownOutlined,
  CloseCircleFilled,
  PlusCircleFilled,
  GooglePlusCircleFilled,
} from '@ant-design/icons';
const Editeur = () => {
  const {data, loading} = useGetUser();
  const [condition1dropdown, setOpenc1] = useState(false);
  const [condition2dropdown, setOpenc2] = useState(false);
  const [condition3dropdown, setOpenc3] = useState(false);
  const [condition4dropdown, setOpenc4] = useState(false);
  const [or1dropdown, setOpeno1] = useState(false);
  const [or2dropdown, setOpeno2] = useState(false);
  const [isadding, setisadding] = useState(false);

  const etapesdata = [
    {
      key: '1',
      etape: 'etape1',
      index: 0,
    },
    {
      key: '2',
      etape: 'etape2',
      index: 1,
    },
    {
      key: '3',
      etape: 'etape3',
      index: 2,
    },
  ];
  const [modelsdata, setmodelsdata] = useState([
    {
      key: 1,
      etape: 'Special 3 phases',
      index: 0,
      coditions: 'one',
    },
    {
      key: 2,
      etape: 'Special 1 phase',
      index: 1,
      coditions: 'two',
    },
    {
      key: 3,
      etape: 'Default',
      index: 2,
      coditions: 'three',
    },
  ]);

  return (
    <div>
      <Baselayout user={data} loading={loading}>
        <Basepage className=" editeur-page" navheader={<Header />}>
          <div className=" row editeur-container ">
            <div className=" col-md-3 col-lg-3 leftside ">
              <div className="leftheader">
                <h4>Liste des modeles d'etape</h4>
                <PlusCircleFilled
                  className="plusbutton"
                  onClick={() => {
                    setisadding(!isadding);
                  }}
                />
              </div>
              <div className="leftside-container">
                <SortableTable
                  tabledata={modelsdata}
                  isadding={isadding}
                  setisadding={setisadding}
                />
              </div>
            </div>
            <div
              className="row rightside col-md-9 col-lg-9 "
              style={{backgroundColor: '#0e1133e0', width: '100%'}}>
              <div className="middlecontainer col-md-8 col-lg-8 ">
                <h4>Nom</h4>
                <div>
                  <label
                    style={{
                      backgroundColor: 'white',
                      color: 'black',
                      padding: '5px',
                    }}>
                    Special 3 phases
                  </label>
                  <a href="#" style={{color: '#24a2a7', padding: '5px'}}>
                    copier
                  </a>
                  <a href="#" style={{color: '#24a2a7', padding: '5px'}}>
                    supprimer
                  </a>
                </div>
                <h4>
                  Condition <GooglePlusCircleFilled />
                </h4>
                <div className="block-div">
                  <div className="flex-div">
                    <CloseCircleFilled className="xbutton" />
                    <ButtonDropdown
                      className="Dropdown"
                      isOpen={condition1dropdown}
                      toggle={() => setOpenc1(!condition1dropdown)}>
                      <DropdownToggle caret size="sm" color="info">
                        Modele
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem header>Header</DropdownItem>
                        <DropdownItem disabled>Action</DropdownItem>
                        <DropdownItem>Another Action</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Another Action</DropdownItem>
                      </DropdownMenu>
                    </ButtonDropdown>
                    <ButtonDropdown
                      className="Dropdown"
                      isOpen={condition2dropdown}
                      toggle={() => setOpenc2(!condition2dropdown)}>
                      <DropdownToggle caret size="sm" color="info">
                        Egale
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem header>Header</DropdownItem>
                        <DropdownItem disabled>Action</DropdownItem>
                        <DropdownItem>Another Action</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Another Action</DropdownItem>
                      </DropdownMenu>
                    </ButtonDropdown>
                    <label
                      style={{
                        textAlign: 'center',
                        backgroundColor: 'white',
                        color: 'black',
                        margin: '5px',
                        padding: '2px',
                        borderRadius: '15%',
                        boxShadow: 'inset 0px 0px 0px 1px #549af6',
                        color: '#0d8975',
                      }}>
                      Special 3 phases
                    </label>
                  </div>
                  <div className="flex-div">
                    <CloseCircleFilled className="xbutton" />
                    <ButtonDropdown
                      className="Dropdown"
                      isOpen={condition3dropdown}
                      toggle={() => setOpenc3(!condition3dropdown)}>
                      <DropdownToggle caret size="sm" color="info">
                        No Serie
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem header>Header</DropdownItem>
                        <DropdownItem disabled>Action</DropdownItem>
                        <DropdownItem>Another Action</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Another Action</DropdownItem>
                      </DropdownMenu>
                    </ButtonDropdown>
                    <ButtonDropdown
                      className="Dropdown"
                      isOpen={condition4dropdown}
                      toggle={() => setOpenc4(!condition4dropdown)}>
                      <DropdownToggle caret size="sm" color="info">
                        Debute Par
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem header>Header</DropdownItem>
                        <DropdownItem disabled>Action</DropdownItem>
                        <DropdownItem>Another Action</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Another Action</DropdownItem>
                      </DropdownMenu>
                    </ButtonDropdown>

                    <label
                      style={{
                        textAlign: 'center',
                        backgroundColor: 'white',
                        color: 'black',
                        margin: '5px',
                        padding: '2px',
                        borderRadius: '15%',
                        boxShadow: 'inset 0px 0px 0px 1px #549af6',
                        color: '#0d8975',
                      }}>
                      Special 3 phases
                    </label>
                  </div>
                  <a href="#" style={{color: '#24a2a7', padding: '5px'}}>
                    Ajouter AND
                  </a>
                  <div></div>
                </div>
                <h4>OR</h4>
                <div className="block-div">
                  <div className="flex-div">
                    <CloseCircleFilled className="xbutton" />
                    <ButtonDropdown
                      className="Dropdown"
                      isOpen={or1dropdown}
                      toggle={() => setOpeno1(!or1dropdown)}>
                      <DropdownToggle caret size="sm" color="primary">
                        Kva
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem header>Header</DropdownItem>
                        <DropdownItem disabled>Action</DropdownItem>
                        <DropdownItem>Another Action</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Another Action</DropdownItem>
                      </DropdownMenu>
                    </ButtonDropdown>
                    <ButtonDropdown
                      className="Dropdown"
                      isOpen={or2dropdown}
                      toggle={() => setOpeno2(!or2dropdown)}>
                      <DropdownToggle caret size="sm" color="primary">
                        Entre
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem header>Header</DropdownItem>
                        <DropdownItem disabled>Action</DropdownItem>
                        <DropdownItem>Another Action</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Another Action</DropdownItem>
                      </DropdownMenu>
                    </ButtonDropdown>
                    <label
                      style={{
                        textAlign: 'center',
                        backgroundColor: 'white',
                        color: 'black',
                        margin: '5px',
                        padding: '2px',
                        width: '40%',
                        borderRadius: '15%',
                        boxShadow: 'inset 0px 0px 0px 1px #549af6',
                        color: '#1071f2',
                      }}>
                      2
                    </label>
                    ET
                    <label
                      style={{
                        textAlign: 'center',
                        backgroundColor: 'white',
                        color: 'black',
                        margin: '5px',
                        padding: '2px',
                        width: '40%',
                        borderRadius: '15%',
                        boxShadow: 'inset 0px 0px 0px 1px #549af6',
                        color: '#1071f2',
                      }}>
                      72
                    </label>
                  </div>
                  <a href="#" style={{color: '#24a2a7', padding: '5px'}}>
                    Ajouter AND
                  </a>
                  <div></div>
                </div>
              </div>
              <div className="rightcontainer col-md-4 col-lg-4 ">
                <div className="rightheader">
                  <h4>Etapes</h4>
                  <PlusCircleFilled className="plusbutton" />
                </div>

                <div className="etapescontainer">
                  <SortableTable tabledata={etapesdata} />
                </div>
              </div>
            </div>
          </div>
        </Basepage>
      </Baselayout>
    </div>
  );
};
export default withAuth(Editeur)('admin');
