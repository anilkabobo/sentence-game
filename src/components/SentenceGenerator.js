import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateAutocompleteData } from '../actions/autocomplete';

class SentenceGenerator extends Component {
  static propTypes = {
    autocompleteData: PropTypes.array,
    updateAutocompleteData: PropTypes.func
  }

  constructor(props) {
    super(props);

    props.updateAutocompleteData();
  }

  render() {
    const { autocompleteData } = this.props;

    return (
      <div className='app'>
        <p>1. Passing whole autocomplete data to component</p>
        <AutocompleteInput data={autocompleteData} displayProp='name' idProp='numericCode' />

        <p>2. Passing url for dynamic autocomplete data</p>
        <AutocompleteInput url='https://restcountries.eu/rest/v2/name/' displayProp='name' idProp='numericCode' />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  autocompleteData: state.autocomplete.data
});

const mapDispatchToProps = (dispatch) => ({
  updateAutocompleteData: () => dispatch(updateAutocompleteData())
});

export default connect(mapStateToProps, mapDispatchToProps)(SentenceGenerator);
