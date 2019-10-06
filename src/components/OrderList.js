import React from 'react';
import { connect } from 'react-redux';

import Order from './Order';

import './OrderList.scss';

const OrderList = ({ orders }) => {
  return (
    <div className="order-list">
    {orders && orders.length
      ? orders.map((order, index) => {
        return <Order order={order} key={order.id} />
      })
      : "No Orders!"
    }  </div>
  )
}

const mapStateToProps = state => {
  return { orders: state.orders };
}

export default connect(mapStateToProps)(OrderList)