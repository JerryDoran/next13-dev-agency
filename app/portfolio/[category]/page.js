import Button from '@/components/Button';
import Image from 'next/image';

export default function Category({ params }) {
  return (
    <div>
      <h1 className='text-3xl text-[#53c28b] '>{params.category}</h1>
      <div className='flex gap-12 mt-12 mb-20'>
        <div className='flex-1 flex flex-col gap-5 justify-center'>
          <h1 className='text-5xl'>Test</h1>
          <p className='text-lg'>Desc</p>
          <Button text='See More' url='#' />
        </div>
        <div className='flex-1 h-[500px] relative'>
          <Image
            className='object-cover'
            fill={true}
            src='https://images.pexels.com/photos/879537/pexels-photo-879537.jpeg?auto=compress&cs=tinysrgb&w=400'
            alt='portfolio image'
          />
        </div>
      </div>
      <div className='flex gap-12 mt-12 mb-20 flex-row-reverse'>
        <div className='flex-1 flex flex-col gap-5 justify-center'>
          <h1 className='text-5xl'>Test</h1>
          <p className='text-lg'>Desc</p>
          <Button text='See More' url='#' />
        </div>
        <div className='flex-1 h-[500px] relative'>
          <Image
            className='object-cover'
            fill={true}
            src='https://images.pexels.com/photos/879537/pexels-photo-879537.jpeg?auto=compress&cs=tinysrgb&w=400'
            alt='portfolio image'
          />
        </div>
      </div>
      <div className='flex gap-12 mt-12 mb-20'>
        <div className='flex-1 flex flex-col gap-5 justify-center'>
          <h1 className='text-5xl'>Test</h1>
          <p className='text-lg'>Desc</p>
          <Button text='See More' url='#' />
        </div>
        <div className='flex-1 h-[500px] relative'>
          <Image
            className='object-cover'
            fill={true}
            src='https://images.pexels.com/photos/879537/pexels-photo-879537.jpeg?auto=compress&cs=tinysrgb&w=400'
            alt='portfolio image'
          />
        </div>
      </div>
    </div>
  );
}
