import React, { Component } from "react";
import ChildLevel2 from "./ChildLevel2";

class ChildLevel1 extends Component {
  render() {
    return <ChildLevel2 />;
  }
}

export default ChildLevel1;
