import PropTypes from "prop-types";

const InputField = ({ label, type, placeholder, register, name, error }) => {
  return (
    <div className="my-5">
      <label htmlFor={label} className="block font-medium my-1">
        {label}
      </label>
      <input
        {...register(name)}
        type={type}
        placeholder={placeholder}
        className="rounded bg-gray-100 w-full p-3"
      />

      {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </div>
  );
};

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  register: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  error: PropTypes.shape({
    message: PropTypes.string,
  }),
};

export default InputField;
