import { BarretenbergWasm } from '@noir-lang/barretenberg/dest/wasm';
import { SinglePedersen } from '@noir-lang/barretenberg/dest/crypto/pedersen';

let barretenberg: BarretenbergWasm;
let pedersen: SinglePedersen;

async function main() {


    const usc = Buffer.from("fca8621cfe1222e9a93492aa34c7ee1920003ff5b0bb5d6addc5e2e9d8cb382e", "hex");
    const tempfoo = Buffer.from("00000000000000000000000000000000000000000000000000000000000003e8", "hex");
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
    }
}

main();