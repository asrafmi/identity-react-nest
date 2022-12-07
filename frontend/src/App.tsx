import React from 'react';
import logo from './logo.svg';
import { Layout, Row, Col } from 'antd';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './App.css';
import Login from './components/Login';
import CarouselComponent from './components/Carousel';

function App() {
  return (
    <div className="App">
      <Layout>
        <Navbar/>
      </Layout>
      <Row className="content-row">
        <Col span={12}>
        <Layout className='carousel-layout'>
          <CarouselComponent/>
        </Layout>
        </Col>
        <Col span={12}>
        <Layout className='content-layout'>
          <Login/>
        </Layout>
        </Col>
      </Row>
      <Layout>
        <Footer/>
      </Layout>
    </div>
  );
}

export default App;
