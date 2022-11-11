
import { loadEthereumChainId, switchNetwork } from './ethereumConnector.js';
import { useEffect } from 'react';

function BankPrivateApp() {

  useEffect(() => {
    loadEthereumChainId();
    switchNetwork();
  }, []);

  window.ethereum.on('networkChanged', function(){
    window.location.reload();
  });
  window.ethereum.on('accountsChanged', function(){
    window.location.reload();
  });

  return (
    <div>
        <p>Hola</p>
    </div>
  );
}

export { BankPrivateApp }