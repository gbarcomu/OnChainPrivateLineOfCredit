import { useEffect, useState } from 'react';
import { getUSDFBalance } from './ethereumConnector.js';

function USDFBalance() {

    const [tokenBalance, setTokenBalance] = useState();

    useEffect(() => {
        try {
            getUSDFBalance().then(data => {
                setTokenBalance(data);
            });
        }
        catch (err) {
            setTokenBalance(0);
        }

    }, []);
    return (
        <div>
            USDF Balance: {tokenBalance}
        </div>
    );
}

export { USDFBalance }