import {
  useAccount,
  useNetwork,
  usePublicClient,
  useWalletClient
} from "wagmi";
import configs from "../configs";

export default function useWeb3ConnectionInfo() {
  const { chain } = useNetwork();
  const publicClient = usePublicClient();
  const { data: walletClient } = useWalletClient();
  const { address } = useAccount();

  return {
    chain: chain || configs.defaultChain,
    chainId: chain?.id || configs.defaultChain.id,
    publicClient,
    walletClient,
    account: address
  }
}