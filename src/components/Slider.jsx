import React from "react";
import "swiper/css"; // Import Swiper's core styles
import "swiper/css/scrollbar"; // Import Scrollbar styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules"; // Correct import for Swiper v8+
import CourseCard from "./CourseCard";

const ExampleComponent = () => {
  return (
    <main className="ExampleComponent">
      <div className="main-wrap">
        <Swiper
          modules={[Scrollbar]}
          slidesPerView={4}
          spaceBetween={5}
          initialSlide={1}
          centeredSlides={false}
          scrollbar={{ draggable: true, dragSize: 24 }}
        >
          <SwiperSlide>
            <CourseCard
              title="JOU-113 Mass Media: Local, National and Global (A)"
              status="Relative"
              onWithdraw={""}
              gradingLabel="Grading"
              assignmentsLabel="Assignments"
              attendanceLabel="Attendance"
              assignmentLink="#"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CourseCard
              title="JOU-113 Mass Media: Local, National and Global (A)"
              status="Relative"
              onWithdraw={""}
              gradingLabel="Grading"
              assignmentsLabel="Assignments"
              attendanceLabel="Attendance"
              assignmentLink="#"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CourseCard
              title="JOU-113 Mass Media: Local, National and Global (A)"
              status="Relative"
              onWithdraw={""}
              gradingLabel="Grading"
              assignmentsLabel="Assignments"
              attendanceLabel="Attendance"
              assignmentLink="#"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CourseCard
              title="JOU-113 Mass Media: Local, National and Global (A)"
              status="Relative"
              onWithdraw={""}
              gradingLabel="Grading"
              assignmentsLabel="Assignments"
              attendanceLabel="Attendance"
              assignmentLink="#"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CourseCard
              title="JOU-113 Mass Media: Local, National and Global (A)"
              status="Relative"
              onWithdraw={""}
              gradingLabel="Grading"
              assignmentsLabel="Assignments"
              attendanceLabel="Attendance"
              assignmentLink="#"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CourseCard
              title="JOU-113 Mass Media: Local, National and Global (A)"
              status="Relative"
              onWithdraw={""}
              gradingLabel="Grading"
              assignmentsLabel="Assignments"
              attendanceLabel="Attendance"
              assignmentLink="#"
            />
          </SwiperSlide>
          
        </Swiper>
      </div>
    </main>
  );
};

export default ExampleComponent;
