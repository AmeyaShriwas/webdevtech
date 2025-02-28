import DashboardIcon from "@mui/icons-material/Dashboard";
import CodeIcon from "@mui/icons-material/Code";
import WebIcon from "@mui/icons-material/Web";
import StorageIcon from "@mui/icons-material/Storage";
import NextWeekIcon from "@mui/icons-material/NextWeek";
import MobileFriendlyIcon from "@mui/icons-material/MobileFriendly";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import SecurityIcon from "@mui/icons-material/Security";

const NAVIGATION = [
  { kind: "header", title: "Dashboard" },
  { segment: "/overview", title: "Overview", icon: <DashboardIcon /> },
  { kind: "divider" },

  { kind: "header", title: "Web Development" },
  { segment: "/html", title: "HTML", icon: <WebIcon /> },
  { segment: "/css", title: "CSS", icon: <WebIcon /> },
  { segment: "/javascript", title: "Javascript", icon: <CodeIcon /> },
  { segment: "/react", title: "React", icon: <NextWeekIcon /> },
  { segment: "/node-express", title: "Node & Express", icon: <StorageIcon /> },
  {
    segment: "/mongodb",
    title: "MongoDB",
    icon: <StorageIcon />,
  },
  {
    segment: "/mysql",
    title: "MySQL",
    icon: <StorageIcon />,
  },
  { segment: "/nextjs", title: "Next", icon: <NextWeekIcon /> },

  { kind: "divider" },

  { kind: "header", title: "App Development" },
  {
    segment: "/react-native",
    title: "React Native (Android & iOS)",
    icon: <MobileFriendlyIcon />,
  },

  
];

export default NAVIGATION;
