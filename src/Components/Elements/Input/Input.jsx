const Input = (props) => {
    const {name, type = "text", placeholder = "type your text"} = props
  return (
    <input
      type={type}
      className="text-sm border rounded-2xl mt-3 w-full py-2 px-3 font-light text-gray-400 placeholder:opacity-50"
      placeholder= {placeholder}
      name={name}
    />
  );
};

export default Input