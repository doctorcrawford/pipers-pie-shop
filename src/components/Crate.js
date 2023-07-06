import React from "react";
import PropTypes from 'prop-types';

function Crate(props) {
  return (
    <>
      <div onClick={() => props.whenCrateClicked(props.id)}>
        <p><em>{props.name}</em></p>
        <p><em>{props.formattedWaitTime}</em></p>
      </div>
    </>
  );
}

Crate.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  whenCrateClicked: PropTypes.func,
  formattedWaitTime: PropTypes.string
};

export default Crate;