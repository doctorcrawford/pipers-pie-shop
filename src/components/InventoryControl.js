import React from "react";
import Inventory from "./Inventory";
import NewInventoryItemForm from "./NewCrateForm";
import NewCrateForm from "./NewCrateForm";
import Crate from "./Crate";
import CrateDetail from "./CrateDetail";

class InventoryControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      selectedCrate: null,
      mainInventory: []
    }
  }

  handleClick = () => {
    if (this.setState.selectedCrate != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedCrate: null
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleClickPrevious = () => {
    this.setState(prevState => ({
      crateVisibleOnPage: prevState.crateVisibleOnPage - 1
    }));
  }

  handleClickNext = () => {
    this.setState(prevState => ({
      crateVisibleOnPage: prevState.crateVisibleOnPage + 1
    }));
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

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.selectedCrate != null) {
      currentlyVisibleState = <CrateDetail crate={this.state.selectedCrate} />;
      buttonText = 'Return to Inventory';
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewCrateForm onNewCrateCreation={this.handleAddingNewCrateToInventory} />;
      buttonText = 'Return to Inventory';
    } else if (this.state.mainInventory[0] === undefined) {
      currentlyVisibleState = <Inventory inventory={this.state.mainInventory} />;
      buttonText = 'Add Crate';
    } else if (this.state.mainInventory) {
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