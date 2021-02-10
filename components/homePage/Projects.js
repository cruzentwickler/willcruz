import Link from 'next/link';
import Image from 'next/image';
import Title from '@/components/Title';

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
        return (
          <section key={item.id} className="grid min-h-screen lg:grid-cols-2">
            <div>
              <div className="sm:max-w-sm mx-10 sm:mx-auto my-20">
                <Title title="Projects" />
              </div>
              <div className="h-80 w-full relative">
                <Image
                  src={item.imgUrl}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>
            </div>

            <div className="grid content-center justify-center px-10 py-16">
              <div className="sm:max-w-sm grid gap-8">
                <h3 className="sub-title">{item.title}</h3>
                <p>{item.content}</p>
                <Link href={item.url}>
                  <a>Weiter lesen</a>
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
