import dynamic from "next/dynamic";
import { pieChartData } from "@/data/charts";
import Card from "@/components/card";

const PieChart = dynamic(() => import("@/components/charts/PieChart"), {
  loading: () => <p>loading...</p>,
  ssr: false
})

export interface IProps {
  title:string;
  data: number[];
  labels: any;
  data2: number[];
  labels2: any;
}
const PieChartCard = ({ title,data,labels,data2,labels2 }: IProps) => {

  return (
    <Card className="rounded-[20px] p-3">
      <div className="flex flex-row justify-between px-3 pt-2">
        <div>
          <h4 className="text-lg font-bold text-navy-700 dark:text-white">
            {title}
          </h4>
        </div>

        <div className="mb-6 flex items-center justify-center">
          <select className="mb-3 mr-2 flex items-center justify-center text-sm font-bold text-gray-600 hover:cursor-pointer dark:!bg-navy-800 dark:text-white">
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
            <option value="weekly">Weekly</option>
          </select>
        </div>
      </div>
      <div className="flex">

        <div className="mb-auto flex flex-col h-[220px] w-full items-center justify-center">
          <PieChart
            // @ts-ignore
            options={labels}
            series={data}
          />
          <div>Male</div>
        </div>
        <div className="mb-auto flex flex-col h-[220px] w-full items-center justify-center">
          <PieChart
            // @ts-ignore
            options={labels2}
            series={data2}
          />
          <div>Female</div>
        </div>
      </div>
      <div className="flex flex-row !justify-around rounded-2xl px-6 py-3 shadow-2xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
      <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center">
            <div className="h-2 w-2 rounded-full bg-[#764b27]" />
            <p className="ml-1 text-sm font-normal text-gray-600">{labels.labels[0]}</p>
          </div>
          <p className="mt-px text-xl font-bold text-navy-700 dark:text-white">
            {data[0]}%
          </p>
        </div>

        <div className="h-11 w-px bg-gray-300 dark:bg-white/10" />

        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center">
            <div className="h-2 w-2 rounded-full bg-[#ca884d]" />
            <p className="ml-1 text-sm font-normal text-gray-600">{labels.labels[1]}</p>
          </div>
          <p className="mt-px text-xl font-bold text-navy-700 dark:text-white">
            {data[1]}%
          </p>
        </div>



        <div className="h-11 w-px border-2 border-black dark:bg-white/10" />


      <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center">
            <div className="h-2 w-2 rounded-full bg-[#764b27]" />
            <p className="ml-1 text-sm font-normal text-gray-600">{labels2.labels[0]}</p>
          </div>
          <p className="mt-px text-xl font-bold text-navy-700 dark:text-white">
            {data[0]}%
          </p>
        </div>

        <div className="h-11 w-px bg-gray-300 dark:bg-white/10" />

        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center">
            <div className="h-2 w-2 rounded-full bg-[#ca884d]" />
            <p className="ml-1 text-sm font-normal text-gray-600">{labels2.labels[1]}</p>
          </div>
          <p className="mt-px text-xl font-bold text-navy-700 dark:text-white">
            {data[1]}%
          </p>
        </div>


    
      </div>
    </Card>
  );
};

export default PieChartCard;
