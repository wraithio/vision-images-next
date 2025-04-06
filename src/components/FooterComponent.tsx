import React from "react";

const FooterComponent = () => {
  return (
    <footer className="absolute bottom-0 z-20 w-full flex justify-between px-2 pb-2 bg-gradient-to-b from-transparent to-black h-20">
      <div>
        <h4 className="text-[11px]">Jake Jacobs</h4>
        <h4 className="text-[11px]">209-451-3924</h4>
        <a href="mailto:jakejacobs@vipv.pro">
          <h4 className="underline hover:text-slate-300">
            jakejacobs@vipv.pro
          </h4>
        </a>
        <h4 className="text-[11px]">
          5052 West Ln, Suite 4G, Stockton, CA 95210
        </h4>
      </div>
      <div className="absolute z-0 top-[20%] left-[49%]">
        <a href="#">
          <img
            src="/icons/logo.png"
            alt="vision images logo"
            className="w-8 h-8"
          />
        </a>
      </div>
      <div className="w-[40%]">
        <h4 className="text-[11px] text-right mb-1">
          enter your email to stay up to date on bookings and new specials!
        </h4>
        <div className="flex justify-end gap-2">
          <input
            type="text"
            placeholder="email"
            className="w-[50%] text-[11px]"
          />
          <button>
            <h4 className="text-[11px]">subscribe</h4>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
