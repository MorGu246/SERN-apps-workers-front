import React from 'react';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Box } from '@mui/material';
import { NavLink, useLocation } from 'react-router';
import { navItems } from '../Routers/router_R';
import { menuWidth } from '../theme_params';

export default function NavBar() {
  const location = useLocation();

  return (
    <Box sx={{ width: menuWidth, bgcolor: 'background.nav', borderLeft: '1px solid #e0e0e0' }}>
      <List disablePadding>
        {navItems.map((item, index) => {
          const isSelected = location.pathname === item.path;
          return (
            <ListItem key={index} disablePadding selected={isSelected}>
              <ListItemButton component={NavLink} to={item.path}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
}