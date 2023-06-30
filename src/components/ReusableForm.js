import React from 'react';
import PropTypes from 'prop-types';

function ReusableForm(props) {
  return (
    <>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          placeholder='Pie Name' />
        <input
          type='text'
          name='mainIngredient'
          placeholder="Main Ingredient" />
        <input
          type='text'
          name='iceCreamPairing'
          placeholder="Ice Cream Pairing" />
        <input
          type='number'
          step='0.01'
          min='0.00'
          name='price'
          placeholder="Price" />
        <button type="submit">{props.buttonText}</button>
      </form>
    </>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;