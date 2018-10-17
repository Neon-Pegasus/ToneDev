import React from 'react';
import axios from 'axios';
import RadarChart from './RadarChart';
import ThreePieChart from './ThreeFieldPieChart';
import GithubUserSummary from './GithubUserSummary';

class User extends React.Component {
  constructor() {
    super();
    this.state = {
      SOUsername: '',
      pieData: {},
      radarData: {},
      viewCharts: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitSOname = this.submitSOname.bind(this);
  }

  componentDidMount() {
    // function with axios call for endpoint
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  submitSOname() {
    const { SOUsername } = this.state;
    axios.get('/api/user/so', {
      params: {
        username: SOUsername,
      },
    })
      .then((res) => {
        const responseData = res.data;
        this.setState({
          radarData: Object.assign({}, responseData[1].emotion),
          pieData: Object.assign({}, responseData[0].sentiment),
          viewCharts: true,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { viewCharts, pieData, radarData } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="SOuserName">
          StackOverflow Username:
            <input type="text" name="SOUsername" onChange={this.handleChange} />
          </label>
          <input type="button" value="Submit" onClick={this.submitSOname} />
        </form>
        {viewCharts ? (
          <div className="stackviews">
            <RadarChart data={radarData} />
            <ThreePieChart score={pieData} />
          </div>
        )
          : null}
        <div>
          <GithubUserSummary score={pieData} />
        </div>
      </div>
    );
  }
}

export default User;
