import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import icon from '../../Assets/pngtree-stock-exchange-finance-logo-template-illustration-design-png-image_5654973.png';

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand='lg' className='bg-body-tertiary'>
        <Container>
          <Navbar.Brand href='#home'>
            <span>
              <img
                src={icon}
                style={{ width: '50px', height: '50px' }}
                alt=''
              />
            </span>{' '}
            Mini Stock Price Tracker
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='me-auto'></Nav>
            <Nav></Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
