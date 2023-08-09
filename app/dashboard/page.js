'use client';

import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import useSWR from 'swr';

export default function DashboardPage() {
  // const [data, setData] = useState([]);
  // const [error, setError] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   async function getData() {
  //     setIsLoading(true);
  //     const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
  //       cache: 'no-store',
  //     });

  //     if (!res.ok) {
  //       setError(true);
  //       throw new Error('Failed to fetch data');
  //     }

  //     const postData = await res.json();
  //     setData(postData);
  //     setIsLoading(false);
  //   }
  //   getData();
  // }, []);

  const session = useSession();

  const router = useRouter();

  function fetcher(...args) {
    return fetch(...args).then((res) => res.json());
  }

  const { data, error, isLoading, mutate } = useSWR(
    `/api/posts?username=${session?.data?.user.name}`,
    fetcher
  );

  // console.log(data);

  if (session.status === 'loading') {
    return <p>Loading...</p>;
  }

  if (session.status === 'unauthenticated') {
    router?.push('/dashboard/login');
  }

  async function handleSubmit(e) {
    e.preventDefault();

    console.log(e);

    const title = e.target[0].value;
    const description = e.target[1].value;
    const image = e.target[2].value;
    const content = e.target[3].value;

    try {
      await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({
          title,
          description,
          image,
          content,
          username: session.data.user.name,
        }),
      });
      mutate();
      e.target.reset();
    } catch (error) {
      console.log(error);
    }
  }

  async function handleDelete(id) {
    try {
      await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
      });
      mutate();
    } catch (error) {
      console.log(error);
    }
  }

  if (session.status === 'authenticated') {
    return (
      <div className='flex gap-20'>
        <div className='flex-1 flex flex-col gap-7 my-11'>
          {isLoading
            ? 'Loading...'
            : data?.map((post) => (
                <div
                  className='flex items-center justify-between'
                  key={post._id}
                >
                  <div className='relative'>
                    <Image
                      width={200}
                      height={100}
                      src={post.image}
                      alt={post.title}
                      className='object-cover'
                    />
                  </div>
                  <h2 className='text-xl'>{post.title}</h2>
                  <span
                    onClick={() => handleDelete(post._id)}
                    className='cursor-pointer text-red-500'
                  >
                    X
                  </span>
                </div>
              ))}
        </div>
        <form className='flex-1 flex flex-col gap-5' onSubmit={handleSubmit}>
          <h1 className='text-2xl'>Add New Post</h1>
          <input
            type='text'
            className='p-2 bg-transparent border border-neutral-700 rounded-md text-neutral-300'
            placeholder='Title'
          />
          <input
            type='text'
            className='p-2 bg-transparent border border-neutral-700 rounded-md text-neutral-300'
            placeholder='Description'
          />
          <input
            type='text'
            className='p-2 bg-transparent border border-neutral-700 rounded-md text-neutral-300'
            placeholder='Image'
          />
          <textarea
            className='p-2 bg-transparent border border-neutral-700 rounded-md text-neutral-300'
            placeholder='Content'
            cols='30'
            rows='10'
          ></textarea>
          <button className='bg-[#53c28b] py-2 rounded-md transition duration-300 hover:bg-[#44a072] active:bg-[#53c28b]'>
            Submit
          </button>
        </form>
      </div>
    );
  }

  console.log(session);
}
