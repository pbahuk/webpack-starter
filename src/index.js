import Header from "./app/header";
import Styles from "./style.css";
import webpackgif from "./webpack.gif";

// importing React modules.
import React from "react";
import ReactDOM from "react-dom";
import Sample from "./app/components/Sample";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Sample />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

const header = new Header();
console.log("this is index.js", header.random(), Styles);
document.getElementById("webpack-gif").setAttribute("src", webpackgif);
