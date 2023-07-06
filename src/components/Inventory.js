import React from "react";
import Crate from "./Crate";
import PropTypes from 'prop-types';

function Inventory(props) {
  let inventory;

  // if (props.inventory[0] === undefined) {
  //   inventory = 'No pie crates have been added to the inventory yet';
  // } else {
  inventory =
    Object.values(props.inventory).map((crate) =>
      <Crate
        whenCrateClicked={props.onCrateSelection}
        name={crate.name}
        mainIngredient={crate.mainIngredient}
        iceCreamPairing={crate.iceCreamPairing}
        price={crate.price}
        numberOfPies={crate.numberOfPies}
        formattedWaitTime={crate.formattedWaitTime}
        id={crate.id}
        key={crate.id} />
    );
  // }

  return (
    <>
      <h2>Piper's Inventory</h2>
      {inventory}
    </>
  );
}

Inventory.propTypes = {
  inventory: PropTypes.object,
  onCrateSelection: PropTypes.func
};

export default Inventory;