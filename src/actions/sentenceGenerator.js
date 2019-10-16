// @flow
import Question from '../types';

export const UPDATE_QUESTION_VALUE = 'UPDATE_QUESTION_VALUE';
export const NEXT_STEP = 'NEXT_STEP';
export const START_AGAIN = 'START_AGAIN';
export const UPDATE_RESULT = 'UPDATE_RESULT';
export const UPDATE_QUESTIONS = 'UPDATE_QUESTIONS';

export const updateQuestionValue = (questionName: string, value: string) => {
  return {
    type: UPDATE_QUESTION_VALUE,
    payload: {
      name: questionName,
      value
    }
  };
};

export const updateQuestions = (question: Question) => {
  return {
    type: UPDATE_QUESTIONS,
    payload: { ...question, value: ''}
  };
};

export const updateResult = () => {
  return (dispatch: Function, getState: Function) => {
    const questions = getState().sentenceGenerator.get('questions');
    const sortedValues = questions.sortBy(question => question.position).map(question => question.value).toList();
    const result = sortedValues.reduce((accumulator, question) => {        
      return accumulator + ' ' + question;
    });
    
    return dispatch({
      type: UPDATE_RESULT,
      payload: { value: result }
    });
  };
};

export const nextStep = (nextStep: number) => {
  return (dispatch: Function) => {
    dispatch({
      type: NEXT_STEP,
      payload: {
        nextStep
      }
    });
    
    return dispatch(updateResult());
  };
};

export const startAgain = () => {
  return (dispatch: Function, getState: Function) => {
    const questions = getState().sentenceGenerator.get('questions');

    questions.map((question) => dispatch(updateQuestionValue(question.name, '')));

    return dispatch({
      type: START_AGAIN
    });
  };
};