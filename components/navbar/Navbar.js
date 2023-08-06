'use client';

import Link from 'next/link';
import { links } from './linksData';
import DarkModeToggle from '../DarkModeToggle';

export default function Navbar() {
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
        <button
          className='py-1 px-3 border-none bg-[#54c38b] rounded-md cursor-pointer transition-colors duration-200 hover:bg-[#429b6e]'
          onClick={() => alert('logged out')}
        >
          Logout
        </button>
      </nav>
    </div>
  );
}
