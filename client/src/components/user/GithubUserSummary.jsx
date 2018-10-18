import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import ThreePieChart from './ThreeFieldPieChart';
import RadarChart from './RadarChart';

class GithubUserSummary extends React.Component {
  constructor() {
    super();
    this.state = {
      threePieData: {},
      radarData: {},
    };
  }

  componentDidMount() {
    axios.get('/api/gateway/github/user/andrew')
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    // const { score, data } = this.props;
    return (
      <div className="gitviews">
        <div>
          hello
        </div>
        {/* <div>
          <ThreePieChart score={score} />
        </div>
        <div>
          <RadarChart data={data} />
        </div> */}
      </div>
    );
  }
}

// GithubUserSummary.propTypes = {
//   score: PropTypes.shape.isRequired,
//   data: PropTypes.shape.isRequired,
// };

export default GithubUserSummary;
