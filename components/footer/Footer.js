import Image from 'next/image';

export default function Footer() {
  return (
    <footer className='text-neutral-500 h-10 flex items-center justify-between pb-8'>
      <div>©2023 Maestro. All rights reserved.</div>
      <div className='flex gap-4 cursor-pointer transition '>
        <Image
          className='transition duration-200 hover:brightness-75'
          src='/images/1.png'
          alt='Maestro'
          width={15}
          height={15}
        />
        <Image
          className='transition duration-200 hover:brightness-75'
          src='/images/2.png'
          alt='Maestro'
          width={15}
          height={15}
        />
        <Image
          className='transition duration-200 hover:brightness-75'
          src='/images/3.png'
          alt='Maestro'
          width={15}
          height={15}
        />
        <Image
          className='transition duration-200 hover:brightness-75'
          src='/images/4.png'
          alt='Maestro'
          width={15}
          height={15}
        />
      </div>
    </footer>
  );
}
