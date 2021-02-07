import Image from 'next/image';

const TimeLine = () => {
  const string = 'Time Line';
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
    <section className="py-40">
      <div className="w-full h-80 relative">
        <h2 className="absolute top-0 left-40 -translate-y-1/2 transform z-10 text-8xl font-bold text-pink-600">
          {title}
        </h2>
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
