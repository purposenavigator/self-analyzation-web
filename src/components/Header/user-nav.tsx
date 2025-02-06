'use client';

import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { useAuth } from '../../context/AuthContext'; // Import useAuth

export function UserNav() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { logout } = useAuth(); // Get logout function from AuthContext

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        variant="contained"
        onClick={handleClick}
        className="relative h-8 w-8 rounded-full"
      >
        <Avatar alt="User" src="/avatars/01.png" />
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            width: '20ch',
          },
        }}
      >
        <MenuItem disabled>
          <ListItemText
            primary={
              <Typography variant="body2" color="textPrimary">
                User
              </Typography>
            }
            secondary={
              <Typography variant="caption" color="textSecondary">
                user@example.com
              </Typography>
            }
          />
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemText primary="Profile" />
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemText primary="Settings" />
        </MenuItem>
        <Divider />
        <MenuItem
          onClick={() => {
            handleClose();
            logout(); // Call logout function
          }}
        >
          <ListItemText primary="Logout" />
        </MenuItem>
      </Menu>
    </div>
  );
}
