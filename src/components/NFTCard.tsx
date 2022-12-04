import { NFT } from "@thirdweb-dev/sdk";

import { useAddressNFTBalance } from "@hooks/useAddressNFTBalance";

import { NFTGetAccess } from "@components/NFTGetAccess";

export interface NFTCardProps extends React.HTMLAttributes<HTMLDivElement> {
  nft: NFT;
}

export const NFTCard: React.FC<NFTCardProps> = ({ nft }) => (
  <div className="col-span-4 flex flex-col border border-gray-400 rounded-md overflow-hidden">
    <img src={nft.metadata.image as string} className="h-80 w-auto" />
    <div className="px-2 py-1 font-bold text-gray-800 text-xl">{nft.metadata.name}</div>
    <div className="px-2 py-1 text-gray-500 text-md">{nft.metadata.description}</div>
    <div className=" flex justify-center my-2">
      <NFTGetAccess tokenId={nft.metadata.id} />
    </div>
  </div>
);
