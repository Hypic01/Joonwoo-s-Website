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
    <Link href={link} className={`rounded-3xl ${style} p-10 relative `}>
        
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
            <h3 className="absolute bottom-8 left-8 font-semibold text-white">
                {text}
            </h3>
        
    </Link>
  )
}

export default Card