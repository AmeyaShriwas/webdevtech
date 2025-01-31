import React, { useState } from "react";
import MonacoEditor from "@monaco-editor/react";
import { Modal, Button, Box, Divider, useMediaQuery } from "@mui/material";
import { AiOutlineCode } from "react-icons/ai";
import axios from "axios";

const CodeEditor = () => {
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  const [open, setOpen] = useState(false);

  const isMobile = useMediaQuery("(max-width: 600px)");

  const handleRunCode = async () => {
    try {
      const response = await axios.post("http://localhost:5000/run-code", {
        code: code, // sending the code to the server
      });
      const result = response.data; // axios automatically parses the response as JSON
      console.log("res", result);
      setOutput(result.output);
    } catch (error) {
      console.log("error", error);
      setOutput("Error executing code");
    }
  };

  // Open modal
  const handleOpen = () => setOpen(true);

  // Close modal
  const handleClose = () => setOpen(false);

  return (
    <div>
      {/* Floating icon to open the modal */}
      <AiOutlineCode
        size={40}
        onClick={handleOpen}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          cursor: "pointer",
        }}
      />

      {/* Modal for code editor */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description">
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "white",
            padding: 4,
            borderRadius: 2,
            boxShadow: 24,
            display: "flex",
            flexDirection: isMobile ? "column" : "row", // Adjust layout based on screen size
            width: "80%",
            height: "80%",
          }}>
          {/* Code Editor */}
          <Box sx={{ width: isMobile ? "100%" : "50%" }}>
            <h2 id="modal-title">Code Editor</h2>
            <MonacoEditor
              height="60vh"
              language="javascript"
              value={code}
              onChange={(value) => setCode(value)}
              options={{
                selectOnLineNumbers: true,
              }}
            />
          </Box>

          {/* Divider */}
          {!isMobile && (
            <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />
          )}

          {/* Output Section */}
          <Box sx={{ width: isMobile ? "100%" : "50%" }}>
            <Button variant="contained" onClick={handleRunCode} sx={{ mt: 2 }}>
              Run Code
            </Button>
            <pre>{output}</pre>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default CodeEditor;
