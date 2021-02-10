import Title from '@/components/Title';
import Link from 'next/link';

const About = () => {
  const dataPage = {
    title: 'Digital',
    subTitle: 'An overview of your digital strategy.',
    content:
      'A key component of your transformation, your digital strategy requires special attention. We provide you with the support you need all during your project. Through regular workshops, brainstormings and idea sharing, we help grow your initial idea into a cutting-edge digital solution.',
    url: '/'
  };
  const { title, subTitle, content, url } = dataPage;

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

  return (
    <section className="grid min-h-screen lg:grid-cols-2">
      <div className="grid content-center justify-center px-10 py-16">
        <div className="sm:max-w-sm grid gap-8">
          <Title title={title} />
          <p className="sub-title">{subTitle}</p>
          <p className="">{content}</p>
          <Link href={url}>
            <a>Weiter lesen</a>
          </Link>
        </div>
      </div>
      <div className="lg:grid content-end justify-end">
        <div className="bg-gray-900 grid gap-12 p-16 sm:grid-cols-2">
          {data.map((item) => (
            <ul key={item.id}>
              <h3 className="font-bold text-gray-100 mb-3">{item.title}</h3>
              {item.description.map((item) => (
                <li key={item.name}>
                  <Link href={item.url}>
                    <a className="text-gray-600">{item.name}</a>
                  </Link>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
