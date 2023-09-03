import { footerLinks } from "@/constants";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="bg-[#031B34] mt-24">
      <div className="grid grid-cols-1 p-8">
        <div className="col-span-3">
          <span className="font-manrope font-bold text-3xl gradient-text">
            Emulsion AI
          </span>
          <p className="text-xs text-gray-700 mt-2">
            Emulsion AI 2023 <br />
            All rights reserved &copy;
          </p>
        </div>
        <div className="grid grid-cols-3 mt-10  ">
          {footerLinks.map((link) => (
            <div key={link.title} className="grid grid-cols-1 col-span-1">
              <h3 className="font-manrope text-xs text-white mb-2">
                {link.title}
              </h3>
              {link.links.map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  className="text-gray-500 text-[10px] my-1"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="w-full bg-gray-500 h-[0.5px]" />
      <p className="font-manrope font-light text-[10px] text-gray-500 text-center py-3">
        @2023 Emulsion AI. &nbsp; All Rigths Reserverd.
      </p>
    </footer>
  );
};

export default Footer;
