// Layout.jsx
import React from 'react';
import Security from '../components/security/Security';
import { Box } from '@mui/material';

const Layout = ({ children }) => {
  return (
    <Box display="flex">
      <Box flex="1">
        <Box p={3}>
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
