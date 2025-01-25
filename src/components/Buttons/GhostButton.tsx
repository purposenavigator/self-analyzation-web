import React from 'react';
import { Button, ButtonProps } from '@mui/material';

const GhostButton = (props: ButtonProps) => {
  return (
    <Button
      variant="outlined"
      color="primary"
      sx={{
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        color: 'primary.main',
        '&:hover': {
          backgroundColor: 'rgba(0, 0, 0, 0.04)',
          borderColor: 'transparent',
        },
      }}
      {...props}
    />
  );
};

export default GhostButton;
