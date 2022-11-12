
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { loadEthereumChainId, switchNetwork } from './ethereumConnector.js';
import { useEffect } from 'react';
import { Menu } from './Menu';
import { Contract } from './Contract';
import { WithdrawProof } from './WithdrawProof';
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
        <Col></Col>
        <Col xs={5}>
          <Row>
            <Col></Col>
            <Col xs={4}>
              <Image src={atm} alt="atm" fluid />
            </Col>
            <Col></Col>
          </Row>
          <Row>
            <WithdrawProof />
          </Row>
        </Col>
        <Col xs={5}>
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
        <Col></Col>
      </Row>
    </div>
  );
}

export { ATM }