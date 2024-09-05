import Image from 'next/image';
import React from 'react'

type GlassCircleProps = {
    src: string;
    alt: string;
  };

const GlassCircle = ({ src, alt }: GlassCircleProps) => {
  return (
    <>
        <div className="w-[50px] h-[50px] bg-white/30 backdrop-blur-md rounded-full border border-white/20 flex items-center justify-center cursor-pointer">
            <Image src={src} alt={alt} width={25} height={25} />
        </div>
    </>
  )
}

export default GlassCircle