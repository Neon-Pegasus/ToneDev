import React from 'react';
import { Pie } from 'react-chartjs-2';
import PropTypes from 'prop-types';

const ThreePieChart = (props) => {
  const { score } = props;
  const { labels, data } = score;
  const graphData = {
    labels,
    datasets: [
      {
        data,
        backgroundColor: [
          '#ff9f1c',
          '#2ec4b6',
          '#e71d36',
        ],
      },
    ],
  };
  const options = {
    legend: {
      labels: {
        fontSize: 15,
      },
    },
  };

  return (
    <div>
      <Pie data={graphData} options={options} width="400" height="300" />
    </div>
  );
};

ThreePieChart.propTypes = {
  score: PropTypes.objectOf(PropTypes.node).isRequired,
};

export default ThreePieChart;
