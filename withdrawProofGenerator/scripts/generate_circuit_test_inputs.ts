import { BarretenbergWasm } from '@noir-lang/barretenberg/dest/wasm';
import { SinglePedersen } from '@noir-lang/barretenberg/dest/crypto/pedersen';

let barretenberg: BarretenbergWasm;
let pedersen: SinglePedersen;

async function main() {


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
    }
}

main();