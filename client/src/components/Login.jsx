import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        Login with GitHub
        <br />
        <a href="/auth/github">Login with GitHub</a>
      </div>
    );
  }
}

export default Login;
