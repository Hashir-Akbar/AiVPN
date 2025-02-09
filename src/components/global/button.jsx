import Link from "next/link";
import Image from "next/image";



export default function Button ({linkHref, btnContent, btnClass, stars}) {
    return(
        <>
            <button>
                <Link href={linkHref} target="_blank" className={"bg-gradient-to-r from-[#4040FB] to-[#D220FF] inline-block   place-content-center px-6 py-2 font-geist font-medium leading-none" + btnClass+
                    (stars && "flex gap-2 items-center justify-between pl-8")


                }

                >
                    {btnContent}
                    {stars && <Image src={"/stars-btn.png"} width={"24"} height={"24"} alt={"Stars"}/>}
                </Link>
            </button>
        </>
    )
}