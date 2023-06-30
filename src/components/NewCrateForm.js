import React from "react";
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import ReusableForm from "./ReusableForm";

function NewCrateForm(props) {

  function handleNewCrateFormSubmission(e) {
    e.preventDefault();
    props.onNewCrateCreation({
      name: e.target.name.value,
      mainIngredient: e.target.mainIngredient.value,
      iceCreamPairing: e.target.iceCreamPairing.value,
      price: e.target.price.value,
      numberOfPies: 130,
      id: v4()
    });
  }


  return (
    <>
      <h2>Add New Pie Crate to Inventory</h2>
      <ReusableForm
        formSubmissionHandler={handleNewCrateFormSubmission}
        buttonText='Add New Pie Crate' />
    </>
  );
}

NewCrateForm.propTypes = {
  onNewCrateCreation: PropTypes.func
}

export default NewCrateForm;