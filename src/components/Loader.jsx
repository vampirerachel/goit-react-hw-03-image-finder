import React from 'react';
import { Puff } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className="loader">
      <Puff color="#00BFFF" height={100} width={100} />
    </div>
  );
};

export default Loader;

