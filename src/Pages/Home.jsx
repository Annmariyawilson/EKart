import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import { fetchProductThunk } from '../Redux/slices/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from 'react-bootstrap/Spinner';
import { nextPage,prevPage } from '../Redux/slices/productSlice';


function Home() {
  const { products, error, loading ,productsPerPage,currentPage } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductThunk());

  }, []);

  const totalPages=Math.ceil(products?.length / productsPerPage)
  const lastProductIndex = currentPage * productsPerPage
  const firstProductIndex = lastProductIndex - productsPerPage
  const visibleProducts = products?.slice(firstProductIndex,lastProductIndex)

  const handlenext = () => {
    if (currentPage < totalPages) {
      dispatch(nextPage())
    }
  }
  const handleprev = () => {
    if (currentPage > 1) {
      dispatch(prevPage())
    }

  }

  return (

    <div style={{ minHeight: '50vh' }}>
      <header className="bg-light py-2 w-100">
        <Carousel>
          <Carousel.Item className='text-center'>
            <img src="https://static.vecteezy.com/system/resources/previews/006/828/785/non_2x/paper-art-shopping-online-on-smartphone-and-new-buy-sale-promotion-pink-backgroud-for-banner-market-ecommerce-women-concept-free-vector.jpg" className='w-100' alt="" style={{ maxHeight: '350px' }} />
          </Carousel.Item>
          <Carousel.Item className='text-center'>
            <img src="https://static.vecteezy.com/system/resources/previews/011/871/820/non_2x/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-vector.jpg" className='w-100' alt="" style={{ maxHeight: '350px' }} />
          </Carousel.Item>
          <Carousel.Item className='text-center'>
            <img src="https://static.vecteezy.com/system/resources/previews/002/006/774/non_2x/paper-art-shopping-online-on-smartphone-and-new-buy-sale-promotion-backgroud-for-banner-market-ecommerce-free-vector.jpg" className='w-100' alt="" style={{ maxHeight: '350px' }} />
          </Carousel.Item>
        </Carousel>
      </header>
      <section className="py-1">
        <div className="px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {
              loading ?
                <h3>
                  <Spinner animation="border" role="status">
                  </Spinner> <span>Loading...</span>
                </h3>
                :
                (
                  error ?
                    <h3>{error}</h3>
                    :
                    <>
                    { visibleProducts?.map(
                      Item=>(
                      <div className="col mb-5">
                        <div className="card h-100">
                          <img className="card-img-top" src={Item?.thumbnail} alt={Item?.title} />
                          <div className="card-body p-4">
                            <div className="text-center">
                              <h5 className="fw-bolder">{Item?.title}</h5>
                              {Item?.price}
                            </div>
                          </div>
                          <div className="card-footer pt-0 border-top-0 bg-transparent">
                            <Link to={`/view/${Item?.id}`}>
                              <div className="text-center">
                                <button className="btn btn-success">View options</button>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    )
                )}
                </>
                )
            }
          </div>
        </div>
      </section>
      <div className='md-4 d-flex justify-content-center'>
        <div>
          <button className='btn' onClick={handleprev}>
            <i className="fa-solid fa-angles-left" />
          </button>
          {'  '}
          {currentPage}/{totalPages}
          {'  '}
          <button className='btn' onClick={handlenext}>
            <i className="fa-solid fa-angles-right" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home;
