import { ethers } from "hardhat";

async function main() {
  const NAME = "AI Gen NFT";
  const SYMBOL = "DHR";
  const COST = ethers.utils.parseUnits("1", "ether");

  const NFT = await ethers.getContractFactory("NFT");
  const nft = await NFT.deploy(NAME, SYMBOL, COST);

  await nft.deployed();
  console.log(`Deployed NFT Contract at: ${nft.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
