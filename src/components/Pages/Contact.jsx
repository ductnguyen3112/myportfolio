import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import emailjs from 'emailjs-com';
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import transition from "../Transition";
import phone from "../images/phone.png";
const defaultTheme = createTheme();

function Contact() {
  const [Notification, setNotification] = useState("");


  const sendEmail = (event) => {
    event.preventDefault();
    const email = event.currentTarget.email.value.trim();
    const fullName = event.currentTarget.fullname.value.trim();
    const message = event.currentTarget.message.value.trim();

    // Check if any field is an empty string
    if (email === "") {
      setNotification('Email field is empty. Please provide an email.');
      return; // Exit the function
    }

    if (fullName === "") {
      setNotification('Full Name is empty. Please provide your full name.');
      return; // Exit the function
    }

    if (message === "") {
      setNotification('Message is empty. Please write something before sending.');
      return; // Exit the function
    }
    emailjs.sendForm('service_pmu7nai', 'template_h7lt0tk', event.currentTarget, 'PD8MtmLy_3yI1cVd8')
      .then((result) => {
        console.log(result.text);
        setNotification('Message sent successfully');
      }, (error) => {
        console.log(error.text);
        setNotification('Failed to send message. Please try again later.');
      });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{
          marginTop: "100px",
          marginLeft: {
            xs: "20px",
            sm: "40px",
            md: "100px",
          },
          marginRight: {
            xs: "20px",
            sm: "40px",
            md: "100px",
          },
          marginBottom: {
            xs: "20px",
            sm: "40px",
            md: "100px",
          },
        }}
      >
        <Grid container component="main" sx={{ height: "50vh", width: "90vh" }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={5}
            sx={{
              backgroundImage: `url(${phone})`,

              backgroundRepeat: "no-repeat",

              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "15px",
            }}
          />
          <Grid
            item
            xs={12}
            sm={8}
            md={7}
            component={Paper}
            elevation={6}
            square
            sx={{ borderRadius: "15px" }}
          >
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 2, bgcolor: "#222152" }}>
                <AttachEmailIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Contact Me
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={sendEmail}
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  label="Full Name"
                  id="fullname"
                  name="fullname"
                />
                <TextField
                  id="outlined-multiline-static"
                  label="Message"
                  multiline
                  rows={4}
                  defaultValue=""
                  variant="outlined"
                  fullWidth
                  name="message"
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, backgroundColor: '#222152' }}
                >
                  Submit
                </Button>
              </Box>
              <Typography sx={{ fontSize: "15px" }}>
                {Notification}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}
export default transition(Contact);
