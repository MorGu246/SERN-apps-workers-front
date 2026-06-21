import React from "react";
import { createBrowserRouter } from "react-router";
import AppLayout from "../LayOut/AppLayOut.jsx";

import EntrancePage from "../_Features/Attendance/EntrancePage.jsx";
import ExitPage from "../_Features/Attendance/ExitPage.jsx";
import AttendanceReports from "../_Features/Reports/AttendanceReports.jsx";

import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import AssessmentIcon from '@mui/icons-material/Assessment';

const router = createBrowserRouter([
    {
        element: <AppLayout />,
        children: [
            { path: "/", element: <EntrancePage /> },
            { path: "/exit", element: <ExitPage /> },
            { path: "/reports", element: <AttendanceReports /> },
        ]
    },
]);

export const navItems = [
    { name: 'רישום כניסה', path: '/', icon: <LoginIcon /> },
    { name: 'רישום יציאה', path: '/exit', icon: <LogoutIcon /> },
    { name: 'דוחות שעות', path: '/reports', icon: <AssessmentIcon /> },
];

export default router;