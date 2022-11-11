import { ethers } from 'ethers'
//import ERC20 from './artifacts/contracts/USDFoo.sol/USDFoo.json'
import {CHAIN_ID, CHAIN_NAME, RPC_URL} from './Constants'

export function isMetaMaskInstalled() {
    const { ethereum } = window;
    return Boolean(ethereum && ethereum.isMetaMask);
  };

export async function loadEthereumRequestAccount() {
    const [account] = await window.ethereum.request({ method: 'eth_requestAccounts' })
    return account;
}

export async function loadEthereumAccount() {
    const [account] = await window.ethereum.request({ method: 'eth_accounts' })
    return account;
}

export async function loadEthereumChainId() {
    const chainId = await window.ethereum.request({ method: 'eth_chainId' })
    return chainId;
}

export async function switchNetwork() {
    try {
        await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: CHAIN_ID }],
        });
    } catch (switchError) {
        if (switchError.code === 4902) {
            try {
                await window.ethereum.request({
                    method: 'wallet_addEthereumChain',
                    params: [
                        {
                            chainId: CHAIN_ID,
                            chainName: CHAIN_NAME,
                            rpcUrls: [RPC_URL],
                        },
                    ],
                });
            } catch (addError) {
            }
        }
    }
}




