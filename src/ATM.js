
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { loadEthereumChainId, switchNetwork, openLineOfCredit } from './ethereumConnector.js';
import { useEffect, useState } from 'react';

import atm from './img/atm.png';

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
      <Row>
        <Col>
        </Col>
        <Col xs={6}>
          <Row>
            <Col></Col>
            <Col xs={4}>
              <Image src={atm} alt="atm" fluid />
            </Col>
            <Col></Col>
          </Row>
          <Row>
          </Row>
        </Col>
        <Col>
        </Col>
      </Row>
    </div>
  );
}

export { ATM }