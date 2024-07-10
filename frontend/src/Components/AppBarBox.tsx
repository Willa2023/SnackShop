import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useSettings } from '../Contexts/SettingsContext';
import { NavLink } from 'react-router-dom';
import { JoinRight } from '@mui/icons-material';

const AppBarBox: React.FC = () => {
  const { toggleDrawer } = useSettings();

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
          {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Snack Shop
          </Typography> */}
          <Button
            component={NavLink}
            to="/"
            color="inherit"
            style={{ paddingRight: '30px' }}
          >
            Home
          </Button>
          <Button
            component={NavLink}
            to="/snack"
            color="inherit"
            style={{ paddingRight: '30px' }}
          >
            Snack
          </Button>
          <Button
            component={NavLink}
            to="/stock"
            color="inherit"
            style={{ paddingRight: '30px' }}
          >
            Stock
          </Button>
          <Button
            component={NavLink}
            to="/sell"
            color="inherit"
            style={{ paddingRight: '30px' }}
          >
            Sell
          </Button>
          <Button color="inherit" sx={{ marginLeft: 'auto' }}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default AppBarBox;
