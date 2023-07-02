import Button from '@/components/Button';
import Image from 'next/image';
import React from 'react';

export default function ContactPage() {
  return (
    <div className=''>
      <h1 className='text-6xl font-bold mb-24 text-center'>
        Let&apos;s Keep In Touch
      </h1>
      <div className='flex items-center gap-24'>
        <div className='flex-1 h-[500px] relative'>
          <Image
            src='/images/contact.png'
            alt='contact me'
            fill={true}
            className='object-contain transition duration-3000 move'
          />
        </div>
        <form className='flex flex-1 flex-col gap-5'>
          <input
            type='text'
            placeholder='Enter your name'
            className='p-3 bg-transparent outline-none text-[#bbb] border-2 border-[#bbb] text-xl rounded-lg'
          />
          <input
            type='text'
            placeholder='Enter your email'
            className='p-3 bg-transparent outline-none text-[#bbb] border-2 border-[#bbb] text-xl rounded-lg'
          />
          <textarea
            className='p-3 bg-transparent  outline-none text-[#bbb] border-2 border-[#bbb] text-xl rounded-lg'
            placeholder='How can I help?'
            id=''
            cols='30'
            rows='10'
          ></textarea>
          <Button url='#' text='Send' />
        </form>
      </div>
    </div>
  );
}
