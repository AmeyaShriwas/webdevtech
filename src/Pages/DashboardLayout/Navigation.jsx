import BarChartIcon from '@mui/icons-material/BarChart';
import DescriptionIcon from '@mui/icons-material/Description';
import LayersIcon from '@mui/icons-material/Layers';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import NotesIcon from '@mui/icons-material/Notes';
import SupportIcon from '@mui/icons-material/Support';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const NAVIGATION = [
    { kind: 'header', title: 'Your Course' },
    { segment: 'course-overview', title: 'Overview', icon: <DashboardIcon /> },
    { kind: 'divider' },
    { kind: 'header', title: 'Website' },
    { segment: 'frontend', title: 'Front-end Development', icon: <DashboardIcon /> },
    { segment: 'backend', title: 'Back-end Development', icon: <ShoppingCartIcon /> },
    { segment: 'fullstack', title: 'Full-stack Development', icon: <BarChartIcon /> },
    { kind: 'divider' },
    { kind: 'header', title: 'Apps' },
    { segment: 'android', title: 'Android Development', icon: <DescriptionIcon /> },
    { segment: 'ios', title: 'iOS Development', icon: <LayersIcon /> },
    { kind: 'divider' },
    { kind: 'header', title: 'Profile' },
    { segment: 'view-profile', title: 'View Profile', icon: <PersonIcon /> },
    { kind: 'divider' },
    { kind: 'header', title: 'Settings' },
    { segment: 'account-settings', title: 'Account Settings', icon: <SettingsIcon /> },
    { segment: 'privacy-settings', title: 'Privacy Settings', icon: <SettingsIcon /> },
  ];
  
  export default NAVIGATION;
  