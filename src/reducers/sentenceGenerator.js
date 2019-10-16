// @flow
import { State } from '../types';
import { Record, Map, RecordInstance } from 'immutable';
import { UPDATE_QUESTION_VALUE, NEXT_STEP, START_AGAIN, 
  UPDATE_RESULT, UPDATE_QUESTIONS } from '../actions/sentenceGenerator';

export const InitialState = Record({
  questions: new Map(),
  step: 0,
  result: ''
});

type StateType = RecordInstance<State>

const initialState: StateType = new InitialState();

export default function sentenceGenerator (state: StateType = initialState, action: Function): StateType {
  if (!(state instanceof InitialState)) return initialState.mergeDeep(state);
    
  switch (action.type) {
    case UPDATE_QUESTION_VALUE:
      return state.setIn(['questions', action.payload.name, 'value'], action.payload.value);
    case UPDATE_QUESTIONS:
      return state.setIn(['questions', action.payload.name], action.payload);
    case NEXT_STEP:
      return state.set('step', action.payload.nextStep);
    case START_AGAIN:
      return state.set('step', 0).set('result', '');
    case UPDATE_RESULT: 
      return state.set('result', action.payload.value);
    default:
      return state;
  }
}
