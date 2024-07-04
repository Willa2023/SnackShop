import React, { useState } from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  InputLabel,
  TextField,
} from '@mui/material';

interface AddSnackFormProps {
  open: boolean;
  onClose: () => void;
}

const AddSnackForm: React.FC<AddSnackFormProps> = ({ open, onClose }) => {
  const handleSubmit = () => {
    console.log('Add snack');
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add Snack</DialogTitle>
      <DialogContent>
        <TextField>
          <InputLabel>Snack Name</InputLabel>
        </TextField>
      </DialogContent>
      <DialogActions>
        <button onClick={onClose}>Cancel</button>
        <button onClick={handleSubmit}>Add</button>
      </DialogActions>
    </Dialog>
  );
};

export default AddSnackForm;
