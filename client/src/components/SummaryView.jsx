import React from 'react';
import PieChart from './PieChart';


const Summary = () => (
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


export default Summary;
