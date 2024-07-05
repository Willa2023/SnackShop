import React, { useState } from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';
import { Snack } from '../Models/Snack';

interface AddSnackFormProps {
  open: boolean;
  onClose: () => void;
  onAddSnack: (snack: Omit<Snack, 'snackId'>) => void;
}

const AddSnackForm: React.FC<AddSnackFormProps> = ({
  open,
  onClose,
  onAddSnack,
}) => {
  const [name, setName] = useState('');
  const [costPrice, setCostPrice] = useState('');
  const [sellPrice, setSellPrice] = useState('');
  const [brand, setBrand] = useState('');

  const handleSubmit = () => {
    onAddSnack({
      name,
      costPrice: parseFloat(costPrice),
      sellPrice: parseFloat(sellPrice),
      brand,
    });
    setName('');
    setCostPrice('');
    setSellPrice('');
    setBrand('');
    onClose();
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
          type="text"
          fullWidth
          value={costPrice}
          onChange={(e) => setCostPrice(e.target.value)}
        />
        <TextField
          autoFocus
          margin="dense"
          label="Sell Price"
          type="text"
          fullWidth
          value={sellPrice}
          onChange={(e) => setSellPrice(e.target.value)}
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
