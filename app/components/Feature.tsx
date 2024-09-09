import React from 'react'
import Card from './Card'

const Feature = () => {
  return (
    <main id="feature" className="p-10 min-h-screen relative flex flex-col bg-white">
        <div className="flex-grow w-full h-full grid grid-cols-12 grid-rows-12 gap-6"> 
            <Card link="/about" text="About Myself" style="col-span-8 row-span-6 text-3xl" img="/about_myself-bg.jpeg" tint="bg-[#55E184]" />
            <Card link="/about" text="Musics I love" style="col-span-4 row-span-6  text-3xl" img="/musics-bg.jpg" tint="bg-[#086CE5]"/>
            <Card link="/about" text="My Dev Page" style="col-span-4 row-span-6  text-3xl" img="/dev-bg.jpeg" tint="bg-[#0004FF]"/>
            <Card link="/about" text="My Socials" style="col-span-5 row-span-3  text-2xl" img="/socials-bg.jpeg" tint="bg-[#FFAE00]"/>
            <Card link="/about" text="My Blog" style="col-span-3 row-span-3  text-2xl" img="/blog-bg.jpeg" tint="bg-[#CA3DA7]"/>
            <Card link="/about" text="My YouTube Channel" style="col-span-4 row-span-3  text-2xl" img="/youtube-bg.jpeg" tint="bg-[#F00303]"/>
            <Card link="/about" text="Want to get in touch with me?" style="col-span-4 row-span-3  text-2xl" img="/touch-bg.jpeg" tint="bg-[#0F326A]"/>
        </div>
    </main>
  )
}

export default Feature