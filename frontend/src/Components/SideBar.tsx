import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
  Divider,
  Box,
} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsIcon from '@mui/icons-material/Settings';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { NavLink } from 'react-router-dom';
import { useSettings } from '../Contexts/SettingsContext';

const drawerWidth = 240;

const Sidebar: React.FC = () => {
  const { isDrawerOpen: drawerOpen, toggleDrawer } = useSettings();

  return (
    <Drawer
      variant="temporary"
      open={drawerOpen}
      onClose={toggleDrawer}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: 'border-box',
          top: 64,
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mt: 2,
        }}
      >
        <Avatar sx={{ width: 80, height: 80, mb: 2 }} />
      </Box>
      <Divider />
      <List>
        <ListItem
          component={NavLink}
          to="/"
          style={{ textDecoration: 'none', color: 'inherit' }}
          end
        >
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem
          component={NavLink}
          to="/settings"
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
