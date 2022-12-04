import { useCallback } from "react";
import { useRouter } from "next/router";

import { BigNumber, BigNumberish } from "ethers";
import { useAddress, useContract } from "@thirdweb-dev/react";

import { useAddressNFTBalance } from "@hooks/useAddressNFTBalance";
import { useNFTGetAccess } from "@hooks/useNFTGetAccess";

export interface NFTGetAccessProps extends React.HTMLAttributes<HTMLDivElement> {
  tokenId: BigNumberish;
}

export const NFTGetAccess: React.FC<NFTGetAccessProps> = ({ tokenId }) => {
  const router = useRouter();

  const { ownNFT, claimTo } = useNFTGetAccess(tokenId);

  return (
    <button
      className="w-28 px-1 py-1 rounded-lg bg-gray-200"
      onClick={() =>
        ownNFT ? router.push(`/0xe21Bd82Ce2f1D4116B263910A12c906d42A10cfA/${BigNumber.from(tokenId)}`) : claimTo()
      }
    >
      {ownNFT ? "Access" : "GetAccess"}
    </button>
  );
};
