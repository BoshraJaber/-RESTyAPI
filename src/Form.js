import React from "react";
import { If, Then } from "react-if";
const superagent = require("superagent");
// import ReactJson from 'react-json-view';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    };
  }
  // Handel Click:
  formSubmit = async (e) => {
    e.preventDefault();
    this.setState({ isLoading: true });
    const url =
      e.target.url.value || "https://official-joke-api.appspot.com/random_joke";
    const method = e.target.method.value || "get";
    const body = e.target.body.value;
    try {
      const data = await superagent[method](url).send(body);
      this.setState({ isLoading: false });
      let counter = data.body.count || " There is no counter ";
      let results = [];
      results.push(data.headers, data.body);

      // Saving to local Storage
      let saveToLocal = {
        url: url,
        method: method,
        body: body,
        data: data,
      };
      let isSaved = false;
      let storedHistory = localStorage.getItem("History")
        ? JSON.parse(localStorage.getItem("History"))
        : [];
      storedHistory.forEach((entry) => {
        if (
          entry.url === saveToLocal.url &&
          entry.method === saveToLocal.method
        ) {
          isSaved = true;
        }
      });
      if (!isSaved) {
        storedHistory.push(saveToLocal);
        localStorage.setItem("History", JSON.stringify(storedHistory));
      }
      //
      this.props.handler(results, counter);
    } catch (error) {
      this.setState({ isLoading: false });
      console.error(error);
      this.props.handler(error.message, "no Counter");
    }
    // document.getElementById("form").reset();
    // e.target.reset();
  };
  componentDidMount() {
    // console.log("form", this.props.reRunBtn.query.entry);
    if (this.props.reRunBtn.query) {
      const inputURL = document.getElementById("url-input");
      inputURL.value = this.props.reRunBtn.query.entry.url;
      const method = document.getElementById(this.props.reRunBtn.query.entry.method);
      method.checked = true;
      const button = document.getElementById("submitBtn");
      button.click();
    }
  }
  render() {
    let history = JSON.parse(localStorage.getItem("Method History"));
    let urlHistory = JSON.parse(localStorage.getItem("URL History"));
    return (
      <main>
        <div>
          <form onSubmit={this.formSubmit} id="form">
            <input
              id="url-input"
              type="text"
              name="url"
              placeholder="Enter API URL here!"
              onChange={this.handleURL}
              required
            />
            <button type="submit" id="submitBtn">
              {" "}
              Go!
            </button>
            <br />
            <div className="radioBtn">
              <input
                type="radio"
                id="get"
                name="method"
                value="get"
                defaultChecked
              />
              <label htmlFor="get">GET</label>
              <input type="radio" id="post" name="method" value="post" />
              <label htmlFor="post">POST</label>
              <input type="radio" id="put" name="method" value="put" />
              <label htmlFor="put">PUT</label>
              <input type="radio" id="delete" name="method" value="delete" />
              <label htmlFor="delete">DELETE</label>
              <br />
              <textarea
                name="body"
                id="body"
                placeholder="Request Body......."
              ></textarea>
            </div>
          </form>
        </div>

        <If condition={this.state.isLoading === true}>
          <Then>
            <div id="loading"></div>
            <img
              id="loadingImg"
              src="https://www.superiorlawncareusa.com/wp-content/uploads/2020/05/loading-gif-png-5.gif"
            />
          </Then>
        </If>
        {/*       
        <div id="history">
        <p>{history}: {urlHistory}</p>
        </div> */}
      </main>
    );
  }
}

export default Form;
