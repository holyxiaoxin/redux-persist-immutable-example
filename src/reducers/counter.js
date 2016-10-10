import Immutable from 'immutable';

import { ADD_COUNT } from '../actions/counter';

const initialState = Immutable.fromJS({
  count: 0,
});

export default function counter(state = initialState, action = {}) {
  switch (action.type) {
    case ADD_COUNT: {
      return state.set('count', state.get('count') + 1);
    }
    default:
      return state;
  }
}
