import React, { useState } from 'react';
import { Box, Typography, Card, CardContent, Grid } from "@mui/material";
import ReactFlow from "reactflow";
import "reactflow/dist/style.css";

function FlowChart({ nodes, edges, title }) {
    return (
      <Box sx={{ height: 500, border: "1px solid #ccc", borderRadius: 2, p: 2, overflow: 'auto' }}>
        <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold", textAlign: "center" }}>
          {title}
        </Typography>
        <ReactFlow nodes={nodes} edges={edges} fitView />
      </Box>
    );
  }
  

  const topicData = {
    "Frontend Development": {
      nodes: [
        { id: "1", data: { label: "Frontend Development" }, position: { x: 250, y: 0 } },
        { id: "2", data: { label: "HTML" }, position: { x: 100, y: 100 } },
        { id: "3", data: { label: "CSS" }, position: { x: 250, y: 100 } },
        { id: "4", data: { label: "JavaScript" }, position: { x: 400, y: 100 } },
        { id: "5", data: { label: "React.js" }, position: { x: 100, y: 200 } },
        { id: "6", data: { label: "Testing" }, position: { x: 250, y: 200 } },
        { id: "7", data: { label: "TypeScript" }, position: { x: 400, y: 200 } },
      ],
      edges: [
        { id: "e1-2", source: "1", target: "2" },
        { id: "e1-3", source: "1", target: "3" },
        { id: "e1-4", source: "1", target: "4" },
        { id: "e3-5", source: "3", target: "5" },
        { id: "e4-6", source: "4", target: "6" },
      ]
    },
    "HTML": {
      nodes: [
        { id: "1", data: { label: "HTML" }, position: { x: 250, y: 0 } },
        { id: "2", data: { label: "Structure of an HTML document" }, position: { x: 100, y: 100 } },
        { id: "3", data: { label: "Elements, Attributes, Tags" }, position: { x: 250, y: 100 } },
        { id: "4", data: { label: "HTML Tags" }, position: { x: 100, y: 200 } },
        { id: "5", data: { label: "Forms and Inputs" }, position: { x: 250, y: 200 } },
        { id: "6", data: { label: "Links, Images, and Multimedia" }, position: { x: 400, y: 200 } },
        { id: "7", data: { label: "Semantic HTML" }, position: { x: 100, y: 300 } },
        { id: "8", data: { label: "Accessibility in HTML" }, position: { x: 250, y: 300 } },
      ],
      edges: [
        { id: "e1-2", source: "1", target: "2" },
        { id: "e1-3", source: "1", target: "3" },
        { id: "e3-4", source: "3", target: "4" },
        { id: "e3-5", source: "3", target: "5" },
        { id: "e3-6", source: "3", target: "6" },
        { id: "e3-7", source: "3", target: "7" },
        { id: "e3-8", source: "3", target: "8" },
      ]
    },
    "CSS": {
      nodes: [
        { id: "1", data: { label: "CSS" }, position: { x: 250, y: 0 } },
        { id: "2", data: { label: "CSS Syntax" }, position: { x: 100, y: 100 } },
        { id: "3", data: { label: "Box Model" }, position: { x: 250, y: 100 } },
        { id: "4", data: { label: "Positioning" }, position: { x: 400, y: 100 } },
        { id: "5", data: { label: "Flexbox Layout" }, position: { x: 100, y: 200 } },
        { id: "6", data: { label: "Grid Layout" }, position: { x: 250, y: 200 } },
        { id: "7", data: { label: "Responsive Design" }, position: { x: 400, y: 200 } },
        { id: "8", data: { label: "CSS Transitions and Animations" }, position: { x: 100, y: 300 } },
        { id: "9", data: { label: "CSS Variables" }, position: { x: 250, y: 300 } },
      ],
      edges: [
        { id: "e1-2", source: "1", target: "2" },
        { id: "e1-3", source: "1", target: "3" },
        { id: "e1-4", source: "1", target: "4" },
        { id: "e3-5", source: "3", target: "5" },
        { id: "e3-6", source: "3", target: "6" },
        { id: "e3-7", source: "3", target: "7" },
        { id: "e3-8", source: "3", target: "8" },
        { id: "e3-9", source: "3", target: "9" },
      ]
    },
    // Add the rest of the topics following the same structure...
    "JavaScript Basics": {
      nodes: [
        { id: "1", data: { label: "JavaScript Basics" }, position: { x: 250, y: 0 } },
        { id: "2", data: { label: "Syntax and Structure" }, position: { x: 100, y: 100 } },
        { id: "3", data: { label: "Operators" }, position: { x: 250, y: 100 } },
        { id: "4", data: { label: "Control Flow" }, position: { x: 400, y: 100 } },
        { id: "5", data: { label: "Functions and Scope" }, position: { x: 100, y: 200 } },
        { id: "6", data: { label: "DOM Manipulation" }, position: { x: 250, y: 200 } },
        { id: "7", data: { label: "Event Handling" }, position: { x: 400, y: 200 } },
        { id: "8", data: { label: "Error Handling" }, position: { x: 100, y: 300 } },
        { id: "9", data: { label: "Asynchronous JavaScript" }, position: { x: 250, y: 300 } },
      ],
      edges: [
        { id: "e1-2", source: "1", target: "2" },
        { id: "e1-3", source: "1", target: "3" },
        { id: "e1-4", source: "1", target: "4" },
        { id: "e1-5", source: "1", target: "5" },
        { id: "e3-6", source: "3", target: "6" },
        { id: "e3-7", source: "3", target: "7" },
        { id: "e3-8", source: "3", target: "8" },
        { id: "e3-9", source: "3", target: "9" },
      ]
    },
    // Add more topic data similarly
  };
  
function FrontendContent() {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const handleClick = (topic) => {
    setSelectedTopic(topicData[topic]);
  };

  return (
    <Box sx={{ height: "100%" }}>
      <Grid container spacing={2}>
        {/* Cards for topics */}
        {Object.keys(topicData).map((topic) => (
          <Grid item xs={12} sm={6} md={4} key={topic}>
            <Card onClick={() => handleClick(topic)} sx={{ cursor: "pointer" }}>
              <CardContent>
                <Typography variant="h6">{topic}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Render FlowChart based on selected topic */}
      {selectedTopic && (
        <Box sx={{ marginTop: 3 }}>
          <FlowChart nodes={selectedTopic.nodes} edges={selectedTopic.edges} title="Topic Flowchart 📚" />
        </Box>
      )}
    </Box>
  );
}

export default FrontendContent;
