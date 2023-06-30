import React from "react";
import Inventory from "./Inventory";
import NewCrateForm from "./NewCrateForm";
import CrateDetail from "./CrateDetail";
import EditCrateForm from './EditCrateForm';

class InventoryControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      selectedCrate: null,
      mainInventory: [],
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
    const newMainInventory = this.state.mainInventory.concat(newCrate);
    this.setState({
      mainInventory: newMainInventory,
      formVisibleOnPage: false
    });
  }

  handleChangingSelectedCrate = (id) => {
    const selectedCrate = this.state.mainInventory.filter(crate => crate.id === id)[0];
    this.setState({ selectedCrate: selectedCrate });
  }

  handleSell = () => {
    if (this.state.selectedCrate.numberOfPies > 0) {
      const soldPie = this.state.mainInventory
        .filter(crate => crate.id === this.state.selectedCrate.id)[0];
      if (soldPie) {
        soldPie.numberOfPies--;
      }
      const editedMainInventory = this.state.mainInventory
        .filter(crate => crate.id !== this.state.selectedCrate.id)
        .concat(soldPie);

      this.setState({
        mainInventory: editedMainInventory
      });
    }
  }

  handleDeletingCrate = (id) => {
    const newMainInventory = this.state.mainInventory.filter(crate => crate.id !== id);
    this.setState({
      mainInventory: newMainInventory,
      selectedCrate: null
    });
  }

  handleEditClick = () => {
    this.setState({ editing: true });
  }

  handleEditingCrateInInventory = (crateToEdit) => {
    const editedMainInventory = this.state.mainInventory
      .filter(crate => crate.id !== this.state.selectedCrate.id)
      .concat(crateToEdit);
    this.setState({
      mainInventory: editedMainInventory,
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
      currentlyVisibleState = <Inventory inventory={this.state.mainInventory} onCrateSelection={this.handleChangingSelectedCrate} />;
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

export default InventoryControl;