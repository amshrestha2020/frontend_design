<<<<<<< HEAD
// Security.jsx

import React from 'react';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const Security = () => {
  const handleDelete = () => {
    // Handle delete action here
    console.log('Delete button clicked');
  };

  return (
    <div>
      {/* Security content */}
      <IconButton
        aria-label="delete"
        style={{ color: '#FFF', backgroundColor: '#f44336' }}
      >
        <DeleteIcon />
      </IconButton>
    </div>
  );
};

export default Security;
=======
// Security.jsx

import React from 'react';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const Security = () => {
  const handleDelete = () => {
    // Handle delete action here
    console.log('Delete button clicked');
  };

  return (
    <div>
      {/* Security content */}
      <IconButton
        aria-label="delete"
        style={{ color: '#FFF', backgroundColor: '#f44336' }}
      >
        <DeleteIcon />
      </IconButton>
    </div>
  );
};

export default Security;
>>>>>>> upstream/main
