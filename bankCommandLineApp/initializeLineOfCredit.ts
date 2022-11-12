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

    const userId = process.argv[2];

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

    const usc = Buffer.from("f07a4fe007bf0fa358acab7613c817f39970cd0e0684cdac092353bdd0239d4b", "hex");
    const tempfoo = Buffer.from("0000000000000000000000000000000000000000000000000000000000000005", "hex");
    await calculatePedersen2(tempfoo, usc);

    const tempfoo2 = Buffer.from("000000000000000000000000000000000000000000000000000000000000000a", "hex");
    await calculatePedersen2(tempfoo2, usc);

    async function calculatePedersen2(parameter: Buffer, userSecretKey: Buffer) {
        barretenberg = await BarretenbergWasm.new();
        await barretenberg.init()
        pedersen = new SinglePedersen(barretenberg);
        let hash = pedersen.compressInputs([parameter, userSecretKey]);
        console.log("THE VALUE");
        console.log(hash.toString('hex'));
        //return `0x${hash.toString('hex')}`
    }

    const creditLineInitParams = {
        userId,
        maximumAllowanceHash,
        disposedAmountHash,
        interestRateHash,
        accruedInterestHash,
    }
    
    console.log(JSON.stringify(creditLineInitParams));
    console.log(`User secret key: ${userSecretKeyHex}. Keep it safe, do not share`);
}

main();