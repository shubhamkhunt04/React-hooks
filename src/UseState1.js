import React from "react";

const useState1 = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <h1>UseState Version 1</h1>
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  );
};

export default useState1;
