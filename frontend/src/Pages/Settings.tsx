import React from 'react';
import {
  Container,
  Typography,
  Box,
  FormControlLabel,
  Switch,
  TextField,
  Button,
  Snackbar,
  Alert,
} from '@mui/material';
import { useSettings } from '../Contexts/SettingsContext';

const Settings: React.FC = () => {
  const { isDarkTheme, toggleDarkTheme } = useSettings();
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);

  const handleSave = () => {
    setSnackbarOpen(true);
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" gutterBottom>
          Settings
        </Typography>
        <FormControlLabel
          control={<Switch checked={isDarkTheme} onChange={toggleDarkTheme} />}
          label="Dark Theme"
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSave}
          sx={{ mt: 2 }}
        >
          Save
        </Button>
      </Box>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          sx={{ width: '100%' }}
        >
          Settings saved successfully!
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Settings;
