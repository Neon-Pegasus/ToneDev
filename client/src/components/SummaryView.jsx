import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
// import { response } from 'spdy';
// import PieChart from './PieChart';


class Summary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      sentiment: 'neutral',
    };
    this.getAnalysis = this.getAnalysis.bind(this);
  }

  componentDidMount() {
    const { orgName } = this.props;
    this.getAnalysis(orgName);
  }

  getAnalysis(orgName) {
    axios.get('/api/gateway/github/orgdata', {
      orgName,
    })
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  render() {
    const { orgName } = this.props;
    const { sentiment, score } = this.state;
    return (
      <div>
        <h1>Sentiment Analysis Summary</h1>
        <h2>
Overall Sentiment
          {' '}
          {orgName}
        </h2>
        <p>{sentiment}</p>

        <h2>Score</h2>
        <p>
          {score}
        </p>

        {/* <PieChart score={Math.round(score * 100)} sentiment={sentiment} /> */}

      </div>
    );
  }
}

Summary.propTypes = {
  orgName: PropTypes.string.isRequired,
};
export default Summary;
