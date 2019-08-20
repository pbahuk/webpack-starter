import React from "react";

class Sample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  render() {
    return <div>I will be the Sample Component</div>;
  }
}

export default Sample;
