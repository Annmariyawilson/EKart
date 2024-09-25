import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector,useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { searchWithKey } from '../Redux/slices/productSlice';

function Header() {
  const { items } = useSelector((state) => state.wishReducer)
  const { cart } = useSelector((state) => state.cartReducer)

  const [key,setKey]=useState("")

  const dispatch=useDispatch()
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <Link to={'/'} style={{ textDecoration: "none", color: "black" }}>
            <i className="fa-solid fa-cart-shopping" />
            {' '}
            E-Cart
          </Link>
        </Navbar.Brand>
        <div className='d-flex'>
          <div className='d-flex '>
            <input type="text" onChange={(e)=>setKey(e.target.value)} placeholder='enter keyword to search' className="form-control" />
            <button className='btn btn-success me-3' onClick={()=>dispatch(searchWithKey(key))}>search</button>
          </div>
          <Link className='btn border border-1 border-dark me-3' to={'/wish'}>
            <i className="fa-solid fa-heart" style={{ color: "#c81104" }} />
            Wishlist
            {' '}
            <span className='badge bg-dark'>
              {items?.length}
            </span>
          </Link>
          <Link className='btn border border-1 border-dark' to={'/cart'}>
            <i className="fa-solid fa-cart-shopping" />
            Cart
            {' '}
            <span className='badge bg-dark'>
              {cart?.length}
            </span>
          </Link>
        </div>
      </Container>
    </Navbar>
  );
}

export default Header;
