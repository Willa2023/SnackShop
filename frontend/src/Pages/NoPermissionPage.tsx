import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const NoPermissionPage: React.FC = () => {
  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" gutterBottom>
          You do not have permission to view this page.
        </Typography>
      </Box>
    </Container>
  );
};

export default NoPermissionPage;
