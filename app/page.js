import Image from 'next/image';

// when importing the image from the public folder you don't need to specify the width and height
import hero from '@/public/images/hero.png';

export default function Home() {
  return (
    <main className='flex items-center gap-[100px]'>
      <div className='flex-1 flex flex-col gap-[50px]'>
        <h1 className='text-6xl bg-gradient-to-b from-[#194c33] to-[#bbb] hero-clip'>
          Better design for your digital products.
        </h1>
        <p>
          Turning your Idea into Reality. We bring together the teams from the
          global tech industry.
        </p>
        <button>See Our Work</button>
      </div>
      <div className='flex-1'>
        <Image src={hero} className='w-full object-cover' alt='hero' />
      </div>
    </main>
  );
}
