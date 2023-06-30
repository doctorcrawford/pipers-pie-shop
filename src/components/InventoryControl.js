import React from "react";
import Inventory from "./Inventory";
import NewInventoryItemForm from "./NewCrateForm";
import NewCrateForm from "./NewCrateForm";

class InventoryControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      inventoryItemVisibleOnPage: 0,
      mainInventory: []
    }
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  handleAddingNewCrateToInventory = (newCrate) => {
    const newMainInventory = this.state.mainInventory.concat(newCrate);
    this.setState({
      mainInventory: newMainInventory,
      formVisibleOnPage: false
    })
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewCrateForm onNewCrateCreation={this.handleAddingNewCrateToInventory} />;
      buttonText = 'Return to Inventory';
    } else {
      currentlyVisibleState = <Inventory inventory={this.state.mainInventory} />;
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