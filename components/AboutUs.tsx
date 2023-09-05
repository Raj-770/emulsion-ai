import { dreamTeam } from "@/constants";
import Image from "next/image";

import twitter from "@/public/twitter.svg";
import linkedin from "@/public/linkedin.svg";

const AboutUs = () => {
  return (
    <div id="about-us" className="relative bg-[#001B3D] mt-24">
      <div className="grid grid-cols-1 sm:grid-cols-3 p-5 sm:p-7 md:p-12">
        <div className="col-span-1 flex flex-col">
          <div className="gradient-bar" />
          <div className="heading">About Us</div>
        </div>
        <p className="sm:col-span-2 font-manrope text-[#81AFDD] text-xs sm:text-sm my-5 sm:my-0 md:text-base">
          We have spent years scaling start-ups, building out digital
          experiences and working at big tech – including Google, Amazon,
          Fitbit, D2L, Typeform, Lazer, and Redbull.We have spent years scaling
          start-ups, building out digital experiences and working at big tech –
          including Google, Amazon, Fitbit, D2L, Typeform, Lazer, and Redbull.
        </p>
        <h1 className="sm:col-span-3 gradient-text font-manrope font-semibold tracking-tight text-2xl md:text-[50px] md:leading-[55px] sm:text-4xl my-10 sm:my-16">
          Meet The Leaders
        </h1>
        <div className="sm:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          {dreamTeam.map((data, index) => (
            <div className="col-span-1 flex flex-col justify-center items-center bg-[#81AFDD] bg-opacity-10 h-96 rounded-3xl">
              <div className="w-52 h-52 bg-[#81AFDD] opacity-60 rounded-full" />
              <h2 className="font-manrope font-semibold text-white text-lg mt-4">
                {data.name}
              </h2>
              <h4 className="font-monrope text-[#81AFDD] text-sm">
                {data.role}
              </h4>
              <div className="flex flex-row justify-center items-center gap-5 mt-5">
                <a href="/">
                  <Image
                    src={twitter}
                    alt=""
                    width={20}
                    height={20}
                    objectFit="contain"
                  />
                </a>
                <a href="/">
                  <Image
                    src={linkedin}
                    alt=""
                    width={20}
                    height={20}
                    objectFit="contain"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
