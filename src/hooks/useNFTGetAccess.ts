import { useAddress, useContract } from "@thirdweb-dev/react";
import { BigNumberish } from "ethers";
import { useCallback } from "react";
import { useAddressNFTBalance } from "./useAddressNFTBalance";

export const useNFTGetAccess = (tokenId: BigNumberish) => {
  const { contract } = useContract("0xe21Bd82Ce2f1D4116B263910A12c906d42A10cfA", "edition-drop");
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
