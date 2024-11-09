import React from "react";
import {
  FaUserCircle,
  FaHome,
  FaGraduationCap,
  FaClock,
  FaBook,
  FaCommentDots,
} from "react-icons/fa";

const CourseCard = ({
  title,
  status,
  onWithdraw,
  gradingLabel,
  assignmentsLabel,
  attendanceLabel,
  assignmentLink,
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg border border-gray-200 w-[300px] h-[280px] flex flex-col justify-between">
      {/* Card Header */}
      <div className="bg-teal-600 text-white p-4 -center">
        <h3 className="text-sm font-semibold">{title}</h3>
        <div className="flex justify-between items-center">
          <p className="text-xs text-red-300">{status}</p>
          <p className="text-xs text-white cursor-pointer flex items-center gap-1" onClick={onWithdraw}>
            Withdraw{" "}
            <span className="text-red-500 flex">
              <img
                className="w-3 h-3"
                src={`${process.env.PUBLIC_URL}/assets/closewithdraw.png`}
                alt=""
              />
            </span>
          </p>
          <FaUserCircle size={30} />
        </div>
      </div>

      {/* Card Body */}
      <div className="p-4 space-y-2">
        <div className="flex justify-between items-center border-b border-gray-200 pb-2">
          <p>{gradingLabel}</p>
          <FaHome className="text-blue-500" />
        </div>
        <div className="flex justify-between items-center border-b border-gray-200 pb-2">
          <p>{assignmentsLabel}</p>
          <a
            href={assignmentLink}
            className="text-blue-500 text-sm flex items-center pb-2"
          >
            Online Exam <FaGraduationCap className="ml-1" />
          </a>
        </div>
        <div className="flex justify-between items-center">
          <p>{attendanceLabel}</p>
          <FaClock className="text-blue-500" />
        </div>
      </div>

      {/* Card Footer */}
      <div className="flex justify-around items-center p-2 border-t border-gray-200 text-blue-500">
        <FaBook size={20} />
        <FaGraduationCap size={20} />
        <FaCommentDots size={20} />
      </div>
    </div>
  );
};

export default CourseCard;
