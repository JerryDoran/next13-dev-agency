'use client';

import Link from 'next/link';
import { links } from './linksData';
import DarkModeToggle from '../DarkModeToggle';
import { signOut, useSession } from 'next-auth/react';

export default function Navbar() {
  const session = useSession();
  return (
    <div className='h-[100px] flex justify-between items-center'>
      <Link className='font-bold text-2xl' href='/'>
        Maestro
      </Link>
      <nav className='hidden lg:flex md:items-center gap-6'>
        <DarkModeToggle />
        {links.map((link) => (
          <Link
            key={link.id}
            href={link.url}
            className='transition-colors duration-200 hover:text-[#53c28b]'
          >
            {link.title}
          </Link>
        ))}
        {session.status === 'authenticated' && (
          <button
            className='py-1 px-3 border-none bg-[#54c38b] rounded-md cursor-pointer transition-colors duration-200 hover:bg-[#429b6e]'
            onClick={signOut}
          >
            Logout
          </button>
        )}
      </nav>
    </div>
  );
}
