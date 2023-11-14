import { Address } from "viem";

const ONE_DAY_IN_SEC = 24 * 3600;

export const SWAPS_IN_24_QUERY = (address: Address) => {
  const secIn24 = Math.floor(Date.now() / 1000) - ONE_DAY_IN_SEC;

  return `
    query {
      swaps(
        orderBy: timestamp
        orderDirection: desc
        where: {
          account: "${address}"
          protocol_: {
            name: "Uniswap V3"
          }
          timestamp_gte: ${secIn24}
        }
      ) {
        hash
        tokenIn {
          symbol
        }
        amountInUSD
        tokenOut {
          symbol
        }
        amountOutUSD
      }
    }
  
  `
}