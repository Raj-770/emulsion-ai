import { footerLinks } from "@/constants";
import Link from "next/link";
import logo from "@/public/logo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#031B34] mt-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 p-8 sm:p-10 md:p-20">
        <div className="col-span-1">
          <Image
            src={logo}
            alt=""
            objectFit="contain"
            className="ml-[-40px] sm:ml-[-55px] md:ml-[-80px]  mb-[-20px] w-[300px] sm:w-[450px] md:w-[600px]"
          />
          <p className="text-xs sm:text-sm md:text-base text-gray-700 mt-2">
            Emulsion AI 2023 <br />
            All rights reserved &copy;
          </p>
        </div>
        <div className="grid grid-cols-3 mt-10  ">
          {footerLinks.map((link) => (
            <div key={link.title} className="grid col-span-1">
              <h3 className="font-manrope text-xs sm:text-sm md:text-lg text-white mb-2">
                {link.title}
              </h3>
              {link.links.map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  className="text-gray-500 text-[10px] sm:text-xs md:text-base my-1"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="w-full bg-gray-500 h-[0.5px]" />
      <p className="font-manrope font-light text-[10px] sm:text-xs md:text-base text-gray-500 text-center py-3 sm:py-8 md:py-12">
        @2023 Emulsion AI. &nbsp; All Rigths Reserverd.
      </p>
    </footer>
  );
};

export default Footer;
