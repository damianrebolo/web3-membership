import { useContract } from "@thirdweb-dev/react";
import { NFT } from "@thirdweb-dev/sdk";
import { BigNumber } from "ethers";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const useNFTMetadata = (tokenId: string) => {
  const [nft, setNFT] = useState<NFT | null>(null);
  const { contract } = useContract(process.env.NEXT_PUBLIC_THIRD_ERC_1155_ADDRESS as string, "edition-drop");

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
