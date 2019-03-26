import React, { Component } from 'react';
import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import BannerAdoção from './img1/Banner4.jpg'
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

class Animal_3 extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleClick = ({ target }) => {
      this.setState(s => ({ target, show: !s.show }));
    };

    this.state = {
      show: false,
    };
  }

render() {
  return (
    <div className="container-fluid mx-auto my-auto m-2 p-2 bg-info">
     <img src={BannerAdoção} className="mx-auto my-auto w-100"></img>
          <div className="col-md-8 mx-auto my-4 py-4 bg-light rounded">
<Form.Group as={Row} className= "mx-auto ">
          <Card className='mx-auto' border="primary" style={{ width: '18rem' }}>
              <Card.Header>Raça: não definida</Card.Header>
              <Card.Body>
                <Card.Title>Bile</Card.Title>
                  <Card.Img src={Dog3} />
                  <Card.Text  >

                  </Card.Text>
              </Card.Body>
            </Card>
            <div className="mx-auto" >
            <p>DADOS GERAIS</p>
          <ul class="pet-check">
            <li>Cachorro.</li>
            <li>Sexo: Macho.</li>
            <li>Porte: medio.</li>
            <li>Idade: 2 anos.</li>
            <li>informações adicionais: adora brincar, adora criancas. </li>
          </ul>

          <hr />
            <div className="d-flex justify-content-center">
            <ButtonToolbar>
         <Button variant="outline-success" onClick={this.handleClick}>Quero Adotar</Button>

         <Overlay
           show={this.state.show}
           target={this.state.target}
           placement="bottom"
           container={this}
           containerPadding={20}
         >
           <Popover id="popover-contained" title="">
             <strong>Parabens!</strong> voce esta na lista de espera.
           </Popover>
         </Overlay>
         <Button variant="outline-fail" href="Animais">
          Voltar
         </Button>
       </ButtonToolbar>

         </div>
         </div>
</Form.Group>
            <br />
          </div>
          </div>


  );}};

  export default Animal_3;
