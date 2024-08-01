import { Button, Grid, Typography } from '@mui/material';
import SnackDataGrid from '../Components/Forms/SnackDataGrid';
import AddSnackForm from '../Components/Forms/AddSnackForm';
import React, { useState } from 'react';

const SnackPage: React.FC = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <Grid container spacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={12}>
        <Typography variant="h6" gutterBottom style={{ marginTop: '30px' }}>
          Snack List
        </Typography>
      </Grid>
      <Grid item display="flex">
        <Button
          variant="contained"
          color="primary"
          onClick={() => setIsFormOpen(true)}
        >
          Add Snack
        </Button>
      </Grid>
      <Grid item xs={12}>
        <SnackDataGrid />
        <AddSnackForm open={isFormOpen} onClose={() => setIsFormOpen(false)} />
      </Grid>
    </Grid>
  );
};

export default SnackPage;
