
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Menu } from './Menu';
import { loadEthereumChainId, switchNetwork, openLineOfCredit } from './ethereumConnector.js';
import { useEffect, useState } from 'react';

import bank_img from './img/bank.png';

function BankPrivateApp() {

  useEffect(() => {
    loadEthereumChainId();
    switchNetwork();
  }, []);

  window.ethereum.on('networkChanged', function () {
    window.location.reload();
  });
  window.ethereum.on('accountsChanged', function () {
    window.location.reload();
  });

  const [creditLineParameters, setCreditLineParameters] = useState({});
  const [lineOfCreditReceipt, setLineOfCreditReceipt] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      openLineOfCredit(JSON.parse(creditLineParameters)).then(val => {
        setLineOfCreditReceipt(val.logs[0].data.substr(65, 1) === "1" ? "true":"false");
        handleShow();
      });
    }
    catch (err) {
      console.error(err);
    }
  }

  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    window.location.reload();
  }
  const handleShow = () => setShow(true);

  return (
    <div>
      <Menu />
      <Row>
        <Col>
        </Col>
        <Col xs={6}>
          <Row>
            <Col></Col>
            <Col xs={4}>
              <Image src={bank_img} alt="bank" fluid />
            </Col>
            <Col></Col>
          </Row>
          <Row>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Credit Line init parameters</Form.Label>
                <Form.Control as="textarea" rows={3} onChange={e => setCreditLineParameters(e.target.value)}/>
              </Form.Group>
              <Button variant="dark" type="submit">Submit</Button>
            </Form>
          </Row>
        </Col>
        <Col>
        </Col>
      </Row>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Transaction result</Modal.Title>
        </Modal.Header>

        <Modal.Body>
                Has line of credit been created?: <p>{lineOfCreditReceipt}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>

    </div>
  );
}

export { BankPrivateApp }