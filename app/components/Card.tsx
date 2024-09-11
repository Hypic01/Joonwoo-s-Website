import Image from 'next/image';
import Link from 'next/link'
import React from 'react'

type CardProps = {
    link: string;
    text: string;
    style: string;
    img: string;
    tint: string;
}

const Card = ({ link, text, style, img, tint }: CardProps) => {
  return (
    <Link href={link} className={`rounded-3xl ${style} min-h-24 w-full flex p-8 md:p-10 relative `}>
        
            <Image 
                src={img}
                alt="background image"
                fill={true}
                className="rounded-3xl"
                style={{
                    objectFit: 'cover',
                  }}
            />
            <div className={`${tint} absolute inset-0 bg-opacity-50 rounded-3xl`} />
            <h3 className="self-center absolute md:bottom-8 md:left-8 font-semibold text-white">
                {text}
            </h3>
        
    </Link>
  )
}

export default Card