import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AppBarBox from './Components/AppBarBox';
import SideBar from './Components/SideBar';
import SnackPage from './Components/Snack/SnackPage';
import { SettingsProvider } from './Contexts/SettingsContext';
import Settings from './Components/Settings';
import Home from './Components/Home';
import Manage from './Components/Manage/ManagePage';
import StockSellPage from './Components/StockSell/StockSellPage';

const AppContent: React.FC = () => {
  return (
    <>
      <AppBarBox />
      <SideBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/manage" element={<Manage />} />
        <Route path="/snack" element={<SnackPage />} />
        <Route path="/stockSell" element={<StockSellPage />} />
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
