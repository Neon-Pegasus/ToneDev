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
        <button type="button">Login</button>
      </div>
    );
  }
}

export default Login;
