import React from "react";
import PropTypes from 'prop-types';

function CrateDetail(props) {
  const { crate } = props;

  return (
    <>
      <h2>Crate Detail</h2>
      <h4>{crate.name}</h4>
      <p>{crate.mainIngredient}</p>
      <p>{crate.iceCreamPairing}</p>
      <p>{crate.price}</p>
      <p>{crate.numberOfPies}</p>
    </>
  );
}

CrateDetail.propTypes = {
  crate: PropTypes.object
}

export default CrateDetail;