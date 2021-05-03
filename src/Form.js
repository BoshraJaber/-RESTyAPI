import React from 'react';
const superagent = require('superagent');
// import ReactJson from 'react-json-view';

class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        url: 'API URL',
        method: 'method Default Value',
      };
    }
  // Handel Click:
  formSubmit =async (e)=>{
    e.preventDefault();
    const url = e.target.url.value;
    const method = e.target.method.value;
    this.setState({ url, method });
    localStorage.setItem("Method History", JSON.stringify(method));
    localStorage.setItem("URL History", JSON.stringify(url));
    // document.getElementById("form").reset();
    // Getting the data from the URL:
    try{
    const data=  await superagent.get(url)
    // const data = await raw.json();
    // console.log(data.body);
    // let {headers, body} = data
let counter = data.body.count || ' There is no counter ';
// console.log('Counter', counter)
    this.props.handler(data, counter)
    }catch(error){
        console.error(error)
    }
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
        <p>{history}: {urlHistory}</p>
        </div>
        
        </main>
      );
    }
  }


export default Form;

{/* <Form />

On submit
Send the API results back to the <App> using the method sent down in props */}