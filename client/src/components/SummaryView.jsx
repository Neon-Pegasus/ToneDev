import React from 'react';
import axios from 'axios';
import PieChart from './PieChart';


class Summary extends React.Component {
  componentDidMount() {
    axios.post('gateway/org/sentiment', {
      url: "www.wsj.com/news/markets",
      features: {
        sentiment: {},
        keywords: {},
      },
    })
      .then((res) => {
        console.log(res);
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
