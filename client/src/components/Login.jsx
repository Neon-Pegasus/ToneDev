import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="login">
        <h1 id="logo">ToneDev</h1>
        <br />
        <button type="submit" className="login-button">
          <i className="fa fa-github" />
          <a className="login-link" href="/auth/github"> Login with GitHub</a>
        </button>
      </div>
    );
  }
}

export default Login;
