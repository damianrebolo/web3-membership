import { useAddress, useContract } from "@thirdweb-dev/react";
import { BigNumberish } from "ethers";
import { useCallback } from "react";
import { useAddressNFTBalance } from "./useAddressNFTBalance";

export const useNFTGetAccess = (tokenId: BigNumberish) => {
  const { contract } = useContract(process.env.NEXT_PUBLIC_THIRD_ERC_1155_ADDRESS as string, "edition-drop");
  const address = useAddress();

  const { balance } = useAddressNFTBalance(tokenId);
  const ownNFT = balance && balance;

  const claimTo = useCallback(async () => {
    if (!contract || !address) return;

    const tx = await contract.claimTo(address, tokenId, 1);
    const receipt = tx.receipt;
  }, [contract, address, tokenId]);

  return { ownNFT, claimTo };
};
