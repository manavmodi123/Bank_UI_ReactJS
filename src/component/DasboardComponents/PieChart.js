import React from 'react';
import "./PieChart.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import 'chartjs-plugin-datalabels'; // Import the plugin
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
    const data = {
        labels: ['Entertainment', 'Bill Expense', 'Others', 'Investment'],
        datasets: [
            {
                data: [30, 15, 30, 25],
                backgroundColor: ['rgba(44, 39, 154, 0.902)', 'rgba(133, 130, 192, 0.902)', 'rgba(131, 140, 225, 0.849)', 'rgba(142, 137, 227, 0.902)']
            }
        ]
    };

    const options = {
        cutoutPercentage: 50,
        plugins: {
            datalabels: {
                formatter: (value, context) => {
                    return context.chart.data.labels[context.dataIndex] + ' ' + value + '%';
                },
                color: '#fff',
                font: {
                    size: '14'
                }
            }
        }
    };

    return (
        <div className='expense-card'>
            <Pie data={data} options={options} />
        </div>
    );
};

export default PieChart;
