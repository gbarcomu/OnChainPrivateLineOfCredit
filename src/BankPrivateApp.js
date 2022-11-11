
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
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

  const [totalCreditAmount, setTotalCreditAmount] = useState("100000");

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      openLineOfCredit();
    }
    catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
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
                <Form.Label>Amount</Form.Label>
                <Form.Control type="number" placeholder="100000" onChange={e => setTotalCreditAmount(e.target.value)}/>
              </Form.Group>
              <Button variant="dark" type="submit">Submit</Button>
            </Form>
          </Row>
        </Col>
        <Col>
        </Col>
      </Row>
    </div>
  );
}

export { BankPrivateApp }