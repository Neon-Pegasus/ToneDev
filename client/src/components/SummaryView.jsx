import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
// import PieChart from './PieChart';


class Summary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [
        'Here\'s a summary of changes that I incorporated from the other two answers.',
        'First, I made the red dot render correctly.',
        'Then I drew in the lines by eyeballing where the screenMinX and screenMaxX are.',
        'You may want to use a more precise measurement depending on your needs.',
        'Note thatnever existed before, so I created it to allowandto be available.'
      ],
      sentiment: 'positive',
      score: 75,
    };
    this.getAnalysis = this.getAnalysis.bind(this);
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
  /* NOTE: need to pass url with correct endpoint
     down as a prop and use it as a var in the request */
    this.getData();
    this.getAnalysis();
  }

  getData() {
  /*   // TODO: add a GET request to github microservice orgdata
      endpoint to get the comments for a specific org */
    axios.get('/api/gateway/github/orgdata')
      .then((data) => {
        console.log('ORG DATA: ', data);
        this.setState({
          comments: data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getAnalysis() {
    const { comments } = this.state;
    comments.forEach((comment) => {
      axios.post('/api/gateway/org/sentiment', {
        text: comment,
        features: {
          sentiment: {},
          keywords: {},
        },
      })
        .then((res) => {
          console.log(res.data);
          // const score = Math.round(res.data.sentimentAnalysis.sentiment.document.score * 100);
          // this.setState({
          //   sentiment: res.data.sentimentAnalysis.sentiment.document.label,
          //   score,
          // });
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }

  render() {
    const { orgName } = this.props;
    const { sentiment, score } = this.state;
    return (
      <div>
        <h1>Sentiment Analysis Summary</h1>
        <h2>
Overall Sentiment
          {' '}
          {orgName}
        </h2>
        <p>{sentiment}</p>

        <h2>Score</h2>
        <p>
          {score}
        </p>

        {/* <PieChart /> */}

        {/* <h2>Keywords</h2>
        <p>great, awesome, thanks!</p> */}

      </div>
    );
  }
}

Summary.propTypes = {
  orgName: PropTypes.string.isRequired,
};
export default Summary;
