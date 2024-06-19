import dynamic from 'next/dynamic';
import { FC } from 'react';

// import MiniCalendar from "@/components/calendar/MiniCalendar";
import MultiBar from "./components/WeeklyRevenue";
import TotalSpent from "./components/TotalSpent";
import PieChartCard from "./components/PieChartCard";
import TestPieChart from './components/TestPieChart';
import { IoIosApps, IoLogoAndroid, IoLogoApple, IoMdFemale, IoMdHome, IoMdMale } from "react-icons/io";
import { IoDocuments } from "react-icons/io5";
import { MdBarChart, MdDashboard, MdOutlineDownload, MdOutlineSupervisorAccount, MdSupervisedUserCircle, MdVerifiedUser } from "react-icons/md";

import { columnsDataCheck, columnsDataComplex } from "./variables/columnsData";

import Widget from "@/components/widget/Widget";
import CheckTable from "./components/CheckTable";
import ComplexTable from "./components/ComplexTable";
import DailyTraffic from "./components/DailyTraffic";
import TaskCard from "./components/TaskCard";
import tableDataCheck from "./variables/tableDataCheck.json";
import tableDataComplex from "./variables/tableDataComplex.json";
import PieChartCard2 from './components/PieChartCard2';
import TestLineChart from './components/TestLineChart';
import TestLineChart2 from './components/TestLineChart2';
import DonutChart from './components/donutChart'

const MiniCalendar = dynamic(() => import("@/components/calendar/MiniCalendar"), {
    loading: () => <p>loading...</p>,
    ssr: false
})

type Props = {};

export const pieChartOptions = {
    labels: ["ช่วงเวลา 0.1 - 0.5 วินาที", "ช่วงเวลา 0.5 - 0.10 วินาที", "ช่วงเวลา 0.10 - 0.15 วินาที"],
    colors: ["#4318FF", "#6AD2FF", "#EFF4FB"],
    chart: {
      width: "50px",
    },
    states: {
      hover: {
        filter: {
          type: "none",
        },
      },
    },
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    hover: { mode: null },
    plotOptions: {
      donut: {
        expandOnClick: false,
        donut: {
          labels: {
            show: false,
          },
        },
      },
    },
    fill: {
      colors: ["#764B27", "#CA884D", "#E57A75"],
    },
    tooltip: {
      enabled: true,
      theme: "dark",
      style: {
        fontSize: "12px",
        fontFamily: undefined,
        backgroundColor: "#000000"
      },
    },
  };

  export const pieChartOptions2 = {
    labels: ["Your files", "System", "Empty"],
    colors: ["#4318FF", "#6AD2FF", "#EFF4FB"],
    chart: {
      width: "50px",
    },
    states: {
      hover: {
        filter: {
          type: "none",
        },
      },
    },
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    hover: { mode: null },
    plotOptions: {
      donut: {
        expandOnClick: false,
        donut: {
          labels: {
            show: false,
          },
        },
      },
    },
    fill: {
      colors: ["#764B27", "#CA884D", "#E57A75"],
    },
    tooltip: {
      enabled: true,
      theme: "dark",
      style: {
        fontSize: "12px",
        fontFamily: undefined,
        backgroundColor: "#000000"
      },
    },
  };

