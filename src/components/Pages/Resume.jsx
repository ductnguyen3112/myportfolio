import React from 'react'
import { Grid, Paper } from "@mui/material";
import './resume.css'
import TerminalIcon from '@mui/icons-material/Terminal';
import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import transition from "../Transition";
const Resume = () => {
  return (
    <div className='skill-wrap'>
      <div className='resume-container'>
        <Grid container spacing={2}>
          {/* First Column */}
          <Grid item xs={12} sm={4}>
            <Paper elevation={3} className="column-paper">
              <Grid container direction="column" spacing={1} className="column-container">
                {/* Icon */}
                <Grid item>
                  <div className="center-content">
                    <div className='icon-wrapper'>
                      <TerminalIcon style={{ fontSize: '5rem', color: 'white' }} />
                    </div>
                  </div>
                </Grid>
                {/* Title */}
                <Grid item>
                  <div className="center-content">
                    <h2>Developer</h2>
                  </div>
                </Grid>
                {/* Description */}
                <Grid item>
                  <div className="center-content">
                    <p> I relish creating web and app experiences from the ground up</p>
             
                  </div>
                </Grid>
                <Grid item>
                  <div className="center-content">
                    <p1> Languages I speak:</p1>

                  </div>
                </Grid>

                <Grid item sx={{ marginTop: '-20px' }}>
                  <div className="center-content">
                    <p> HTML, CSS, JavaScript, Python, C#, Lua, PHP</p>
                  </div>
                </Grid>


                <Grid item>
                  <div className="center-content">
                    <p1> Dev Tools:</p1>


                  </div>
                </Grid>

                <Grid item sx={{ marginTop: '-20px' }}>
                  <div className="center-content">
                    <p>React, Node.js, Laravel, MySQL, MongoDB, Bootstrap, MUI</p>
                  </div>
                </Grid>
              </Grid>
            </Paper>
          </Grid>

          {/* Second Column */}
          <Grid item xs={12} sm={4}>
            <Paper elevation={3} className="column-paper">
              <Grid container direction="column" spacing={1} className="column-container">
                {/* Icon */}
                <Grid item>
                  <div className="center-content">
                    <div className='icon-wrapper'>
                      <ViewCarouselIcon style={{ fontSize: '5rem', color: 'white' }} />
                    </div>
                  </div>
                </Grid>
                {/* Title */}
                <Grid item>
                  <div className="center-content">
                    <h2>
                      CMS
                    </h2>
                  </div>
                </Grid>
                {/* Description */}
                <Grid item>
                  <div className="center-content">
                    <p>
                      I appreciate the simplicity of content management, and well-planned user interactions.
                    </p>
                  </div>
                </Grid>
                <Grid item>
                  <div className="center-content">
                    <p1>Experience in Web Design:</p1>

                  </div>
                </Grid>

                <Grid item sx={{ marginTop: '-20px' }}>
                  <div className="center-content">
                    <p> CMS Web Design, SEO Optimization, Digital Marketing Strategy </p>
                  </div>
                </Grid>


                <Grid item>
                  <div className="center-content">
                    <p1> Dev Tools:</p1>

                  </div>
                </Grid>

                <Grid item sx={{ marginTop: '-20px' }}>
                  <div className="center-content">
                    <p>WordPress, Elementor, Yoast SEO, Google Analytic, Facebook & Google Ads</p>
                  </div>
                </Grid>
              </Grid>
            </Paper>
          </Grid>

          {/* Third Column */}
          <Grid item xs={12} sm={4}>
            <Paper elevation={3} className="column-paper">
              <Grid container direction="column" spacing={1} className="column-container">
                {/* Icon */}
                <Grid item>
                  <div className="center-content">
                    <div className='icon-wrapper'>
                      <DesignServicesIcon style={{ fontSize: '5rem', color: 'white' }} />
                    </div>
                  </div>
                </Grid>
                {/* Title */}
                <Grid item>
                  <div className="center-content">
                    <h2>
                      Designer
                    </h2>
                  </div>
                </Grid>
                {/* Description */}
                <Grid item>
                  <div className="center-content">
                    <p>

                      I prioritize clean content structure, simple design patterns, and thoughtful interactions.
                    </p>
          
                  </div>
                </Grid>
                <Grid item>
                  <div className="center-content">
                    <p1>Experience in Graphic Design:</p1>

                  </div>
                </Grid>

                <Grid item sx={{ marginTop: '-20px' }}>
                  <div className="center-content">
                    <p> Photography, Business Card, Menu, Digital Menu, Banner, Slides, Promotion Flyers</p>
                  </div>
                </Grid>


                <Grid item>
                  <div className="center-content">
                    <p1> Design Tools:</p1>

                  </div>
                </Grid>

                <Grid item sx={{ marginTop: '-20px' }}>
                  <div className="center-content">
                    <p>Photoshop, Illustrator, LightRoom, Canva, Figma</p>
                  </div>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </div>

    </div>
  )
}

export default transition(Resume);