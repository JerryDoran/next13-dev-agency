import Image from 'next/image';
import Link from 'next/link';

async function getBlogData() {
  const res = await fetch('http://localhost:3000/api/posts', {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch blogs!');
  }

  return res.json();
}

export default async function BlogPage() {
  const data = await getBlogData();

  return (
    <div className=''>
      {data.map((post) => (
        <Link
          key={post.id}
          href={`/blog/${post._id}`}
          className='flex items-center gap-10 mb-12'
        >
          <div className='flex-[.5]'>
            <Image
              src={post.image}
              alt=''
              width={400}
              height={250}
              className='object-cover'
            />
          </div>
          <div className='flex-1'>
            <h1 className='mb-4 text-2xl font-semibold'>{post.title}</h1>
            <p className='text-md'>{post.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
