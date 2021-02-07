import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="py-24">
      <div className="mx-auto max-w-5xl grid grid-flow-col justify-start gap-24">
        <Link href="/">
          <a className="hover:bg-red-500 grid grid-flow-col items-center gap-12 p-2 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-auto w-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
            <div className="grid content-center">
              <span className="font-handwriting text-xl">
                Whan to work with us ?
              </span>
              <span className="font-bold text-3xl uppercase">Brief Us</span>
            </div>
          </a>
        </Link>
        <Link href="/">
          <a className="hover:bg-red-500 grid grid-flow-col items-center gap-12 p-2 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-auto w-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
            <div className="grid content-center">
              <span className="font-handwriting text-xl">
                Whant to know about us ?
              </span>
              <span className="font-bold text-3xl uppercase">Newsletter.</span>
            </div>
          </a>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
