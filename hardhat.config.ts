import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const ALCHEMY_API_KEY = "Xve7HjU7nIupIDJUd1zI22dH7yVXxL6Y";
const GOERLI_PRIVATE_KEY =
  "84a109bfb0bed52bc41e88846ec15944b0fc29287f80c7d3934db06150145a4c";

const config: HardhatUserConfig = {
  networks: {
    hardhat: {
      chainId: 31337,
    },
    goerli: {
      url: `https://eth-goerli.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [GOERLI_PRIVATE_KEY],
    },
  },
  solidity: "0.8.17",
};

export default config;
