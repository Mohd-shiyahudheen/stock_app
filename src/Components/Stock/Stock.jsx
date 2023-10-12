import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Stock.css';
// import { BsArrowDownShort, BsArrowUpShort } from 'react-icons/bs';
// import {MdOutlineMonetizationOn} from 'react-icons/md'
import image from '../../Assets/pngtree-stock-exchange-finance-logo-template-illustration-design-png-image_5654973.png';

const Stock = () => {
  return (
    <div className='stock-body'>
      <Container>
        <Row>
          <Col md={12} sm={12} lg={12} className='grid-conatiner'>
            <div className='heading'>
              <h1>Company :{''} Apple</h1>
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
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Stock;
