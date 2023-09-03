import Image from "next/image";
import { Hero, OurMission, Features, AboutUs, ContactUs } from "@/components";

export default function Home() {
  return (
    <>
      <Hero />
      <OurMission />
      <Features />
      <AboutUs />
      <ContactUs />
    </>
  );
}
