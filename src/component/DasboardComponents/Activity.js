import React from 'react';
import "./Activity.css";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const Activity = () => {
    const data = {
        labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
        datasets: [
            {
                label: "Deposit",
                data: [200, 200, 100, 270, 250, 300, 370],
                backgroundColor: "rgba(44, 39, 154, 0.902)",
                borderColor: "none",
                barThickness: 18,
                borderRadius: 15,
               
            },{
                label: "Withdraw",
                data: [300,280,300,100,350,200,350],
                backgroundColor: "rgba(131, 140, 225, 0.849)",
                borderColor: "none",
                barThickness: 18,
                borderRadius: 15,
                
            }
        ]
    }

    const options = {
        
        scales: {
            x: {
                grid: {
                    display: false // Remove horizontal gridlines for the x-axis
                }
            },
            y: {
                suggestedMax: 400,
                ticks: {
                    stepSize: 100
                },
            }
            
        },
        plugins: {
            legend: {
                labels: {
                    generateLabels: function(chart) {
                        const labels = ChartJS.defaults.plugins.legend.labels.generateLabels(chart);
                        labels.forEach(label => {
                            label.pointStyle = 'circle'; // Set point style to circle
                            label.radius = 5; // Set radius for legend circle
                        });
                        return labels;
                    }
                }
            }
        }
    }

    return (
        <div className='bar-container' >
            <Bar data={data} options={options} />
        </div>
    )
}

export default Activity;
