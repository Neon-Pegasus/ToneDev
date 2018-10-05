import React from 'react';
// import axios from 'axios';
import queryString from 'query-string';


class Login extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.githubLogin = this.githubLogin.bind(this);
  }

  componentWillMount() {
    const { location, history } = this.props;
    const query = queryString.parse(location.search);
    if (query.token) {
      window.localStorage.setItem('x-auth-token', query.token);
      history.push('/');
    }
  }

  githubLogin() {
    window.location = 'http://localhost:4000/auth/github';
    this.setState({});
    // axios.get('/auth/github')
/*     axios({
      method: 'GET',
      url: '/auth/github',
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      }) */
  }

  render() {
    return (
      <div>
        Login with GitHub
        <br />
        <a href="http://localhost:4000/auth/github">Login with GitHub</a>
      </div>
    );
  }
}

export default Login;
