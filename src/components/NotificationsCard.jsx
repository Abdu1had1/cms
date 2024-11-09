import React from 'react';

const NotificationsCard = () => {
  return (
    <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[48%] mx-auto bg-white shadow-lg rounded-sm border-t-4 border-[#1abc9c]">
      {/* Header Section */}
      <div className="flex justify-between items-center p-4">
        <h2 className="text-gray-700 font-semibold text-lg">NOTIFICATION AND ALERTS</h2>
        <button className="bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded">
          See All
        </button>
      </div>

      {/* Notification Items */}
      <div className="p-4 space-y-4">
        {/* Notification Item */}
        <div className="p-2 border-t-2 border-gray-200">
          <div className="flex items-center">
            <span className="text-gray-700 font-medium">Notification</span>
            <span className="ml-2 bg-red-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
              New
            </span>
          </div>
          <a href="#" className="text-blue-600 text-sm">Mobile OTP Code : 9743</a>
        </div>

        {/* Another Notification Item */}
        <div className="p-2  border-t-2 border-gray-200">
          <div className="flex items-center">
            <span className="text-gray-700 font-medium">Notification</span>
            <span className="ml-2 bg-red-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
              New
            </span>
          </div>
          <a href="#" className="text-blue-600 text-sm">Mobile OTP Code : 9743</a>
        </div>
      </div>
    </div>
  );
};

export default NotificationsCard;
