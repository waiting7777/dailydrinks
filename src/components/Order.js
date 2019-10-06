import React from 'react';
import { connect } from 'react-redux';
import { removeOrder, editOrder } from '../actions';

import './Order.scss';

class Order extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      onEdit: false,
      name: this.props.order.name,
      price: this.props.order.price,
      notes: this.props.order.notes
    }
  }
  
  handleRemove() {
    // eslint-disable-next-line no-restricted-globals
    if (confirm('Are you sure to Delete?')) {
      this.props.removeOrder(this.props.order.id)
    }
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

  handleEdit(start) {
    this.setState({
      onEdit: start,
      name: this.props.order.name,
      price: this.props.order.price,
      notes: this.props.order.notes
    })
  }

  submitEdit() {
    if (this.state.name.length === 0 || this.state.price.length === 0) {
      alert(`Please fill the form`)
      return
    }

    this.props.editOrder({
      id: this.props.order.id,
      name: this.state.name,
      price: this.state.price,
      notes: this.state.notes,
    })

    this.setState({
      onEdit: false
    })
  }

  renderButton() {
    if (this.state.onEdit) {
      return (
        <div>
          <div className="order-save" onClick={() => this.submitEdit()}>
            <button className="btn btn-primary btn-sm">
              <i className="fas fa-save"></i>Save
            </button>
          </div>
          <div className="order-cancel" onClick={() => this.handleEdit(false)}>
            <button className="btn btn-primary btn-sm">
              <i className="fas fa-ban"></i>Cancel
            </button>
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <div className="order-trash" onClick={() => this.handleRemove()}>
            <button className="btn btn-primary btn-sm">
              <i className="fas fa-times"></i>Delete
            </button>
          </div>
          <div className="order-edit" onClick={() => this.handleEdit(true)}>
            <button className="btn btn-primary btn-sm">
              <i className="fas fa-edit"></i>Edit
            </button>
          </div>
        </div>
      )
    }
  }

  render() {
    const { order } = this.props
    return (
      <div className="order card">
        <div className="card-header"><i className="fas fa-scroll"></i>Order</div>
        <div className="card-body">
          <div className="order-column">
            <div className="left">Name:</div>
            {
              (this.state.onEdit)
              ? <div className="right"><input type="text" value={this.state.name} onChange={e => this.updateName(e.target.value)} /></div>
              : <div className="right">{order.name}</div>
            }
          </div>
          <div className="order-column">
            <div className="left">Price:</div>
            {
              (this.state.onEdit)
              ? <div className="right"><input type="text" value={this.state.price} onChange={e => this.updatePrice(e.target.value)} /></div>
              : <div className="right">{order.price}</div>
            }
          </div>
          <div className="order-column">
            <div className="left">Notes:</div>
            {
              (this.state.onEdit)
              ? <div className="right"><input type="text" value={this.state.notes} onChange={e => this.updateNotes(e.target.value)} /></div>
              : <div className="right">{order.notes}</div>
            }
          </div>
          {this.renderButton()}
        </div>
      </div>
    )
  }
}

export default connect(null, { removeOrder, editOrder })(Order)