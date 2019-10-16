// @flow
import React, { Component } from 'react';
import Step from './Step.react';
import Question from '../types';
import { connect } from 'react-redux';
import { updateQuestions, startAgain } from '../actions/sentenceGenerator';

import '../styles/SentenceGenerator.css';

type Props = {
  questions: Array<Question>,
  activeStep: number,
  updateQuestions: Function,
  startAgain: Function,
  result: string
}

class SentenceGenerator extends Component<Props> {

  constructor(props) {
    super(props);

    props.questions.map((question) => props.updateQuestions(question));
  }

  renderQuestion = (question: Question, index: number) => {
    const {activeStep} = this.props;
    const isActive = activeStep === index;

    return (
      <Step 
        question={question}
        isActive={isActive}
        key={question.name}
        index={index}
      />
    );
  }

  render() {
    const {questions, activeStep, result, startAgain} = this.props;

    if (!questions.length) {
      return (
        <div>Something went wrong... </div>
      );
    }

    return (
      <div>
        {questions.map(this.renderQuestion)}

        <Step isActive={activeStep === questions.length}>
          <div className="result"> {result} !!! </div>
          <button className="button button--primary" onClick={startAgain}>Start again</button>
        </Step>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  activeStep: state.sentenceGenerator.step, 
  result: state.sentenceGenerator.result
});

const mapDispatchToProps = (dispatch) => ({
  updateQuestions: (question) => dispatch(updateQuestions(question)),
  startAgain: () => dispatch(startAgain())
});

export default connect(mapStateToProps, mapDispatchToProps)(SentenceGenerator);
