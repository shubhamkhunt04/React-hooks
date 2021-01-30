import React from "react";

const Title = () => {
  console.log("Rendering title");
  return (
    <div>
      <p>It is use for performance optimization</p>
    </div>
  );
};

export default React.memo(Title);
