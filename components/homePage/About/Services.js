import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Services = () => {
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

  const variantOne = {
    hiden: {},
    visible: {}
  };

  return (
    <motion.div
      className="border grid sm:grid-cols-2"
      variants={variantOne}
      initial="hidden"
      animate="visible"
    >
      {data.map((item) => (
        <ul key={item.id} className="p-4 text-lg">
          <h3 className="font-bold mb-1">{item.title}</h3>
          {item.description.map((item) => (
            <li key={item.name}>
              <Link href={item.url}>
                <a>{item.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      ))}
    </motion.div>
  );
};

export default Services;
