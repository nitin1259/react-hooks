import React, { Component } from "react";
import ChildLevel2 from "./ChildLevel2";
import ChildLevel21 from "../afterContextHook/ChildLevel2-1";

class ChildLevel1 extends Component {
  render() {
    return (
      <div>
        <ChildLevel2 />
        <ChildLevel21 />
      </div>
    );
  }
}

export default ChildLevel1;
