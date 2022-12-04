import { useEffect, useState } from "react";

import { BigNumber, BigNumberish } from "ethers";
import { useAddress, useContract } from "@thirdweb-dev/react";

export const useAddressNFTBalance = (token: BigNumberish): { balance: number | null } => {
  const [balance, setBalance] = useState<number | null>(null);
  const address = useAddress();
  const { contract } = useContract("0xe21Bd82Ce2f1D4116B263910A12c906d42A10cfA", "edition-drop");

  useEffect(() => {
    if (!contract || !address || !token) return;

    const getbalance = async () => {
      const balance = await contract.balanceOf(address, token);
      setBalance(BigNumber.from(balance).toNumber());
    };
    getbalance();
  }, [address, contract, token]);
  return { balance };
};
