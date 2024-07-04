import { Box, Button, Toolbar, Typography } from '@mui/material';
import SnackDataGrid from './SnackDataGrid';

const HomeContent: React.FC = () => {
  return (
    <>
      <Box mb={2}>
        <Toolbar></Toolbar>
        <Typography variant="h6" gutterBottom>
          Snack List
        </Typography>
        <Box display="flex" gap={2} mb={2}>
          <Button variant="contained" color="primary">
            Add Snack
          </Button>
        </Box>
        <SnackDataGrid />
      </Box>
    </>
  );
};

export default HomeContent;
