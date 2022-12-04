import { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import { useAddress, useContract } from "@thirdweb-dev/react";
import { useNFTMetadata } from "@hooks/useNFTMetadata";
import { withOwnedNFT } from "@hoc/withOwnedNTF";

function TokenAccess() {
  const router = useRouter();
  const { tokenId } = router.query;
  const { nft } = useNFTMetadata(tokenId as string);

  return (
    <div className="container mx-auto w-full flex justify-center">
      <Head>
        <title>{nft?.metadata.name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>{nft?.metadata.description}</div>
    </div>
  );
}

export default withOwnedNFT(TokenAccess);
