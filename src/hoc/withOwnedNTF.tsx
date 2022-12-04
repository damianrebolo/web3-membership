import { useRouter } from "next/router";

import { BigNumber } from "ethers";

import { useAddressNFTBalance } from "@hooks/useAddressNFTBalance";
import { useEffect } from "react";

export const withOwnedNFT = (WrappedComponent: React.FC) => {
  return ({ ...props }) => {
    const router = useRouter();
    const { tokenId } = router.query;
    const { balance } = useAddressNFTBalance(BigNumber.from(tokenId));

    useEffect(() => {
      if (balance === 0) {
        router.push("/");
      }
    }, [balance, router]);

    if (!balance) return;

    return <WrappedComponent {...props} />;
  };
};
