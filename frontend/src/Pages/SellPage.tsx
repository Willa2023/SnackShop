import { Box, Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Sell } from '../Models/SnackStockSell';
import { createSell, getSells } from '../Services/SellService';
import SellDataGrid from '../Components/Forms/SellDataGrid';
import AddSellForm from '../Components/Forms/AddSellForm';

const SellPage: React.FC = () => {
  const [sells, setSells] = useState<Sell[]>([]);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const fetchSells = async () => {
    try {
      const sells = await getSells();
      setSells(sells);
    } catch (err) {
      console.error('Failed to fetch sells, check if server is running.');
    }
  };

  useEffect(() => {
    fetchSells();
  }, []);

  const handleAddSell = async (snackId: number, quantity: number) => {
    try {
      await createSell(snackId, quantity);
      const newSells = await getSells();
      setSells(newSells);
      setIsFormOpen(false);
    } catch (err) {
      console.error('Failed to fetch sells, check if server is running.');
    }
  };

  return (
    <>
      <Box mt={8}>
        <Typography variant="h6" gutterBottom>
          Sell List
        </Typography>
        <Box display="flex" gap={2} mb={2}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setIsFormOpen(true)}
          >
            Add Sell
          </Button>
        </Box>
        <SellDataGrid sells={sells} />
        <AddSellForm
          open={isFormOpen}
          onClose={() => setIsFormOpen(false)}
          onAddSell={handleAddSell}
        />
      </Box>
    </>
  );
};

export default SellPage;
