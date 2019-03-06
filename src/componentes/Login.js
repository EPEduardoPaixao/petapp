import React, { Component } from 'react';

import Form from 'react-bootstrap/Form'

import Navbar from 'react-bootstrap/Navbar'
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'

import Primeiro from './img1/primeiro.png'
import Segundo from './img1/segundo.jpg'
import Terceiro from './img1/terceiro.jpg'

class Login extends Component {
  
  render() {
    return (
    <div className="bg-info"> 
    <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={Primeiro}
        alt="Primeiro slide"
      />
    </Carousel.Item>

    <Carousel.Item>
      <img
        className="d-block w-100"
        src={Segundo}
        alt="Segundo slide"
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
     <Navbar> 
        <Form className="mx-auto">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Digite email" />
            <Form.Text>
            Nós nunca vamos compartilhar seu e-mail com mais ninguém.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Senha</Form.Label>
            <Form.Control type="password" placeholder="Senha" />
          </Form.Group>
          <Form.Group controlId="formBasicChecbox">
            <Form.Check type="checkbox" label="Manter conectado" />
          </Form.Group>
          <ButtonToolbar >
            <Button variant="light" type="submit" className="mx-auto my-auto">
              Entrar
            </Button>
            <Button variant="light" type="submit" className="mx-auto my-auto">
              Cadastrar
            </Button>
            </ButtonToolbar>
      </Form>
    </Navbar> 
  </div>

    );
  }
};
export default Login;
