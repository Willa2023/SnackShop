import { Button, Grid, Typography } from '@mui/material';
import SnackDataGrid from '../Components/Forms/SnackDataGrid';
import AddSnackForm from '../Components/Forms/AddSnackForm';
import React, { useEffect, useState } from 'react';
import { Snack } from '../Models/SnackStockSell';
import { createSnack, getSnacks } from '../Services/SnackService';

const SnackPage: React.FC = () => {
  const [snacks, setSnacks] = useState<Snack[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const fetchSnacks = async () => {
    try {
      const snacks = await getSnacks();
      setSnacks(snacks);
    } catch (err) {
      setError('Failed to fetch snacks, check if server is running.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSnacks();
  }, []);

  const handleAddSnack = async (snack: Omit<Snack, 'id'>) => {
    try {
      const newSnack = await createSnack(snack);
      setSnacks((prev) => [...prev, newSnack]);
      setIsFormOpen(false);
    } catch (err) {
      setError('Failed to add student');
    }
  };

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
        <SnackDataGrid
          snacks={snacks}
          setSnacks={setSnacks}
          loading={loading}
          error={error}
        />
        <AddSnackForm
          open={isFormOpen}
          onClose={() => setIsFormOpen(false)}
          onAddSnack={handleAddSnack}
        />
      </Grid>
    </Grid>
  );
};

export default SnackPage;
