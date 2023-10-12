import React from 'react';
import Header from '../Components/Header/Header';
import './Home.css';
import Stock from '../Components/Stock/Stock';

const Home = () => {

  return (
    <div className='main'>
      <div className='header'>
        <Header />
      </div>
      <div className='stock'>
        <Stock />
      </div>
    </div>
  );
};

export default Home;
