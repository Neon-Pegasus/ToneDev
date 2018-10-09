import React from 'react';
import axios from 'axios';
import Summary from '../SummaryView';

class User extends React.Component {
  constructor() {
    super();
    this.state = {
      SOUsername: '',
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
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <form>
          <label htmlFor="SOuserName">
            StackOverflow Username:
            <input type="text" name="SOUsername" onChange={this.handleChange} />
          </label>
          <input type="button" value="Submit" onClick={this.submitSOname} />
        </form>
        <Summary />

      </div>
    );
  }
}

export default User;
