import Link from 'next/link';

export default function Button({ text, url }) {
  return (
    <Link href={url}>
      <button className='px-5 py-3 cursor-pointer border-none rounded-lg max-w-max text-xl bg-[#53c28b] transition-colors duration-200 hover:bg-[#429b6e]'>
        {text}
      </button>
    </Link>
  );
}
