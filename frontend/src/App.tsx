import './App.css';
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
  Outlet,
} from 'react-router-dom';
import NavBarBox from './Components/NavBarBox';
import SideBar from './Components/SideBar';
import SnackPage from './Pages/SnackPage';
import { SettingsProvider, useSettings } from './Contexts/SettingsContext';
import Settings from './Pages/Settings';
import Home from './Pages/Home';
import StockPage from './Pages/StockPage';
import SellPage from './Pages/SellPage';
import CartPage from './Pages/CartPage';
import { Box, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import AISuggestionPage from './Pages/AISuggestionPage';
import { useAuth0 } from '@auth0/auth0-react';
import { ReactNode } from 'react';
import NoPermissionPage from './Pages/NoPermissionPage';

const PrivateRoute = ({ children }: { children?: ReactNode }) => {
  const { isAuthenticated } = useAuth0();
  if (!isAuthenticated) {
    return <Navigate to="/nopermission" />;
  }
  return children ? <>{children}</> : <Outlet />;
};

const AppContent: React.FC = () => {
  const { isDarkTheme } = useSettings();

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
      <NavBarBox />
      <SideBar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/nopermission" element={<NoPermissionPage />} />
          <Route element={<PrivateRoute />}>
            <Route path="/admin/snack" element={<SnackPage />} />
            <Route path="/admin/stock" element={<StockPage />} />
            <Route path="/admin/sell" element={<SellPage />} />
            <Route path="/admin/ai" element={<AISuggestionPage />} />
          </Route>
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
