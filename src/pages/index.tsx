import Head from "next/head";

import { useContract } from "@thirdweb-dev/react";
import { NFT } from "@thirdweb-dev/sdk";

import { useNFTMinted } from "hooks/useNFTMinted";

export default function Home() {
  const { contract } = useContract("0xe21Bd82Ce2f1D4116B263910A12c906d42A10cfA", "edition-drop");
  const { nfts } = useNFTMinted(contract);

  return (
    <div className="container mx-auto w-full flex justify-center">
      <Head>
        <title>Became a Member</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="my-5 grid grid-cols-12">
        {nfts.map((nft: NFT) => (
          <div
            key={nft.metadata.id}
            className="col-span-4 flex flex-col border border-gray-400 rounded-md overflow-hidden"
          >
            <img src={nft.metadata.image as string} className="w-full h-auto" />
            <div className="px-2 py-1 font-bold text-gray-800 text-xl">{nft.metadata.name}</div>
            <div className="px-2 py-1 text-gray-500 text-md">{nft.metadata.description}</div>
            <div className=" flex justify-center my-2">
              <button className="w-28 px-1 py-1 rounded-lg bg-gray-200" onClick={() => alert("get access")}>
                Get Access
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
