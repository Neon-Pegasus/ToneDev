import React from 'react';
import { Radar } from 'react-chartjs-2';
import PropTypes from 'prop-types';

const RadarChart = (props) => {
  const { data, labelTag } = props;
  const { labels } = data;
  const datum = data.data;
  const radarData = {
    labels,
    datasets: [
      {
        data: datum,
        label: labelTag,
        backgroundColor: 'rgba(46,196,182,0.5)',
        borderColor: 'rgba(200,0,0,0.2)',
        pointRadius: 4,
        pointHoverRadius: 5,
      },
    ],
  };

  const options = {
    // title: {
    //   display: true,
    //   text: title,
    //   fontFamily: 'Roboto',
    //   fontSize: 25,
    // },
    scale: {
      pointLabels: {
        fontSize: 17,
        fontFamily: 'sans-serif',
        fontColor: '#666',
        // fontColor: '#0116271',
      },
    },
    legend: {
      labels: {
        fontSize: 15,
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
  data: PropTypes.objectOf(PropTypes.node).isRequired,
  // title: PropTypes.string.isRequired,
  labelTag: PropTypes.string.isRequired,
};

export default RadarChart;
