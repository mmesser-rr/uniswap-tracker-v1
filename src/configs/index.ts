import { Address } from "viem";
import { polygon } from "viem/chains";
import testERC721 from "../abis/testERC721";

const configs = {
  subgraphs: {
    uniswapV3: "https://api.thegraph.com/subgraphs/name/messari/uniswap-v3-polygon"
  },
  contracts: {
    testERC721: {
      address: "0xb412684F4F0B5d27cC4A4D287F42595aB3ae124D" as Address,
      ABI: testERC721
    }
  },
  defaultChain: polygon,
}

export default configs;