import React from 'react';

import OrderList from './OrderList';
import AddOrder from './AddOrder';

import './App.scss'

function App() {
  return (
    <div className="app container">
      <h1>Daily Drink</h1>
      <OrderList />
      <AddOrder />
    </div>
  );
}

export default App;
