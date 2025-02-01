'use client';

import React from 'react';
import TextField from '@mui/material/TextField';

export function Search() {
  return (
    <div>
      <TextField
        type="search"
        placeholder="Search conversations or values..."
        variant="outlined"
        fullWidth
        sx={{ width: { md: 100, lg: 300 } }}
      />
    </div>
  );
}
