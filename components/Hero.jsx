'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const HeroSection = () => {
  return (
    <div className='pb-20 px-4 mt-40'>
        <div className='container mx-auto text-center'>
            <h1 className='text-3xl md:text5xl lg:text-[96px] pb-6 gradient-title'>
                Manage your Finance <br /> with Intelligence
            </h1>
            <p>An AI-powered financial management platform that helps you track, analyze, and optimize your spending with real-time insights.</p>
            <div>
                <Link href="/dashboard">
                    <button size="lg" className='px-7 bg-black rounded-md text-white py-2 shadow hover:bg-black/90 hover:text-white/90'>Get Started</button>
                </Link>
                <Link href="/">
                    <button size='lg' className='px-7 rounded-md py-2 shadow hover:bg-white/80 hover:text-black/80'> Learn More</button>
                </Link>
            </div>
            <div>
                <div>
                    <Image src={"/banner.jpeg"} width={1280} height={720} alt='Dashboard Preview' priority className='rounded-lg shadow-2xl border mx-auto'></Image>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroSection

