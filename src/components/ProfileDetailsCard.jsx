import React from 'react';
import { FaUserAlt, FaUniversity, FaEnvelope, FaPhoneAlt, FaBook, FaGraduationCap } from 'react-icons/fa';

const ProfileDetailsCard = () => {
  return (
    <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[48%] mx-auto bg-white shadow-lg rounded-sm border-t-4 border-[#1abc9c] overflow-hidden">
      {/* Top Section with Avatar and Basic Info */}
      <div className="p-2 flex flex-col sm:flex-row items-center border-b border-gray-200">
        <img
          src={`${process.env.PUBLIC_URL}/assets/pfp.jpg`}
          alt="Profile"
          className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-gray-300"
        />
        <div className="mt-3 sm:mt-0 sm:ml-4">
          <h2 className="text-base sm:text-lg font-medium text-gray-800">Abdul Hadi</h2>
          <div className="text-xs sm:text-sm text-gray-600 flex items-center gap-2 mt-1">
            <FaUserAlt className="text-blue-500 text-xs" />
            <span>F2024-0622</span>
          </div>
          <div className="text-xs sm:text-sm text-gray-600 flex items-center gap-2 mt-1 sm:text-left">
            <FaUniversity className="text-yellow-600 text-xs" />
            <span>School of Media and Mass Communication</span>
          </div>
        </div>
      </div>

      {/* Status Badges */}
      <div className="p-2 flex flex-wrap gap-1 border-b border-gray-200">
        <span className="bg-green-500 text-white text-[10px] font-semibold px-2 py-0.5 rounded-lg">Active</span>
        <span className="bg-blue-500 text-white text-[10px] font-semibold px-2 py-0.5 rounded-lg">Semester I</span>
        <span className="bg-yellow-500 text-white text-[10px] font-semibold px-2 py-0.5 rounded-lg">Fall 2024</span>
      </div>

      {/* Details Section */}
      <div className="p-2 space-y-1 text-gray-800 text-xs sm:text-sm">
        <div className="flex items-center gap-2">
          <FaBook className="text-green-600 text-sm" />
          <span className="font-medium">Department of Journalism</span>
        </div>
        <div className="flex items-center gap-2">
          <FaGraduationCap className="text-yellow-500 text-sm" />
          <span className="font-medium">BS Journalism and Media Studies</span>
        </div>
        <div className="flex items-center gap-2">
          <FaEnvelope className="text-red-500 text-sm" />
          <span>Abdulhadidev9@gmail.com</span>
        </div>
        <div className="flex items-center gap-2">
          <FaEnvelope className="text-red-500 text-sm" />
          <span>Abdulhadi997kips@gmail.com</span>
        </div>
        <div className="flex items-center gap-2">
          <FaPhoneAlt className="text-blue-500 text-sm" />
          <span>+923404456567</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetailsCard;
