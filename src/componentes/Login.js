import React, { Component } from 'react';

import Carousel from 'react-bootstrap/Carousel';
import Primeiro from './img1/primeiro.png'
import Segundo from './img1/segundo.jpg'
import Terceiro from './img1/terceiro.jpg'

class Login extends Component {
  render() {
    return (
    <div>
    <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={Primeiro}
        alt="First slide"
      />
    </Carousel.Item>

    <Carousel.Item>
      <img
        className="d-block w-100"
        src={Segundo}
        alt="Third slide"
      />
    </Carousel.Item>
    
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={Terceiro}
        alt="Third slide"
      />
    </Carousel.Item>
  </Carousel>
  
  </div>

    );
  }
};
export default Login;
