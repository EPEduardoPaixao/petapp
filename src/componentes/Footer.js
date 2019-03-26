import React, { Component } from 'react';
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row';
import Img from './img1/img.jpg'

class Footer extends Component{
  render() {
    return (
      <div className='bg-info'>
        <Row >
          <Image className="mx-auto"  src={Img} thumbnail />
        </Row>
      </div>
    );
  }
};
export default Footer;
