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
    console.log(this.setState)
    if (this.state.selectedCrate != null) {
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

  handleAddingNewCrateToInventory = (newCrate) => {
    const newMainInventory = this.state.mainInventory.concat(newCrate);
    console.log(newCrate.id);
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
      const editedmainInventory = this.state.mainInventory
        .filter(crate => crate.id !== this.state.selectedCrate.id)
        .concat(soldPie);
      
      this.setState({
        ...this.state,
        mainInventory: editedmainInventory
      });
    }
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.selectedCrate != null) {
      currentlyVisibleState = <CrateDetail crate={this.state.selectedCrate} onClickingSell={this.handleSell} />;
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