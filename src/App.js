import { isMetaMaskInstalled } from './ethereumConnector.js';
import { useEffect, useState } from 'react';

import { BankPrivateApp } from './BankPrivateApp';
import { NoMetamask } from './NoMetamask'

export default function App() {

  const [dAppDAppnt, setDAppDappnt] = useState(<div></div>);

  useEffect(() => {
    setDAppDappnt(isMetaMaskInstalled() ? <BankPrivateApp /> : <NoMetamask />);
  }, []);

  return (dAppDAppnt);
}



