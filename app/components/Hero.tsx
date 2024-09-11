import Image from "next/image";
import GlassCircle from "./GlassCircle";

export default function Hero() {
  return (
    <main className="relative p-10 min-h-screen">
      {/* Background Image */}
      <Image
        src="/bg-picture.png"
        alt="background picture"
        fill={true}
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      />

      {/* Absolute container for h1 to keep it vertically centered and left-aligned, ignoring padding */}
      <div className="absolute inset-y-0 left-0 w-full flex items-center">
        <h1 className="font-semibold text-white text-7xl leading-[7rem] md:text-8xl md:leading-[8rem] lg:text-9xl lg:leading-[9rem] xl:text-9xl xl:leading-[13rem]">
          Welcome to
          <br />
          <span className="text-[#487CFF]">Joonwoo Park</span>’s
          <br />
          Website
        </h1>
      </div>

      <a href="#feature" className="hidden md:block absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
        <Image
          src="/Arrow down.png"
          alt="Arrow down"
          width={50}
          height={50}
          className="cursor-pointer animate-bounce animate-duration-1000 animate-ease-in-out"
        />
      </a>

      {/* SNS Icons at the bottom right corner, respecting padding */}
      <div className="absolute bottom-10 right-0 w-full flex justify-around md:justify-end md:right-10 md:gap-7 z-20">
        <a
          target="_blank"
          href="https://www.instagram.com/joonupark/"
          rel="noopener noreferrer"
        >
          <GlassCircle src="/instagram-icon.png" alt="Instagram Icon" />
        </a>
        <a
          target="_blank"
          href="https://www.youtube.com/@%EC%A3%BC%EB%88%84%EB%B0%95"
          rel="noopener noreferrer"
        >
          <GlassCircle src="/youtube-icon.png" alt="Youtube Icon" />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/hypic01/"
          rel="noopener noreferrer"
        >
          <GlassCircle src="/linkedin-icon.png" alt="LinkedIn Icon" />
        </a>
        <a
          target="_blank"
          href="https://twitter.com/"
          rel="noopener noreferrer"
        >
          <GlassCircle src="/instagram-icon.png" alt="Instagram Icon" />
        </a>
      </div>
    </main>
  );
}