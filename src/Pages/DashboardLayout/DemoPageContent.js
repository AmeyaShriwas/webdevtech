import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import ReactFlow from "reactflow";
import "reactflow/dist/style.css";
import FrontendContent from "../../Components/Data/Frontend";
import Courseoverview from "../../Components/Data/Courseoverview";

const frontendNodes = [
  { id: "1", data: { label: "Frontend Development" }, position: { x: 250, y: 0 } },
  { id: "2", data: { label: "HTML" }, position: { x: 100, y: 100 } },
  { id: "3", data: { label: "CSS" }, position: { x: 250, y: 100 } },
  { id: "4", data: { label: "JavaScript" }, position: { x: 400, y: 100 } },
  { id: "5", data: { label: "React.js" }, position: { x: 100, y: 200 } },
  { id: "6", data: { label: "Testing" }, position: { x: 250, y: 200 } },
  { id: "7", data: { label: "TypeScript" }, position: { x: 400, y: 200 } },
  { id: "8", data: { label: "Version Control" }, position: { x: 100, y: 300 } },
  { id: "9", data: { label: "Web Accessibility" }, position: { x: 250, y: 300 } },
  { id: "10", data: { label: "Responsive Design" }, position: { x: 400, y: 300 } },
  { id: "11", data: { label: "CSS Preprocessors (SASS, LESS)" }, position: { x: 100, y: 400 } },
  { id: "12", data: { label: "State Management (Redux, Context API)" }, position: { x: 250, y: 400 } },
  { id: "13", data: { label: "Testing Frameworks (Jest, Mocha)" }, position: { x: 400, y: 400 } },
  { id: "14", data: { label: "Web Performance Optimization" }, position: { x: 100, y: 500 } },
  { id: "15", data: { label: "Single Page Applications (SPA)" }, position: { x: 250, y: 500 } },
  { id: "16", data: { label: "Progressive Web Apps (PWA)" }, position: { x: 400, y: 500 } },
  { id: "17", data: { label: "Frontend Frameworks (Vue.js, Angular)" }, position: { x: 100, y: 600 } },
  { id: "18", data: { label: "Node.js for Frontend" }, position: { x: 250, y: 600 } },
  { id: "19", data: { label: "Web APIs (Fetch, WebSockets)" }, position: { x: 400, y: 600 } },
  { id: "20", data: { label: "Version Control with Git" }, position: { x: 100, y: 700 } },
  { id: "21", data: { label: "APIs and AJAX" }, position: { x: 250, y: 700 } },
  { id: "22", data: { label: "Build Tools and Task Runners" }, position: { x: 400, y: 700 } },
  { id: "23", data: { label: "Deployment and Hosting" }, position: { x: 100, y: 800 } },
  { id: "24", data: { label: "Web Security Basics" }, position: { x: 250, y: 800 } },
  { id: "25", data: { label: "Soft Skills and Project Development" }, position: { x: 400, y: 800 } },
];

const frontendEdges = [
  { id: "e1-2", source: "1", target: "2" },
  { id: "e1-3", source: "1", target: "3" },
  { id: "e1-4", source: "1", target: "4" },
  { id: "e3-5", source: "3", target: "5" },
  { id: "e4-6", source: "4", target: "6" },
  { id: "e4-7", source: "4", target: "7" },
  { id: "e1-8", source: "1", target: "8" },
  { id: "e1-9", source: "1", target: "9" },
  { id: "e1-10", source: "1", target: "10" },
  { id: "e2-11", source: "2", target: "11" },
  { id: "e3-12", source: "3", target: "12" },
  { id: "e4-13", source: "4", target: "13" },
  { id: "e3-14", source: "3", target: "14" },
  { id: "e2-15", source: "2", target: "15" },
  { id: "e2-16", source: "2", target: "16" },
  { id: "e1-17", source: "1", target: "17" },
  { id: "e4-18", source: "4", target: "18" },
  { id: "e5-19", source: "5", target: "19" },
  { id: "e2-20", source: "2", target: "20" },
  { id: "e4-21", source: "4", target: "21" },
  { id: "e2-22", source: "2", target: "22" },
  { id: "e1-23", source: "1", target: "23" },
  { id: "e1-24", source: "1", target: "24" },
  { id: "e1-25", source: "1", target: "25" },
  { id: "e3-24", source: "3", target: "24" },
  { id: "e4-25", source: "4", target: "25" },
];


// Extended syllabus data for backend development
const backendNodes = [
  { id: "1", data: { label: "Backend Development" }, position: { x: 250, y: 0 } },
  { id: "2", data: { label: "Node.js" }, position: { x: 100, y: 100 } },
  { id: "3", data: { label: "Express.js" }, position: { x: 250, y: 100 } },
  { id: "4", data: { label: "MongoDB" }, position: { x: 400, y: 100 } },
  { id: "5", data: { label: "RESTful APIs" }, position: { x: 100, y: 200 } },
  { id: "6", data: { label: "Authentication (JWT, OAuth)" }, position: { x: 250, y: 200 } },
  { id: "7", data: { label: "SQL Databases (MySQL, PostgreSQL)" }, position: { x: 400, y: 200 } },
  { id: "8", data: { label: "Web Security (CORS, CSRF)" }, position: { x: 100, y: 300 } },
  { id: "9", data: { label: "Caching (Redis)" }, position: { x: 250, y: 300 } },
  { id: "10", data: { label: "WebSockets & Real-Time Communication" }, position: { x: 400, y: 300 } },
  { id: "11", data: { label: "Microservices Architecture" }, position: { x: 100, y: 400 } },
  { id: "12", data: { label: "GraphQL" }, position: { x: 250, y: 400 } },
  { id: "13", data: { label: "Docker & Containerization" }, position: { x: 400, y: 400 } },
  { id: "14", data: { label: "CI/CD Pipelines" }, position: { x: 100, y: 500 } },
  { id: "15", data: { label: "Cloud Deployment (AWS, Azure)" }, position: { x: 250, y: 500 } },
  { id: "16", data: { label: "Version Control (Git)" }, position: { x: 400, y: 500 } },
  { id: "17", data: { label: "Testing (Jest, Mocha)" }, position: { x: 100, y: 600 } },
  { id: "18", data: { label: "Logging & Monitoring" }, position: { x: 250, y: 600 } },
  { id: "19", data: { label: "API Documentation (Swagger)" }, position: { x: 400, y: 600 } },
];

// Extended edges for backend
const backendEdges = [
  { id: "e1-2", source: "1", target: "2" },
  { id: "e1-3", source: "1", target: "3" },
  { id: "e1-4", source: "1", target: "4" },
  { id: "e2-5", source: "2", target: "5" },
  { id: "e3-6", source: "3", target: "6" },
  { id: "e4-7", source: "4", target: "7" },
  { id: "e5-8", source: "5", target: "8" },
  { id: "e6-9", source: "6", target: "9" },
  { id: "e7-10", source: "7", target: "10" },
  { id: "e8-11", source: "8", target: "11" },
  { id: "e9-12", source: "9", target: "12" },
  { id: "e10-13", source: "10", target: "13" },
  { id: "e11-14", source: "11", target: "14" },
  { id: "e12-15", source: "12", target: "15" },
  { id: "e13-16", source: "13", target: "16" },
  { id: "e14-17", source: "14", target: "17" },
  { id: "e15-18", source: "15", target: "18" },
  { id: "e16-19", source: "16", target: "19" },
];


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
            <FlowChart nodes={backendNodes} edges={backendEdges} title="Backend Development Syllabus 🖥️" />
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
