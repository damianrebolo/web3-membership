import { useEffect, useState } from "react";

import { NFT } from "@thirdweb-dev/sdk";
import { useContract } from "@thirdweb-dev/react";

export const useNFTMinted = () => {
  const [nfts, setNFTs] = useState<NFT[]>([]);
  const { contract, isLoading } = useContract("0xe21Bd82Ce2f1D4116B263910A12c906d42A10cfA", "edition-drop");

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
