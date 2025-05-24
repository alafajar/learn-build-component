//component Input.jsx
const Input = (props) => {
  const {
    onChange,
    placeholder,
    value,
    label,
    type = "text",
    required = false,
  } = props;
  return (
    <div className="grid grid-cols-4 gap-1 items-center w-full">
      <label className="col-span-1 font-bold text-base capitalize text-gray-600">
        {label}
        <span>{required && "*"}</span>
      </label>
      <input
        value={value ?? ""}
        onChange={(event) => onChange(event.target.value)}
        type={type}
        className="col-span-3 bg-white w-full px-4 py-2 text-base font-medium text-gray-600 rounded-md transition-colors duration-200 border-gray-300 outline-none border-2 focus:border-pink-400"
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default Input;
