import React from "react";
import Inventory from "./Inventory";
import NewInventoryItemForm from "./NewCrateForm";
import NewCrateForm from "./NewCrateForm";
import Crate from "./Crate";

class InventoryControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      crateVisibleOnPage: 0,
      mainInventory: []
    }
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
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
    })
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    let previousCrateButton = null;
    let nextCrateButton = null;
    const previousCrate = this.state.mainInventory[this.state.crateVisibleOnPage - 1];
    const nextCrate = this.state.mainInventory[this.state.crateVisibleOnPage + 1];
    const selectedCrate = this.state.mainInventory[this.state.crateVisibleOnPage];

    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewCrateForm onNewCrateCreation={this.handleAddingNewCrateToInventory} />;
      buttonText = 'Return to Inventory';
    } else if (this.state.mainInventory[0] === undefined) {
      currentlyVisibleState = <Crate name='No pie crates have been added to the inventory yet' />;
      buttonText = 'Add Crate';
    } else if (this.state.mainInventory.length === 1) {
      currentlyVisibleState = <Crate name={selectedCrate.name} />;
      buttonText = 'Add Crate';
    } else if (this.state.crateVisibleOnPage < 1) {
      currentlyVisibleState = <Crate name={selectedCrate.name} />;
      nextCrateButton = <button onClick={this.handleClickNext}>Next Crate &#8594;</button>
      buttonText = 'Add Crate';
    } else if (this.state.crateVisibleOnPage > this.state.mainInventory.length - 1) {
      currentlyVisibleState = <Crate name={selectedCrate.name} />;
      previousCrateButton = <button onClick={this.handleClickPrevious}>&#8592; Previous Crate</button>;
      nextCrateButton = <button onClick={this.handleClickNext}>Next Crate &#8594;</button>;
      buttonText = 'Add Crate';
    } else {
      currentlyVisibleState = <Crate name={selectedCrate.name} />;
      previousCrateButton = <button onClick={this.handleClickPrevious}>&#8592; Previous Crate</button>;
      buttonText = 'Add Crate';
      // } else if (this.state.mainInventory[0] === undefined) {
      //   currentlyVisibleState = <Inventory inventory={this.state.mainInventory} />;
      //   buttonText = 'Add Crate';
      // } else if (this.state.mainInventory) {
      //   currentlyVisibleState = <Inventory inventory={this.state.mainInventory} />;
      //   buttonText = 'Add Crate';
    }
    return (
      <>
        {currentlyVisibleState}
        {previousCrateButton}
        {nextCrateButton}
        <button onClick={this.handleClick}>{buttonText}</button>
      </>
    );
  }
}

export default InventoryControl;