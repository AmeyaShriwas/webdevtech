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
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NAVIGATION from "./Navigation";
import DemoPageContent from "./DemoPageContent";

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
    console.log('se', segment)
    setSelectedPage(segment);
    if (isMobile) {
      setMobileOpen(false); // Close sidebar on mobile after selecting a menu item
    }
  };

  return (
    <Box sx={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      {/* App Header */}
      <AppBar position="fixed" sx={{ zIndex: 1300, bgcolor: "white" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Left Section - Logo & Name */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton color="black" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
            <Typography sx={{ ml: 2, fontWeight: "bold", color: "black" }}>
              WEBDEVTECH
            </Typography>
          </Box>

          {/* Right Section - Settings & Profile */}
          <Box>
            <IconButton color="black">
              <SettingsIcon />
            </IconButton>
            <IconButton color="black">
              <AccountCircleIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Sidebar Navigation (Responsive) */}
      <Drawer
        variant={isMobile ? "temporary" : "permanent"}
        open={isMobile ? mobileOpen : true}
        onClose={handleDrawerToggle}
        sx={{
          display: isMobile ? (mobileOpen ? "block" : "none") : "block",
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            transition: "width 0.3s ease-in-out",
            overflowX: "hidden",
          },
        }}>
        <Toolbar /> {/* Adds spacing below the header */}
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
                }} // Smaller font
              >
                {item.title}
              </Typography>
            ) : item.kind === "divider" ? (
              <hr key={index} style={{ margin: "10px 0" }} />
            ) : (
              <ListItem
                button
                key={item.segment}
                selected={selectedPage === item.segment}
                onClick={() => handleNavigation(item.segment)}
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
                  } // Using span for font size
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
    </Box>
  );
}

DashboardLayout.propTypes = {
  window: PropTypes.func,
};

export default DashboardLayout;
