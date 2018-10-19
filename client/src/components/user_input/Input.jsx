import React from 'react';
import axios from 'axios';
import Output from './Output';
import LoadingSpinner from '../LoadingSpinner';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      score: null,
      sentiment: '',
      keywords: [],
      loading: false,
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    // this.showResults = this.showResults.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const { input } = this.state;
    this.setState({
      loading: true,
    });
    axios.post('/api/gateway/input/sentiment', {
      text: input,
    })
      .then((result) => {
        // console.log('INPUT RESULTS: ', result.data);
        console.log('line 39');
        const { score, label } = result.data.sentiment.document;
        const { keywords } = result.data;
        this.setState({
          score,
          sentiment: label,
          keywords,
          loading: false,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  showResults() {
    const { score, sentiment, keywords } = this.state;
    if (score !== null) {
      return <Output score={score} sentiment={sentiment} keywords={keywords} />;
    }
    return null;
  }

  render() {
    console.log('what is state', this.state);
    const {
      input, loading,
    } = this.state;
    return (
      <div className="live-form">
        <div>
          <form onSubmit={this.onSubmit}>
            <textarea
              rows="10"
              cols="30"
              type="text"
              name="input"
              value={input}
              onChange={this.onChange}
            >
              Your comment here
            </textarea>
            {/* <input
                type="text"
                name="input"
                value={input}
                onChange={this.onChange}
              /> */}
          </form>
        </div>
        <div>
          <button type="submit" className="la-submit" onClick={this.onSubmit}>Analyize</button>
          {/* {this.showResults()} */}
          {loading ? (
            <div className="loading-spinner">
              <LoadingSpinner />
            </div>
          ) : (this.showResults())}
        </div>
      </div>
    );
  }
}

export default Input;
