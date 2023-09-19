import React from "react";
import { Container, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <footer
      sx={{
        padding: "20px",
        marginTop: "auto",
        backgroundColor: "#333",
        color: "#fff",
      }}
    >
      <Container maxWidth="sm">
        <Typography
          variant="body1"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "5px",
            color: "white"
            
          }}
        >
          ©ducthinhnguyen2023. Powered by&nbsp;
          <Link
            href="https://WebUnity.ca"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: "white",
       
              ":hover": { color: "#ddd" },
            }}
          >
            WebUnity.ca
          </Link>
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
