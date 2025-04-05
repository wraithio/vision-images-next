import Link from "next/link";
import React from "react";

const NavbarComponent = () => {
  return (
    <div className="text-white">
      <nav
        id="navbar"
        className=" absolute w-full flex bg-black backdrop-opacity-40 h-40 justify-center items-center"
      >
        <ul className="flex justify-evenly">
          <li>
            <Link
              className="text-3xl hover:text-orange-300 hover:underline"
              href="#"
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              className="text-3xl hover:text-orange-300 hover:underline"
              href="#"
            >
              GALLERY
            </Link>
          </li>
          <li>
            <Link
              className="text-3xl hover:text-orange-300 hover:underline"
              href="#"
            >
              CONTACT
            </Link>
          </li>
        </ul>
        <div>
          <Link
            href="https://www.youtube.com/@visionimages-vipv"
            target="_blank"
          >
            <img
              className="yt-logo"
              src="/icons/youtube.png"
              alt="youtube logo"
            />
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default NavbarComponent;
