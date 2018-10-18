import React from 'react';
import PropTypes from 'prop-types';

const Output = (props) => {
  console.log(props);
  const { score, sentiment, keywords } = props;
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
      <div>
        {keywords.length !== 0 ? keywords.map((keyword) => {
          console.log(keyword);
          return (
            <div key={keyword}>
              <p>
                Keyword:
                {' '}
                {keyword.text}
                {'  '}
                Relevance:
                {' '}
                {keyword.relevance}
              </p>
            </div>
          );
        }) : null}
      </div>
    </div>
  );
};

Output.propTypes = {
  sentiment: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  keywords: PropTypes.instanceOf(Array).isRequired,
};

export default Output;
