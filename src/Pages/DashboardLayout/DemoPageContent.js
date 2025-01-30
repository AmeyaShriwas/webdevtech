import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import ReactFlow from "reactflow";
import "reactflow/dist/style.css";
import FrontendContent from "../../Components/Data/Frontend";
import Courseoverview from "../../Components/Data/Courseoverview";


// Function to render the flowchart
function FlowChart({ nodes, edges, title }) {
  return (
    <Box sx={{ height: 500, border: "1px solid #ccc", borderRadius: 2, p: 2 }}>
      <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold", textAlign: "center" }}>
        {title}
      </Typography>
      <ReactFlow nodes={nodes} edges={edges} fitView />
    </Box>
  );
}

function DemoPageContent({ selectedPage }) {
  console.log('tab', selectedPage);

  // Render content based on selected tab
  const renderContent = () => {
    switch (selectedPage) {
      case "/frontend":
        return <FrontendContent />;
      case "/backend":
        return (
          <Box sx={{ height: 500, overflow: 'auto' }}>
          
          </Box>
        );
      case "/course-overview":
        return (
         <Courseoverview/>
        );
      default:
        return <Typography variant="h5">Content for {selectedPage} Coming Soon</Typography>;
    }
  };

  return renderContent();
}

export default DemoPageContent;
