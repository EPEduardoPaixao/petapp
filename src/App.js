import React, { Component } from 'react';
import Adocao from './componentes/Adocao';
import CadastroAnimais from './componentes/CadastroAnimais';
import CadastroPessoa from './componentes/CadastroPessoa';
import NavBar from './componentes/NavBar';
import logo from './logo.svg';
import './App.css';

import Login from './componentes/Login';
import Rotas from './componentes/Rotas';
import Footer from './componentes/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Rotas/>
        <Footer/>
      </div>
    );
  }
}

export default App;
