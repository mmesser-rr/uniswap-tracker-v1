import { useState } from "react";
import useTestERC721Contract from "../../src/hooks/contracts/useTestERC721Contract";
import useWeb3ConnectionInfo from "../../src/hooks/useWeb3ConnectionInfo";
import configs from "../../src/configs";

export default function MintNFT() {
  const { chain, account } = useWeb3ConnectionInfo();
  const { contract } = useTestERC721Contract();

  const [isMinting, setIsMinting] = useState(false);
  const [mintTxHash, setMintTxHash] = useState("");

  async function onClickMint() {
    if (account) {
      setIsMinting(true);
      try {
        const hash = await contract.write.mint({ account, chain });
        setMintTxHash(hash);
      }
      catch (e) {
        console.error(e);
      }
      setIsMinting(false);
    }
  }

  return (
    <>
      <div>
        Reward NFT address: <a href={`https://polygonscan.com/address/${configs.contracts.testERC721.address}`} target="_blank" style={{ textDecoration: "underline" }}>{configs.contracts.testERC721.address}</a>
      </div>
      <button onClick={onClickMint} disabled={isMinting}>
        {isMinting ? "Minting..." : "Mint Reward NFT"}
      </button>

      {mintTxHash && (
        <a href={`https://polygonscan.com/tx/${mintTxHash}`} target="_blank" style={{ textDecoration: "underline" }}>
          Go To Transaction
        </a>
      )}
    </>
  )
}