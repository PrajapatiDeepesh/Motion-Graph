import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const MotionSensorGraph = () => {
    const [selectedInterval, setSelectedInterval] = useState('3 hours');

    const intervals = {
        '3 hours': {
            labels: Array.from({ length: 9 }, (_, i) => `${i * 20} min`),
            data: Array.from({ length: 9 }, () => Math.floor(Math.random() * 100)),
        },
        '24 hours': {
            labels: Array.from({ length: 24 }, (_, i) => `${i} hr`),
            data: Array.from({ length: 24 }, () => Math.floor(Math.random() * 100)),
        },
        '7 days': {
            labels: Array.from({ length: 7 }, (_, i) => `Day ${i + 1}`),
            data: Array.from({ length: 7 }, () => Math.floor(Math.random() * 100)),
        },
        '30 days': {
            labels: Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`),
            data: Array.from({ length: 30 }, () => Math.floor(Math.random() * 100)),
        },
        '1 year': {
            labels: Array.from({ length: 12 }, (_, i) => `Month ${i + 1}`),
            data: Array.from({ length: 12 }, () => Math.floor(Math.random() * 100)),
        },
    };

    const data = {
        labels: intervals[selectedInterval].labels,
        datasets: [
            {
                label: 'Motion Sensor Data',
                data: intervals[selectedInterval].data,
                fill: false,
                backgroundColor: 'rgb(75, 192, 192)',
                borderColor: 'rgba(75, 192, 192, 0.2)',
                tension: 0.1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'top',
            },
        },
        scales: {
            x: {
                beginAtZero: true,
            },
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <div className="motion-sensor-graph">
            <div className="button-group">
                {Object.keys(intervals).map((interval) => (
                    <button
                        key={interval}
                        className={selectedInterval === interval ? 'active' : ''}
                        onClick={() => setSelectedInterval(interval)}
                    >
                        {interval}
                    </button>
                ))}
            </div>
            <div className="graph-container">
                <Line data={data} options={options} />
            </div>
        </div>
    );
};

export default MotionSensorGraph;

               

