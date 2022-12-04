import React, { ReactNode } from "react";

import { useAddress } from "@thirdweb-dev/react";

import { Auth } from "@components/Auth";

export const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const address = useAddress();

  if (!address) return <Auth />;

  return <>{children}</>;
};
