'use client'
import { useEffect } from "react"
import { Chart } from "chart.js";
import Card from "@/components/card";
function Example({title}) {
    useEffect(() => {
        var ctx = document.getElementById('myDonut').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ["Accepted", "Pending", "Rejected",'test'],
                datasets: [{
                    data: [70, 10, 6,32],
                    borderColor: [
                        "rgb(75, 192, 192)",
                        "rgb(255, 205, 86)",
                        "rgb(255, 99, 132)",
                    ],
                    backgroundColor: [
                        "rgb(75, 192, 192 )",
                        "rgb(255, 205, 86)",
                        "rgb(255, 99, 132)",
                    ],
                    borderWidth: 2,
                }]
            },
            options: {
                scales: {
                    xAxes: [{
                        display: false,
                    }],
                    yAxes: [{
                        display: false,
                    }],
                }
            },

        });
    }, [])


    return (
        <Card className="rounded-[20px] p-3">
        <div className="grid px-3 pt-2">
          <div className="pb-2">
            <h4 className="text-lg font-bold text-navy-700 dark:text-white">
                {title}
            </h4>
          </div>
          <div className='border border-gray-400 pt-0 rounded-xl w-full h-fit my-auto shadow-xl'>
                <canvas id='myDonut'></canvas>
            </div>
        </div>
      </Card>
    )
}

export default Example;