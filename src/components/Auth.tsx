import { ConnectWallet } from "@thirdweb-dev/react";

export const Auth = () => (
  <div className="w-full h-screen flex justify-center items-center">
    <ConnectWallet />
  </div>
);
