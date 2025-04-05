import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavbarComponent = () => {
  return (
    <nav
      id="navbar"
      className="absolute top-0 z-10 w-full flex justify-center bg-transparent h-20"
    >
      <div className="flex place-items-center gap-12">
      <Link className="text-2xl hover:text-orange-300 hover:animate-[bounce_3s_infinite]" href="#">
        GALLERY
      </Link>

      <Link className="text-2xl hover:text-orange-300 hover:animate-[bounce_3s_infinite]" href="#">
        ABOUT
      </Link>


      <Link className="text-2xl hover:text-orange-300 hover:animate-[bounce_3s_infinite]" href="#">
        CONTACT
      </Link>
      </div>

      <div>
        <Link href="https://www.youtube.com/@visionimages-vipv" target="_blank">
          <Image
            width={100}
            height={100}
            className="w-14 absolute right-3 top-3"
            src="/icons/youtube.png"
            alt="youtube logo"
          />
        </Link>
      </div>
    </nav>
  );
};

export default NavbarComponent;
