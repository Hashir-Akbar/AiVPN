import Image from "next/image";


export default function GridInfo (){


    return (
        <>
          <div className={"pb-16  bg-[url('/bg-wave.png')] bg-no-repeat bg-cover bg-top  "}>
              <div className={"container grid grid-cols-[1fr_1.9fr_1fr] items-center "}>
              <div className={"bg-black py-12 px-8 rounded-xl flex flex-col justify-center gap-3 items-center" }>
                  <Image src="/bg-security.png"  width={160} height={160} alt={'security image'}/>
                  <h2 className={"text-2xl font-geist mt-12 self-start"}>Online Privacy</h2>
                  <p className={"font-dm-mono text-sm"}>Protect your personal information and browsing activity from being tracked by your Internet Service Provider (ISP) or third parties.</p>
              </div>
              <div className={"bg-[#020207] rounded-3xl gridInfoMiddle relative"}>
                  <Image src={"/ai-vpn-logo-5.png"} width={1200} height={1200} className={"object-cover"} alt={"logo"}/>
              </div>
                  <div className={"bg-black py-12 px-8 rounded-xl flex flex-col justify-center gap-3 items-center" }>
                      <Image src="/bg-security.png"  width={160} height={160} alt={'security image'}/>
                      <h2 className={"text-2xl font-geist mt-12 self-start"}>Access Restricted Content</h2>
                      <p className={"font-dm-mono text-sm"}>Unlock geo-restricted websites, streaming platforms, or apps, allowing you to access content that may be unavailable in your region</p>
                  </div>
              </div>

          </div>
        </>
    )
}