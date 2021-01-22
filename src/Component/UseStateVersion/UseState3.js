import React from "react";

const UseState3 = () => {
  const [person, setPerson] = React.useState({
    name: "",
    age: "",
  });

  return (
    <div>
      <h1>Usestate Version 3</h1>
      <input
        type="text"
        onChange={(e) => setPerson({ ...person, name: e.target.value })}
      />
      <input
        type="text"
        onChange={(e) => setPerson({ ...person, age: e.target.value })}
      />

      <h1>{person.name}</h1>
      <h1>{person.age}</h1>
    </div>
  );
};

export default UseState3;
