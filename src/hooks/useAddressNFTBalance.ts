import { useEffect, useState } from "react";

import { BigNumber, BigNumberish } from "ethers";
import { useAddress, useContract } from "@thirdweb-dev/react";

export const useAddressNFTBalance = (token: BigNumberish): { balance: number | null } => {
  const [balance, setBalance] = useState<number | null>(null);
  const address = useAddress();
  const { contract } = useContract(process.env.NEXT_PUBLIC_THIRD_ERC_1155_ADDRESS as string, "edition-drop");

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
