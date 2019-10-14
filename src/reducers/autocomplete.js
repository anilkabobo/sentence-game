import { Record } from 'immutable';
import { UPDATE_AUTOCOMPLETE_DATA, FILTER_DATA, REQUEST_FILTERED_DATA } from '../actions/autocomplete';

export const InitialState = Record({
  data: [],
  filteredData: []
});

const initialState = new InitialState();

export default function autocomplete (state = initialState, action) {
  if (!(state instanceof InitialState)) return initialState.mergeDeep(state);
  switch (action.type) {
  case UPDATE_AUTOCOMPLETE_DATA:
    return state.set('data', action.payload);
  case FILTER_DATA:
    return state.set('filteredData', action.payload);
  case REQUEST_FILTERED_DATA:
    return state.set('filteredData', action.payload);
  default:
    return state;
  }
}
