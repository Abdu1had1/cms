import React from "react";
import DashboardHeader from "./DashboardHeader";
import ProfileDetailsCard from "./ProfileDetailsCard";
import NotificationsCard from "./NotificationsCard";
import ExampleComponent from "./Slider";
import CourseCard from "./CourseCard";

const Dashboard = () => {
  return (
    <div className="w-[96vw] bg-[#e9e9e9]">
      {/* Header Section */}
      <div>
        <DashboardHeader />
      </div>

      {/* Dashboard Title and Icon Section */}
      <div className="flex flex-col sm:flex-row justify-between px-2 overflow-x-hidden">
        <h2 className="text-[#4a6076] font-medium text-2xl pt-2 ">Dashboard</h2>
        <div className="flex pt-2 text-center items-center">
          <img
            src={`${process.env.PUBLIC_URL}/assets/calendar.png`}
            alt=""
            className="rounded-full w-[330px] h-[300px] mx-1 sm:w-[45px] sm:h-[45px]"
          />
          <img
            src={`${process.env.PUBLIC_URL}/assets/eportalRound.png`}
            alt=""
            className="rounded-full w-[45px] h-[45px] mx-1"
          />
          <img
            src={`${process.env.PUBLIC_URL}/assets/exam_enterance.png`}
            alt=""
            className="rounded-full w-[45px] h-[45px] mx-1"
          />
          <img
            src={`${process.env.PUBLIC_URL}/assets/Councel.png`}
            alt=""
            className="rounded-full w-[45px] h-[45px] px-1"
          />
          <img
            src={`${process.env.PUBLIC_URL}/assets/web-development.png`}
            alt=""
            className="rounded-full w-[45px] h-[45px] mx-1"
          />
          <img
            src={`${process.env.PUBLIC_URL}/assets/tutorial.png`}
            alt=""
            className="rounded-full w-[45px] h-[45px] mx-1"
          />
          <img
            src={`${process.env.PUBLIC_URL}/assets/feedback.png`}
            alt=""
            className="rounded-full w-[45px] h-[45px] mx-1"
          />
          <img
            src={`${process.env.PUBLIC_URL}/assets/emergency_helpline.png`}
            alt=""
            className="rounded-full w-[45px] h-[45px] mx-1"
          />
        </div>
      </div>


      {/* Profile and Notifications Section */}
      <div className="flex flex-col lg:flex-row justify-between mt-4 gap-4">
        <ProfileDetailsCard />
        <NotificationsCard />
      </div>

      {/* Example Component or Course Cards (Responsive) */}
      <div className="mt-4 px-10 h-auto">
        {/* Display ExampleComponent on larger screens */}
        <div className="hidden sm:block">
          <ExampleComponent />
        </div>

        {/* Display 8 CourseCards in flex-col on mobile screens */}
        <div className="flex flex-col flex-wrap sm:hidden gap-4">
          {[...Array(8)].map((_, index) => (
            <CourseCard
              key={index}
              title={`Course ${index + 1}`}
              status="Relative"
              onWithdraw={() => console.log("Withdraw clicked")}
              gradingLabel="Grading"
              assignmentsLabel="Assignments"
              attendanceLabel="Attendance"
              assignmentLink="#"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
