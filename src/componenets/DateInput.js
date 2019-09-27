import React from "react";
import PropTypes from "prop-types";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateInput = props => (
  <div
    style={{
      textAlign: "center",
      fontSize: "1.2rem",
      marginBottom: "1rem",
      padding: "5px"
    }}
  >
    <p
      style={{
        padding: "5px",
        display: "inline-block"
      }}
    >
      Select a Date:
    </p>
    <DatePicker selected={props.date} onChange={props.changeDate} />
  </div>
);

DateInput.propTypes = {
  selected: PropTypes.instanceOf(Date),
  onChange: PropTypes.func
};
export default DateInput;
