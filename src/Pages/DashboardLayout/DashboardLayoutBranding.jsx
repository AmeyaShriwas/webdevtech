import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NAVIGATION from "./Navigation";
import DemoPageContent from "./DemoPageContent";
import CodeEditor from "../CodeEditor/CodeEditor";

const drawerWidth = 240;

function DashboardLayout({ window }) {
  const [selectedPage, setSelectedPage] = useState("/course-overview");
  const [mobileOpen, setMobileOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavigation = (segment) => {
    console.log("se", segment);
    setSelectedPage(segment);
    if (isMobile) {
      setMobileOpen(false);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        overflow: "scroll",
        flexDirection: "column",
      }}>
      {/* App Header */}
      <AppBar
        position="fixed"
        sx={{
          zIndex: 1300,
          bgcolor: "white",
          boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
        }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Left side: Menu icon and title */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton color="black" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
            <Typography sx={{ ml: 2, fontWeight: "bold", color: "black" }}>
              WEBDEVTECH
            </Typography>
          </Box>

          {/* Right side: Project and Contact Us */}
          {!isMobile &&  <Box sx={{ display: "flex", alignItems: "center" }}>
           <Typography
              sx={{
                mr: 3,
                color: "black",
                cursor: "pointer",
              }}>
              Project
            </Typography>
            <Typography
              sx={{ color: "black", cursor: "pointer" }}>
              Contact Us
            </Typography>
          </Box>}
        </Toolbar>
      </AppBar>

      {/* Sidebar Navigation (Responsive) */}
      <Box sx={{ display: "flex", flexGrow: 1 }}>
        <Drawer
          variant="temporary" // Always temporary, allowing toggling on both mobile and desktop
          open={mobileOpen} // Controlled by mobileOpen state
          onClose={handleDrawerToggle} // Toggle when the drawer closes
          sx={{
            display: "block", // Always display the drawer, but its open/close state is controlled
            width: drawerWidth, // Full width of the drawer
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth, // Set the drawer width
              boxSizing: "border-box",
              transition: "width 0.3s ease-in-out",
              overflowX: "hidden",
            },
          }}>
          <Toolbar />
          <List>
            {NAVIGATION.map((item, index) =>
              item.kind === "header" ? (
                <Typography
                  key={index}
                  style={{
                    padding: "8px 16px",
                    marginTop: "10px",
                    fontWeight: "bold",
                    fontSize: "14px",
                  }}>
                  {item.title}
                </Typography>
              ) : item.kind === "divider" ? (
                <hr key={index} style={{ margin: "10px 0" }} />
              ) : (
                <ListItem
                  button
                  key={item.segment}
                  selected={selectedPage === item.segment}
                  onClick={() => {
                    handleNavigation(item.segment); // Navigate to the selected page

                    handleDrawerToggle();
                  }}
                  style={{
                    backgroundColor:
                      selectedPage === item.segment ? "#1976d2" : "transparent",
                    color: selectedPage === item.segment ? "white" : "inherit",
                  }}>
                  <ListItemIcon style={{ minWidth: "36px" }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <span style={{ fontSize: "13px" }}>{item.title}</span>
                    }
                  />
                </ListItem>
              )
            )}
          </List>
        </Drawer>

        {/* Main Content (Demo Page) */}
        <Box sx={{ flexGrow: 1, p: 3, mt: 8 }}>
          <DemoPageContent selectedPage={selectedPage} />
        </Box>
        <CodeEditor/>
      </Box>

      {/* Footer */}
    </Box>
  );
}

DashboardLayout.propTypes = {
  window: PropTypes.func,
};

export default DashboardLayout;
