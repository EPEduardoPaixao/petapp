import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import BannerAdoção from './img1/BannerAdoção.jpg'

class Login extends Component {

  render() {
    return (
    <div className="container-fluid mx-auto my-auto m-2 p-2 bg-info">
     <img src={BannerAdoção} className="mx-auto my-auto w-100"></img>
     <div className="col-md-8 mx-auto my-4 py-4 bg-light rounded">
        <Form>
        <Form.Group controlId="formBasicNome">
            <Form.Label >Nome</Form.Label>
            <Form.Control type="password" placeholder="Nome" />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Digite email" />
            <Form.Text>
              Nós nunca vamos compartilhar seu e-mail com mais ninguém.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Cadastre uma senha de 8 digitos com letras e número</Form.Label>
            <Form.Control type="password" placeholder="Senha" />
          </Form.Group>

          <Form.Group controlId="formBasicCPF">
            <Form.Label>CPF</Form.Label>
            <Form.Control type="password" placeholder="CPF" />
          </Form.Group>

          <Form.Group controlId="formBasicEndereço">
            <Form.Label>Endereço</Form.Label>
            <Form.Control type="text" placeholder="Endereço" />
          </Form.Group>

          <Form.Group controlId="formBasicChecbox">
            <Form.Check type="checkbox" label="Manter conectado" />
          </Form.Group>
          <ButtonToolbar>
            <Button variant="primary" type="submit"className="mx-auto my-3" href='/CadastroAnimais'>
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
