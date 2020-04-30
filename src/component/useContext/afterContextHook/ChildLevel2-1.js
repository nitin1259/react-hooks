import React, { useContext } from "react";
import { UserContext, ChannelContext } from "../beforeHook/Parent";

function ChildLevel21() {
  const name = useContext(UserContext);
  const channel = useContext(ChannelContext);
  return (
    <div>
      {" "}
      user context value : {name} and channel context value : {channel}
    </div>
  );
}

export default ChildLevel21;
