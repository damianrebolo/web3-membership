import { useEffect, useState } from "react";

import { EditionDrop, NFT } from "@thirdweb-dev/sdk";

export const useNFTMinted = (contract: EditionDrop | undefined) => {
  const [nfts, setNFTs] = useState<NFT[]>([]);

  useEffect(() => {
    if (!contract) return;

    const getAllNFTs = async () => {
      const nfts = await contract.getAll();
      setNFTs(nfts);
    };
    getAllNFTs();
  }, [contract]);

  return { nfts };
};
