import React, { Component } from "react";
import ChildLevel1 from "./ChildLevel1";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  render() {
    return (
      <div>
        <UserContext.Provider value={"Nitin"}>
          <ChannelContext.Provider value={"Educatify.info"}>
            <ChildLevel1 />
          </ChannelContext.Provider>
        </UserContext.Provider>
      </div>
    );
  }
}

export default Parent;
