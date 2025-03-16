'use client';
import Link from 'next/link';
import React from 'react'

const HeroSection = () => {
  return (
    <div className='pb-20 px-4 mt-40'>
        <div>
            <h1>
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
        </div>
    </div>
  )
}

export default HeroSection

