import Link from 'next/link';
import React from 'react';

export default function PortfolioPage() {
  return (
    <div>
      <h1 className='text-3xl font-bold my-5'>Choose a gallery</h1>
      <div className='flex gap-10'>
        <Link
          href='/portfolio/illustrations'
          className='border-4 border-[#bbb] rounded-md w-[300px] h-[300px] relative'
        >
          <span className=''>Illustrations</span>
        </Link>
        <Link
          href='/portfolio/websites'
          className='border-4 border-[#bbb] rounded-md w-[300px] h-[300px] relative'
        >
          <span className=''>Websites</span>
        </Link>
        <Link
          href='/portfolio/applications'
          className='border-4 border-[#bbb] rounded-md w-[300px] h-[300px] relative'
        >
          <span className=''>Applications</span>
        </Link>
      </div>
    </div>
  );
}
