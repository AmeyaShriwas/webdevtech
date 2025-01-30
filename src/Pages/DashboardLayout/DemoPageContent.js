import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import ReactFlow from "reactflow";
import "reactflow/dist/style.css";
import Courseoverview from "../../Components/Data/Courseoverview";
import Htmlcss from "../../Components/Data/Htmllcss";
import Css from './../../Components/Data/Css.jsx'
import Javascript from "../../Components/Data/Javascript.jsx";

function DemoPageContent({ selectedPage }) {

  // Render content based on selected tab
  const renderContent = () => {
    switch (selectedPage) {
      case "/html":
        return <Htmlcss />;
      case "/css":
        return <Css />;
      case "/javascript":
        return <Javascript/>;
      case "/course-overview":
        return <Courseoverview />;
      default:
        return <Courseoverview />;
    }
  };

  return renderContent();
}

export default DemoPageContent;
