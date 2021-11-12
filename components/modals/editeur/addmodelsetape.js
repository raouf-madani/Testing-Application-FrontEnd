import React, {useState} from 'react';

import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Modal,
  ModalHeader,
  ModalBody,
} from 'reactstrap';
function Addmodelsetape(props) {
  const {isadding, toggle} = props;
  return (
    <div>
      <Modal isOpen={isadding} toggle={toggle}>
        <ModalHeader>
          <h3 style={{color: 'black'}}>Ajouter une liste de Calcules</h3>
        </ModalHeader>
        <ModalBody></ModalBody>
      </Modal>
    </div>
  );
}

export default Addmodelsetape;
