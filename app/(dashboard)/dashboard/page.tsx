import dynamic from 'next/dynamic';
import { FC } from 'react';

// import MiniCalendar from "@/components/calendar/MiniCalendar";
import WeeklyRevenue from "./components/WeeklyRevenue";
import TotalSpent from "./components/TotalSpent";
import PieChartCard from "./components/PieChartCard";
import { IoMdFemale, IoMdHome, IoMdMale } from "react-icons/io";
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

const MiniCalendar = dynamic(() => import("@/components/calendar/MiniCalendar"), {
    loading: () => <p>loading...</p>,
    ssr: false
})

type Props = {};

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
            </div>
            

            {/* Charts */}
            <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
                {/* <WeeklyRevenue /> */}
                <PieChartCard  title={'ผู้เล่นใช้เวลาตัดสินใจกี่วินาทีเพื่อที่จะกดปุ่ม เข้าสู่ระบบ'} />
                <TotalSpent />
            </div>
            <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
                {/* <WeeklyRevenue /> */}
                <PieChartCard title={"ผู้เล่นใช้เวลาตัดสินใจกี่วินาทีก่อนจะเลือกเมนู"}/>
                <PieChartCard title={'ผู้เล่นใช้เวลากี่วินาทีในการประกอบส่วนผสมต่อ 1 รายการ'} />
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
                                        <PieChartCard2 title={'เวลาของผู้เล่นที่เลือกจะ challange หลังจากที่สามารถทำได้แล้ว'} />

                </div>

                {/* Traffic chart & Pie Chart */}
                <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-1">
                    {/* <DailyTraffic /> */}
                    <PieChartCard2 title={'เวลาที่ผู้เล่นดู หรืออยู่ในหน้าสรุปผลการเล่นของรอบนั้นๆ'} />
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