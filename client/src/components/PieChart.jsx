import React from 'react';
import { Pie } from 'react-chartjs-2';

const PieChart = () => {
  const data = {
    labels: ['Positive', 'Negative'],
    datasets: [
      {
        data: [66, 34],
        backgroundColor: [
          '#36A2EB',
          '#FF6384',
        ],
      },
    ],
  };
  const options = {
    title: {
      display: true,
      text: 'Sentinment Analysis Overview',
      fontFamily: 'Roboto',
      fontSize: 20,
    },
  };

  return (
    <Pie data={data} options={options} />
  );
};

export default PieChart;
