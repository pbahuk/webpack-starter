import Header from "./app/header";
import Styles from "./style.css";
import webpackgif from "./webpack.gif";

const header = new Header();
console.log("this is index.js", header.random(), Styles);

document.getElementById("webpack-gif").setAttribute("src", webpackgif);
