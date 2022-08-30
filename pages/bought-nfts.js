import BoughtNFTBox from "../components/BoughtNFTBox"
import { gql } from "@apollo/client"
import { useMoralisQuery, useMoralis } from "react-moralis"
import networkMapping from "../constants/networkMapping.json"
import { useQuery } from "@apollo/client"

export default function BoughtNfts() {
    const { isWeb3Enabled, chainId, account } = useMoralis()
    const chainString = chainId ? parseInt(chainId).toString() : "31337"
    const marketplaceAddress = networkMapping[chainString].NftMarketplace[0]

    const GET_BOUGHT_ITEMS = gql`
        {
            activeItems(first: 5, where: { buyer: "${account}" }) {
                id
                buyer
                seller
                nftAddress
                tokenId
                price
            }
        }
    `

    const { loading, error, data: boughtNfts } = useQuery(GET_BOUGHT_ITEMS)

    return (
        <div className="container mx-auto ">
            <h1 className="py-4 px-4 font-bold text-2xl">NFTs You Bought</h1>
            <div className="container flex items-center content-center">
                {isWeb3Enabled ? (
                    loading || !boughtNfts ? (
                        <div>Loading...</div>
                    ) : (
                        boughtNfts.activeItems.map((nft) => {
                            // console.log("boughtNfts")
                            // console.log(boughtNfts)
                            // console.log("boughtNfts.activeItems")
                            // console.log(boughtNfts.activeItems)
                            const { price, nftAddress, tokenId, marketplaceAddress, seller } = nft

                            return (
                                <>
                                    <BoughtNFTBox
                                        price={price}
                                        nftAddress={nftAddress}
                                        tokenId={tokenId}
                                        marketplaceAddress={marketplaceAddress}
                                        seller={seller}
                                        key={`${nftAddress}${tokenId}`}
                                    />
                                </>
                            )
                        })
                    )
                ) : (
                    <div>Web3 Currently Not Enabled</div>
                )}
            </div>
        </div>
    )
}
