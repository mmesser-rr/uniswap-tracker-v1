import useSWR from "swr";
import { Address, useAccount } from "wagmi";
import configs from "../configs";
import { SWAPS_IN_24_QUERY } from "../queries/swaps";
import { queryGraph } from "../utils/GraphClient";

interface Swap {
  hash: string;
  tokenIn: {
    symbol: string;
  }
  amountInUSD: string;
  tokenOut: {
    symbol: string;
  }
  amountOutUSD: string;
}

async function fetchSwapsIn24(address: Address) {
  const { data } = await queryGraph(configs.subgraphs.uniswapV3, SWAPS_IN_24_QUERY(address));

  return data?.swaps as Swap[];
}

export default function useSwaps() {
  const { address } = useAccount();
  // const address = "0x30b0EAe5e9Df8a1C95dFdB7AF86aa4e7F3B51f13" as Address;

  const { isLoading, data } = useSWR(
    address ? ["getSwapsIn24", address] : null,
    ([, address]) => fetchSwapsIn24(address)
  );

  return { isLoading, data };
}