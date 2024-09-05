import Image from "next/image";
import GlassCircle from "./components/GlassCircle";

export default function Home() {
  return (
    <main className="relative p-10 min-h-screen">
      {/* Background Image */}
      <Image 
        src="/bg-picture.png"
        alt="background picture"
        width={1728}
        height={1128}
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      />

      {/* Absolute container for h1 to keep it vertically centered and left-aligned, ignoring padding */}
      <div className="absolute inset-y-0 left-0 flex items-center">
        <h1 className="font-semibold text-white text-9xl leading-[13rem]">
          Welcome to
          <br />
          <span className="text-[#487CFF]">Joonwoo Park</span>’s
          <br />
          Website
        </h1>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
        <Image 
          src="/Arrow down.png"
          alt="Arrow down"
          width={50}
          height={50}
          className="cursor-pointer"
        />
      </div>

      {/* SNS Icons at the bottom right corner, respecting padding */}
      <div className="absolute bottom-10 right-10 flex gap-7 z-20">
        <GlassCircle src="/instagram-icon.png" alt="Instagram Icon" />
        <GlassCircle src="/youtube-icon.png" alt="Youtube Icon" />
        <GlassCircle src="/linkedin-icon.png" alt="LinkedIn Icon" />
        <GlassCircle src="/instagram-icon.png" alt="Instagram Icon" />
      </div>

      
    </main>
  );
}