const DashboardPage: FC<Props> = () => {
    return (
        <>
            {/* Card widget */}
            <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-5">

                <Widget
                    icon={<MdVerifiedUser className="h-7 w-7" />}
                    title={"Daily Active User"}
                    subtitle={"340"}
                />
                <Widget
                    icon={<MdSupervisedUserCircle className="h-6 w-6" />}
                    title={"Montly Active User"}
                    subtitle={"642"}
                />
                <Widget
                    icon={<MdBarChart className="h-7 w-7" />}
                    title={"Visitors"}
                    subtitle={"574"}
                />
                <Widget
                    icon={<MdOutlineDownload className="h-6 w-6" />}
                    title={"User Download"}
                    subtitle={"1000"}
                />
                <Widget
                    icon={<MdOutlineSupervisorAccount className="h-7 w-7" />}
                    title={"Register Account"}
                    subtitle={"145"}
                />
                                <Widget
                    icon={<IoMdMale className="h-6 w-6" />}
                    title={"Male"}
                    subtitle={"433"}
                />
                        <Widget
                    icon={<IoMdFemale className="h-6 w-6" />}
                    title={"Female"}
                    subtitle={"633"}
                />
                        <Widget
                    icon={<IoIosApps className="h-6 w-6" />}
                    title={"Web"}
                    subtitle={"633"}
                />
                        <Widget
                    icon={<IoLogoApple className="h-6 w-6" />}
                    title={"IOS"}
                    subtitle={"777"}
                />
                        <Widget
                    icon={<IoLogoAndroid className="h-6 w-6" />}
                    title={"Android"}
                    subtitle={"123"}
                />
            </div>

            

            {/* Charts */}
            <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
                {/* <DailyTraffic title={'ผู้เล่นใช้เวลาตัดสินใจกี่วินาทีเพื่อที่จะกดปุ่ม เข้าสู่ระบบ'}/>    */}
                <MultiBar />
                {/* <PieChartCard  title={'ผู้เล่นใช้เวลาตัดสินใจกี่วินาทีเพื่อที่จะกดปุ่ม เข้าสู่ระบบ'} /> */}
                <TotalSpent title={"จำนวนผู้เล่นที่เข้าสู่ระบบสำเร็จในครั้งแรก"}/>
                {/* <DonutChart title={"เวลาของผู้เล่นที่เลือกจะ challange หลังจากที่สามารถทำได้แล้ว"}/>
            <TestLineChart title={'วันไหนในสัปดาห์คนนิยมเล่นเยอะที่สุด (จันทร์/อังคาร/พุธ/พฤหัส/ศุกร์/เสาร์/อาทิตย์) ใน 1 สัปดาห์'} /> */}
            </div>
            <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
                {/* <WeeklyRevenue /> */}
                <PieChartCard title={"ผู้เล่นใช้เวลาตัดสินใจกี่วินาทีก่อนจะเลือกเมนู"} data={[23,7,70]} options={pieChartOptions}/>
                <PieChartCard title={'ผู้เล่นใช้เวลากี่วินาทีในการประกอบส่วนผสมต่อ 1 รายการ'} data={[23,7,70]} options={pieChartOptions2}/>
            </div>

            {/* Tables & Charts */}
            <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-2">
                    <DailyTraffic title={'จำนวนผู้เล่นที่ผ่าน หรือไม่ผ่านในระดับต่างๆ'} />
                    <DailyTraffic title={'จำนวนผู้เล่นที่ challange สำเร็จ หรือไม่สำเร็จในระดับต่างๆ'}/>
                {/* Check Table */}
                <div>
                    {/* <CheckTable
                        columnsData={columnsDataCheck}
                        tableData={tableDataCheck}
                    /> */}
                                        <PieChartCard2 title={'เวลาของผู้เล่นที่เลือกจะ challange หลังจากที่สามารถทำได้แล้ว'} data={[23,7,70]} options={pieChartOptions} data2={[23,7,70]} options2={pieChartOptions} />

                </div>

                {/* Traffic chart & Pie Chart */}
                <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-1">
                    {/* <DailyTraffic /> */}
                    <PieChartCard2 title={'เวลาที่ผู้เล่นดู หรืออยู่ในหน้าสรุปผลการเล่นของรอบนั้นๆ'} data={[23,7,70]} options={pieChartOptions} data2={[23,7,70]} options2={pieChartOptions}/>
                </div>
                <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-1">
                    <DonutChart title={"เวลาของผู้เล่นที่เลือกจะ challange หลังจากที่สามารถทำได้แล้ว"}/>
                </div>
                <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-1">
                    <DailyTraffic title={"เวลาที่ผู้เล่นดู หรืออยู่ในหน้าสรุปผลการเล่นของรอบนั้นๆ"}/>
                </div>
                <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-1">
                    <TotalSpent title={"จำนวนผู้เล่นที่กดเล่นใหม่หลังจากจบเกม"}/>
                </div>
                <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-1">
                    <TestLineChart title={'วันไหนในสัปดาห์คนนิยมเล่นเยอะที่สุด (จันทร์/อังคาร/พุธ/พฤหัส/ศุกร์/เสาร์/อาทิตย์) ใน 1 สัปดาห์'} /> 
                </div>
                <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-1">
                    <TestLineChart2 title={'ผู้เล่นส่นใจเกมมากน้อยเพียงใด'} /> 
                </div>

                {/* Complex Table , Task & Calendar */}
                {/* <ComplexTable
                    columnsData={columnsDataComplex}
                    tableData={tableDataComplex}
                /> */}

                {/* Task chart & Calendar */}
                {/* <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-2">
                    <TaskCard />
                    <div className="grid grid-cols-1 rounded-[20px]">
                        <MiniCalendar />
                    </div>
                </div> */}
            </div>
        </>
    );
}

export default DashboardPage;