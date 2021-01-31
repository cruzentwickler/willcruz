import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/">
      <a className="text-xl font-bold uppercase relative">
        Cruz{' '}
        <span className="h-2 w-2 bg-white dark:bg-gray-800 inline-block rounded-full absolute top-0 -right-4" />
      </a>
    </Link>
  );
};

export default Logo;
