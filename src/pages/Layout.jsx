<<<<<<< HEAD
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
=======
// Layout.jsx
import React from 'react';
import Security from '../components/security/Security';
import Sidebar from '../components/sidebar/Sidebar';
import { Box } from '@mui/material';

const Layout = ({ children }) => {
  return (
    <Box display="flex">
      <Box flex="1">
        <Security />
        <Box p={3}>
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
>>>>>>> upstream/main
