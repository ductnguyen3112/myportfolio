import React from "react";
import "./css/landing.css";
import { Grid } from "@mui/material";
import TypingAnimationWithCursor from "../functions/TypingAnimationWithCursor";
import transition from "../Transition";
import { styled } from '@mui/material/styles';
const StyledGrid = styled(Grid)(({ theme }) => ({
  '&.landing-container': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    marginTop: '200px'
  
  },

}));
const Landing = () => {
  return (
    <StyledGrid  container className="landing-container" justifyContent="center" alignItems="center">
      <Grid item xs={12} sm={8} md={6} className="intro-avatar-container">
        <Grid container direction="column">
          <Grid item className="name-wrapper">
            <h3>
              <span>Welcome </span> to My Portfolio
            </h3>
            <h1>Duc Thinh Nguyen</h1>
            <h2>
              I'm{" "}
              <span>
                <TypingAnimationWithCursor
                  words={["Developer", "Web Designer", "Freelancer"]}
                />
              </span>
            </h2>
          </Grid>
        </Grid>
      </Grid>
      </StyledGrid>
  );
};

export default transition(Landing);
