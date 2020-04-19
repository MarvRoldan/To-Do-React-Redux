import React from "react";

const Link = ({ active, onClick, children }: any) => (
  <button onClick={onClick} disabled={active}>
    {children}
  </button>
);

export default Link;
