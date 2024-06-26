import dynamic from "next/dynamic";
import { FC } from "react";

// import MiniCalendar from "@/components/calendar/MiniCalendar";
import MultiBar from "./components/WeeklyRevenue";
import TotalSpent from "./components/TotalSpent";
import PieChartCard from "./components/PieChartCard";
import {
  IoIosApps,
  IoLogoAndroid,
  IoLogoApple,
  IoMdFemale,
  IoMdHome,
  IoMdMale,
} from "react-icons/io";
import { IoDocuments } from "react-icons/io5";
import {
  MdBarChart,
  MdDashboard,
  MdOutlineDownload,
  MdOutlineSupervisorAccount,
  MdSupervisedUserCircle,
  MdVerifiedUser,
} from "react-icons/md";

import { columnsDataCheck, columnsDataComplex } from "./variables/columnsData";

import Widget from "@/components/widget/Widget";
import CheckTable from "./components/CheckTable";
import ComplexTable from "./components/ComplexTable";
import DailyTraffic from "./components/DailyTraffic";
import TaskCard from "./components/TaskCard";
import tableDataCheck from "./variables/tableDataCheck.json";
import tableDataComplex from "./variables/tableDataComplex.json";
import PieChartCard2 from "./components/PieChartCard2";
import TestLineChart from "./components/TestLineChart";
import TestLineChart2 from "./components/TestLineChart2";
import DonutChart from "./components/donutChart";
import {
  barChartOptionsWeeklyRevenue,
  pieChart2Options1,
  pieChart2Options2,
  pieChart2Options3,
  pieChart2Options4,
  pieChartOptions,
  pieChartOptions2,
  barChartOptionsDailyTraffic,
  barChartOptionsDailyTraffic2,
  barChartOptionsDailyTraffic3,
} from "@/data/charts";

const MiniCalendar = dynamic(
  () => import("@/components/calendar/MiniCalendar"),
  {
    loading: () => <p>loading...</p>,
    ssr: false,
  }
);

type Props = {};

