import PropTypes from "prop-types";
import "./Frame.css"

export default function Frame ({image}) {

    return (
        <div className="frame">
            <img src={image} alt="project image"/>
        </div>
    )
}

Frame.propTypes = {
    image: PropTypes.string.isRequired,
  };