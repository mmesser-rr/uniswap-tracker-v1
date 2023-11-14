import useSwaps from "../../src/hooks/useSwaps";
import MintNFT from "./MintNFT";

export default function SwapTracker() {
  const { isLoading, data } = useSwaps();

  return (
    <div style={{ marginTop: "36px" }}>
      <p>{isLoading && "Searching for your swap transactions..."}</p>
      <div>
        <p> Found {data?.length || 0} transactions over the last 24 hours.</p>
        <div>
          {data?.map((swap) => (
            <p key={swap.hash}>
              <a href={`https://polygonscan.com/tx/${swap.hash}`} target="_blank" style={{ textDecoration: "underline" }}>
                {swap.hash}
              </a>
            </p>
          ))}
        </div>
      </div>

      {!isLoading && data && data.length > 0 && (
        <MintNFT />
      )}
    </div>
  )
}