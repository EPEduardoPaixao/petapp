import React, { Component,Col } from 'react';
import Form from 'react-bootstrap/Form'
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'

import Primeiro from './img1/Banner1.jpg'
import Segundo from './img1/Banner2.jpg'
import Terceiro from './img1/Banner3.jpg'

class CadastroAnimais extends Component {

  render() {
    return (
      <div className="bg-info container-fluid mx-auto my-auto p-2">
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
          <Form.Text><a>Preencha as informações para que possamos efetuar o resgate.</a></Form.Text>
          <Form className="my-3">
            <Form.Group controlId="formBasicAnimais">
              <Form.Label>Animal:</Form.Label>
              <Form.Control type="animal" placeholder="Cachorro ou gato" />
            </Form.Group>

            <Form.Group controlId="formBasicPorte">
              <Form.Label>Porte:</Form.Label>
              <Form.Control type="porte" placeholder="Grande, Médio ou Pequeno" />
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridCity" className='mx-auto col-md-4'>
                <Form.Label>Cidade:</Form.Label>
                <Form.Control/>
              </Form.Group >

              <Form.Group as={Col} controlId="formGridState" className='mx-auto col-md-3'>
                <Form.Label>Estado:</Form.Label>
                <Form.Control as="select">
                  <option>Escolha...</option>
                  <option>...</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip" className='mx-auto col-md-4'>
                <Form.Label>Cep:</Form.Label>
                <Form.Control/>
              </Form.Group>
            </Form.Row>
            <Form.Group controlId="formBasicEndereco">
              <Form.Label>Endereço:</Form.Label>
              <Form.Control type="endereço" placeholder="Digite o endereço" />
            </Form.Group>
           
            <ButtonToolbar>
              <Button variant="info" type="submit"className="mx-auto my-3" href='/Adocao'>
              Cadastrar
              </Button>
            </ButtonToolbar>
          </Form>
        </div>
      </div>
    );
  }
};
export default CadastroAnimais;
