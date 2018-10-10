import React from 'react';
// import {
//   Link,
// } from 'react-router-dom';
// import axios from 'axios';


class Organizations extends React.Component {
  constructor() {
    super();
    this.state = {
      orgs: ['Google', 'Microsoft', 'Apple', 'Amazon', 'Facebook'],
    };
  }

  // TODO: make a GET request to github microservice through nodeGateway display the org names
  // componentDidMount() {
  //   axios.get('api/gateway/github/orglist')
  //     .then((response) => {
  //       console.log(response);
  //       this.setState({
  //         orgs: response,
  //       });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  render() {
    const { orgs } = this.state;
    return (
      <div>
        <ul>
          {orgs.map((org, i) => (
            <li key={i}>
              {org}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Organizations;
