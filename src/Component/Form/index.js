import React from 'react';
// import './Component/Form/Form.scss';
import { If, Then, Else } from 'react-if';

// Form Component
class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        url: 'API URL',
        method: 'method Default Value',
      };
    }
  // Handel Click:
  formSubmit = (e)=>{
    e.preventDefault();
    const url = e.target.url.value;
    const method = e.target.method.value;
    this.setState({ url, method });
    localStorage.setItem("Method History", JSON.stringify(method));
    localStorage.setItem("URL History", JSON.stringify(url));
    // document.getElementById("form").reset();
    e.target.reset();
  }
  
  handleURL = (e)=>{
    // this.setState({
    // method: e.target.url.value
    // });
  }
  
    render() {
      let history = JSON.parse(localStorage.getItem('Method History'))
      let urlHistory = JSON.parse(localStorage.getItem('URL History'))
      return (
        <main>
        <div>
        <form onSubmit={this.formSubmit} id="form">
        <input id="url-input" type="text" name="url" placeholder="Enter API URL here!" onChange={this.handleURL} required />
          <button type="submit"> Go!</button>
          <br/>
          <div className="radioBtn">
          <input type="radio" id="get" name="method" value="get" required />
          <label htmlFor="get">GET</label>
          <input type="radio" id="post" name="method" value="post" />
          <label htmlFor="post">POST</label>
          <input type="radio" id="put" name="method" value="put"/>
          <label htmlFor="put">PUT</label>
          <input type="radio" id="delete" name="method" value="delete"/>
          <label htmlFor="delete">DELETE</label>
          </div>
          
        </form>
        </div>

        <div>
        <If condition={history}>
            <Then>
            <p>{history} {urlHistory}</p>
            </Then>
            <Else>
            <p>Your Search will Display Here</p>
            </Else>
          </If>
       
        </div>
        
        </main>
      );
    }
}

export default Form