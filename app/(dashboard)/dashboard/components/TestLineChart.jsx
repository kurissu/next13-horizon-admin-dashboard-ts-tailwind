'use client'
import { useEffect } from "react"
import { Chart } from "chart.js";
import Card from "@/components/card";

function Example({title, data}) {
    useEffect(() => {
        var ctx = document.getElementById('myChart').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'line',
            data: data,
            option: {
              responsive: true
            }
        });
        // myChart
    }, [data])


    return (
            <Card className="rounded-[20px] p-0 sm:p-3">
            <div className="grid px-3 pt-2">
              <div className="pb-2">
                <h4 className="text-lg font-bold text-navy-700 dark:text-white">
                {title}
                </h4>
              </div>
              <div className='border border-gray-400 pt-0 rounded-xl w-full h-fit my-auto shadow-xl'>
                    <canvas id='myChart' className="w-full h-48"></canvas>
                </div>
            </div>
          </Card>
    )
}

export default Example;