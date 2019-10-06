import React from "react";
import { connect } from "react-redux";
import { addOrder } from "../actions";

import './AddOrder.scss'

class AddOrder extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', price: '', notes: '' };

    this.handleAddOrder = this.handleAddOrder.bind(this)
  }

  updateName = name => {
    this.setState({ name });
  };

  updatePrice = price => {
    this.setState({ price });
  };

  updateNotes = notes => {
    this.setState({ notes });
  };

  handleAddOrder() {
    if (this.state.name.length === 0 || this.state.price.length === 0) {
      alert(`Please fill the form`)
      return
    }
    this.props.addOrder({
      name: this.state.name,
      price: this.state.price,
      notes: this.state.notes
    })
    this.setState({
      name: '',
      price: '',
      notes: ''
    })
  }

  render() {
    return (
      <div className="add-order card">
        <div className="card-header"><i className="fas fa-wine-bottle"></i>Add New Order</div>
        <div className="card-body">
          <div className="add-order-column">
            <div>Name: </div>
            <div><input type="text" value={this.state.name} onChange={e => this.updateName(e.target.value)} /></div>
          </div>
          <div className="add-order-column">
            <div>Price: </div>
            <div><input type="text" value={this.state.price} onChange={e => this.updatePrice(e.target.value)} /></div>
          </div>
          <div className="add-order-column">
            <div>Notes(Optional): </div>
            <div><input type="text" value={this.state.notes} onChange={e => this.updateNotes(e.target.value)} /></div>
          </div>
        </div>
        <div className="add-order-save" onClick={() => this.handleAddOrder()}>
          <button className="btn btn-primary btn-sm">
            <i className="fas fa-save"></i>Save
          </button>
        </div>
      </div>
    );
  }
}

export default connect(null, { addOrder })(AddOrder);
