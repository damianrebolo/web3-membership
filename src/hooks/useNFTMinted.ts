import { useEffect, useState } from "react";

import { NFT } from "@thirdweb-dev/sdk";
import { useContract } from "@thirdweb-dev/react";

export const useNFTMinted = () => {
  const [nfts, setNFTs] = useState<NFT[]>([]);
  const { contract, isLoading } = useContract(process.env.NEXT_PUBLIC_THIRD_ERC_1155_ADDRESS as string, "edition-drop");

  useEffect(() => {
    if (!contract) return;

    const getAllNFTs = async () => {
      const nfts = await contract.getAll();
      setNFTs(nfts);
    };
    getAllNFTs();
  }, [contract]);

  return { nfts, isLoading };
};
