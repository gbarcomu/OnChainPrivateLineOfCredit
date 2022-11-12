import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import { USDFBalance } from './USDFBalance';
import { CHAIN_ID } from './Constants';

import { loadEthereumAccount, loadEthereumRequestAccount, loadEthereumChainId } from './ethereumConnector.js';

function Menu() {

  const [userAddress, setUserAddress] = useState();

  const [currentChain, setCurrentChain] = useState();

  async function loadAddress() {
    const account = await loadEthereumRequestAccount();
    setUserAddress(<Navbar.Text>{account}</Navbar.Text>);
  }

  useEffect(() => {
    try {
      loadEthereumAccount().then(account => {
        if (account != null) {
          setUserAddress(<Navbar.Text>{account}</Navbar.Text>);
        }
        else {
          setUserAddress(<Button variant="light" onClick={loadAddress}>Load Address</Button>);
        }
      });
      loadEthereumChainId().then(chainid => {
        if (chainid === CHAIN_ID) {
          setCurrentChain(
            <Navbar.Text>
              {chainid}
            </Navbar.Text>)
        }
        else {
          setCurrentChain(
            <Navbar.Text>
              not supported, please switch to the correct chain
            </Navbar.Text>)
        }
      });
    }
    catch (err) {
      setUserAddress(<Button variant="light" onClick={loadAddress}>Load Address</Button>);
    }
  }, []);

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Nav className="me-auto">
          <Navbar.Text>
            <USDFBalance />
          </Navbar.Text>
        </Nav>
        <Nav>
          <Navbar.Text>
            Network:&ensp;
          </Navbar.Text>
          {currentChain}
          <Navbar.Text>
            &ensp;
            &ensp;
          </Navbar.Text>
        </Nav>
        <Nav>
          {userAddress}
        </Nav>
      </Container>
    </Navbar>
  )
}

export { Menu }