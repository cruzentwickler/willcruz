import Image from 'next/image';
import Title from '@/components/Title';

const TimeLine = () => {
  return (
    <section className="py-40">
      <div className="sm:max-w-sm lg:max-w-4xl mx-auto -mb-10 relative z-10">
        <Title title="Time Line" />
      </div>
      <div className="w-full h-80 relative">
        <Image
          src="/images/img1.jpg"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
    </section>
  );
};

export default TimeLine;
