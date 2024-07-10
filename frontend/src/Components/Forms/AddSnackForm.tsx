import React, { useState } from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';
import { Snack } from '../../Models/SnackStockSell';

interface AddSnackFormProps {
  open: boolean;
  onClose: () => void;
  onAddSnack: (snack: Omit<Snack, 'id'>) => void;
}

const AddSnackForm: React.FC<AddSnackFormProps> = ({
  open,
  onClose,
  onAddSnack,
}) => {
  const [name, setName] = useState<string>('');
  const [costPrice, setCostPrice] = useState<number>(0);
  const [sellPrice, setSellPrice] = useState<number>(0);
  const [brand, setBrand] = useState<string>('');

  const handleSubmit = () => {
    onAddSnack({
      name: name,
      costPrice: costPrice,
      sellPrice: sellPrice,
      brand: brand,
    });
    setName('');
    setCostPrice(0);
    setSellPrice(0);
    setBrand('');
    onClose();
  };

  const handleCostPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value)) {
      setCostPrice(value);
    }
  };
  const handleSellPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value)) {
      setSellPrice(value);
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add Snack</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Snack Name"
          type="text"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          autoFocus
          margin="dense"
          label="Cost Price"
          type="number"
          fullWidth
          value={costPrice}
          onChange={handleCostPriceChange}
        />
        <TextField
          autoFocus
          margin="dense"
          label="Sell Price"
          type="number"
          fullWidth
          value={sellPrice}
          onChange={handleSellPriceChange}
        />
        <TextField
          autoFocus
          margin="dense"
          label="Brand"
          type="text"
          fullWidth
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <button onClick={onClose}>Cancel</button>
        <button onClick={handleSubmit}>Add</button>
      </DialogActions>
    </Dialog>
  );
};

export default AddSnackForm;
