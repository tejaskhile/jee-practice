import React from 'react'
import hero from '../public/office-workplace.png'
import Image from 'next/image'
import Link from 'next/link'

const Home = () => {
  return (
    <div className='flex justify-center items-center w-full px-30 mt-8'>
      <div className='w-2/3 flex flex-col justify-start gap-3'>
        <p className='font-extrabold text-8xl'>Ace Your JEE Practice Easily</p>
        <p className='text-xl text-gray-800'>Quick MCQs. Instant feedback. Smarter preparation.</p>
        <Link className='self-start border p-3' href='/dashboard'>Explore Questions→</Link>
      </div>
      <div>
        <Image src={hero} alt="hero image" width={600} />
      </div>
    </div>
  )
}

export default Home