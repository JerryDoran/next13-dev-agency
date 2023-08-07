'use client';

import { signIn, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();

  const session = useSession();

  if (session.status === 'loading') {
    return <p>Loading...</p>;
  }

  if (session.status === 'authenticated') {
    router?.push('/dashboard');
  }
  async function handleSubmit(e) {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    signIn('credentials', { email, password });
  }

  return (
    <div className='flex items-center justify-center flex-col gap-4 border border-neutral-700 rounded-md p-[4rem] w-[400px] mx-auto'>
      <h1 className='text-[#53c28b] text-left text-2xl -mt-8 mb-4'>
        Sign into your account
      </h1>
      <form className='flex flex-col  gap-4' onSubmit={handleSubmit}>
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
          Sign In
        </button>
      </form>
      {/* {error && <p>Something went wrong!</p>} */}
      <Link
        href='/dashboard/register'
        className='text-sm hover:text-blue-500 underline'
      >
        Create an account
      </Link>
      <button
        className='bg-neutral-700 py-2 px-4 rounded-md w-[235px] transition duration-300 hover:bg-neutral-800 active:bg-neutral-700'
        onClick={() => signIn('google')}
      >
        Login with Google
      </button>
    </div>
  );
}
