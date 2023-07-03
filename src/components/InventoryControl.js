import React from "react";
import { connect } from 'react-redux';
import Inventory from "./Inventory";
import NewCrateForm from "./NewCrateForm";
import CrateDetail from "./CrateDetail";
import EditCrateForm from './EditCrateForm';
import PropTypes from 'prop-types';

class InventoryControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      selectedCrate: null,
      editing: false
    }
  }

  handleClick = () => {
    if (this.state.selectedCrate != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedCrate: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleAddingNewCrateToInventory = (newCrate) => {
    const { dispatch } = this.props;
    const { id, name, mainIngredient, iceCreamPairing, price, numberOfPies } = newCrate;
    const action = {
      type: 'ADD_CRATE',
      id: id,
      name: name,
      mainIngredient: mainIngredient,
      iceCreamPairing: iceCreamPairing,
      price: price,
      numberOfPies: numberOfPies
    }
    dispatch(action);
    this.setState({ formVisibleOnPage: false });
  }

  handleChangingSelectedCrate = (id) => {
    const selectedCrate = this.props.mainInventory[id];
    this.setState({ selectedCrate: selectedCrate });
  }

  handleSell = (selectedId) => {
    const { dispatch } = this.props;
    const selectedCrate = this.props.mainInventory[selectedId];
    const { id, name, mainIngredient, iceCreamPairing, price, numberOfPies } = selectedCrate;
    const soldCrate = { ...selectedCrate, numberOfPies: numberOfPies - 1 };
    const action = {
      type: 'ADD_CRATE',
      id: id,
      name: name,
      mainIngredient: mainIngredient,
      iceCreamPairing: iceCreamPairing,
      price: price,
      numberOfPies: numberOfPies - 1
    }
    if (numberOfPies > 0) {
      dispatch(action);
      this.setState({ selectedCrate: soldCrate });
    }
  }

  handleDeletingCrate = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: 'DELETE_CRATE',
      id: id
    }
    dispatch(action);
    this.setState({ selectedCrate: null });
  }

  handleEditClick = () => {
    this.setState({ editing: true });
  }

  handleEditingCrateInInventory = (crateToEdit) => {
    const { dispatch } = this.props;
    const { id, name, mainIngredient, iceCreamPairing, price, numberOfPies } = crateToEdit;
    const action = {
      type: 'ADD_CRATE',
      id: id,
      name: name,
      mainIngredient: mainIngredient,
      iceCreamPairing: iceCreamPairing,
      price: price,
      numberOfPies: numberOfPies
    }
    dispatch(action);
    this.setState({
      editing: false,
      selectedCrate: null
    });
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.editing) {
      currentlyVisibleState = <EditCrateForm crate={this.state.selectedCrate} onEditCrate={this.handleEditingCrateInInventory} />
      buttonText = 'Return to Inventory';
    } else if (this.state.selectedCrate != null) {
      currentlyVisibleState = <CrateDetail crate={this.state.selectedCrate} onClickingSell={this.handleSell} onClickingDelete={this.handleDeletingCrate} onClickingEdit={this.handleEditClick} />;
      buttonText = 'Return to Inventory';
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewCrateForm onNewCrateCreation={this.handleAddingNewCrateToInventory} />;
      buttonText = 'Return to Inventory';
    } else {
      currentlyVisibleState = <Inventory inventory={this.props.mainInventory} onCrateSelection={this.handleChangingSelectedCrate} />;
      buttonText = 'Add Crate';
    }
    return (
      <>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </>
    );
  }
}

InventoryControl.propTypes = {
  mainInventory: PropTypes.object
};

const mapStateToProps = state => {
  return {
    mainInventory: state
  }
}

InventoryControl = connect(mapStateToProps)(InventoryControl);

export default InventoryControl;