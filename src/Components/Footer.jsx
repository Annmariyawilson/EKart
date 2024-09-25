import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='container-fluid bg-primary p-3 text-light'>
      <Row>
        <Col>
          <h4>Redux Cart</h4>
          <p style={{ textAlign: 'justify' }}>
            A platform for buying and selling products online, offering secure payments and convenient delivery services.
          </p>
        </Col>
        <Col>
          <h4>Links</h4>
          <div className='d-flex flex-column'>
            <Link to="/" className="text-light">Home</Link>
            <Link to="/wish" className="text-light">Wishlist</Link>
            <Link to="/cart" className="text-light">Cart</Link>
          </div>
        </Col>
        <Col>
          <h4>Feedback</h4>
          <textarea className='form-control' rows="3"></textarea>
          <button className='btn btn-success mt-3'>Send</button>
        </Col>
      </Row>
    </div>
  );
}

export default Footer;
