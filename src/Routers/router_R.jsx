import React from "react";
import { createBrowserRouter } from "react-router";
import AppLayout from "../LayOut/AppLayOut.jsx";

// ייבוא הדפים האמיתיים של שעון הנוכחות
import EntrancePage from "../_Features/Attendance/EntrancePage.jsx";
import ExitPage from "../_Features/Attendance/ExitPage.jsx";

// קומפוננטה זמנית עבור הדוחות (נקים אותה מיד בהמשך)
const ReportsPage = () => <div>מסך דוחות נוכחות (בקרוב)</div>;

const router = createBrowserRouter([
    {
        element: <AppLayout />,
        children: [
            { path: "/", element: <EntrancePage /> },
            { path: "/exit", element: <ExitPage /> },
            { path: "/reports", element: <ReportsPage /> },
        ]
    },
]);

// אייקונים מתוך Material-UI
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import AssessmentIcon from '@mui/icons-material/Assessment';

export const navItems = [
    { name: 'רישום כניסה', path: '/', icon: <LoginIcon /> },
    { name: 'רישום יציאה', path: '/exit', icon: <LogoutIcon /> },
    { name: 'דוחות שעות', path: '/reports', icon: <AssessmentIcon /> },
];

export default router;