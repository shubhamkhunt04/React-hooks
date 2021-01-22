import React, { useState, useEffect } from "react";

const UseEffect1 = () => {
  const [val, setVal] = useState([]);
  useEffect(async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    // setVal(data[0].id);
    setVal(await data.json());
  }, []);

  return (
    <div>
      <h1>Value</h1>
      {val.map((v) => (
        <h3 key={v.id}>{v.name}</h3>
      ))}
    </div>
  );
};

export default UseEffect1;
