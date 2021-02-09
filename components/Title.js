import React from 'react';

const Title = ({ title }) => {
  const string = title;
  const strOne = string.slice(0, Math.round(string.length / 2) - 1);
  const strTwo = string.slice(Math.round(string.length / 2) - 1);

  return (
    <h2 className="font-bold text-8xl text-pink-600">
      {strOne} <br />
      {strTwo}.
    </h2>
  );
};

export default Title;
