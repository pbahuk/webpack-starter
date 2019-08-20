import React from "react";
import Styles from "./sample.css";
console.log("Styles:", Styles);

class Sample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  render() {
    return (
      <div className={Styles.sample}>
        I will be the Sample Component
        <p className={Styles.para}> Hello </p>
      </div>
    );
  }
}

export default Sample;
