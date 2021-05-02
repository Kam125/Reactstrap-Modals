import React, { useState } from 'react';
import { Button, Modal,  ModalBody, ModalFooter } from 'reactstrap';
import { Form, Row, Col, FormGroup, Label, Input } from 'reactstrap'
import ModalComp2 from './ModalComp2';

const ModalComp = (props) => {
    const {

        className
    } = props;

    const [modal, setModal] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = useState('');

    const toggle = () => setModal(!modal);

    const handleSubmit = (e) =>{
        e.preventDefault();
        setEmail('');
        setPassword('');
        setAddress('');
        setCity('');
        setState('');
        setZip('');
    }

    return (
        <div>
            <Button color="secondary" onClick={toggle}>Open Modal</Button>
            <Modal isOpen={modal} toggle={toggle} className={className} centered size = 'lg'>
                
                <ModalBody>
                    <Form onSubmit = {handleSubmit}>
                        <Row form>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="exampleEmail">Email</Label>
                                    <Input
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        type="email" name="email" id="exampleEmail" placeholder="email@myemail.com" />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="examplePassword">Password</Label>
                                    <Input
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        type="password" name="password" id="examplePassword" placeholder="password" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <FormGroup>
                            <Label for="exampleAddress">Address</Label>
                            <Input
                                required
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                type="text" name="address" id="exampleAddress" placeholder="House #, Street#, Sector" />
                        </FormGroup>
                        <Row form>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="exampleCity">City</Label>
                                    <Input
                                        required
                                        value={city}
                                        onChange={(e) => setCity(e.target.value)}
                                        type="text" name="city" id="exampleCity" />
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="exampleState">State</Label>
                                    <Input
                                        required
                                        value={state}
                                        onChange={(e) => setState(e.target.value)}
                                        type="text" name="state" id="exampleState" />
                                </FormGroup>
                            </Col>
                            <Col md={2}>
                                <FormGroup>
                                    <Label for="exampleZip">Zip</Label>
                                    <Input
                                        required
                                        value={zip}
                                        onChange={(e) => setZip(e.target.value)}
                                        type="text" name="zip" id="exampleZip" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <ModalComp2 email = {email} address = {address} city = {city} state = {state} zip = {zip} />
                    </Form>
                </ModalBody>
                <ModalFooter>
                    {' '}
                    <Button color="danger" onClick={toggle}>Cancel</Button>
                    
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default ModalComp;