import React, { useContext } from "react";
import { UserContext } from "./CmpA";

const CmpD = () => {
  const user = useContext(UserContext);

  return (
    <div>
      <h1>Component D</h1>
      My Context name {user}
    </div>
  );
};

export default CmpD;
