import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { HeaderHeight } from '../theme_params';

export default function Header() {
  return (
    <AppBar position="static" sx={{ height: HeaderHeight, justifyContent: 'center' }}>
      <Toolbar>
        <Typography variant="h5" component="div">
          מערכת דיווח נוכחות עובדים
        </Typography>
      </Toolbar>
    </AppBar>
  );
}