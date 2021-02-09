import Link from 'next/link';

const About = () => {
  const data = [
    {
      id: '1',
      title: 'Design',
      description: [
        {
          name: 'Web design',
          url: '/'
        },
        {
          name: 'Art direction',
          url: '/'
        },
        {
          name: 'UI & UX',
          url: '/'
        }
      ]
    },
    {
      id: '2',
      title: 'Digital & Mobile',
      description: [
        {
          name: 'Websites',
          url: '/'
        },
        {
          name: 'Responsive design',
          url: '/'
        },
        {
          name: 'Mobile & Tablet',
          url: '/'
        },
        {
          name: 'Mobile apps (iOS, Android)',
          url: '/'
        }
      ]
    },
    {
      id: '3',
      title: 'Web Development',
      description: [
        {
          name: 'Front end & Back end',
          url: '/'
        },
        {
          name: 'Interaction design',
          url: '/'
        },
        {
          name: 'Magento, Wordpress',
          url: '/'
        },
        {
          name: 'Symfony, Laravel',
          url: '/'
        }
      ]
    },
    {
      id: '4',
      title: 'Social Media & Webmarketing',
      description: [
        {
          name: 'Social Media Strategy',
          url: '/'
        },
        {
          name: 'Community Management',
          url: '/'
        },
        {
          name: 'Bloggers & influencers',
          url: '/'
        },
        {
          name: 'Reporting, live events',
          url: '/'
        },
        {
          name: 'Mailing & competition',
          url: '/'
        }
      ]
    }
  ];

  const string = 'Digital';
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
    <section className="min-h-screen grid md:grid-cols-2">
      <div className="py-20">
        <div className="max-w-xs mx-auto">
          <h2 className="text-8xl font-bold text-pink-600 mb-24">{title}</h2>
          <p className="text-4xl font-bold mb-12">
            An <span className="font-handwriting">overview</span> of your
            digital strategy
            <span className="text-pink-600">.</span>
          </p>
          <p className="text-lg max-w-sm mb-12">
            A key component of your transformation, your digital strategy
            requires special attention. We provide you with the support you need
            all during your project. Through regular workshops, brainstormings
            and idea sharing, we help grow your initial idea into a cutting-edge
            digital solution.
          </p>

          <Link href="/">
            <a className="text-2xl relative hover:bg-red-500 transition font-handwriting px-1">
              Weiter lesen
              <span className="absolute left-0 bottom-0 h-0.5 w-full bg-red-500 " />
            </a>
          </Link>
        </div>
      </div>

      <div className="flex items-end justify-end">
        <div className="bg-gray-700 grid grid-cols-2 p-14  gap-12">
          {data.map((item) => (
            <div key={item.id}>
              <h3 className="text-lg text-white font-bold mb-3 ">
                {item.title}
              </h3>
              <ul>
                {item.description.map((item) => (
                  <li key={item.name} className="text-gray-300 ">
                    <Link href={item.url}>
                      <a className="hover:bg-red-500 transition px-1">
                        {item.name}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
