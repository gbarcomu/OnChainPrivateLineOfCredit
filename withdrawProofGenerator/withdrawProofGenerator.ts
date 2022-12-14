import { compile } from '@noir-lang/noir_wasm';
import { setup_generic_prover_and_verifier, create_proof, verify_proof } from '@noir-lang/barretenberg/dest/client_proofs';
import path from 'path';


import { BarretenbergWasm } from '@noir-lang/barretenberg/dest/wasm';
import { SinglePedersen } from '@noir-lang/barretenberg/dest/crypto/pedersen';

let barretenberg: BarretenbergWasm;
let pedersen: SinglePedersen;

const toFixedHex = (number: number, pad0x: boolean, length = 32) => {
    let hexString = number.toString(16).padStart(length * 2, '0');
    return (pad0x ? `0x` + hexString : hexString);
  }
async function createProof(userSecretKey: string, withdraw: number, totalAllowance: number) {  
         
        barretenberg = await BarretenbergWasm.new();
        await barretenberg.init()
        pedersen = new SinglePedersen(barretenberg);    
        // Compile noir program
        const compiled_program = compile(path.resolve(__dirname, './circuits/src/main.nr')); 
        let acir = compiled_program.circuit;
        const abi = compiled_program.abi;

        let hashReturn = pedersen.compressInputs([Buffer.from(toFixedHex(withdraw, false), 'hex'), Buffer.from(userSecretKey.substring(2), 'hex')]);
        let hashAllowance = pedersen.compressInputs([Buffer.from(toFixedHex(totalAllowance, false), 'hex'), Buffer.from(userSecretKey.substring(2), 'hex')]);

        abi.userSecretKey = userSecretKey
        abi.withdraw = toFixedHex(withdraw, true);
        abi.totalAllowance = toFixedHex(totalAllowance, true);
        abi.totalAllowanceHash = `0x${hashAllowance.toString('hex')}`;
        abi.return = `0x${hashReturn.toString('hex')}`;
        let [prover, verifier] = await setup_generic_prover_and_verifier(acir);

        const proof = await create_proof(prover, acir, abi);
        console.log(`0x${proof.toString('hex')}`);
        //const verified = await verify_proof(verifier, proof);
      
    };

    function argControl() {
      if (process.argv.length != 5) {
          console.log('Usage: npx ts-node withdrawProofGenerator.ts {userSecretKey} {withdraw} {totalAllowance}');
          process.exit();
      }
  }

  async function main() {

    argControl()

    await createProof(process.argv[2], +process.argv[3], +process.argv[4]);
  }

main().then(() => process.exit(0)).catch(console.log);
