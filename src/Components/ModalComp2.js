import React, { useState } from 'react';
import { Button, Modal,  ModalBody, ModalFooter } from 'reactstrap';

const ModalComp2 = (props) => {
    console.log(props);
  const {
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="success" onClick={toggle}>Submit</Button>
      <Modal isOpen={modal} toggle={toggle} className={className} centered size = 'lg'>
        
        <ModalBody>
          <p>Email: {props.email}</p>
          <p>Address: {props.address}</p>
          <p>City: {props.city}</p>
          <p>State: {props.state}</p>
          <p>Zip: {props.zip}</p>
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={toggle}>Close </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalComp2;