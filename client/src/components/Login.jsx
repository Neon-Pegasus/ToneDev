import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>ToneDev</h1>
        <br />
        <a className="login-button" href="/auth/github">Login with GitHub</a>
      </div>
    );
  }
}

export default Login;
