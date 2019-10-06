import { ADD_ORDER, REMOVE_ORDER, EDIT_ORDER } from '../actions/actionTypes';

const initialState = [
  {
    id: 0,
    name: '綠茶',
    price: 30,
    notes: '無糖少冰'
  },
  {
    id: 1,
    name: '珍珠奶茶',
    price: 40,
    notes: '微糖少冰'
  }
];

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_ORDER: {
      return [
        ...state,
        {
          id: state.reduce((maxId, order) => Math.max(order.id, maxId), -1) + 1,
          name: action.payload.name,
          price: action.payload.price,
          notes: action.payload.notes
        }
      ]
    }
    case REMOVE_ORDER: {
      const id = action.payload;
      return state.filter(o => o.id !== id)
    }
    case EDIT_ORDER: {
      return state.map(order =>
        order.id === action.payload.id ?
          { ...order,
            name: action.payload.name,
            price: action.payload.price,
            notes: action.payload.notes
          } :
          order
      )
    }
    default:
      return state;
  }
}