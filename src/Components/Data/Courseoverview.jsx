import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";

const Courseoverview = () => {
  return (
    <Box sx={{ textAlign: "center", overflow: 'auto' }}>
    <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3 }}>
      Welcome to Webdevtech 🚀
    </Typography>
    <Typography variant="body1" sx={{ mb: 4 }}>
      Learn web development, MERN stack, and mobile app development.
    </Typography>
  </Box>
  )
}

export default Courseoverview
