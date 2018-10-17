import React from 'react';
import ThreePieChart from './ThreeFieldPieChart';

class GithubUserSummary extends React.Component {
  constructor() {
    super();
    this.state = {
      something: '',
    };
  }

  // NEED TO PASS DOWN THE REAL DATA ONCE WE ARE GETTING IT 
  render() {
    return (
      <div>
        <ThreePieChart score={this.props.score} /> 
      </div>
    );
  }
}

export default GithubUserSummary;
