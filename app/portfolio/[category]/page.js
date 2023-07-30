import Button from '@/components/Button';
import Image from 'next/image';
import { items } from './data';
import { notFound } from 'next/navigation';

function getData(cat) {
  const data = items[cat];

  if (data) {
    return data;
  }

  return notFound(); // returns a built in '404 page not found'
}

export default function Category({ params }) {
  const data = getData(params.category);
  return (
    <div>
      <h1 className='text-3xl text-[#53c28b] '>{params.category}</h1>
      {data.map((item) => (
        <div
          key={data.id}
          className='flex gap-12 mt-12 mb-20 odd:flex-row-reverse'
        >
          <div className='flex-1 flex flex-col gap-5 justify-center'>
            <h1 className='text-5xl'>{item.title}</h1>
            <p className='text-lg'>{item.desc}</p>
            <Button text='See More' url='#' />
          </div>
          <div className='flex-1 h-[500px] relative'>
            <Image
              className='object-cover'
              fill={true}
              src={item.image}
              alt='portfolio image'
            />
          </div>
        </div>
      ))}
    </div>
  );
}
