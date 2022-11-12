import { compile } from '@noir-lang/noir_wasm';
import { setup_generic_prover_and_verifier, create_proof } from '@noir-lang/barretenberg/dest/client_proofs';
import path from 'path';


import { BarretenbergWasm } from '@noir-lang/barretenberg/dest/wasm';
import { SinglePedersen } from '@noir-lang/barretenberg/dest/crypto/pedersen';

let barretenberg: BarretenbergWasm;
let pedersen: SinglePedersen;

const toFixedHex = (number: number, pad0x: boolean, length = 32) => {
    let hexString = number.toString(16).padStart(length * 2, '0');
    return (pad0x ? `0x` + hexString : hexString);
  }
async function createProof() {  
         
        barretenberg = await BarretenbergWasm.new();
        await barretenberg.init()
        pedersen = new SinglePedersen(barretenberg);    
        // Compile noir program
        const compiled_program = compile(path.resolve(__dirname, './circuits/src/main.nr')); 
        let acir = compiled_program.circuit;
        const abi = compiled_program.abi;

        let hashReturn = pedersen.compressInputs([Buffer.from(toFixedHex(5, false), 'hex')]);
        let hashAllowance = pedersen.compressInputs([Buffer.from(toFixedHex(10, false), 'hex')]);


        abi.withdraw = "0x0000000000000000000000000000000000000000000000000000000000000005";
        abi.totalAllowance = "0x000000000000000000000000000000000000000000000000000000000000000a";
        abi.totalAllowanceHash = `0x${hashAllowance.toString('hex')}`;
        abi.return = `0x${hashReturn.toString('hex')}`;
        let [prover, _] = await setup_generic_prover_and_verifier(acir);

        const proof = await create_proof(prover, acir, abi);
        console.log(`0x${proof.toString('hex')}`);
    };

createProof().then(() => process.exit(0)).catch(console.log);