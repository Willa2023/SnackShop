import { Box, Button, Toolbar, Typography } from '@mui/material';
import SnackDataGrid from './SnackDataGrid';
import AddSnackForm from './AddSnackForm';
import React, { useEffect, useState } from 'react';
import { Snack } from '../Models/Snack';
import { getSnacks } from '../Services/SnackService';

const SnackPage: React.FC = () => {
  const [snacks, setSnacks] = useState<Snack[]>([]);
  // const [loading, setLoading] = useState<boolean>(true);
  // const [error, setError] = useState<string | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const fetchSnacks = async () => {
    try {
      const snacks = await getSnacks();
      console.log(snacks);
      setSnacks(snacks);
    } catch (err) {
      console.log('Failed to fetch snacks, check if server is running.');
    } finally {
      console.log('snacks fetched');
    }
  };

  useEffect(() => {
    fetchSnacks();
  }, []);

  // const handleAddSnack = async (snack: Omit<Snack, 'id'>) => {
  //   try {
  //     const newSnack = await createSnack(snack);
  //     setSnacks((prev) => [...prev, newSnack]);
  //     setIsFormOpen(false);
  //   } catch (err) {
  //     setError('Failed to add student');
  //   }
  // };

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
        <SnackDataGrid snacks={snacks} setSnacks={setSnacks} />
        <AddSnackForm
          open={isFormOpen}
          onClose={() => setIsFormOpen(false)}
          // onAddSnack={handleAddSnack}
        />
      </Box>
    </>
  );
};

export default SnackPage;
