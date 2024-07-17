import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AppBarBox from './Components/AppBarBox';
import SideBar from './Components/SideBar';
import SnackPage from './Pages/SnackPage';
import { SettingsProvider, useSettings } from './Contexts/SettingsContext';
import Settings from './Pages/Settings';
import Home from './Pages/Home';
import StockPage from './Pages/StockPage';
import SellPage from './Pages/SellPage';
import CartPage from './Pages/CartPage';
import { Box, createTheme, CssBaseline, ThemeProvider } from '@mui/material';

const drawerWidth = 240;

const AppContent: React.FC = () => {
  const { isDrawerOpen, isDarkTheme } = useSettings();

  const theme = createTheme({
    palette: {
      mode: isDarkTheme ? 'dark' : 'light',
      primary: {
        main: '#5c2d91',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          transition: (theme) =>
            theme.transitions.create('margin', {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
          ...(isDrawerOpen && {
            marginLeft: 0,
            transition: (theme) =>
              theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
              }),
          }),
        }}
      >
        <AppBarBox />
        <SideBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/snack" element={<SnackPage />} />
          <Route path="/stock" element={<StockPage />} />
          <Route path="/sell" element={<SellPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Box>
    </ThemeProvider>
  );
};

const App: React.FC = () => {
  return (
    <SettingsProvider>
      <Router>
        <AppContent />
      </Router>
    </SettingsProvider>
  );
};

export default App;
