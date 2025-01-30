import React from "react";
import { Box, Typography, Button } from "@mui/material";

const Courseoverview = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        padding: "20px",
        backgroundColor: "white",
        height: "100vh", // Ensure the content occupies full viewport height
        overflowY: "auto", // Add vertical scroll if content overflows
      }}>
      {/* Welcome Section */}
      <Typography
        variant="h5"
        sx={{ fontWeight: "bold", mb: 3, color: "#333" }}>
        Welcome to Webdevtech 🚀
      </Typography>
      {/* <Typography variant="body1" sx={{ mb: 4, color: "#555" }}>
        Learn web development, MERN stack, and mobile app development.
      </Typography> */}

      {/* Features Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          flexWrap: "wrap",
          mb: 0,
        }}>
        <Box sx={featureBoxStyle}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
            Notes
          </Typography>
          <Typography variant="body2" sx={{ fontSize: "14px", color: "#666" }}>
            Access all the course notes and study materials.
          </Typography>
        </Box>

        <Box sx={featureBoxStyle}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
            One-to-One Lectures
          </Typography>
          <Typography variant="body2" sx={{ fontSize: "14px", color: "#666" }}>
            Get personalized guidance through one-to-one lectures.
          </Typography>
        </Box>

        <Box sx={featureBoxStyle}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
            Guidance
          </Typography>
          <Typography variant="body2" sx={{ fontSize: "14px", color: "#666" }}>
            Clear your doubts and get expert guidance for your projects.
          </Typography>
        </Box>
      </Box>

      {/* WhatsApp Contact Section (Mobile Phone Design) */}
      <Box
        sx={{
          textAlign: "center",
          padding: "20px",
          height: "80vh", // Ensure the content occupies full viewport height
          overflowY: "auto", // Add vertical scroll if content overflows
        }}>
        {/* WhatsApp Contact Section (Mobile Phone Design Combined) */}
        <Box sx={phoneBoxStyle}>
          <Box sx={whatsappHeaderStyle}>
            <Typography variant="h6" sx={{ color: "#fff" }}>
              Webdevtech
            </Typography>
          </Box>
          <Box sx={whatsappMessageBoxStyle}>
            <Typography
              variant="body2"
              sx={{ color: "#128C7E", fontWeight: "bold" }}>
              "I want to learn React"
            </Typography>
          </Box>
          <Box sx={whatsappContactDetailsStyle}>
            <Typography variant="body1" sx={{ mb: 3, color: "#555" }}>
              For free guidance, just message me on WhatsApp with your query.
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontSize: "14px", mb: 3, color: "#555" }}>
              WhatsApp Number: <strong>7354820386</strong>
            </Typography>
          </Box>
          <Button
            variant="contained"
            sx={whatsappButtonStyle}
            href="https://wa.me/7354820386"
            target="_blank">
            Message Me on WhatsApp
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

// Styles for the feature boxes
const featureBoxStyle = {
  width: "25%",
  padding: "15px",
  border: "1px solid #ddd",
  borderRadius: "8px",
  boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  backgroundColor: "#fff",
  "@media (max-width: 600px)": {
    width: "100%", // Stack the boxes on small screens
    marginBottom: "20px", // Add some space between the stacked boxes
  },
};

const phoneBoxStyle = {
  width: "100%", // Take full width on all devices
  maxWidth: "400px", // Limit max width for larger screens
  margin: "20px auto",
  borderRadius: "16px",
  border: "1px solid #ddd",
  boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
  backgroundColor: "#fff",
  display: "flex",
  flexDirection: "column",
  "@media (max-width: 600px)": {
    width: "100%", // Ensure it occupies the full screen width on small devices
  },
};


const whatsappHeaderStyle = {
  backgroundColor: "#075e54",
  padding: "10px",
  borderTopLeftRadius: "16px",
  borderTopRightRadius: "16px",
  textAlign: "center",
};

const whatsappMessageBoxStyle = {
  padding: "15px",
  borderBottom: "1px solid #ddd",
  backgroundColor: "#e1e1e1",
  fontSize: "14px",
};

const whatsappContactDetailsStyle = {
  padding: "15px",
  backgroundColor: "#f9f9f9",
  borderBottom: "1px solid #ddd",
  fontSize: "14px",
};

const whatsappButtonStyle = {
  backgroundColor: "#25D366",
  color: "white",
  textTransform: "none",
  padding: "10px",
  borderRadius: "8px",
  margin: "10px",
  "&:hover": {
    backgroundColor: "#128C7E",
  },
};

// Styles for the WhatsApp contact details box
const whatsappDetailsBoxStyle = {
  padding: "20px",
  border: "1px solid #ddd",
  borderRadius: "8px",
  boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  maxWidth: "400px",
  margin: "auto",
  backgroundColor: "#fff",
  "@media (max-width: 600px)": {
    width: "100%", // Ensure the contact box also adapts to smaller screens
    padding: "15px",
  },
};

export default Courseoverview;
