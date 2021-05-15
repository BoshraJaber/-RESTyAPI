  
import { Component } from 'react';
import React from 'react';
import './App.scss';
import './Form.scss';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import './Results.scss';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultsArray : [],
      Count : 0,
    };
  }

  handleForm = (results, Count) => {
 
    this.setState({ resultsArray: results, Count: Count});

  };
  render() {
    return (
      <>
        <Header />
        <Main />
        <Footer />
      </>
    );
  }
}
