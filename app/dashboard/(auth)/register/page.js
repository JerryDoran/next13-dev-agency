'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function RegisterPage() {
  const [error, setError] = useState(false);
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();

    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });
      res.status === 201 &&
        router.push('/dashboard/login?success=Account has been created');
    } catch (error) {
      console.log(error);
      setError(true);
    }
  }

  return (
    <div className='flex items-center justify-center flex-col gap-4 border border-neutral-700 rounded-md p-[4rem] w-[400px] mx-auto'>
      <h1 className='text-[#53c28b] text-left text-2xl -mt-8 mb-4'>
        Create your account
      </h1>
      <form className='flex flex-col  gap-4' onSubmit={handleSubmit}>
        <input
          className='py-1 px-3 bg-transparent border border-neutral-700 rounded-md'
          type='text'
          placeholder='Username'
          required
        />
        <input
          className='py-1 px-3 bg-transparent border border-neutral-700 rounded-md'
          type='email'
          placeholder='Email'
          required
        />
        <input
          className='py-1 px-3 bg-transparent border border-neutral-700 rounded-md'
          type='password'
          placeholder='Password'
          required
        />
        <button className='bg-[#53c28b] py-2 rounded-md transition duration-300 hover:bg-[#44a072] active:bg-[#53c28b]'>
          Register
        </button>
      </form>
      {error && <p>Something went wrong!</p>}
      <Link
        href='/dashboard/login'
        className='text-sm hover:text-blue-500 underline'
      >
        Log in with an existing account
      </Link>
    </div>
  );
}
