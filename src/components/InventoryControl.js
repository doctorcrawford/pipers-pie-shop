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

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewCrateForm />;
      buttonText = 'Return to Inventory';
    } else {
      currentlyVisibleState = <Inventory />;
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