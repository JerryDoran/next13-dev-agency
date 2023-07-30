'use client';

import { ThemeContext } from '@/context/ThemeContext';
import { useContext } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

export default function DarkModeToggle() {
  const { toggleMode, mode } = useContext(ThemeContext);

  return (
    <div
      className='w-12 h-6 border-2 border-solid border-green-700 rounded-3xl flex justify-between items-center p-1 relative cursor-pointer'
      onClick={toggleMode}
    >
      <div>
        <FaMoon size={12} />
      </div>
      <div>
        <FaSun size={13} className='text-yellow-500' />
      </div>
      <div
        className='w-[15px] h-[15px] bg-green-500 rounded-full absolute'
        style={mode === 'light' ? { left: '2px' } : { right: '2px' }}
      />
    </div>
  );
}
