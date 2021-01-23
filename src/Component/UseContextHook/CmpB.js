import React, { useContext } from "react";
import CmpC from "./CmpC";

const CmpB = () => {
  return (
    <div>
      <h1>Component B</h1>
      <CmpC />
    </div>
  );
};

export default CmpB;
