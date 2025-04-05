import GallerySplashComponent from "@/components/GallerySplashComponent";
import NavbarComponent from "@/components/NavbarComponent";
import SplashComponent from "@/components/SplashComponent";
import Image from "next/image";

export default function Home() {
  return (
   <div className="min-h-screen">
      <NavbarComponent/>
      <SplashComponent/>
      <GallerySplashComponent/>
   </div>
  );
}
