import React from "react";
import DashboardIcon from '@mui/icons-material/Dashboard';
import AppsIcon from '@mui/icons-material/Apps';
import SecurityIcon from '@mui/icons-material/Security';
import AssignmentIcon from '@mui/icons-material/Assignment';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import WorkIcon from '@mui/icons-material/Work';
import ChatIcon from '@mui/icons-material/Chat';
import BurstModeIcon from '@mui/icons-material/BurstMode';
import DevicesIcon from '@mui/icons-material/Devices';
import ListAltIcon from '@mui/icons-material/ListAlt';
import SettingsIcon from '@mui/icons-material/Settings';
//import BlurOnIcon from '@mui/icons-material/BlurOn';


export const SidebarData = [
    {
        title: "Dashbaord",
        icon: <DashboardIcon />,
        link: "/dashboard"
    },
    {
        title: "Company",
        icon: <AppsIcon />,
        link: "/company"
    },
    {
        title: "Customer",
        icon: <SecurityIcon />,
        link: "/customer"
    },
    {
        title: "Reports",
        icon: <AssignmentIcon />,
        link: "/reports"
    },
    {
        title: "Commision",
        icon: <SupervisedUserCircleIcon />,
        link: "/commision"
    },
    {
        title: "Vendor",
        icon: <WorkIcon />,
        link: "/vendor"
    },
    {
        title: "Proposals",
        icon: <ChatIcon />,
        link: "/proposals"
    },
    {
        title: "Leads",
        icon: <BurstModeIcon />,
        link: "/leads"
    },
    {
        title: "Workflows",
        icon: <DevicesIcon />,
        link: "/workflows"
    },
    {
        title: "My Tasks",
        icon: <ListAltIcon />,
        link: "/mytasks"
    },
    {
        title: "Settings",
        icon: <SettingsIcon />,
        link: "/settings"
    }

]

//npm install @material-ui/core
//npm install @material-ui/icons