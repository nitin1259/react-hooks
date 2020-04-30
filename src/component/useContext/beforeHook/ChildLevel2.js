import React, { Component } from "react";
import { UserContext, ChannelContext } from "./Parent";

class ChildLevel2 extends Component {
  render() {
    return (
      <div>
        <UserContext.Consumer>
          {(user) => {
            return (
              <ChannelContext.Consumer>
                {(channel) => {
                  return (
                    <div>
                      User context Value : {user} and channel context value:{" "}
                      {channel}
                    </div>
                  );
                }}
              </ChannelContext.Consumer>
            );
          }}
        </UserContext.Consumer>
      </div>
    );
  }
}

export default ChildLevel2;
