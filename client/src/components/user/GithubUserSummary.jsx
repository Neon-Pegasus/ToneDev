import React from 'react';
import PropTypes from 'prop-types';
import ThreePieChart from './ThreeFieldPieChart';
import RadarChart from './RadarChart';

class GithubUserSummary extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  // NEED TO PASS DOWN THE REAL DATA ONCE WE ARE GETTING IT
  render() {
    const { score, data } = this.props;
    return (
      <div className="gitviews">
        <div>
          <ThreePieChart score={score} />
        </div>
        <div>
          <RadarChart data={data} />
        </div>
      </div>
    );
  }
}

GithubUserSummary.propTypes = {
  score: PropTypes.shape.isRequired,
  data: PropTypes.shape.isRequired,
};

export default GithubUserSummary;
