import PropTypes from "prop-types";

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
    <div className="grid grid-cols-4 gap-4 items-center w-full">
      <label className="col-span-1 font-bold text-base capitalize text-gray-700">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <input
        value={value ?? ""}
        onChange={(event) => onChange(event.target.value)}
        type={type}
        className="col-span-3 bg-white w-full px-4 py-2 text-base font-medium text-gray-700 rounded-md transition-colors duration-200 border-gray-300 outline-none border-2 focus:border-pink-400 focus:ring-2 focus:ring-pink-100"
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

// ✅ Props validation
Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  required: PropTypes.bool,
};

export default Input;
