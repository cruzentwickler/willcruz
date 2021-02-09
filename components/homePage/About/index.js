import Link from 'next/link';
import Title from '@/components/Title';
import Services from '@/components/homePage/About/Services';
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

  return (
    <section className="grid min-h-screen md:grid-cols-2 ">
      <div className="content-center grid justify-center p-8">
        <div className="border md:max-w-xs grid gap-8 p-4">
          <Title title="Digital" />
          <p className="text-4xl font-bold max-w-xs">
            An <span className="font-handwriting">overview</span> of your
            digital strategy
            <span className="">.</span>
          </p>
          <p className="text-lg">
            A key component of your transformation, your digital strategy
            requires special attention. We provide you with the support you need
            all during your project. Through regular workshops, brainstormings
            and idea sharing, we help grow your initial idea into a cutting-edge
            digital solution.
          </p>

          <Link href="/">
            <a className="font-handwriting text-2xl">Weiter lesen</a>
          </Link>
        </div>
      </div>
      <div className="content-end grid">
        <Services data={data} />
      </div>
    </section>
  );
};

export default About;
