import React, { useState } from 'react';
import { FaChevronDown, FaDoorOpen } from 'react-icons/fa';

const ProfileCard = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="profile-container">
      <div className="profile-card" onClick={toggleExpand}>
        <img
          src={`${process.env.PUBLIC_URL}/assets/pfp.jpg`} // Using the public path for the avatar image
          alt="User Avatar"
          className="profile-avatar"
        />
        <div className="profile-info">
          <div className="profile-name">Abdul Hadi</div>
          <FaChevronDown className={`chevron ${isExpanded ? 'rotate' : ''}`} />
        </div>
      </div>

      {/* Logout option appears below the profile card */}
      {isExpanded && (
        <div className="profile-logout">
          <FaDoorOpen className="logout-icon" /> {/* Open door icon for logout */}
          <span>Logout</span>
        </div>
      )}
    </div>
  );
};

export default ProfileCard;
