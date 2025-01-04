import React from 'react';
import { Box, Typography } from '@mui/material';

const ConversationIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="mr-2 h-6 w-6"
    style={{ marginRight: '8px' }}
  >
    <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
  </svg>
);

const AppTitleSection = () => (
  <Box
    sx={{
      display: { xs: 'none', md: 'flex' },
      flexDirection: 'column',
      justifyContent: 'center',
      backgroundColor: 'grey.900',
      color: 'white',
      p: 4,
      flex: 1,
    }}
  >
    <Typography
      variant="h5"
      component="div"
      sx={{ display: 'flex', alignItems: 'center', mb: 2 }}
    >
      <ConversationIcon />
      Conversation Analysis App
    </Typography>
    <Box mt="auto"></Box>
  </Box>
);

export default AppTitleSection;
