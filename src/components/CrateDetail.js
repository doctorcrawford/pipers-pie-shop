import React from "react";
import PropTypes from 'prop-types';

function CrateDetail(props) {
  const { crate, onClickingDelete, onClickingEdit, onClickingSell } = props;

  return (
    <>
      <h2>Crate Detail</h2>
      <h4>{crate.name}</h4>
      <p>Main Ingredient: {crate.mainIngredient}</p>
      <p>Ice Cream Pairing: {crate.iceCreamPairing}</p>
      <p>Price: ${crate.price}</p>
      <p>Number of Pies Left in Crate: {crate.numberOfPies}</p>
      <button onClick={onClickingSell}>Sell Pie</button>
      <button onClick={() => onClickingDelete(crate.id)}>Remove Crate from Inventory</button>
      <button onClick={() => onClickingEdit(crate.id)}>Edit Crate</button>
    </>
  );
}

CrateDetail.propTypes = {
  crate: PropTypes.object,
  onClickingSell: PropTypes.func,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
}

export default CrateDetail;