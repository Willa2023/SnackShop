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

const Settings: React.FC = () => {
  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" gutterBottom>
          Settings Page
        </Typography>
      </Box>
    </Container>
  );
};

export default Settings;
