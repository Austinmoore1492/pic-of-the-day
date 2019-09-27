import React from "react";
import PropTypes from "prop-types";

const Photo = props => (
  <div>
    <h3 className="title">{props.photo.title}</h3>
    <div className="nasaPics">
      <img src={props.photo.url} alt={props.photo.title} />
      <p>{props.photo.explanation}</p>
    </div>
  </div>
);

Photo.propTypes = {
  src: PropTypes.object,
  alt: PropTypes.object
};
export default Photo;
