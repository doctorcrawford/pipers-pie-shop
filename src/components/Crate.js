import React from "react";
import PropTypes from 'prop-types';

function Crate(props) {
  return (
    <p><em>{props.name}</em></p>
  );
}

Crate.propTypes = {
  name: PropTypes.string
};

export default Crate;