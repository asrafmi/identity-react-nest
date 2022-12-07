import React from 'react';
import { Carousel } from 'antd';

const contentStyle: React.CSSProperties = {
  height: '304px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const CarouselComponent: React.FC = () => (
    <div>
        <Carousel autoplay>
          <div>
            <h3 style={contentStyle}>1</h3>
            <img src="../../public/apilogy-carousel-1.png" alt="apilogy-carousel-1" />
          </div>
          <div>
            <h3 style={contentStyle}>2</h3>
            <img src="../../public/apilogy-carousel-2.png" alt="apilogy-carousel-2" />
          </div>
          <div>
            <h3 style={contentStyle}>3</h3>
            <img src="../../public/apilogy-carousel-3.png" alt="apilogy-carousel-3" />
          </div>
          <div>
            <h3 style={contentStyle}>4</h3>
            <img src="../../public/apilogy-carousel-4.png" alt="apilogy-carousel-4" />
          </div>
        </Carousel>
        <center>
        <h3>Helping the world. Decide Wisely</h3>
        <p>Go Further, faster with a true end-to-end data analytics platform and solutions to build a data-driven enterprise</p>
        </center>

    </div>
);

export default CarouselComponent;