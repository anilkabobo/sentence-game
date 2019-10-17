// @flow
import * as React from 'react';
import Question from '../types';
import TextField from './form/TextField.react';
import { connect } from 'react-redux';
import { updateQuestionValue, nextStep } from '../actions/sentenceGenerator';

type Props = {
  isActive: boolean,
  nextStep: Function,
  prevStep: Function,
  question: Question,
  questionsValues: Object,
  updateQuestionValue: Function,
  children: React.Node,
  index: number
};

class Step extends React.Component<Props> {

  input: ?HTMLInputElement

  constructor(props) {
    super(props);

    this.input = null;
  }

  componentDidUpdate() {
    if (this.input) {
      if (this.props.isActive) {
        this.input.focus();
      } else (
        this.input.blur()
      );
    }
  }

  render() {
    const {question, isActive, updateQuestionValue, questionsValues, nextStep, prevStep, children, index} = this.props;
    const value: string = question ? questionsValues.getIn([question.name, 'value']) : '';

    return (
      <div className={`step ${isActive ? 'step--active' : ''}`}>
        {question ? 
          <div>
            <TextField 
              value={value || ''}
              name={question.name}
              label={question.label}
              onChange={(value) => updateQuestionValue(question.name, value)}
              onSubmit={() => nextStep(index)}
              placeholder={question.placeholder}
              inputRef={(el) => this.input = el}
            />
            <div className="button__container">
              {index !== 0 && 
              <button className="button button--secondary" onClick={() => prevStep(index)}>Back</button>
              }
              <button className="button button--primary" onClick={() => nextStep(index)}>Next</button>
            </div>
          </div>
          : 
          <div>
            {children}
          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  questionsValues: state.sentenceGenerator.questions
});

const mapDispatchToProps = (dispatch) => ({
  updateQuestionValue: (name, value) => dispatch(updateQuestionValue(name, value)),
  nextStep: (index) => dispatch(nextStep(index + 1)),
  prevStep: (index) => dispatch(nextStep(index - 1))
});

export default connect(mapStateToProps, mapDispatchToProps)(Step);
