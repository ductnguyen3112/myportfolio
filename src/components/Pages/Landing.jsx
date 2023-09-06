import "./landing.css";
import React from "react";
import TypingAnimationWithCursor from "../functions/TypingAnimationWithCursor"; // Import the TypingAnimationWithCursor component
import Button from "@mui/material/Button";
import transition from "../Transition"; 

const Landing = () => {
  return (
    <div className="landing-container">
      <div className="intro-avatar-container">
        <div className="name-wrapper">
          <h3>
            {" "}
            <span>Welcome </span> to My Portfolio
          </h3>
          <h1>Duc Thinh Nguyen</h1>
          <h2>
            I'm{" "}
            <span>
              <TypingAnimationWithCursor
                words={["Developer", "Web Designer", "SEO Freelancer"]}
              />
            </span>
          </h2>
          <div className="button-container">
           
          </div>
        </div>

        <div className="avatar-wrapper">
          <img
            src="https://scontent.fyhu2-1.fna.fbcdn.net/v/t1.6435-9/64913395_10213224030988286_6547385640810446848_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFuPCr2bBzFw15sJizNeJqLUk0_uaKUAvBSTT-5opQC8BrQqmQyZu-cNBpvEhvaz9k&_nc_ohc=0OGP4OITejAAX-VMF51&_nc_ht=scontent.fyhu2-1.fna&oh=00_AfDqZzP4pR2HMWcy048JHfL8SadRyG-ZsQCJZqMDEizG3w&oe=651B0D27"
            alt="User Avatar"
            className="avatar"
          />
        </div>
      </div>
    </div>
  );
};

export default transition(Landing);
