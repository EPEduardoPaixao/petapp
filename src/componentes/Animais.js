import React, { Component } from 'react';

import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import BannerAdoção from './img1/Banner5.jpg'
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Dog1 from './img1/dog1.jpg';
import Dog2 from './img1/dog2.jpg';
import Dog3 from './img1/dog3.jpg';
import Dog4 from './img1/dog4.jpg';
import Dog5 from './img1/dog5.jpg';
import Dog6 from './img1/dog6.jpg';
import Img from './img1/img.jpg'

class Animais extends Component {
render() {
  return (
  <div className="container-fluid mx-auto my-auto m-2 p-2 bg-info">
   <img src={BannerAdoção} className="mx-auto my-auto w-100"></img>
        <div className="col-md-8 mx-auto my-4 py-4 bg-light rounded">
        <h2  className="text-center">Pets pra adoção</h2>


<Form.Group as={Row} className= "mx-auto ">
          <Card className="mx-auto" style={{ width: '14rem' }} >
            <Card.Img src={Dog1}/>
              <Card.Body>
                <Card.Title></Card.Title>
                <ButtonToolbar>
                  <Button variant="primary" className="mx-auto my-auto" href='/Animal_1'>Ver</Button>
                </ButtonToolbar>
              </Card.Body>
          </Card>

          <Card className="mx-auto" style={{ width: '14rem' }} >
            <Card.Img src={Dog2} />
              <Card.Body>
                <Card.Title></Card.Title>
                <ButtonToolbar>
                  <Button className='mx-auto' variant="primary" href="/Animal_2" >Ver</Button>
                </ButtonToolbar>
              </Card.Body>
          </Card>

          <Card className="mx-auto" style={{ width: '14rem' }} >
            <Card.Img src={Dog3} />
              <Card.Body>
                <Card.Title></Card.Title>
                <ButtonToolbar>
                  <Button className='mx-auto' variant="primary" href="/Animal_3">Ver</Button>
                </ButtonToolbar>
              </Card.Body>
          </Card>

          <Card className="mx-auto" style={{ width: '14rem' }} >
            <Card.Img src={Dog4} />
              <Card.Body>
                <Card.Title></Card.Title>
                <ButtonToolbar>
                  <Button className='mx-auto' variant="primary" href="/Animal_4">Ver</Button>
                </ButtonToolbar>
              </Card.Body>
          </Card>

          <Card className="mx-auto" style={{ width: '14rem' }} >
            <Card.Img src={Dog5} />
              <Card.Body>
                <Card.Title></Card.Title>
                <ButtonToolbar>
                  <Button className='mx-auto' variant="primary" href="/Animal_5">Ver</Button>
                </ButtonToolbar>
              </Card.Body>
          </Card>

          <Card className="mx-auto" style={{ width: '14rem' }} >
            <Card.Img src={Dog6} />
              <Card.Body>
                <Card.Title></Card.Title>
                <ButtonToolbar>
                  <Button className='mx-auto' variant="primary" href="/Animal_6">Ver</Button>
                </ButtonToolbar>
              </Card.Body>
          </Card>
</Form.Group>

        </div>
   </div>


);}};

export default Animais;
