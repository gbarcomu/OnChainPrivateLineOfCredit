import { ethers } from 'ethers'
//import ERC20 from './artifacts/contracts/USDFoo.sol/USDFoo.json'
import Bank from './artifacts/contracts/Bank.sol/Bank.json'
import {CHAIN_ID, CHAIN_NAME, RPC_URL, BANK_ADDRESS} from './Constants'

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

export async function openLineOfCredit() {
    await loadEthereumAccount();
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(BANK_ADDRESS, Bank.abi, signer);
    try {
        const transaction = await contract.openLineOfCredit(
            "123",
            "0x6162636400000000000000000000000000000000000000000000000000000000",
            "0x6162636400000000000000000000000000000000000000000000000000000000",
            "0x6162636400000000000000000000000000000000000000000000000000000000",
            "0x6162636400000000000000000000000000000000000000000000000000000000",
        );
        const txResult = await transaction.wait();
        return txResult;

    } catch (err) {
        console.error(err);
        window.location.reload();
    }
}




