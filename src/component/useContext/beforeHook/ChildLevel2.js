import React, { Component } from "react";
import { UserContext } from "./Parent";

class ChildLevel2 extends Component {
  render() {
    return (
      <div>
        <UserContext.Consumer>
          {(user) => {
            return <div>User context Value : {user}</div>;
          }}
        </UserContext.Consumer>
      </div>
    );
  }
}

export default ChildLevel2;
