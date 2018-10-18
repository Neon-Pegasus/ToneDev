import React from 'react';
import PropTypes from 'prop-types';

const Output = (props) => {
  console.log(props);
  const { score, sentiment } = props;
  return (
    <div>
      <h1>Analysis Results</h1>
      <p>
        Score:
        {' '}
        {score}
      </p>
      <p>
        Sentiment:
        {' '}
        {sentiment}
      </p>
    </div>
  );
};

Output.propTypes = {
  sentiment: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};

export default Output;
