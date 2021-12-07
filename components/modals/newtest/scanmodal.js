import React, {useState} from 'react';
import {
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
import {Button} from 'reactstrap';

const ModalExample = props => {
  const {modal, toggle, direction} = props;

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} backdrop="static">
        <Form action="/newtest">
          <ModalHeader>
            <h4 style={{color: 'black'}}> Scanner</h4>
          </ModalHeader>
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
            <Button color="info" outline type="submit">
              Commencer le Test
            </Button>{' '}
            <Button href={direction} color="danger" outline onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Form>
      </Modal>
    </div>
  );
};

export default ModalExample;
