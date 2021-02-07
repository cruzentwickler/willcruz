import Link from 'next/link';
import Image from 'next/image';

const Projects = () => {
  const data = [
    {
      id: '0',
      title: 'User-centered creativity.',
      content:
        'Efficient and immersive user experience is the way to capture attention and deliver a clear message. This is why we believe, first and foremost, that usability serves design. And that all design must be elegant and innovative.',
      url: '/',
      imgUrl: '/images/img0.jpg'
    }
  ];

  return (
    <>
      {data.map((item) => {
        const string = 'Projects';
        const strHalf = Math.round(string.length / 2) - 1;
        const strOne = string.slice(0, strHalf);
        const strTwo = string.slice(strHalf);

        const title = (
          <>
            <span className="block">{strOne}</span>
            <span className="block">{strTwo}.</span>
          </>
        );

        return (
          <section key={item.id} className="grid grid-cols-2">
            <div className="py-36">
              <div className="max-w-xs mx-auto mb-20">
                <h2 className="text-8xl font-bold text-pink-600">{title}</h2>
              </div>
              <figure>
                <div className="h-80 w-full relative">
                  <Image
                    src={item.imgUrl}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                  />
                </div>
                <figcaption className="grid justify-items-end justify-end text-gray-500 mt-1">
                  <h5 className="font-bold">{item.title}</h5>
                  <span className="mb-3 font-handwriting text-lg">
                    Web, Mobile, Tablet
                  </span>
                  <Link href={item.url}>
                    <a className="font-handwriting relative text-xl hover:bg-red-500 text-white transition px-2">
                      {'Live Project'}
                      <span className="absolute left-0 bottom-0 h-0.5 w-full bg-red-500 " />
                    </a>
                  </Link>
                </figcaption>
              </figure>
            </div>

            <div className="pt-96">
              <div className="max-w-xs pl-10">
                <h3 className="text-3xl mb-10">{item.title}</h3>
                <p className="mb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                  enim explicabo omnis animi, assumenda, voluptatem eius
                  recusandae ex veritatis amet natus vitae tempora ratione
                  repudiandae nisi reprehenderit maiores quasi labore.
                </p>
                <Link href={item.url}>
                  <a className="font-handwriting relative text-xl hover:bg-red-500 transition px-2">
                    {'Witer lesen'}
                    <span className="absolute left-0 bottom-0 h-0.5 w-full bg-red-500 " />
                  </a>
                </Link>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
};

export default Projects;
