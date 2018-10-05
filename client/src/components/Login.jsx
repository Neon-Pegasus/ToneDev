import React from 'react';
// import axios from 'axios';


class Login extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.githubLogin = this.githubLogin.bind(this);
  }

  githubLogin() {
    window.location = 'http://localhost:4000/auth/github';
    this.setState({});
    // axios.get('/auth/github')
    //   .then(() => {
    //     console.log();
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   })
  }

  render() {
    return (
      <div>
        Login with GitHub
        <br />
        <button type="button" onClick={this.githubLogin}>Login with Github</button>
      </div>
    );
  }
}

export default Login;
