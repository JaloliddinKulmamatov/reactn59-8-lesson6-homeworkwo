import Image from "next/image";
import React from "react";
import footerLogo from "@/public/footerLogo.svg";

const Footer = () => {
  return (
    <footer className="bg-[#160530] text-white py-10 px-4 md:px-16">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10 md:gap-16 lg:gap-32">
        <div className="flex flex-col gap-6 max-w-md text-center md:text-left">
          <h2 className="font-semibold text-2xl md:text-3xl lg:text-4xl">
            Lets start working to build a brighter future.
          </h2>

          <p className="font-normal text-sm md:text-base lg:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
            posuere eget elementum vulputate elementum viverra sapien tellus
            aenean.
          </p>

          <div className="flex justify-center md:justify-start gap-6 text-base font-bold text-[#E0CFFC]">
            <span className="cursor-pointer">Fb</span>
            <span className="cursor-pointer">In</span>
            <span className="cursor-pointer">Tw</span>
            <span className="cursor-pointer">Ln</span>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-start justify-center md:mt-0">
          <form className="flex flex-col md:flex-row items-center border border-[#E0CFFC] py-3 px-4 rounded-md transition-all max-w-md w-full">
            <input
              type="email"
              placeholder="Join our mailing list"
              name="email"
              id="email"
              required
              className="bg-transparent border-none text-white placeholder-white focus:outline-none flex-1 py-2 px-4 rounded-md mb-3 md:mb-0"
            />
            <button className="text-[#FFFFFF] transition-all bg-[#6610F2] hover:bg-[#5500e4] py-2 px-6 rounded-md">
              Submit
            </button>
          </form>
        </div>
      </div>

      <div className="flex flex-col items-center md:flex-row gap-5 justify-between mt-10 pt-5">
        <div className="flex-shrink-0">
          <Image src={footerLogo} alt="New Business" width={150} height={50} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
