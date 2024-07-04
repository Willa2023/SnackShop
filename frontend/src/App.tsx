import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AppBarBox from './Components/AppBarBox';
import SideBar from './Components/SideBar';
import SnackPage from './Components/SnackPage';
import { SettingsProvider } from './Contexts/SettingsContext';
import Settings from './Components/Settings';

const AppContent: React.FC = () => {
  return (
    <>
      <AppBarBox />
      <SideBar />
      <Routes>
        <Route path="/" element={<SnackPage />} />
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
