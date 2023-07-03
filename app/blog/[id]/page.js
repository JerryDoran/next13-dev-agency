import Image from 'next/image';
import React from 'react';

export default function BlogPost() {
  return (
    <div className=''>
      <div className='flex'>
        <div className='flex-1 flex flex-col justify-between'>
          <h1 className='text-4xl'>Title</h1>
          <p className='text-lg font-light'>Description</p>
          <div className='flex items-center gap-3'>
            <Image
              src='https://images.pexels.com/photos/879537/pexels-photo-879537.jpeg?auto=compress&cs=tinysrgb&w=400'
              alt=''
              width={40}
              height={40}
              className='object-cover rounded-full'
            />
            <span className=''>username</span>
          </div>
        </div>
        <div className='flex-1 h-[300px] relative'>
          <Image
            src='https://images.pexels.com/photos/879537/pexels-photo-879537.jpeg?auto=compress&cs=tinysrgb&w=400'
            alt=''
            fill={true}
            className='object-cover'
          />
        </div>
      </div>
      <div className='mt-12 text-lg font-light text-[#999] text-justify'>
        <p className=''>content</p>
      </div>
    </div>
  );
}
