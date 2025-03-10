import PropTypes from "prop-types";

const ApiLoader = ({ isexpended = true }) => {
  return (
    <div
      className={`animate-spin inline-block ${
        isexpended ? "size-13 border-6" : "size-3 border-2"
      } border-current border-t-transparent text-blue-600 rounded-full`}
      role="status"
      aria-label="loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
};

ApiLoader.propTypes = {
  isexpended: PropTypes.bool,
};

export default ApiLoader;
