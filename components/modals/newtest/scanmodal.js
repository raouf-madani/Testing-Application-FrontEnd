import React, {useState} from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Label,
  Col,
  Form,
  FormGroup,
} from 'reactstrap';

const ModalExample = props => {
  const {modal, toggle, className} = props;

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <Form action="/newtest">
          <ModalHeader>Scanner</ModalHeader>
          <ModalBody>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Col sm={10}>
                <Label for="Numerocommande">Numero de Commande </Label>
                <Input
                  type="text"
                  name="numerocommande"
                  id="Numerocommande"
                  placeholder="scaner votre code bare"
                  required
                />
              </Col>
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="info" type="submit">
              Commencer le Test
            </Button>{' '}
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Form>
      </Modal>
    </div>
  );
};

export default ModalExample;
