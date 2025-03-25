import React from 'react';
import Navbar from '../componennts/Navbar';
import Blog from './Blog';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className='p-6 lg:p-12'>
        <Blog />
      </div>
    </>
  );
};

export default Home;
