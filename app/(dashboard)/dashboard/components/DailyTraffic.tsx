// import { barChartDataDailyTraffic } from "@/data/charts";
// import { barChartOptionsDailyTraffic } from "@/data/charts";
import { MdArrowDropUp } from "react-icons/md";
import Card from "@/components/card";
import dynamic from "next/dynamic";

const BarChart = dynamic(() => import("@/components/charts/BarChart"), {
  loading: () => <p>loading...</p>,
  ssr: false
})
export interface IProps {
  title:string;
  data?: {name: string, data: number[]}[];
  categories?: string[];
}

 const barChartDataDailyTraffic = [
  {
    name: "Daily Traffic",
    data: [20, 30, 40, 20],
  },
];

const barChartOptionsDailyTraffic = {
  chart: {
    toolbar: {
      show: false,
    },
  },
  tooltip: {
    style: {
      fontSize: "12px",
      fontFamily: undefined,
      backgroundColor: "#000000"
    },
    onDatasetHover: {
      style: {
        fontSize: "12px",
        fontFamily: undefined,
      },
    },
    theme: "dark",
  },
  xaxis: {
    categories: ["00", "04", "08", "12"],
    show: false,
    labels: {
      show: true,
      style: {
        colors: "#764B27",
        fontSize: "14px",
        fontWeight: "500",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
    color: "black",
    labels: {
      show: true,
      style: {
        colors: "#CA884D",
        fontSize: "14px",
      },
    },
  },
  grid: {
    show: false,
    strokeDashArray: 5,
    yaxis: {
      lines: {
        show: true,
      },
    },
    xaxis: {
      lines: {
        show: false,
      },
    },
  },
  fill: {
    type: "gradient",
    gradient: {
      type: "vertical",
      shadeIntensity: 1,
      opacityFrom: 0.7,
      opacityTo: 0.9,
      colorStops: [
        [
          {
            offset: 0,
            color: "#764B27",
            opacity: 1,
          },
          {
            offset: 100,
            color: "#CA884D",
            opacity: 0.28,
          },
        ],
      ],
    },
  },
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    bar: {
      borderRadius: 10,
      columnWidth: "25px",
    },
  },
  responsive: [{
    breakpoint: 1368,
    options: {
      plotOptions: {
        bar: {
          borderRadius: 5,
          columnWidth: "10px",
        },
      },
    },
  }]
};

const DailyTraffic = ({ title, data, categories }: IProps) => {
  return (
    <Card className="pb-7 p-[20px]">
      <div className="flex flex-row justify-between">
        <div className="ml-1 pt-2">
          <p className="text-sm font-medium leading-4 text-gray-600">
          {title} 
          </p>
          <p className="text-[34px] font-bold text-navy-700 dark:text-white">
            2.579{" "}
            <span className="text-sm font-medium leading-6 text-gray-600">
              Visitors
            </span>
          </p>
        </div>
        {/* <div className="mt-2 flex items-start">
          <div className="flex items-center text-sm text-green-500">
            <MdArrowDropUp className="h-5 w-5" />
            <p className="font-bold"> +2.45% </p>
          </div>
        </div> */}
      </div>

      <div className="h-[300px] w-full pt-10 pb-0">
        <BarChart
          chartData={data}
          // @ts-ignore
          chartOptions={barChartOptionsDailyTraffic}
        />
      </div>
    </Card>
  );
};

export default DailyTraffic;
