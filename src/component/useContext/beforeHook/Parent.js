import React, { Component } from "react";
import ChildLevel1 from "./ChildLevel1";

export const UserContext = React.createContext();

class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  render() {
    return (
      <div>
        <UserContext.Provider value={"Nitin"}>
          <ChildLevel1 />
        </UserContext.Provider>
      </div>
    );
  }
}

export default Parent;
