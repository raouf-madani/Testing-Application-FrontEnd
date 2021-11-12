import React, {useState} from 'react';
import {Modal, ModalHeader, ModalBody, ModalFooter, Button} from 'reactstrap';

const ModalLink = props => {
  const {modal, className, title, children, toggle, width, minwidth, height} =
    props;

  return (
    <div>
      <Modal
        style={{width: width, minWidth: minwidth}}
        className={className}
        size="xl"
        isOpen={modal}
        toggle={toggle}
        backdrop="static">
        <ModalHeader className="modalHeader" toggle={toggle}>
          <h2 style={{color: 'white'}}>{title}</h2>
        </ModalHeader>
        <ModalBody className="modalBody">
          <div
            style={{
              padding: '10px',
              height: '100%',
              width: '100%',
              borderRadius: '10px',
            }}>
            {children}
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ModalLink;
