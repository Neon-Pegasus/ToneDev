import React from 'react';
import { Radar } from 'react-chartjs-2';
import PropTypes from 'prop-types';

const RadarChart = (props) => {
  const { data } = props;
  const { labels } = data;
  const datum = data.data;
  const radarData = {
    labels,
    datasets: [
      {
        data: datum,
        label: 'My Stack Overflow Comments',
        backgroundColor: 'rgba(46,196,182,0.5)',
        borderColor: 'rgba(200,0,0,0.2)',
        pointRadius: 4,
        pointHoverRadius: 5,
      },
    ],
  };

  const options = {
    title: {
      display: true,
      text: 'StackOverflow Analysis Overview',
      fontFamily: 'Roboto',
      fontSize: 25,
    },
    scale: {
      pointLabels: {
        fontSize: 18,
        fontFamily: 'Roboto',
        fontColor: '#0116271',
      },
    },
    legend: {
      labels: {
        fontSize: 18,
      },
    },
  };

  return (
    <div>
      <Radar data={radarData} options={options} width="400" height="300" />
    </div>
  );
};

RadarChart.propTypes = {
  data: PropTypes.shape.isRequired,
};

export default RadarChart;
