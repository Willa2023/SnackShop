import { AppBar, Box, Toolbar, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import IcecreamIcon from '@mui/icons-material/Icecream';
import InventoryIcon from '@mui/icons-material/Inventory';
import SellIcon from '@mui/icons-material/Sell';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import { useSettings } from '../Contexts/SettingsContext';
import { NavLink } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { ShoppingCart } from '@mui/icons-material';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

const AppBarBox: React.FC = () => {
  const { toggleDrawer } = useSettings();
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Button
            component={NavLink}
            to="/"
            color="inherit"
            style={{ paddingRight: '30px' }}
          >
            <HomeIcon />
            Home
          </Button>
          <Button
            component={NavLink}
            to="/cart"
            color="inherit"
            style={{ paddingRight: '30px' }}
          >
            <ShoppingCart />
            Cart
          </Button>
          <Button
            component={NavLink}
            to="/snack"
            color="inherit"
            style={{ paddingRight: '30px' }}
          >
            <IcecreamIcon />
            Snack
          </Button>
          <Button
            component={NavLink}
            to="/stock"
            color="inherit"
            style={{ paddingRight: '30px' }}
          >
            <InventoryIcon />
            Stock
          </Button>
          <Button
            component={NavLink}
            to="/sell"
            color="inherit"
            style={{ paddingRight: '30px' }}
          >
            <SellIcon />
            Sell
          </Button>
          <Button
            component={NavLink}
            to="/aisuggestion"
            color="inherit"
            style={{ paddingRight: '30px' }}
          >
            <AutoAwesomeIcon />
            Ask AI
          </Button>
          {!isAuthenticated ? (
            <Button
              onClick={() => loginWithRedirect()}
              color="inherit"
              sx={{ marginLeft: 'auto' }}
            >
              Login
              <LoginIcon />
            </Button>
          ) : (
            <Button
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
              color="inherit"
              sx={{ marginLeft: 'auto' }}
            >
              Log Out
              <LogoutIcon />
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default AppBarBox;
