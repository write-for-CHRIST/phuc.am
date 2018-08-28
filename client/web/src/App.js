import React, { Component, Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import { getGospel } from "./api";

class App extends Component {
  state = {
    gospelData: []
  };

  componentDidMount() {
    getGospel()
      .then(gospelData => {
        this.setState({ gospelData: JSON.parse(gospelData) });
      })
      .catch(err => console.error(err));
  }

  render() {
    const { gospelData } = this.state;
    const gospelItems = gospelData.map((data, index) => (
      <div className="gospel-item" key={index}>
        <div className="gospel-text">{data.text}</div>
        <div className="gospel-shape" />
      </div>
    ));
    return (
      <div className="App">
        <div className="gospel-list">{gospelItems}</div>
      </div>
    );
  }
}
// {gospelData &&
//   gospelData.map((data, index) => (
//     <Fragment key={index}>
//       <div className="gospel-text">{data.text}</div>
//       <div className="gospel-shape" />
//     </Fragment>
//   ))}

export default App;
