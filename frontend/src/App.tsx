import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AppBarBox from './Components/AppBarBox';
import SideBar from './Components/SideBar';
import SnackPage from './Pages/SnackPage';
import { SettingsProvider } from './Contexts/SettingsContext';
import Settings from './Pages/Settings';
import Home from './Pages/Home';
import StockPage from './Pages/StockPage';
import SellPage from './Pages/SellPage';

const AppContent: React.FC = () => {
  return (
    <>
      <AppBarBox />
      <SideBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/snack" element={<SnackPage />} />
        <Route path="/stock" element={<StockPage />} />
        <Route path="/sell" element={<SellPage />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </>
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
