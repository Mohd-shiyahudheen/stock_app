/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import io from 'socket.io-client';
import Header from '../Components/Header/Header';
import './Home.css';
import Stock from '../Components/Stock/Stock';

const Home = () => {
  const socket = io('http://localhost:5000/api/socket', {
    withCredentials: true,
    auth: {
      stock_id: '6526f5369dc2b638309260f0', // tata id
    },
  });

  useEffect(() => {
    socket.off('stock_price_update').on('stock_price_update', async (data) => {
      console.log('final output new message', data);
    });
  }, []);

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
