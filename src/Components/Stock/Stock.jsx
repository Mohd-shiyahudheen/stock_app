/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Stock.css';
import axios from 'axios';
import io from 'socket.io-client';

const Stock = () => {
  const [stock, setStock] = useState([]);
  const [stock_id, setStock_id] = useState('');
  const [price, setPrice] = useState({
    stock_name: '',
    price: '0',
  });

  // console.log(stock);

  const getId = (e) => {
    //console.log(e);
    setStock_id(e.target.value);
    const filteredData = stock.filter((item) => item._id === e.target.value)[0];
    setPrice({
      ...price,
      stock_name: filteredData.stock_name,
      price: filteredData.price,
    });
  };

  const fetchStock = async () => {
    try {
      await axios
        .get('http://localhost:5000/stocklist')
        .then((res) => {
          if (res) {
            setStock(res?.data?.stock);
          }
        })
        .catch((err) => {
          alert(err);
        });
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    fetchStock();
    console.log(stock_id);
    const socket = io('http://localhost:5000/api/socket', {
      withCredentials: true,
      auth: {
        stock_id: stock_id.toString(), // tata id
      },
    });
    socket.off('stock_price_update').on('stock_price_update', (data) => {
      console.log('final output new message', data);
      setPrice({ ...price, stock_name: data.stock_name, price: data.price });
    });
    return () => {
      // Clean up the socket connection when the selected stock changes
      socket.disconnect();
    };
  }, [stock_id]);
  return (
    <div className='stock-body'>
      <Container>
        <Row>
          <Col md={12} sm={12} lg={12} className='grid-conatiner'>
            <div className='dropdown'>
              <select id='company' onChange={(e) => getId(e)}>
                <option value={setStock_id} disabled selected>
                  Select your stock
                </option>
                {stock.map((item) => (
                  <option key={item._id} value={item._id}>
                    {item.stock_name}
                  </option>
                ))}
              </select>
            </div>
            <div className='heading'>
              <h1>Company :{price.stock_name}</h1>{' '}
            </div>
            {/* <div className='logo'>
              <h3>
                Company Logo:{' '}
                <img
                  style={{ width: '50px', height: '50px' }}
                  src={image}
                  alt=''
                />
              </h3>
            </div> */}
            <div className='price'>
              <h3>Stock value: {price?.price ?? 0}</h3>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Stock;
