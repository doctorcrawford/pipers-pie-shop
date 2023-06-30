import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from 'prop-types';

function EditCrateForm(props) {
  const { crate } = props;

  function handleEditCrateFormSubmission(e) {
    e.preventDefault();
    props.onEditCrate({ name: e.target.name.value, mainIngredient: e.target.mainIngredient.value, iceCreamPairing: e.target.iceCreamPairing.value, price: e.target.price.value, numberOfPies: crate.numberOfPies, id: crate.id });
  }
  return (
    <>
    <h2>Update Crate</h2>
      <ReusableForm
        formSubmissionHandler={handleEditCrateFormSubmission}
        buttonText="Update Crate" />
    </>
  );
}

EditCrateForm.propTypes = {
  crate: PropTypes.object,
  onEditCrate: PropTypes.func
}

export default EditCrateForm;