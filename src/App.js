import { isMetaMaskInstalled } from './ethereumConnector.js';
import { useEffect, useState } from 'react';

import { BankPrivateApp } from './BankPrivateApp';
import { NoMetamask } from './NoMetamask';
import { ATM } from './ATM';

export default function App() {

  const [dAppDAppnt, setDAppDappnt] = useState(<div></div>);

  useEffect(() => {
    console.log(window.location.pathname);
    if (! isMetaMaskInstalled()) {
      setDAppDappnt(<NoMetamask />);
    }
    else if (window.location.pathname === "/ATM") {
      setDAppDappnt(<ATM />);
    }
    else {
      setDAppDappnt(<BankPrivateApp />);      
    }
  }, []);

  return (dAppDAppnt);
}



