import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function BlogPage() {
  return (
    <div className=''>
      <Link href={`/blog/testId`} className='flex items-center gap-10 mb-12'>
        <div className=''>
          <Image
            src='https://images.pexels.com/photos/879537/pexels-photo-879537.jpeg?auto=compress&cs=tinysrgb&w=400'
            alt=''
            width={400}
            height={250}
            className='object-cover'
          />
        </div>
        <div className=''>
          <h1 className='mb-4'>hey</h1>
          <p className='text-lg'>hey there</p>
        </div>
      </Link>
      <Link href={`/blog/testId`} className='flex items-center gap-10 mb-12'>
        <div className=''>
          <Image
            src='https://images.pexels.com/photos/879537/pexels-photo-879537.jpeg?auto=compress&cs=tinysrgb&w=400'
            alt=''
            width={400}
            height={250}
            className='object-cover'
          />
        </div>
        <div className=''>
          <h1 className='mb-4'>hey</h1>
          <p className='text-lg'>hey there</p>
        </div>
      </Link>
      <Link href={`/blog/testId`} className='flex items-center gap-10 mb-12'>
        <div className=''>
          <Image
            src='https://images.pexels.com/photos/879537/pexels-photo-879537.jpeg?auto=compress&cs=tinysrgb&w=400'
            alt=''
            width={400}
            height={250}
            className='object-cover'
          />
        </div>
        <div className=''>
          <h1 className='mb-4'>hey</h1>
          <p className='text-lg'>hey there</p>
        </div>
      </Link>
      <Link href={`/blog/testId`} className='flex items-center gap-10 mb-12'>
        <div className=''>
          <Image
            src='https://images.pexels.com/photos/879537/pexels-photo-879537.jpeg?auto=compress&cs=tinysrgb&w=400'
            alt=''
            width={400}
            height={250}
            className='object-cover'
          />
        </div>
        <div className=''>
          <h1 className='mb-4'>hey</h1>
          <p className='text-lg text-[#999]'>hey there</p>
        </div>
      </Link>
    </div>
  );
}
