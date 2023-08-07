'use client';

import { useSession } from 'next-auth/react';
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

  // function fetcher(...args) {
  //   return fetch(...args).then((res) => res.json());
  // }

  // const { data, error, isLoading } = useSWR(
  //   'https://jsonplaceholder.typicode.com/posts',
  //   fetcher
  // );

  if (session.status === 'loading') {
    return <p>Loading...</p>;
  }

  if (session.status === 'unauthenticated') {
    router?.push('/dashboard/login');
  }

  if (session.status === 'authenticated') {
    return <div>DashboardPage</div>;
  }

  console.log(session);
}
