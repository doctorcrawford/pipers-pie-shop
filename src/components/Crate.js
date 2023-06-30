import React from "react";
import PropTypes from 'prop-types';

function Crate(props) {
  return (
    <>
      <div onClick={() => props.whenCrateClicked(props.id)}>
        <p><em>{props.name}</em></p>
      </div>
    </>
  );
}

Crate.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  whenCrateClicked: PropTypes.func
};

export default Crate;