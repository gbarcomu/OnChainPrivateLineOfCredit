
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { loadEthereumChainId, switchNetwork, openLineOfCredit } from './ethereumConnector.js';
import { useEffect, useState } from 'react';
import { Menu } from './Menu';
import { Contract } from './Contract';
import atm from './img/atm.png';
import contract from './img/contract.png';

function ATM() {

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

  return (
    <div>
      <Menu />
      <Row>
        <Col xs={6}>
          <Row>
            <Col></Col>
            <Col xs={4}>
              <Image src={atm} alt="atm" fluid />
            </Col>
            <Col></Col>
          </Row>
        </Col>
        <Col xs={6}>
        <Row>
            <Col></Col>
            <Col xs={4}>
          <Image src={contract} alt="contract" fluid />
          </Col>
            <Col></Col>
          </Row>
          <Row>
            <Contract />
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export { ATM }