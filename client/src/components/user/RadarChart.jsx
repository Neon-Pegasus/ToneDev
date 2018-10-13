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
        label: 'my first dataset',
        backgroundColor: 'rgba(179,181,198,0.2)',
      },
    ],
  };

  const options = {
    title: {
      display: true,
      text: 'StackOverflow Analysis Overview',
      fontFamily: 'Roboto',
      fontSize: 20,
    },
  };

  return (
    <div>
      <Radar data={radarData} options={options} />
    </div>
  );
};

RadarChart.propTypes = {
  data: PropTypes.shape.isRequired,
};

export default RadarChart;
