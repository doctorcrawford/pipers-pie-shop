import * as c from './../actions/ActionTypes';

export const deleteCrate = id => ({
  type: c.DELETE_CRATE,
  id
})

export const addCrate = (crate) => {
  const { name, mainIngredient, iceCreamPairing, price, numberOfPies, id, formattedWaitTime, timeOpen } = crate;
  return {
    type: c.ADD_CRATE,
    name,
    mainIngredient,
    iceCreamPairing,
    price,
    numberOfPies,
    id,
    formattedWaitTime,
    timeOpen,
  }
}

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
})

export const updateTime = (id, formattedWaitTime) => ({
  type: c.UPDATE_TIME,
  id,
  formattedWaitTime
})