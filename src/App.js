  
import { Component } from 'react';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import './Form.scss';
import Header from './Header';
import Footer from './Footer';
import Help from './Help';
import Home from './Home';
import HistoryPage from './HistoryPage';
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
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/history" component={HistoryPage} />
            <Route exact path="/help" component={Help} />
          </Switch>
        <Footer />
      </>
    );
  }
}
