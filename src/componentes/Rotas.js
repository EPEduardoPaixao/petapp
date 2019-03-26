import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Login from './Login';
import CadastroPessoa from './CadastroPessoa';
import CadastroAnimais from './CadastroAnimais';
import Adocao from './Adocao';
import Animais from './Animais';
import Animal_1 from './Animal_1';
import Animal_2 from './Animal_2';
import Animal_3 from './Animal_3';
import Animal_4 from './Animal_4';
import Animal_5 from './Animal_5';
import Animal_6 from './Animal_6';


class Rotas extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Login}/>
          <Route path='/Cadastro' component={CadastroPessoa}/>
          <Route path='/CadastroAnimais' component={CadastroAnimais}/>
          <Route path='/Adocao' component={Adocao}/>
          <Route path='/Animais' component={Animais}/>
          <Route path='/Animal_1' component={Animal_1}/>
          <Route path='/Animal_2' component={Animal_2}/>
          <Route path='/Animal_3' component={Animal_3}/>
          <Route path='/Animal_4' component={Animal_4}/>
          <Route path='/Animal_5' component={Animal_5}/>
          <Route path='/Animal_6' component={Animal_6}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Rotas;
