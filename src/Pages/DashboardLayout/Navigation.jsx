import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BarChartIcon from "@mui/icons-material/BarChart";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import NotesIcon from "@mui/icons-material/Notes";
import SupportIcon from "@mui/icons-material/Support";

const NAVIGATION = [
  { kind: "header", title: "Your Course" },
  { segment: "/course-overview", title: "Overview", icon: <DashboardIcon /> },
  { kind: "divider" },
  { kind: "header", title: "Website" },
  { segment: "/frontend", title: "Front-end Development", icon: <NotesIcon /> },
  { segment: "/backend", title: "Back-end Development", icon: <ShoppingCartIcon /> },
  { segment: "/fullstack", title: "Full-stack Development", icon: <BarChartIcon /> },
  { kind: "divider" },
  { kind: "header", title: "User Settings" },
  { segment: "/view-profile", title: "View Profile", icon: <PersonIcon /> },
  { segment: "/account-settings", title: "Account Settings", icon: <SettingsIcon /> },
  { segment: "/privacy-settings", title: "Privacy Settings", icon: <SupportIcon /> },
];

export default NAVIGATION;
