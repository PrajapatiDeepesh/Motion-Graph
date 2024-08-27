import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const MotionGraphSensor = () => {
  const [timeRange, setTimeRange] = useState('3h');

  const generateData = () => {
    const labels = [];
    const data = [];
    let interval;

    switch (timeRange) {
      case '3h':
        interval = 20;
        for (let i = 0; i <= 180; i += interval) {
          labels.push(`${i} min`);
          data.push(Math.floor(Math.random() * 100) + 1);
        }
        break;
      case '24h':
        interval = 60;
        for (let i = 0; i <= 24; i++) {
          labels.push(`${i} hr`);
          data.push(Math.floor(Math.random() * 100) + 1);
        }
        break;
      case '7d':
        interval = 1;
        for (let i = 1; i <= 7; i++) {
          labels.push(`Day ${i}`);
          data.push(Math.floor(Math.random() * 100) + 1);
        }
        break;
      case '30d':
        interval = 1;
        for (let i = 1; i <= 30; i++) {
          labels.push(`Day ${i}`);
          data.push(Math.floor(Math.random() * 100) + 1);
        }
        break;
      case '1y':
        interval = 1;
        for (let i = 1; i <= 12; i++) {
          labels.push(`Month ${i}`);
          data.push(Math.floor(Math.random() * 100) + 1);
        }
        break;
      default:
        break;
    }

    return {
      labels: labels,
      datasets: [
        {
          label: 'Velocity (M/S)',
          data: data,
          fill: false,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
        },
      ],
    };
  };

  return (
    <div>
      <h2>Motion Graph Sensor</h2>
      <div>
        <button onClick={() => setTimeRange('3h')}>Last 3 hours</button>
        <button onClick={() => setTimeRange('24h')}>Last 24 hours</button>
        <button onClick={() => setTimeRange('7d')}>Last 7 days</button>
        <button onClick={() => setTimeRange('30d')}>Last 30 days</button>
        <button onClick={() => setTimeRange('1y')}>Last 1 year</button>
      </div>
      <Line data={generateData()} />
    </div>
  );
};

export default MotionGraphSensor;

