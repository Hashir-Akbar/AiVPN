import Button from "@/components/global/button";



export default function Hero () {




    return (
        <>
          <div className={"bg-[url('/Background.png')]   bg-no-repeat w-full bg-cover"}>


              <div className={" container flex hero-home  flex-col gap-6 justify-center items-center text-center  py-20"}>
                  <h1 className={ " text-7xl bg-gradient-to-b from-[#0BB6F9] to-[#941FE1] bg-clip-text text-transparent font-geist"}
                      style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }} >
                      AI-Driven VPN <br/> made easy .
                  </h1>
                  <p className={"max-w-2xl leadin leading font-dm-mono "}>
                      Surf the web without tracking with AiVPN, shield your devices with
                      Antivirus, & guard your identity when making Blockchain transactions with an all-in-one app..
                  </p>
                  <Button
                      btnClass={" px-10  from-[#D220FF] !to-[#4040FB] leading-none "}
                      linkHref={"/"}
                      btnContent={<div className={"flex flex-col gap-0"}><span>Download Chrome</span><span>Extension</span></div>}
                      stars={true}
                  />

              </div>

          </div>
        </>
    )


}