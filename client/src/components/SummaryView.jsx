import React from 'react';
import axios from 'axios';
import PieChart from './PieChart';


class Summary extends React.Component {
  componentDidMount() {
    axios.post('gateway/org/sentiment', {
      text: 'Here\'s a summary of changes that I incorporated from the other two answers.First, I made the red dot render correctly.Then I drew in the lines by eyeballing where the screenMinX and screenMaxX are. You may want to use a more precise measurement depending on your needs.Note thatnever existed before, so I created it to allowandto be available.',
      features: {
        sentiment: {},
        keywords: {},
      },
    })
      .then((res) => {
        console.log(res.data);
      });
  }

  render() {
    return (
      <div>
        <h1>Sentiment Analysis Summary</h1>
        <h2>Overall Sentiment</h2>
        <p>positive</p>

        <h2>Score</h2>
        <p>80% positive</p>

        <PieChart />

        <h2>Keywords</h2>
        <p>great, awesome, thanks!</p>

      </div>
    );
  }
}


export default Summary;
