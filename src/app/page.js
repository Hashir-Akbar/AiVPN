import Image from "next/image";
import Hero from "@/components/pages/home/hero";
import GridInfo from "@/components/pages/home/gridInfo";
import Button from "@/components/global/button";

export default function Home() {
  return (
      <main>
        <Hero/>
          <GridInfo />

          <div className={"py-12 border-t border-b border-lightGrey place-content-center flex  items-center gap-8"}>
              <Image src={'/Frame.png'} width={200} height={200} alt={'globe'}/>
              <div className={"flex items-center flex-col"}>
              <h2 className={"text-5xl mb-2 bg-gradient-to-b from-[#239BF4] to-[#8134E4] bg-clip-text text-transparent"}>HOW TO SET UP </h2>
              <div className={"flex items-center "}>
                  <Image src={'logo.svg'} width="50" height="50" alt={"logo"} />
                  <h2 className={"font-bold text-3xl font-poppins"}>AiVPN</h2>
              </div>
              </div>
          </div>

          <div className={"container grid grid-cols-[1.7fr_1fr] gap-8 border-l border-r bg-[url('/Background+Border.png')] border-lightGrey"}>
              <div className={" relative main_page_bg bg-gradient-to-b from-[#1F252F] to-[#C023FE] flex pl-28 justify-center flex-col gap-4 py-32"}>
                  <h3 className={"font-geist text-3xl"}>Click the Add to <br/> Chrome button.</h3>
                  <p className={"font-dm-mono text-2xl font-normal"}>Press the button to <br/> begin installation.</p>
              </div>
              <div className={"border border-lightGrey bg-theme-dark"}>
                  <Image src={"/confirm-installation.png"} width={600} height={600} alt={"confirm-installation"} />
                  <div className={'flex gap-4 py-8 pl-6 items-center'}>
                  <h3 className={"text-3xl"}>Confirm <br/> Installation</h3>
                  <p className={'font-dm-mono text-sm '}>Approve by selecting "Add <br/> Extension" in the pop-up.</p>
                  </div>
              </div>
              <div className={"grid gap-8 grid-cols-[1fr_1fr] col-span-2"}>
                  <div className={"border border-lightGrey flex "}>
                      <div className={'flex gap-4 py-8 pl-6 flex-col bg-theme-dark max-w-xl w-full justify-center '}>
                          <h3 className={"text-3xl"}>Find the <br/> Extension Icon</h3>
                          <p className={'font-dm-mono text-sm '}>Look in the toolbar or click the puzzle icon to pin it.</p>
                      </div>
                      <Image src={"/find-extension-icon.png"} width={600} height={600} alt={"confirm-installation"} />

                  </div>
                  <div className={" relative bg-gradient-to-b from-[#1F252F] to-[#C023FE] flex pl-28 justify-center flex-col gap-4 py-12 items-center pr-20 text-center"}>
                      <Image src={"/chrome-extension.png"} width={300} height={300} alt={"extension"} />
                      <h3 className={"font-geist  text-3xl"}>Download Chrome <br/> Extension </h3>
                      <Button
                          btnClass={" rounded-lg text-lg py-3 px-10 from-[#16191C] via-[#16191C] to-[#583AFB] leading-none "}
                          linkHref={"/"}
                          btnContent={"Download AiVPN"}
                          stars={false}
                      />
                  </div>
              </div>
          </div>

          <div className={"py-6 border-b border-l  border-r px-10 border-lightGrey flex  items-center gap-8 justify-center  text-center container bg-[url('/Background+Border.png')]"}>

              <div className={"flex gap-8 items-center  ml-auto "}>
                  <Image src={'/solutions-section-bottom.png'} width={160} height={160} alt={'globe'}/>

                  <h2 className={"text-5xl mb-2 bg-gradient-to-b from-[#239BF4] to-[#8134E4] bg-clip-text text-transparent"}>WHY USE  <br/> AiVPN</h2>

              </div>
                  <div className={"flex items-center  ml-auto "}>
                      <Image src={'logo.svg'} width="50" height="50" alt={"logo"} />
                      <h2 className={"font-bold text-3xl font-poppins"}>AiVPN</h2>
                  </div>

          </div>


          <div className={"container px-0 gap-4 grid grid-cols-3"}>
              <div className={"border border-lightGrey p-4 text-center"}>
                  <Image src={'/block-transaction.png'} width={500} height={500} alt={"block transaction"}/>
                  <h3 className={"text-2xl leading-tight capitalize mt-4"}>blockchain <br/> transactions </h3>
              </div>
              <div className={"border border-lightGrey p-4 text-center"}>
                  <Image src={'/public_security.png'} width={500} height={500} alt={"public_security"}/>
                  <h3 className={"text-2xl leading-tight capitalize mt-4"}>Public Wi-Fi <br/> Security </h3>
              </div>
              <div className={"border border-lightGrey p-4 text-center"}>
                  <Image src={'/access.png'} width={500} height={500} alt={"access"}/>
                  <h3 className={"text-2xl leading-tight capitalize mt-4"}>Access Restricted <br/> Content  </h3>
              </div>
              <div className={"border border-lightGrey p-4 text-center"}>
                  <Image src={'/bypass-censorship.png'} width={500} height={500} alt={"bypass-censorship"}/>
                  <h3 className={"text-2xl leading-tight capitalize mt-4"}>Bypass <br/> Censorship </h3>
              </div>
              <div className={"border border-lightGrey p-4 text-center"}>
                  <Image src={'/browsing.png'} width={500} height={500} alt={"browsing"}/>
                  <h3 className={"text-2xl leading-tight capitalize mt-4"}>Anonymous <br/> Browsing</h3>
              </div>
              <div className={"border border-lightGrey p-4 text-center"}>
                  <Image src={'/bandwidth.png'} width={500} height={500} alt={"bandwidth.png"}/>
                  <h3 className={"text-2xl leading-tight capitalize mt-4"}>Avoid Bandwidth <br/> Throttling</h3>
              </div>
              <div className={"border border-lightGrey p-4 text-center"}>
                  <Image src={'/gaming-benefit.png'} width={500} height={500} alt={"gaming-benefit.png"}/>
                  <h3 className={"text-2xl leading-tight capitalize mt-4"}>Gaming <br/> Benefits </h3>
              </div>
              <div className={"border border-lightGrey p-4 text-center"}>
                  <Image src={'/enhanace_encryption.png'} width={500} height={500} alt={"enhanace_encryption.png"}/>
                  <h3 className={"text-2xl leading-tight capitalize mt-4"}>Enhanced <br/> Encryption</h3>
              </div>
              <div className={"border border-lightGrey p-4 text-center"}>
                  <Image src={'/data-breach.png'} width={500} height={500} alt={"data-breach.png"}/>
                  <h3 className={"text-2xl leading-tight capitalize mt-4"}>Online <br/> Privacy</h3>
              </div>
          </div>

          <div className={"container flex justify-between"}>
              <Image  src={"/robot.png"} width={200} height={200} alt={"robot"}/>
              <div className={"flex items-center  ml-auto "}>
                  <Image src={'logo.svg'} width="200" height="200" alt={"logo"} />
                  <h2 className={"font-bold text-6xl font-poppins"}>AiVPN</h2>
              </div>
          </div>

      </main>
  );
}
