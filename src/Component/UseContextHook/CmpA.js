import React from "react";
import CmpB from "./CmpB";

export const UserContext = React.createContext();
const CmpA = () => {
  return (
    <div>
      <UserContext.Provider value={"shubham"}>
        <h1>Component A</h1>
        <CmpB />
      </UserContext.Provider>
    </div>
  );
};

export default CmpA;
