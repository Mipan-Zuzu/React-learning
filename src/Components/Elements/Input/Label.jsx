import { Children } from "react";

const Label = (props) => {
  const {htmlFor, children } = props;
  return (
    <label
      htmlFor={htmlFor}
      className="block text-lg text-black font-mono"
    >
      {children}
    </label>
  );
};

export default Label;
