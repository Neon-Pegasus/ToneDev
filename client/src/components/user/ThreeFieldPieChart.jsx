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
          '#36A2EB',
          '#FF6384',
          '#808080',
        ],
      },
    ],
  };
  const options = {
    title: {
      display: true,
      text: '',
      fontFamily: 'Roboto',
      fontSize: 20,
    },
  };

  return (
    <Pie data={graphData} options={options} />
  );
};

ThreePieChart.propTypes = {
  score: PropTypes.shape.isRequired,
};

export default ThreePieChart;
