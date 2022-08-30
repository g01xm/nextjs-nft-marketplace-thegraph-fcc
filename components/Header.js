import { ConnectButton, Illustration } from "web3uikit"
import Link from "next/link"
import { useRouter } from "next/router"
// import { Sandbox } from "@web3uikit/icons"

export default function Header() {
    const router = useRouter()
    const currentRoute = router.pathname

    return (
        <nav className="p-5 border-b-2 flex flex-row justify-between items-center bg-white">
            {/* <Sandbox fontSize="50px" /> */}

            <div className="py-4 px-8">
                <Illustration height="180px" logo="marketplace" width="100%" />
            </div>

            <h1 className="py-4 px-4 font-blod text-3xl">NFT Marketplace</h1>

            <div className="flex flex-row items-center">
                <Link href="/">
                    {/* <a className="mr-4 p-6">Home</a> */}

                    <a
                        className={`mr-4 py-2 px-6 rounded-full  ${
                            currentRoute == "/" ? "bg-indigo-100" : "bg-none"
                        }`}
                    >
                        Home
                    </a>
                </Link>

                <Link href="/sell-nft">
                    {/* <a className="mr-4 p-6">Sell NFT</a> */}

                    <a
                        className={`mr-4 py-2 px-6 rounded-full ${
                            currentRoute == "/sell-nft" ? "bg-indigo-100" : "bg-none"
                        }`}
                    >
                        Sell NFT
                    </a>
                </Link>

                <Link href="/bought-nfts">
                    {/* <a className="mr-4 p-6">Bought NFTs</a> */}

                    <a
                        className={`mr-4 py-2 px-6 rounded-full ${
                            currentRoute == "/bought-nfts" ? "bg-indigo-100" : "bg-none"
                        }`}
                    >
                        Bought NFTs
                    </a>
                </Link>

                <Link href="/withdraw">
                    <a
                        className={`mr-4 py-2 px-6 rounded-full ${
                            currentRoute == "/withdraw" ? "bg-indigo-100" : "bg-none"
                        }`}
                    >
                        Withdraw
                    </a>
                </Link>

                <ConnectButton moralisAuth={false} />
                {/* </div> */}
            </div>
        </nav>
    )
}
