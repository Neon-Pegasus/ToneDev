import React from 'react';
import axios from 'axios';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const { input } = this.state;

    axios.post('/api/gateway/input/sentiment', {
      text: input,
    })
      .then((result) => {
        console.log('INPUT RESULTS: ', result);
        // this.setState({
        //   output: result.data,
        // });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { input } = this.state;
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            name="input"
            value={input}
            onChange={this.onChange}
          />
          <button type="submit">Analyize</button>
        </form>
      </div>
    );
  }
}

export default Input;
