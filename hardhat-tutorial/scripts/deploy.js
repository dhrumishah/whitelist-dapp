const { ethers } = require("hardhat");

async function main() {
  const WhitelistContract = await ethers.getContractFactory("Whitelist");
  const deployedWhitelistContract = await WhitelistContract.deploy(10);
  await deployedWhitelistContract.deployed();
  console.log("whitelist contract addres:", deployedWhitelistContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
