import React from 'react';
import { Paper, Typography } from '@mui/material';
import { FooterHeight } from '../theme_params';

export default function Footer() {
  return (
    // משתמש ב-variant: 'footer' שהגדרת בתוך קובץ ה-theme שלך!
    <Paper variant="footer" sx={{ height: FooterHeight, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 0 }}>
      <Typography variant="body2">
        © {new Date().getFullYear()} כל הזכויות שמורות לחברה
      </Typography>
    </Paper>
  );
}