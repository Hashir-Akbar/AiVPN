import Image from "next/image";
import Link from "next/link";
import Button from "@/components/global/button";


export default function Header(props) {

    const navbar = [
        {
            nav_item: "Download",
            href: "/download",
        },
        {
            nav_item: "Pricing",
            href: "/pricing",
        },
        {
            nav_item: "X",
            href: "https://x.com/ai_vpn?s=21/",
        },
        {
            nav_item: "AiVPN COIN",
            href: "/aivpn",
        }

    ]

    return (
        <>
            <header className={"border-b border-lightGrey"}>
                <div className={" container    flex justify-between items-center"}>
                    <div className={"flex items-center "}>
                        <Image src={'logo.svg'} width="80" height="80" alt={"logo"} />
                        <h2 className={"font-bold text-5xl font-poppins"}>AiVPN</h2>
                    </div>
                    <nav className={"flex items-center gap-12 font-dm-sans"}>
                        {
                            navbar.map((item, index) => (
                                <Link key={index} href={item.href}>{item.nav_item}</Link>
                            ))
                        }
                    </nav>
                    <div>
                        <Button
                            linkHref={"https://chrome.google.com/webstore/detail/ai-vpn/ifledkgjbglbohmfdlfoefhcddgjbfge"}
                            target={"_blank"}  // Open in new tab
                            rel={"noopener noreferrer"}
                            btnContent={"Download Extension"}
                            btnClass={"py-3 px-10 border border-gray-300"}
                        />

                        {/* <Button linkHref={"/"} btnContent={"Connect  VPN"} btnClass={"py-3 px-10 border border-gray-300"}/> */}
                    </div>
                </div>
            </header>
        </>
    )
}
