import React from "react";
import "./UserProfileCard.css";
import profile_icon from "../assets/user.png";
const UserProfileCard = () => {
  return (
    <div className="upc">
      <div className="gradiant"></div>
      <div className="profile-down">
        <img src={profile_icon} alt="" />
        <div className="profile-title">Ananya Kundu</div>
        <div className="profile-description">
          Highly skilled and motivated CodeIgniter developer with seven years of
          experience, proficient in HTML, jQuery, CSS, Bootstrap, and PHP,
          seeking remote opportunities to leverage expertise in web development.
        </div>
        <div className="profile-button">
          <a href="mailto:twispro.ananya@gmail.com">Contact Me</a>
        </div>
      </div>
    </div>
  );
};

export default UserProfileCard;
