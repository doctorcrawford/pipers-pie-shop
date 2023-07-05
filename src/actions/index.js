export const deleteCrate = id => ({
  type: 'DELETE_CRATE',
  id
})

export const addCrate = (crate) => {
  const { name, mainIngredient, iceCreamPairing, price, numberOfPies, id } = crate;
  return {
    type: 'ADD_CRATE',
    name,
    mainIngredient,
    iceCreamPairing,
    price,
    numberOfPies,
    id
  }
}