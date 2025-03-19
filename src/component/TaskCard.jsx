import PropTypes from "prop-types";

const TaskCard = ({
  heading = "Heading",
  content = "Content",
  isDue = false,
}) => {
  return (
    <div className="border border-gray-200 rounded-xl p-5 bg-white shadow-lg my-3 cursor-pointer">
      <h3 className="font-semibold text-base my-2">{heading}</h3>
      <p className="text-base text-gray-700 font-light">{content}</p>
      {isDue && (
        <div className="px-3 py-1 bg-red-200 rounded-lg mt-2 w-fit">Due</div>
      )}
    </div>
  );
};
TaskCard.propTypes = {
  heading: PropTypes.string,
  content: PropTypes.string,
  isDue: PropTypes.bool,
};

export default TaskCard;
