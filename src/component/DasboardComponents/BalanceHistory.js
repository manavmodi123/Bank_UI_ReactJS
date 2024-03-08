import React from 'react';
import "./BalanceHistory.css";
import { Line, Chart } from 'react-chartjs-2';
import {
    Chart as chartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
} from 'chart.js';

chartJS.register(LineElement,
    CategoryScale,
    LinearScale,
    PointElement);

const BalanceHistory = () => {
    const data = {
        labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb','Mar'],
        datasets: [{
            data: [150, 400, 320, 550, 370, 500, 760, 400,220,400],
            borderColor: 'rgba(44, 39, 154, 0.902)',
            backgroundColor: 'rgba(44, 39, 154, 0.2)',
            tension: 0.6
        }]
    }

    const options = {
        scales: {
            y: {
                ticks: {
                    stepSize: 200,
                    color: 'gray'
                },
                grid: {
                    color: 'rgba(211, 211, 211, 0.2)'
                }
            },
            x: {
                grid: {
                    display: false
                }
            }
        }
    }

    return (
        <div className='balance-container'>
            <Line data={data} options={options}></Line>
        </div>
    )
}

export default BalanceHistory;
