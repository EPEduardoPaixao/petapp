import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'

import Primeiro from './img1/Banner1.jpg'
import Segundo from './img1/Banner2.jpg'
import Terceiro from './img1/Banner3.jpg'

class Adocao extends Component {

  render() {
    
    return (
      <div className="bg-info container-fluid mx-auto my-auto m-2 p-2">
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={Primeiro} alt="Primeiro slide"/>
          </Carousel.Item>
      
          <Carousel.Item>
            <img className="d-block w-100" src={Segundo} alt="Segundo slide"/>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src={Terceiro} alt="Terceiro slide"/>
          </Carousel.Item>
        </Carousel>
        <div className="col-md-8 mx-auto my-4 py-4 bg-light rounded">
        <Form.Text className='col-md-8 mx-auto'>
          Marque as características do seu novo amiguinho.
        </Form.Text>
        <Form className="my-3">
          <Form.Text>Tipo:</Form.Text>
          <Form.Group controlId="formBasicChecbox">
            <Form.Check type="checkbox" label="Cachorro"/>
            <Form.Check type="checkbox" label="Gato" />
          </Form.Group>
          
          <Form.Text>Porte:</Form.Text>
          <Form.Group controlId="formBasicChecbox">
            <Form.Check type="checkbox" label="Grande" />
            <Form.Check type="checkbox" label="Médio" />
            <Form.Check type="checkbox" label="Pequeno" />
          </Form.Group>

          <Form.Text>Sexo:</Form.Text>
          <Form.Group controlId="formBasicChecbox">
            <Form.Check type="checkbox" label="Macho" />
            <Form.Check type="checkbox" label="Fêmea" />
          </Form.Group>
          
          <ButtonToolbar>
          <Button variant="info" type="submit"className="mx-auto my-3" href='/Animais'>
            Enviar
          </Button>
          </ButtonToolbar>
        </Form>
        </div>
      </div>
    );
  }
};
export default Adocao;
