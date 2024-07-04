import { Box, Button, Toolbar, Typography } from '@mui/material';
import SnackDataGrid from './SnackDataGrid';
import AddSnackForm from './AddSnackForm';
import React, { useState } from 'react';

const SnackPage: React.FC = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      <Box mb={2}>
        <Toolbar></Toolbar>
        <Typography variant="h6" gutterBottom>
          Snack List
        </Typography>
        <Box display="flex" gap={2} mb={2}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setIsFormOpen(true)}
          >
            Add Snack
          </Button>
        </Box>
        <SnackDataGrid />
        <AddSnackForm open={isFormOpen} onClose={() => setIsFormOpen(false)} />
      </Box>
    </>
  );
};

export default SnackPage;
