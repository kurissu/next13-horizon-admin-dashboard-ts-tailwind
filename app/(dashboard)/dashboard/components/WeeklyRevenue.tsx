import Card from "@/components/card";
import dynamic from "next/dynamic";
import { MdBarChart } from "react-icons/md";

const BarChart = dynamic(() => import("@/components/charts/BarChart"), {
  loading: () => <p>loading...</p>,
  ssr: false
})
export interface IProps {
  title:string;
  data?: {name: string, data: number[], color: string}[];
  categories: {};
}

const WeeklyRevenue = ({title, data, categories}:IProps) => {
  return (
    <Card className="flex flex-col bg-white w-full rounded-3xl py-6 px-2 text-center">
      <div className="mb-auto flex items-center justify-between px-6">
        <h2 className="text-lg font-bold text-navy-700 dark:text-white">
        {title}        </h2>
        <button className="!linear z-[1] flex items-center justify-center rounded-lg bg-lightPrimary p-2 text-brand-500 !transition !duration-200 hover:bg-gray-100 active:bg-gray-200 dark:bg-navy-700 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/10">
          <MdBarChart className="h-6 w-6" />
        </button>
      </div>

      <div className="md:mt-16 lg:mt-0">
        <div className="h-[250px] w-full xl:h-[350px]">
          <BarChart
            chartData={data}
            // @ts-ignore
            chartOptions={categories}
          />
        </div>
      </div>
    </Card>
  );
};

export default WeeklyRevenue;
