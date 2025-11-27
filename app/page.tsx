import React from 'react'
import hero from '../public/office-workplace.png'
import Image from 'next/image'
import Link from 'next/link'

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center w-full px-6 md:px-20 mt-10 md:mt-20 gap-10">

      <div className="w-full md:w-1/2 flex flex-col gap-4 text-center md:text-left">
        <p className="font-extrabold text-4xl sm:text-5xl md:text-7xl leading-tight">
          Ace Your JEE Practice Easily
        </p>

        <p className="text-lg sm:text-xl text-gray-800">
          Quick MCQs. Instant feedback. Smarter preparation.
        </p>

        <Link
          className="self-center md:self-start border px-5 py-3 rounded-md text-lg hover:bg-gray-100 transition"
          href="/dashboard"
        >
          Explore Questions →
        </Link>
      </div>

      <div className="w-full md:w-1/2 flex justify-center">
        <Image
          src={hero}
          alt="hero image"
          width={500}
          className="w-64 sm:w-80 md:w-[500px] h-auto"
        />
      </div>
    </div>
  )
}

export default Home
