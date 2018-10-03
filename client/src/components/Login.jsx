import React from 'react';


class Login extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.githubLogin = this.githubLogin.bind(this);
  }

  githubLogin() {
    window.location='http://localhost:3333/auth/github';
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
