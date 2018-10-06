import React from 'react';
import axios from 'axios';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.githubLogin = this.githubLogin.bind(this);
  }

  githubLogin() {
    // window.location = 'http://localhost:8888/auth/github';
    this.setState({});
    axios.get('/auth/github')
      .then((res) => {
        console.log(res);
      });
    // fetch('/auth/github')
  }

  render() {
    return (
      <div>
        Login with GitHub
        <br />
        <a href="http://localhost:8888/auth/github">Login with GitHub</a>
        <button type="button" onClick={this.githubLogin}>Github login</button>
      </div>
    );
  }
}

export default Login;
