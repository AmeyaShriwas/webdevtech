import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Button,
} from "@mui/material";
import { Minimize, Close } from "@mui/icons-material";
import { jsPDF } from "jspdf";

function TopicPage({ jsonData, title }) {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isTopicSelected, setIsTopicSelected] = useState(false);

  const handleClick = (topic) => {
    const selected = jsonData[topic];
    setSelectedTopic({ selected, title: topic });
    setIsTopicSelected(true); // Set topic as selected
  };

  const handleModalOpen = (subTopic) => {
    const content = jsonData[selectedTopic.title][subTopic];
    setModalContent(content);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setIsMinimized(false);
  };

  const toggleMinimize = () => {
    setIsMinimized((prev) => !prev);
  };

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.text(modalContent, 10, 10);
    doc.save(`${modalContent.substring(0, 10)}_details.pdf`);
  };

  const handleBack = () => {
    setIsTopicSelected(false); // Unselect the topic and show all topics again
    setSelectedTopic(null);
  };

  return (
    <Box
      sx={{
        height: "auto",
        backgroundColor: "white",
        padding: 3,
        overflow: "scroll",
      }}>
      <Typography
        variant="h6"
        sx={{
          fontWeight: "bold",
          marginBottom: 3,
          color: "#3f51b5",
          textAlign: "center",
        }}>
        {title} Topics
      </Typography>

      {isTopicSelected ? (
        <Box sx={{ marginBottom: 3, position:'relative' }}>
          <IconButton
            onClick={handleBack}
            sx={{
              position: "absolute",
              top: 0,
              right: 0,
              color: "white",
              backgroundColor: "grey",
              "&:hover": {
                backgroundColor: "#e0e0e0",
              },
            }}>
            <Close />
          </IconButton>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              marginBottom: 2,
              color: "#1976d2",
              textAlign: "center",
            }}>
            {selectedTopic.title}
          </Typography>
          <Grid container spacing={1}>
            {selectedTopic.selected &&
              selectedTopic.selected.map((subTopic, idx) => (
                <Grid item xs={6} sm={4} md={3} key={idx}>
                  <Card
                    onClick={() => handleModalOpen(subTopic)}
                    sx={{
                      borderRadius: 2,
                      boxShadow: 2,
                      p: 1,
                      backgroundColor: "white",
                    }}>
                    <CardContent sx={{ p: 1 }}>
                      <Typography variant="body2" sx={{ fontSize: 14 }}>
                        {subTopic}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
          </Grid>
        </Box>
      ) : (
        <Grid container spacing={1}>
          {jsonData &&
            Object.keys(jsonData).map((topic) => (
              <Grid item xs={6} sm={4} md={3} key={topic}>
                <Card
                  onClick={() => handleClick(topic)}
                  sx={{
                    cursor: "pointer",
                    borderRadius: 2,
                    boxShadow: 2,
                    "&:hover": {
                      boxShadow: 6,
                    },
                    backgroundColor: "white",
                    p: 1, // smaller padding for compact size
                  }}>
                  <CardContent sx={{ p: 1 }}>
                    <Typography variant="body2" sx={{ fontSize: 14 }}>
                      {topic}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
        </Grid>
      )}

      <Dialog
        open={modalOpen}
        onClose={handleModalClose}
        maxWidth="md"
        fullWidth>
        <DialogTitle>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h6">
              {modalContent ? modalContent.substring(0, 15) : ""} Details
            </Typography>
            <Box>
              <IconButton onClick={toggleMinimize}>
                {isMinimized ? <Minimize /> : <Close />}
              </IconButton>
            </Box>
          </Box>
        </DialogTitle>
        {!isMinimized && (
          <DialogContent>
            <Typography variant="body1">{modalContent}</Typography>
          </DialogContent>
        )}
        <DialogActions>
          <Button onClick={downloadPDF} color="primary">
            Download PDF
          </Button>
          <Button onClick={handleModalClose} color="secondary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default TopicPage;
