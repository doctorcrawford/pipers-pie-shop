import React from "react";
import Inventory from "./Inventory";
import NewInventoryItemForm from "./NewCrateForm";

class InventoryControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      inventoryItemVisibleOnPage: 0,
      mainInventory: []
    }
  }

  render() {
    return (
      <>
        <Inventory />
      </>
    );
  }
}

export default InventoryControl;