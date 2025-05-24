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
    <div>
      <label>
        {label}
        <span>{required && "*"}</span>
      </label>
      <input
        value={value ?? ""}
        onChange={(event) => onChange(event.target.value)}
        type={type}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default Input;
