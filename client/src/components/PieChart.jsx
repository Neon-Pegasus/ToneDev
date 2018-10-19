import React from 'react';
import { Pie } from 'react-chartjs-2';
import PropTypes from 'prop-types';


const PieChart = (props) => {
  const { score } = props;
  const remainder = 100 - score;
  const data = {
    labels: ['Positive', 'Negative'],
    datasets: [
      {
        data: [score, remainder],
        backgroundColor: [
          '#2ec4b6',
          '#3b0066',
        ],
      },
    ],
  };

  const options = {
    title: {
      display: true,
      text: 'Sentinment Analysis Overview',
      fontFamily: 'Montserrat',
      fontSize: 20,
    },
  };

  return (
    <Pie data={data} options={options} />
  );
};
PieChart.propTypes = {
  score: PropTypes.number.isRequired,
};

export default PieChart;

// console.log(data.datasets[0].data[0]);
// console.log(data.datasets[0].data[1]);
// class PieChart extends React.Component {
//   constructor(props) {
//     super(props);
//     console.log(props);
//     this.state = {
//       data: {
//         labels: ['Positive', 'Negative'],
//         datasets: [
//           {
//             data: [75, 25],
//             backgroundColor: [
//               '#36A2EB',
//               '#FF6384',
//             ],
//           },
//         ],
//       },
//       options: {
//         title: {
//           display: true,
//           text: 'Sentinment Analysis Overview',
//           fontFamily: 'Roboto',
//           fontSize: 20,
//         },
//       },
//     };
//     this.setDisplay = this.setDisplay.bind(this);
//   }

//   componentDidMount() {
//     console.log(this.props);
//     this.setDisplay();
//   }

//   setDisplay() {
//     const { sentiment, score } = this.props;
//     console.log(sentiment);
//     console.log(score);
//     if (sentiment === 'positive') {
//       const remainder = 100 - score;
//       console.log(remainder);
//       this.setState({
//         data: {
//           labels: ['Positive', 'Negative'],
//           datasets: [
//             {
//               data: [score, remainder],
//               backgroundColor: [
//                 '#36A2EB',
//                 '#FF6384',
//               ],
//             },
//           ],
//         },
//       });
//     }
//   }

//   render() {
//     const { data, options } = this.state;
//     return (
//       <Pie data={data} options={options} />
//     );
//   }
// }
