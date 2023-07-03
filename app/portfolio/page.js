import Link from 'next/link';
import React from 'react';

export default function PortfolioPage() {
  return (
    <div>
      <h1 className='text-3xl font-bold my-5'>Choose a gallery</h1>
      <div className='flex gap-10 '>
        <Link
          href='/portfolio/illustrations'
          className="border-4 border-[#bbb] rounded-md w-[300px] h-[400px] relative bg-[url('/images/illustration.png')] bg-cover group "
        >
          <span className='absolute right-[10px] bottom-[10px] text-3xl font-bold group-hover:text-[#53c28b]'>
            Illustrations
          </span>
        </Link>
        <Link
          href='/portfolio/websites'
          className="border-4 border-[#bbb] rounded-md w-[300px] h-[400px] relative bg-[url('/images/websites.jpg')] bg-cover group "
        >
          <span className='absolute right-[10px] bottom-[10px] text-3xl font-bold group-hover:text-[#53c28b]'>
            Websites
          </span>
        </Link>
        <Link
          href='/portfolio/applications'
          className="border-4 border-[#bbb] rounded-md w-[300px] h-[400px] relative bg-[url('/images/apps.jpg')] bg-cover group "
        >
          <span className='absolute right-[10px] bottom-[10px] text-3xl font-bold group-hover:text-[#53c28b]'>
            Applications
          </span>
        </Link>
      </div>
    </div>
  );
}
