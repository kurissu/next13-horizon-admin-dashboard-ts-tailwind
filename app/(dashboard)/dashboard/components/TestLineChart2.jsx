'use client'
import { useEffect } from "react"
import { Chart } from "chart.js";
import Card from "@/components/card";


function Example({title}) {
    useEffect(() => {
        var ctx = document.getElementById('myLineChart').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday"],
                datasets: [{
                    data: [86, 114, 106, 106, 107, 111, 133],
                    label: "เพศชายในประเภทที่ 1",
                    borderColor: "rgb(62,149,205)",
                    backgroundColor: "rgb(62,149,205,0.1)",
                }, {
                    data: [40, 100, 44, 70, 63, 30, 10],
                    label: "เพศชายในประเภทที่ 2",
                    borderColor: "rgb(60,186,159)",
                    backgroundColor: "rgb(60,186,159,0.1)",
                }, {
                    data: [10, 21, 60, 44, 17, 21, 17],
                    label: "เพศชายในประเภทที่ 3",
                    borderColor: "rgb(255,165,0)",
                    backgroundColor: "rgb(255,165,0,0.1)",
                }, {
                    data: [6, 3, 2, 2, 7, 0, 16],
                    label: "เพศหญิงในประเภทที่ 1",
                    borderColor: "rgb(196,88,80)",
                    backgroundColor: "rgb(196,88,80,0.1)",
                }, {
                    data: [2, 42, 22, 32, 37, 20, 16],
                    label: "เพศหญิงในประเภทที่ 1",
                    borderColor: "rgb(21,99,0)",
                    backgroundColor: "rgb(196,88,80,0.1)",
                }
                ]
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
                    <canvas id='myLineChart'></canvas>
                </div>
            </div>
          </Card>
    )
}

export default Example;