const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log(
    "Deploying contracts with the account:",
    deployer.address
  );
  
  const USDFoo = await hre.ethers.getContractFactory("USDFoo");
  const uSDFoo = await USDFoo.deploy();
  await uSDFoo.deployed();
  console.log("USDFoo deployed to:", uSDFoo.address);

  const TurboVerifier = await hre.ethers.getContractFactory("TurboVerifier");
  const turboVerifier = await TurboVerifier.deploy();
  await turboVerifier.deployed();
  console.log("TurboVerifier deployed to:", turboVerifier.address);

  const Bank = await hre.ethers.getContractFactory("Bank");
  const bank = await Bank.deploy(uSDFoo.address, turboVerifier.address);
  await bank.deployed();
  console.log("Bank deployed to:", bank.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
