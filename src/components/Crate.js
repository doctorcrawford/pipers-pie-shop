import React from "react";
import PropTypes from 'prop-types';

function Crate(props) {
  return (
    <>
      {/* <h2>Piper's Inventory</h2> */}
      <div onClick={() => props.whenCrateClicked(props.crate.id)}>
        <p><em>{props.name}</em></p>
      </div>
    </>
  );
}

Crate.propTypes = {
  name: PropTypes.string,
  crate: PropTypes.object,
  id: PropTypes.string,
  whenCrateClicked: PropTypes.func
};

export default Crate;