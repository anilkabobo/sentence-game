export const UPDATE_AUTOCOMPLETE_DATA = 'UPDATE_AUTOCOMPLETE_DATA';
export const FILTER_DATA = 'FILTER_DATA';
export const REQUEST_FILTERED_DATA = 'REQUEST_FILTERED_DATA';

export const updateAutocompleteData = () => {
  return (dispatch) => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(
        function (response) {
          if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' + // eslint-disable-line no-console
          response.status);
            return;
          }

          response.json().then(function (data) {
            dispatch({
              type: UPDATE_AUTOCOMPLETE_DATA,
              payload: data
            });
          });
        }
      )
      .catch(function (err) {
        console.error('Fetch Error :-S', err); // eslint-disable-line no-console
      });
  };
};

export const filterData = ({ data, value, displayProp }) => {
  const result = value ? data.filter((obj) => {
    return obj[displayProp].toLowerCase().includes(value.toLowerCase());
  }) : [];

  return {
    type: FILTER_DATA,
    payload: result.slice(0, 10)
  };
};

export const requestResults = (url, value) => {
  function action(result) {
    return {
      type: REQUEST_FILTERED_DATA,
      payload: result
    };
  }

  if (!value) {
    return action([]);
  }

  return (dispatch) => {
    fetch(`${url.replace(/\/$/, '')}/${value}`)
      .then(
        function (response) {
          if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' + // eslint-disable-line no-console
          response.status);
            return dispatch(action([]));
          }

          response.json().then(function (data) {
            dispatch({
              type: REQUEST_FILTERED_DATA,
              payload: data.slice(0, 10)
            });
          });
        }
      )
      .catch(function (err) {
        console.error('Fetch Error :-S', err); // eslint-disable-line no-console
        return dispatch(action([]));
      });
  };
};
