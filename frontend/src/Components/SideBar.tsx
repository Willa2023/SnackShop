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
  Typography,
} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsIcon from '@mui/icons-material/Settings';
import { NavLink } from 'react-router-dom';
import { useSettings } from '../Contexts/SettingsContext';
import { useAuth0 } from '@auth0/auth0-react';
import { ShoppingCart } from '@mui/icons-material';
import PaymentIcon from '@mui/icons-material/Payment';

const drawerWidth = 240;

const Sidebar: React.FC = () => {
  const { isDrawerOpen: drawerOpen, toggleDrawer } = useSettings();
  const { user, isAuthenticated } = useAuth0();

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
        {isAuthenticated ? (
          <>
            <Avatar
              src={user?.picture}
              alt={user?.name}
              sx={{ width: 80, height: 80, mb: 2 }}
            />
            <Typography variant="h6">{user?.name}</Typography>
          </>
        ) : (
          <>
            <Avatar sx={{ width: 80, height: 80, mb: 2 }} />
            <Typography variant="h6">User</Typography>
          </>
        )}
      </Box>
      <Divider />
      <List>
        <ListItem
          component={NavLink}
          to="/cart"
          style={{ textDecoration: 'none', color: 'inherit' }}
          end
        >
          <ListItemIcon>
            <ShoppingCart />
          </ListItemIcon>
          <ListItemText primary="Cart" />
        </ListItem>
        <ListItem
          component={NavLink}
          to="/"
          style={{ textDecoration: 'none', color: 'inherit' }}
          end
        >
          <ListItemIcon>
            <PaymentIcon />
          </ListItemIcon>
          <ListItemText primary="Payment" />
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
