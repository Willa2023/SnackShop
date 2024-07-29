import React from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from '@mui/material';

interface CheckOutFormProps {
  open: boolean;
  onClose: () => void;
  submitCheck: () => void;
  price: number;
}

const CheckOutForm: React.FC<CheckOutFormProps> = ({
  open,
  onClose,
  submitCheck,
  price,
}) => {
  const handleSubmit = () => {
    submitCheck();
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Pay</DialogTitle>
      <DialogContent>
        <Typography>Total Price is {price}</Typography>
      </DialogContent>
      <DialogActions>
        <button onClick={onClose}>Cancel</button>
        <button onClick={handleSubmit}>Pay</button>
      </DialogActions>
    </Dialog>
  );
};

export default CheckOutForm;
