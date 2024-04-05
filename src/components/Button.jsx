import React from "react";

function Button({ children }) {
  return (
    <div>
      <button className="px-8 py-2 border-2 rounded">{children}</button>
    </div>
  );
}

export default Button;
