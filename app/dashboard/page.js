'use client';

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

  function fetcher(...args) {
    return fetch(...args).then((res) => res.json());
  }

  const { data, error, isLoading } = useSWR(
    'https://jsonplaceholder.typicode.com/posts',
    fetcher
  );

  console.log(data);

  return <div>DashboardPage</div>;
}
