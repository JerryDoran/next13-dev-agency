'use client';

import Link from 'next/link';

export default function RegisterPage() {
  return (
    <div className='flex items-center justify-center flex-col gap-4 border border-neutral-700 rounded-md p-[4rem] w-[400px] mx-auto'>
      <h1 className='text-[#53c28b] text-left text-2xl -mt-8 mb-4'>
        Create your account
      </h1>
      <form className='flex flex-col  gap-4 '>
        <input
          className='py-1 px-3 bg-transparent border border-neutral-700 rounded-md text-lg'
          type='text'
          placeholder='Username'
          required
        />
        <input
          className='py-1 px-3 bg-transparent border border-neutral-700 rounded-md text-lg'
          type='email'
          placeholder='Email'
          required
        />
        <input
          className='py-1 px-3 bg-transparent border border-neutral-700 rounded-md text-lg'
          type='password'
          placeholder='Password'
          required
        />
        <button className='bg-[#53c28b] py-2 rounded-md transition duration-300 hover:bg-[#44a072] active:bg-[#53c28b]'>
          Register
        </button>
      </form>
      <Link
        href='/dashboard/login'
        className='text-sm hover:text-blue-500 underline'
      >
        Log in with an existing account
      </Link>
    </div>
  );
}
