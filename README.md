## Project Pitch
[PITCH](PITCH.pdf)

## Complete Solution Blueprint
[Complete Solution Blueprint](CompleteSolutionBlueprint.md)

## Run locally

1. Clone the repo

2. Install the dependencies

```sh
npm install
```

3. Start the local test node

```sh
npx hardhat node
```

4. Deploy the contracts

```sh
npx hardhat run scripts/deploy.js --network localhost
```

5. Run the app

```sh
npm start
```

6. Execute command line app

```sh
npx ts-node bankCommandLineApp/{fileName}.ts
```

7. Compile circuit

```sh
cd withdrawProofGenerator/circuits
nargo compile p
```

8. Generate verifier smart contract

```sh
npx ts-node generate_sol_verifier.ts
```