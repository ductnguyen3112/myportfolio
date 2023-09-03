import "./landing.css";
import React from "react";
import TypingAnimationWithCursor from "../funciton/TypingAnimationWithCursor"; // Import the TypingAnimationWithCursor component
import Button from "@mui/material/Button";
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
          <h2 style={{ marginTop: "-20px" }}>
            I'm{" "}
            <span>
              <TypingAnimationWithCursor
                words={["Developer", "Web Designer", "SEO Freelancer"]}
              />
            </span>
          </h2>
          <Button
            variant="outlined"
            color="primary"
            style={{
              borderColor: "#009BDF", // Change the border color
              color: "#009BDF", // Change the text color
            }}
          >
            Read More About Me
          </Button>
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

export default Landing;
