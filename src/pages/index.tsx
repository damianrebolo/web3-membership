import Head from "next/head";

import { NFT } from "@thirdweb-dev/sdk";

import { useNFTMinted } from "@hooks/useNFTMinted";
import { NFTCard } from "@components/NFTCard";

export default function Home() {
  const { nfts, isLoading } = useNFTMinted();

  if (isLoading) return <div>Loading...</div>;
  return (
    <div className="container mx-auto w-full flex justify-center">
      <Head>
        <title>Became a Member</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="my-5 grid grid-cols-12 gap-5">
        {nfts.map((nft: NFT) => (
          <NFTCard key={nft.metadata.id} nft={nft} />
        ))}
      </div>
    </div>
  );
}
