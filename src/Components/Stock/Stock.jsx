import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Stock.css';
// import { BsArrowDownShort, BsArrowUpShort } from 'react-icons/bs';
// import {MdOutlineMonetizationOn} from 'react-icons/md'
import image from '../../Assets/pngtree-stock-exchange-finance-logo-template-illustration-design-png-image_5654973.png';
import axios from 'axios';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const Stock = () => {
  const [sock, setsock] = useState([]);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(false);
  };
  const fetchStock = async () => {
    try {
      // const result = await axios.get("")
    } catch (error) {}
  };
  return (
    <div className='stock-body'>
      <Container>
        <Row>
          <Col md={12} sm={12} lg={12} className='grid-conatiner'>
            {open === true ? (
              <>
                <div className='heading'>
                  <h1>Company :{''} Apple</h1>{' '}
                  <span>
                    <AiOutlineCloseCircle onClick={handleOpen} fontSize={25} />
                  </span>
                </div>
                <div className='logo'>
                  <h3>
                    Company Logo:{' '}
                    <img
                      style={{ width: '50px', height: '50px' }}
                      src={image}
                      alt=''
                    />
                  </h3>
                </div>
                <div className='price'>
                  <h3>Stock value: {''}$677</h3>
                </div>
              </>
            ) : (
              <>
                <div className='list-box'>
                  <div className='heading-list-box'>
                    <h5>Company:Apple</h5>
                  </div>
                  <div className='list-price'>
                    <h1>$ 67</h1>
                  </div>
                </div>
              </>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Stock;
