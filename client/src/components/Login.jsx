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
        <button type="submit">
          <a className="login-button" href="/auth/github">Login with GitHub</a>
        </button>
      </div>
    );
  }
}

export default Login;
