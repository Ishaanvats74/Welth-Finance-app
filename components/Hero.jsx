'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef } from 'react'

const HeroSection = () => {
    const imageRef = useRef()

    useEffect(() => { 
        const imageElement = imageRef.current; 
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const scollThreshold = 100;

            if(scrollPosition>scollThreshold){
                imageElement.classlist.add("scrolled");
            }
            else {
                imageElement.classlist.remove("scrolled");
            }
        }

        window.addEventListener("scroll" , handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    },[])
  return (

    <div className='pb-20 px-4 mt-40'>
        <div className='container mx-auto text-center'>
            <h1 className='text-3xl md:text5xl lg:text-[96px] pb-8 bg-gradient-to-br from-blue-600 to-purple-600 font-extrabold tracking-tighter pr-2 text-transparent bg-clip-text'>
                Manage your Finance <br /> with Intelligence
            </h1>
            <p className='text-xl text-gray-600 mb-8 max-w-2xl mx-auto'>An AI-powered financial management platform that helps you track, analyze, and optimize your spending with real-time insights.</p>
            <div>
                <Link href="/dashboard">
                    <button size="lg" className='px-7 bg-black rounded-md text-white py-2 shadow hover:bg-black/90 hover:text-white/90'>Get Started</button>
                </Link>
                <Link href="/">
                    <button size='lg' className='px-7 rounded-md py-2 shadow hover:bg-white/80 hover:text-black/80'> Learn More</button>
                </Link>
            </div>
            <div className='perspective-1000 '>
                <div ref={imageRef} className='hero-image'>
                    <Image src={"/banner.jpeg"} width={1280} height={720} alt='Dashboard Preview' priority className='rounded-lg shadow-2xl border mx-auto'></Image>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroSection

