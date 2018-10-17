import React from 'react';
import PropTypes from 'prop-types';

const ErrorComponent = ({ error }) => (
  <div>
    <h1> Error</h1>
    <p>{error.message}</p>
  </div>
);

ErrorComponent.propTypes = {
  error: PropTypes.object,
};

ErrorComponent.defaultProps = {
  error: {},
};

export default ErrorComponent;