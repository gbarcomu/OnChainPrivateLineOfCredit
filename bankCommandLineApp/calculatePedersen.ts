import { BarretenbergWasm } from '@noir-lang/barretenberg/dest/wasm';
import { SinglePedersen } from '@noir-lang/barretenberg/dest/crypto/pedersen';
import { randomBytes } from 'crypto';

let barretenberg: BarretenbergWasm;
let pedersen: SinglePedersen;


const toFixedHex = (number: number, pad0x: boolean, length = 32) => {
    let hexString = number.toString(16).padStart(length * 2, '0');
    return (pad0x ? `0x` + hexString : hexString);
}

async function calculatePedersen(userSecretKey: Buffer, parameter: number) {
    barretenberg = await BarretenbergWasm.new();
    await barretenberg.init()
    pedersen = new SinglePedersen(barretenberg);
    let hash = pedersen.compressInputs([Buffer.from(toFixedHex(parameter, false), 'hex'), userSecretKey]);
    return `0x${hash.toString('hex')}`
}

function argControl() {
    if (process.argv.length != 5) {
        console.log('Usage: npx ts-node calculatePedersen.ts {userId} {maximumAllowance} {interestRate}');
        process.exit();
    }
}

async function main() {

    argControl();

    const userSecretKey = randomBytes(32);
    const userSecretKeyHex = userSecretKey.toString('hex');
    const maximumAllowance = +process.argv[3];
    const maximumAllowanceHash = await calculatePedersen(userSecretKey, maximumAllowance);
    const disposedAmount = 0;
    const disposedAmountHash = await calculatePedersen(userSecretKey, disposedAmount);
    const interestRate = +process.argv[4];
    const interestRateHash = await calculatePedersen(userSecretKey, interestRate);
    const accruedInterest = +0;
    const accruedInterestHash = await calculatePedersen(userSecretKey, accruedInterest);

    const creditLineInitParams = {
        userSecretKeyHex,
        maximumAllowanceHash,
        disposedAmountHash,
        interestRateHash,
        accruedInterestHash
    }
    
    console.log(creditLineInitParams);
}

main();