import { useContract } from "@thirdweb-dev/react";
import { NFT } from "@thirdweb-dev/sdk";
import { BigNumber } from "ethers";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const useNFTMetadata = (tokenId: string) => {
  const [nft, setNFT] = useState<NFT | null>(null);
  const { contract } = useContract("0xe21Bd82Ce2f1D4116B263910A12c906d42A10cfA", "edition-drop");

  useEffect(() => {
    if (!contract) return;

    const getNFTMetadata = async () => {
      const nft = await contract.get(BigNumber.from(tokenId));
      setNFT(nft);
    };
    getNFTMetadata();
  }, [contract, setNFT, tokenId]);

  return { nft };
};
