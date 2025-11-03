import React from "react";

const Button = (props) => {
  const { variant, children = "dsdas", color = "text-white", type, OnClick} = props;
  return (
    <>
      <button
     className={`font-mono ${color} text-sm rounded-lg cursor-pointer ${variant}`}
     type={type}
     onClick={OnClick}
    >
      {children}
    </button>
    </>
  );
};

export default Button;
