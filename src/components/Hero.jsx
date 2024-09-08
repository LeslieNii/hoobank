import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => (
    <section id="hero">
      <div className="flex flex-col-reverse text-white items-center space-y-0 my-10 text-center md:text-left md:flex-row">
        
        <div className="mt-16 md:mt-0 md:w-1/2">

          <div className="flex justify-center md:justify-start">
            <div className="flex flex-row items-center bg-discount-gradient rounded-md justify-center py-1 px-4 md:px-4 md:py-1">
              <img src={discount} alt="discount" className="w-[32px] h-[32px]"/>
                <p className="text-dimWhite text-[12px] md:text-[11px]">
                  <span className="uppercase text-white">20% {" "}</span>
                  <span className="">DISCOUNT FOR {" "}</span>
                  <span className="uppercase text-white">for 1 month {" "}</span> 
                  <span className="">ACCOUNT {" "}</span>
                </p>
            </div>
          </div>

          <div className="flex flex-col mt-8 md:flex-row md:items-center md:justify-between">
            <h1 className="text-4xl font-semibold leading-[1.3] sm:text-[40px] md:leading-[1.2] lg:leading-[1.2] md:text-[45px] lg:text-6xl">The Next
              <p className="text-gradient">Generation</p>
            </h1>

            <div className="hidden lg:flex lg:flex-2 lg:mr-28">
              <GetStarted />
            </div>
          </div>

          <h1 className="text-4xl font-semibold leading-[1.4] md:leading-[1.3] lg:leading-[1.2] md:text-[45px] lg:text-6xl">Payment Methods.
          </h1>
            <p className="text-xs text-dimWhite mt-4 item-center px-12 sm:px-20 md:px-0 md:text-[13px] md:max-w-sm">
              Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.
            </p>

            <div className="flex justify-center mt-8 lg:hidden md:justify-start">
              <GetStarted />
            </div>
        </div>

        <div className="md:w-1/2">
          <img src={robot} alt="robot"
            className="sm:w-[80%] sm:h-[80%] sm:mx-auto md:w-[100%] md:h-[100%]"/>
        </div>
      </div>


    </section>
  )

export default Hero;
