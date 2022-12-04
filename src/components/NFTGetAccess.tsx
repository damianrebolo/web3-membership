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
        ownNFT
          ? router.push(`/${process.env.NEXT_PUBLIC_THIRD_ERC_1155_ADDRESS}/${BigNumber.from(tokenId)}`)
          : claimTo()
      }
    >
      {ownNFT ? "Access" : "GetAccess"}
    </button>
  );
};
