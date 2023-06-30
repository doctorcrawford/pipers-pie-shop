import React from "react";
import Crate from "./Crate";
import PropTypes from 'prop-types';

function Inventory(props) {
  let inventory;
  
  if (props.inventory[0] === undefined) {
    inventory = 'No pie crates have been added to the inventory yet';
  } else {
    inventory =
    props.inventory.map((crate) =>
      <Crate
        name={crate.name} />);
  }

  return (
    <>
      <h2>Piper's Inventory</h2>
      <p>{inventory}</p>
    </>
  );
}

Inventory.propTypes = {
  inventory: PropTypes.array
}

export default Inventory;