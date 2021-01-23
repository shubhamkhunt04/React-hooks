import React, { useContext } from "react";
import CmpD from "./CmpD";
import { UserContext } from "./CmpA";

const CmpC = () => {
  const anotherConsume = useContext(UserContext);

  return (
    <div>
      <h1>Component C {anotherConsume}</h1>
      <CmpD />
    </div>
  );
};

export default CmpC;