const DashboardPage: FC<Props> = () => {
  const temp = [
    {
      name: "Revenue",
      data: [50, 64, 48, 66, 49, 68],
      color: "#764B27",
    },
    {
      name: "Profit",
      data: [30, 40, 24, 46, 20, 46],
      color: "#CA884D",
    },
  ];
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
        <MultiBar
          title={"ผู้เล่นใช้เวลาตัดสินใจกี่วินาทีเพื่อที่จะกดปุ่ม เข้าสู่ระบบ"}
          data={[
            {
              name: "เพศชายในประเภทที่ 1 ใช่เวลาค่าเฉลี่ยกี่วินาที",
              data: [300, 50],
              color: "#0a0a0a",
            },
            {
              name: "เพศชายในประเภทที่ 2 ใช้เวลาค่าเฉลี่ยกี่วินาที",
              data: [400, 100],
              color: "#171717",
            },
            {
              name: "เพศชายในประเภทที่ 3 ใช้เวลาค่าเฉลี่ยกี่วินาที",
              data: [500, 23],
              color: "#262626",
            },
            {
              name: "เพศหญิงในประเภทที่ 1 ใช้เวลาค่าเฉลี่ยกี่วินาที",
              data: [600, 50],
              color: "#404040",
            },
            {
              name: "เพศหญิงในประเภทที่ 2 ใช้เวลาค่าเฉลี่ยกี่วินาที",
              data: [700, 344],
              color: "#52525b",
            },
            {
              name: "เพศหญิงในประเภทที่ 3 ใช้เวลาค่าเฉลี่ยกี่วินาที",
              data: [800, 800],
              color: "#71717a",
            },
          ]}
          categories={barChartOptionsWeeklyRevenue}
        />

        <TotalSpent
          title={"จำนวนผู้เล่นที่เข้าสู่ระบบสำเร็จในครั้งแรก"}
          total={"37.5K"}
          data={[
            {
              name: "Revenue",
              data: [50, 64, 48, 66, 49, 68],
              color: "#764B27",
            },
          ]}
        />

      </div>
      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
        <PieChartCard
          title={"ผู้เล่นใช้เวลาตัดสินใจกี่วินาทีก่อนจะเลือกเมนู"}
          data={[23, 7, 70]}
          labels={pieChartOptions}
        />
        <PieChartCard
          title={"ผู้เล่นใช้เวลากี่วินาทีในการประกอบส่วนผสมต่อ 1 รายการ"}
          data={[23, 7, 70]}
          labels={pieChartOptions2}
        />
      </div>

      {/* Tables & Charts */}
      <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-2">
        <DailyTraffic
          title={"จำนวนผู้เล่นที่ผ่าน หรือไม่ผ่านในระดับต่างๆ"}
          data={[
            {
              name: "Daily Traffic",
              data: [20, 30, 40, 20],
            },
          ]}
          categories={barChartOptionsDailyTraffic}
        />
        <DailyTraffic
          title={"จำนวนผู้เล่นที่ challange สำเร็จ หรือไม่สำเร็จในระดับต่างๆ"}
          data={[
            {
              name: "Daily Traffic",
              data: [20, 30, 40, 20],
            },
          ]}
          categories={barChartOptionsDailyTraffic2}
        />
        {/* Check Table */}
        <div>
          {/* <CheckTable
                        columnsData={columnsDataCheck}
                        tableData={tableDataCheck}
                    /> */}
          <PieChartCard2
            title={
              "เวลาของผู้เล่นที่เลือกจะ challange หลังจากที่สามารถทำได้แล้ว"
            }
            data={[30, 70]}
            labels={pieChart2Options1}
            data2={[80, 20]}
            labels2={pieChart2Options2}
          />
        </div>

        {/* Traffic chart & Pie Chart */}
        <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-1">
          {/* <DailyTraffic /> */}
          <PieChartCard2
            title={"เวลาที่ผู้เล่นดู หรืออยู่ในหน้าสรุปผลการเล่นของรอบนั้นๆ"}
            data={[30, 70]}
            labels={pieChart2Options3}
            data2={[80, 20]}
            labels2={pieChart2Options4}
          />
        </div>
        <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-1">
          <DonutChart
            title={
              "จำนวนผู้เล่นที่กดเล่นใหม่หลังจากจบเกม"
            }
          />
        </div>
        <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-1">
          <DailyTraffic
            title={"เวลาที่ผู้เล่นดู หรืออยู่ในหน้า Leaderboard"}
            data={[
              {
                name: "Daily Traffic",
                data: [20, 30, 40, 20, 40, 12],
              },
            ]}
            categories={barChartOptionsDailyTraffic3}
          />
        </div>
        <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-1">
          <TotalSpent
            title={"จำนวนผู้เล่นที่กดเล่นใหม่หลังจากจบเกม"}
            total={"37.5K"}
            data={temp}
          />
        </div>
        <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-1">
          <TestLineChart
            title={
              "วันไหนในสัปดาห์คนนิยมเล่นเยอะที่สุด (จันทร์/อังคาร/พุธ/พฤหัส/ศุกร์/เสาร์/อาทิตย์) ใน 1 สัปดาห์"
            }
            data={{
              labels: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ],
              datasets: [
                {
                  data: [86, 114, 106, 106, 107, 111, 133],
                  label: "Male T1",
                  borderColor: "rgb(62,149,205)",
                  backgroundColor: "rgb(62,149,205,0.1)",
                },
                {
                  data: [40, 100, 44, 70, 63, 30, 10],
                  label: "Male T2",
                  borderColor: "rgb(60,186,159)",
                  backgroundColor: "rgb(60,186,159,0.1)",
                },
                {
                  data: [10, 21, 60, 44, 17, 21, 17],
                  label: "Male T3",
                  borderColor: "rgb(255,165,0)",
                  backgroundColor: "rgb(255,165,0,0.1)",
                },
                {
                  data: [6, 3, 2, 2, 7, 0, 16],
                  label: "Female T1",
                  borderColor: "rgb(196,88,80)",
                  backgroundColor: "rgb(196,88,80,0.1)",
                },
                {
                  data: [2, 42, 22, 32, 37, 20, 16],
                  label: "Female T2",
                  borderColor: "rgb(21,99,0)",
                  backgroundColor: "rgb(196,88,80,0.1)",
                },
              ],
            }}
          />
        </div>
        <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-1">
          <TestLineChart2
            title={"ผู้เล่นส่นใจเกมมากน้อยเพียงใด"}
            data={{
              labels: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ],
              datasets: [
                {
                  data: [86, 114, 106, 106, 107, 111, 133],
                  label: "Male T1",
                  borderColor: "rgb(62,149,205)",
                  backgroundColor: "rgb(62,149,205,0.1)",
                },
                {
                  data: [40, 100, 44, 70, 63, 30, 10],
                  label: "Male T2",
                  borderColor: "rgb(60,186,159)",
                  backgroundColor: "rgb(60,186,159,0.1)",
                },
                {
                  data: [10, 21, 60, 44, 17, 21, 17],
                  label: "Male T3",
                  borderColor: "rgb(255,165,0)",
                  backgroundColor: "rgb(255,165,0,0.1)",
                },
                {
                  data: [6, 3, 2, 2, 7, 0, 16],
                  label: "Female T1",
                  borderColor: "rgb(196,88,80)",
                  backgroundColor: "rgb(196,88,80,0.1)",
                },
                {
                  data: [2, 42, 22, 32, 37, 20, 16],
                  label: "Female T2",
                  borderColor: "rgb(21,99,0)",
                  backgroundColor: "rgb(196,88,80,0.1)",
                },
              ],
            }}
          />
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
