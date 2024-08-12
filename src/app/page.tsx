import Navbar from "./components/Navbar";
// import Step from "./components/Step";
import Footer from "./components/Footer";
import Marquee from 'react-fast-marquee'
import SparklesText from "@/components/magicui/sparkles-text";
export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <div className=" 2xl:pt-20 sm:pt-16 pt-4 space-y-5 relative  ">
        <img src="/ai-img-1.svg" alt="gradient blur" className="blur-[50px] w-full absolute rotate-6 top-0 right-0  -z-10 opacity-90 sm:hidden " />

        <div className="ClashDisplay-Medium space-y-3 sm:text-6xl text-4xl text-center">
          <h1 className="gradient-text sm:px-0 font-semibold  px-3">A Fast Generation.</h1>
          <SparklesText text="Scaleable AI." className="sm:text-6xl text-4xl" />
        </div>
        <div className="text-base ClashDisplay-Regular capitalize text-center md:block hidden  tracking-wide ">Simply input your desired Revolutionize your outreach with Swift Mail,  <br /> any relevant information, and Swift Mail does the rest. <br />go for this!</div>
        <div className="sm:text-base text-sm px-6 ClashDisplay-Regular capitalize text-center md:hidden  tracking-wide ">Simply input your desired Revolutionize your outreach with Swift Mail, any relevant information, and Swift Mail does the rest , go for this!</div>
        <div className="flex sm:gap-5 gap-3 justify-center items-center pt-3 sm:px-0 px-6">
          <a href="/about"  className="relative-button-container">
            <button className="gradient-border-button ClashDisplay-Regular bg-transparent">About</button>
          </a>

          <a href="/login" className="relative-button-container ClashDisplay-Regular text-white ">
            <button className="btn border-2 border-white text-base tracking-wider">
              <span className="btn-text-one">Sign in</span>
              <span className="btn-text-two text-white">Login</span>
              <div className="bg-btn"></div>
            </button>
          </a>

        </div>
      </div>

      <div className="w-full  h-full flex container o mx-auto  justify-center items-center relative 2xl:-top-60 md:-top-44 -top-16 -z-20">
        <img src="/ai-img-1.svg" alt="" className="" />
        <div className="blur-[20px] bottom-[-70px] absolute h-[100px] bg-black w-full"></div>
      </div>
      <div className="w-full   sm:h-20 h-16 sm:mt-32 mt-12 px-5  origin-top-left rotate-[-4.25deg] sm:bg-zinc-900 bg-[#18181b72]  shadow justify-start ClashDisplay- items-center gap-5 inline-flex cursor-pointer relative md:-top-28 -top-8">
        <img src="/ai-img-1.svg" alt="gradient blur" className="blur-[80px] left-0 w-full absolute  sm:-bottom-[150px] -bottom-[0px]  -z-10 sm:opacity-75 opacity-90 " />
        <img src="/ai-img-1.svg" alt="gradient blur" className="blur-[80px] left-0 w-full absolute  sm:-bottom-[150px] -bottom-[0px] -z-10 sm:opacity-75 opacity-90 " />
        <Marquee direction="left" pauseOnHover >
          <div className="text-white lg:text-3xl text-xl ClashDisplay-Medium ">AI-Powered Emails, Personalized for You</div>
          <img src="/SoftStar.png" alt="star" className='px-4' />
          <div className="text-white lg:text-3xl text-xl  ClashDisplay-Medium">Transform Your Communication with AI</div>
          <img src="/SoftStar.png" alt="star" className='px-4' />
          <div className="text-white lg:text-3xl text-xl  ClashDisplay-Medium">Effortless Emails, Infinite Possibilities</div>
          <img src="/SoftStar.png" alt="star" className='px-4' />
          <div className="text-white lg:text-3xl text-xl  ClashDisplay-Medium">Your Email Assistant, Powered by AI</div>
          <img src="/SoftStar.png" alt="star" className='px-4' />
        </Marquee>
      </div>
      <Footer />

      <div className=" loaderbg bg-black absolute w-full h-screen z-50 top-0 flex  items-center justify-center">
        <div className="d">
          <div className=' h-14  relative  w-14  object-contain ' >
            <img alt='discord' src='/ourlogo.gif' />
          </div>
          <div className="w-full h-full flex justify-center items-center">
            <div className="run-btn ">
              <button className="ui-btn">
                <span className=""></span>
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}



