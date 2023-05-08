import PropTypes from "prop-types";
import "./Speech.css";

export default function Speech({ message }) {
  return (
    <div className="expand-bounce" id="SpeechBubble">
      {message}
    </div>
  );
}

Speech.propTypes = {
  message: PropTypes.string.isRequired,
};
