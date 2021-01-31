const Banner = () => {
  const string = 'Hello';
  const strHalf = Math.round(string.length / 2) - 1;
  const strOne = string.slice(0, strHalf);
  const strTwo = string.slice(strHalf);

  return (
    <div className="h-screen w-screen">
      <div className="h-full w-1/2 bg-pink-700 flex justify-end items-center">
        <h1 className="font-bold text-9xl  transform translate-x-1/2">
          {strOne} <br />
          {strTwo}
          <span className="inline-block h-8 w-8 bg-pink-700 rounded-full ml-7" />
        </h1>
      </div>
    </div>
  );
};

export default Banner;
