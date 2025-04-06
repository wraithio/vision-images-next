import ContactComponent from "@/components/ContactComponent";
import FooterComponent from "@/components/FooterComponent";
import GallerySplashComponent from "@/components/GallerySplashComponent";
import NavbarComponent from "@/components/NavbarComponent";
import SplashComponent from "@/components/SplashComponent";

export default function Home() {
  return (
   <div>
      <NavbarComponent/>
      <SplashComponent/>
      <GallerySplashComponent/>
      <ContactComponent/>
   </div>
  );
}
