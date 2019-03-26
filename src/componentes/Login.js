import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'

import Primeiro from './img1/Banner1.jpg'
import Segundo from './img1/Banner2.jpg'
import Terceiro from './img1/Banner3.jpg'


class Login extends Component {

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
            <img className="d-block w-100" src={Terceiro} alt="Third slide"/>
          </Carousel.Item>
        </Carousel>
        <div className='container-fluid col-md-8'>
          <Form className="my-3">
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Digite email" />
              <Form.Text>Nós nunca vamos compartilhar seu e-mail com mais ninguém.</Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Senha</Form.Label>
              <Form.Control type="password" placeholder="Senha" />
            </Form.Group>
            
            <Form.Group controlId="formBasicChecbox">
              <Form.Check type="checkbox" label="Manter conectado" />
            </Form.Group>
            
            <ButtonToolbar>
              <Button variant="light" type="submit"className="mx-auto my-3" href='/Adocao'>
                Entrar
              </Button>
              <Button variant="light" type="submit"className="mx-auto my-3" href='/Cadastro'>
                Cadastrar
              </Button>
            </ButtonToolbar>
          </Form>
        </div>
      </div>
    );
  }
};
export default Login;
