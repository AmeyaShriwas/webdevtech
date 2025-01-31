import React, { useState } from "react";
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
  useMediaQuery,
} from "@mui/material";
import { Minimize, Close, FileCopy } from "@mui/icons-material";
import { jsPDF } from "jspdf";
import { useTheme } from "@mui/material/styles";
import completeData from "./../../Components/Data/completeData.json";

function TopicPage({ jsonData, title }) {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isTopicSelected, setIsTopicSelected] = useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleClick = (topic) => {
    const selected = jsonData[topic];
    setSelectedTopic({ selected, title: topic });
    setIsTopicSelected(true);
  };

  const handleModalOpen = (subTopic) => {
    if (completeData[subTopic]) {
      setModalContent(completeData[subTopic]);
      setModalOpen(true);
    } else {
      setModalContent(null);
      setModalOpen(false);
    }
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
    doc.text(modalContent ? modalContent.definition : "No content", 10, 10);
    doc.save(
      `${modalContent ? modalContent.definition.substring(0, 10) : "NoContent"}_details.pdf`
    );
  };

  const handleBack = () => {
    setIsTopicSelected(false);
    setSelectedTopic(null);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(modalContent.example);
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
        <Box sx={{ marginBottom: 3, position: "relative" }}>
          <IconButton
            onClick={handleBack}
            sx={{
              position: "absolute",
              top: 0,
              right: 0,
              color: "white",
              backgroundColor: "grey",
              "&:hover": { backgroundColor: "#e0e0e0" },
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
          <Grid container spacing={2}>
            {selectedTopic.selected &&
              selectedTopic.selected.map((subTopic, idx) => (
                <Grid item xs={6} sm={4} md={3} key={idx}>
                  <Card
                    onClick={() => handleModalOpen(subTopic)}
                    sx={{
                      borderRadius: 3,
                      boxShadow: 4,
                      height: 80,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background:
                        "linear-gradient(135deg,rgb(245, 247, 250),rgb(214, 215, 216))",
                      color: "black",
                      transition: "transform 0.2s",
                      cursor: "pointer",
                      "&:hover": { transform: "scale(1.05)", boxShadow: 6 },
                    }}>
                    <CardContent sx={{ p: 1, textAlign: "center" }}>
                      <Typography
                        sx={{
                          fontSize: isSmallScreen ? 12 : 14,
                          fontWeight: "bold",
                        }}>
                        {subTopic}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
          </Grid>
        </Box>
      ) : (
        <Grid container spacing={2}>
          {jsonData &&
            Object.keys(jsonData).map((topic) => (
              <Grid item xs={6} sm={4} md={3} key={topic}>
                <Card
                  onClick={() => handleClick(topic)}
                  sx={{
                    borderRadius: 3,
                    boxShadow: 4,
                    height: 80,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background:
                      "linear-gradient(135deg,rgb(245, 247, 250),rgb(214, 215, 216))",
                    color: "black",
                    transition: "transform 0.2s",
                    cursor: "pointer",
                    "&:hover": { transform: "scale(1.05)", boxShadow: 6 },
                  }}>
                  <CardContent sx={{ p: 1, textAlign: "center" }}>
                    <Typography
                      sx={{
                        fontSize: isSmallScreen ? 12 : 14,
                        fontWeight: "bold",
                      }}>
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
        maxWidth="lg"
        fullWidth>
        <DialogTitle sx={{ backgroundColor: "#f5f5f5" }}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h6" sx={{ color: "#1976d2" }}>
              {modalContent ? modalContent.definition.substring(0, 15) : ""}{" "}
              Details
            </Typography>
            <Box>
              <IconButton onClick={toggleMinimize}>
                {isMinimized ? <Minimize /> : <Close />}
              </IconButton>
            </Box>
          </Box>
        </DialogTitle>
        {!isMinimized && modalContent && (
          <DialogContent sx={{ backgroundColor: "#f5f5f5" }}>
            <Typography variant="body1" sx={{ marginBottom: 2 }}>
              {modalContent.description}
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: "bold" }}>
              How: {modalContent.how}
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: "bold" }}>
              When: {modalContent.when}
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: "bold" }}>
              Example:
            </Typography>
            <Box
              sx={{
                position: "relative",
                backgroundColor: "#e0e0e0",
                padding: 2,
                borderRadius: 2,
              }}>
              <pre
                style={{
                  whiteSpace: "pre-wrap",
                  wordBreak: "break-word",
                  fontSize: "14px",
                }}>
                {modalContent.example}
              </pre>
              <IconButton
                onClick={copyToClipboard}
                sx={{
                  position: "absolute",
                  top: 8,
                  right: 8,
                  backgroundColor: "#ffffff",
                  "&:hover": { backgroundColor: "#e0e0e0" },
                }}>
                <FileCopy />
              </IconButton>
            </Box>
          </DialogContent>
        )}
        <DialogActions sx={{ backgroundColor: "#f5f5f5" }}>
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
