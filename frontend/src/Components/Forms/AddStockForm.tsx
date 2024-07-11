import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';
import { useState } from 'react';

interface AddStockFormProps {
  open: boolean;
  onClose: () => void;
  onAddStock: (snackId: number, addStockNum: number) => void;
}

const AddStockForm: React.FC<AddStockFormProps> = ({
  open,
  onClose,
  onAddStock,
}) => {
  const [snackId, setSnackId] = useState<number>(0);
  const [addStockNum, setAddStockNum] = useState<number>(0);

  const handleSubmit = () => {
    onAddStock(snackId, addStockNum);
    setSnackId(0);
    setAddStockNum(0);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add Stock</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Snack ID"
          type="number"
          fullWidth
          value={snackId}
          onChange={(e) => setSnackId(parseInt(e.target.value, 10))}
        />
        <TextField
          autoFocus
          margin="dense"
          label="Add Snack Quantity"
          type="number"
          fullWidth
          value={addStockNum}
          onChange={(e) => setAddStockNum(parseInt(e.target.value, 10))}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit}>Add</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddStockForm;
