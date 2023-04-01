import React, { useState, useEffect } from 'react'

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import products from '../assets/data/products'

import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col } from 'reactstrap';
import '../styles/home.css'
import heroImg from '../assets/images/hero-img.png';
import ProductList from '../components/UI/ProductList';
import Shop from './Shop';
import Clock from '../components/UI/Clock';

import Servies from '../services/Servies';

import counterImg from '../assets/images/counter-timer-img.png'



const Home = () => {


  const [trendingProducts, setTrendingProducts] = useState([]);

  const [bestSaleProducts, setBestSaleProducts] = useState([]);

  const [mobileProducts, setMobileProducts] = useState([])
  const [wirelessProducts, setWirelessProducts] = useState([])
  const [popularProducts, setPopularProducts] = useState([])

  const year = new Date().getFullYear();
  useEffect(() => {
    const filtereTrendingProduct = products.filter((item) => item.category === "chair");

    const filtereBestSaleProduct = products.filter((item) => item.category === "sofa");

    const filtereMobileProduct = products.filter((item) => item.category === "mobile");
    const filtereWirelessProduct = products.filter((item) => item.category === "wireless");
    const filterePopularProduct = products.filter((item) => item.category === "watch");

    setTrendingProducts(filtereTrendingProduct);
    setBestSaleProducts(filtereBestSaleProduct);
    setMobileProducts(filtereMobileProduct);
    setWirelessProducts(filtereWirelessProduct);
    setPopularProducts(filterePopularProduct);
  }, []);


  return (
    <Helmet title={'Home'}>
      <section className='hero_section'>
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <div className="hero_content">
                <p className="hero_subtitle">Trending product in 2023</p>
                <h2>Make Your Interior More Minimalistic $ Modern </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, sint ducimus tempore dolorum iusto, ipsum eveniet eius fugit commodi accusantium temporibus repudiandae voluptatibus reiciendis expedita autem dolore architecto, placeat quisquam.</p>
                <motion.button whileTap={{ scale: 1.2 }} className="buy_btn">
                  <Link to='/shop'>SHOP NOW</Link>
                </motion.button>
              </div>
            </Col>

            <Col lg='6' md='6'>
              <div className="hero_img">
                <img src={heroImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Servies />
      <section className="trending_product">
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2 className='section_title'> Trend ding Product</h2>
            </Col>
            <ProductList data={trendingProducts}></ProductList>
          </Row>
        </Container>
      </section>
      <section className="best_sales">
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2 className='section_title'> Best Sales</h2>
            </Col>
            <ProductList data={bestSaleProducts} />
          </Row>
        </Container>
      </section>
      <section className="timer_count">
        <Container>
          <Row>
            <Col lg='6' md='12' className='count_down-col'>

              <div className="clock_top-content">
                <h4 className='text-white fs-6 mb-2'>Limited Offers</h4>
                <h3 className='text-white fs-5 mb-3'>Quality Armchair</h3>
              </div>
              <Clock />

              <motion.button whileTap={{ scale: 1.2 }} className="buy_btn store_btn">
                <Link to='/shop'>Visit Store </Link>
              </motion.button>
            </Col>
            <Col lg='6' md='12' className='text-end counter_img'>
              <img src={counterImg} alt="" />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="new_arrivals">
        <Container>
          <Row>
            <Col lg='12' className='text-center mb-5'>
              <h2 className='section_title'> New Arrivals</h2>
            </Col>
            <ProductList data={mobileProducts} />
            <ProductList data={wirelessProducts} />
          </Row>
        </Container>
      </section>

      <section className="popular_category">
        <Container>
          <Row>
            <Col lg='12' className='text-center mb-5'>
              <h2 className='section_title'> Popular in Category</h2>
            </Col>
            <ProductList data={popularProducts} />

          </Row>
        </Container>
      </section>
      <Shop/>
    </Helmet>
  )
}
export default Home
//1h20