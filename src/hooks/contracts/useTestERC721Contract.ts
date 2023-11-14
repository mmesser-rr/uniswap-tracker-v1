import { useMemo } from "react";
import { getContract, WalletClient } from "viem";
import configs from "../../configs";
import useWeb3ConnectionInfo from "../useWeb3ConnectionInfo";

export default function useTestERC721Contract() {
  const { publicClient, walletClient } = useWeb3ConnectionInfo();
  const contract = useMemo(() => {
    return getContract({
      address: configs.contracts.testERC721.address,
      abi: configs.contracts.testERC721.ABI,
      publicClient,
      walletClient: walletClient as WalletClient
    });
  }, [publicClient, walletClient]);

  return {
    contract
  }
}