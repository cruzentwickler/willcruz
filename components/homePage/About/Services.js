import React from 'react';
import Link from 'next/link';

const Services = ({ data }) => {
  return (
    <div className="border grid sm:grid-cols-2">
      {data.map((item) => (
        <ul key={item.id} className="p-4">
          <h3 className="font-bold text-lg mb-1">{item.title}</h3>

          {item.description.map((item) => (
            <li key={item.name}>
              <Link href={item.url}>
                <a>{item.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
};

export default Services;
