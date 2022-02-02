import PropTypes from "prop-types";
import s from "./FeedbackOptions.module.css";

export const FeedbackOptions = ({ title, options }) => {
  return (
    <div>
      <h2>{title}</h2>
      {options.map((option) => (
        <button type="button" key={option}>
          {option}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  title: PropTypes.string,
  options: PropTypes.array.isRequired,
};
