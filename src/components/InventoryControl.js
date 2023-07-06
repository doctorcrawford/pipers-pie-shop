import React from "react";
import { connect } from 'react-redux';
import Inventory from "./Inventory";
import NewCrateForm from "./NewCrateForm";
import CrateDetail from "./CrateDetail";
import EditCrateForm from './EditCrateForm';
import PropTypes from 'prop-types';
import * as a from './../actions/index';
import * as c from './../actions/ActionTypes'
import { formatDistanceToNow } from "date-fns";


class InventoryControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedCrate: null,
      editing: false
    }
  }

  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(() =>
      this.updateCrateElapsedWaitTime(),
      60000
    )
  }

  componentWillUnmount() {
    console.log('component unmounted!')
    clearInterval(this.waitTimeUpdateTimer)
  }

  updateCrateElapsedWaitTime = () => {
    const { dispatch } = this.props
    Object.values(this.props.mainInventory).forEach(crate => {
      const newFormattedWaitTime = formatDistanceToNow(crate.timeOpen, {
        addSuffix: true
      })
      const action = a.updateTime(crate.id, newFormattedWaitTime)
      dispatch(action)
    })
  }

  handleClick = () => {
    if (this.state.selectedCrate != null) {
      this.setState({
        // formVisibleOnPage: false,
        selectedCrate: null,
        editing: false
      });
    } else {
      // this.setState(prevState => ({
      //   formVisibleOnPage: !prevState.formVisibleOnPage
      // }));
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action);
    }
  }

  handleAddingNewCrateToInventory = (newCrate) => {
    const { dispatch } = this.props;
    const action = a.addCrate(newCrate);

    dispatch(action);
    // this.setState({ formVisibleOnPage: false });
    const action2 = a.toggleForm();
    dispatch(action2);
  }

  handleChangingSelectedCrate = (id) => {
    const selectedCrate = this.props.mainInventory[id];
    this.setState({ selectedCrate: selectedCrate });
  }

  handleSell = (selectedId) => {
    const { dispatch } = this.props;
    const selectedCrate = this.props.mainInventory[selectedId];
    const { numberOfPies } = selectedCrate;
    const soldCrate = { ...selectedCrate, numberOfPies: numberOfPies - 1 };
    const action = a.addCrate(soldCrate);

    if (numberOfPies > 0) {
      dispatch(action);
      this.setState({ selectedCrate: soldCrate });
    }
  }

  handleDeletingCrate = (id) => {
    const { dispatch } = this.props;
    const action = a.deleteCrate(id)
    dispatch(action);
    this.setState({ selectedCrate: null });
  }

  handleEditClick = () => {
    this.setState({ editing: true });
  }

  handleEditingCrateInInventory = (crateToEdit) => {
    const { dispatch } = this.props;
    // const { id, name, mainIngredient, iceCreamPairing, price, numberOfPies } = crateToEdit;
    const action = a.addCrate(crateToEdit);
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
    } else if (this.props.formVisibleOnPage) {
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
  mainInventory: PropTypes.object,
  formVisibleOnPage: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    mainInventory: state.mainInventory,
    formVisibleOnPage: state.formVisibleOnPage
  }
}

InventoryControl = connect(mapStateToProps)(InventoryControl);

export default InventoryControl;