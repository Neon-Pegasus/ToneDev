import React from 'react';
import axios from 'axios';
import LoadingSpinner from '../LoadingSpinner';
import RadarChart from './RadarChart';
import ThreePieChart from './ThreeFieldPieChart';

class User extends React.Component {
  constructor() {
    super();
    this.state = {
      SOUsername: '',
      pieData: {},
      radarData: {},
      viewCharts: false,
      load: false,
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
    this.setState({
      viewCharts: false,
      load: true,
    });
    axios.get('/api/user/so', {
      params: {
        username: SOUsername,
      },
    })
      .then((res) => {
        console.log('line 33', res.data);
        const responseData = res.data;
        this.setState({
          radarData: Object.assign({}, responseData[1].emotion),
          pieData: Object.assign({}, responseData[0].sentiment),
          load: false,
          viewCharts: true,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const {
      viewCharts, pieData, radarData, load,
    } = this.state;
    return (
      <div className="main-user-display">
        {viewCharts ? (null) : (
          <h3>
            To analyze your stackoverflow answers, type in the username below.
          </h3>
        )}
        <form>
          <label htmlFor="SOuserName">
          StackOverflow Username:
            {' '}
            <input type="text" name="SOUsername" onChange={this.handleChange} />
          </label>
          <input type="button" className="so-submit" value="Submit" onClick={this.submitSOname} />
        </form>
        {/* {load ? (
          <div>
            <LoadingSpinner />
          </div>
        )
          : null} */}
        {viewCharts ? (
          <div>
            <h1>StackOverflow Sentiment Analysis</h1>
            <div className="stackviews">
              <div className="radar-so">
                <RadarChart data={radarData} labelTag="Answers" />
              </div>
              <div className="pie-so">
                <ThreePieChart score={pieData} />
              </div>
            </div>
          </div>
        )
          : load ? (
            <div>
              <LoadingSpinner />
            </div>
          )
            : null}
      </div>
    );
  }
}

export default User;
