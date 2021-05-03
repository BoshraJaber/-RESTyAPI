  
import { Component } from 'react';
import React from 'react';
import './App.scss';
import './Form.scss';
import Form from'./Form.js';
import Header from './Header';
import Footer from './Footer';
import Results from './Results';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultsArray : [],
      Count : 0,
    };
  }

  handleForm = (results, Count) => {
    
    // let {headers, body} =results;
    this.setState({ resultsArray: results, Count: Count});
    // console.log('Hellllllo',results);
    // console.log('booodyyyyyyyyyyyyyyyyyy',typeof results)
  };
  render() {
    return (
      <>
        <Header />
        <Form  handler={this.handleForm} />
        {/* <People people={this.state.people} /> */}
        <Results  count={this.state.Count} headers={this.state.resultsArray[0]} results={this.state.resultsArray[1]}/>
        <Footer />
      </>
    );
  }
}
