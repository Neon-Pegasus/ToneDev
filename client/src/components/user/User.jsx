import React from 'react';
import axios from 'axios';
import Summary from '../SummaryView';
import RadarChart from './RadarChart';
import ThreePieChart from './ThreeFieldPieChart';

class User extends React.Component {
  constructor() {
    super();
    this.state = {
      SOUsername: '',
      pieData: {},
      radarData: {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitSOname = this.submitSOname.bind(this);
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
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { pieData, radarData } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="SOuserName">
          StackOverflow Username:
            <input type="text" name="SOUsername" onChange={this.handleChange} />
          </label>
          <input type="button" value="Submit" onClick={this.submitSOname} />
        </form>
        <RadarChart data={radarData} />
        <ThreePieChart score={pieData} />
        <Summary />

      </div>
    );
  }
}

export default User;
