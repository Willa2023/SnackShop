import { Box, Button, Typography } from '@mui/material';
import SnackDataGrid from './SnackDataGrid';

const HomeContent: React.FC = () => {
  return (
    <>
      <Box mb={2}>
        <Typography variant="h6" gutterBottom>
          Student List
        </Typography>
        <Box display="flex" gap={2} mb={2}>
          <Button variant="contained" color="primary">
            Add Student
          </Button>
        </Box>
        <SnackDataGrid />
      </Box>
    </>
  );
};

export default HomeContent;
