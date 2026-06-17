import React from 'react';
import { Outlet } from 'react-router';
import { Box } from '@mui/material';
import Header from './Header';
import NavBar from './NavBar';
import Footer from './Footer';

export default function AppLayout() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', direction: 'rtl' }}>
      <Header />
      
      <Box sx={{ display: 'flex', flex: 1 }}>
        <NavBar />
        <Box component="main" sx={{ flex: 1, padding: 3, backgroundColor: '#f9f9f9' }}>
          <Outlet />
        </Box>
      </Box>

      <Footer />
    </Box>
  );
}