import Image from 'next/image';
import { notFound } from 'next/navigation';

async function getBlogData(id) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

export async function generateMetadata({ params }) {
  const post = await getBlogData(params.id);

  return {
    title: post.title,
    description: post.description,
  };
}

export default async function BlogPost({ params }) {
  const data = await getBlogData(params.id);
  return (
    <div className=''>
      <div className='flex'>
        <div className='flex-1 flex flex-col justify-between'>
          <h1 className='text-4xl'>{data.title}</h1>
          <p className='text-lg font-light'>{data.description}</p>
          <div className='flex items-center gap-3'>
            <Image
              src={data.image}
              alt=''
              width={40}
              height={40}
              className='object-cover rounded-full'
            />
            <span className=''>{data.username}</span>
          </div>
        </div>
        <div className='flex-1 h-[300px] relative'>
          <Image src={data.image} alt='' fill={true} className='object-cover' />
        </div>
      </div>
      <div className='mt-12 text-lg font-light text-[#999] text-justify'>
        <p className=''>{data.content}</p>
      </div>
    </div>
  );
}
