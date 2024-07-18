// NavigationBar.js
import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Avatar, Badge, Button } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';

const NavigationBar = ({ user, onSignOut }) => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar sx={{
        justifyContent:'space-between'
      }}>
        <IconButton edge="start" color="inherit" aria-label="home">
          Mind Bridge
        </IconButton>
        <Toolbar>

        <IconButton color="inherit">
          <Badge badgeContent={4} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>

        <IconButton color="inherit">
          <Avatar alt={user.name} src={user.profilePic} />
        </IconButton>
        <Typography variant="body1" sx={{ marginRight: 1 }}>
          {user.name}
        </Typography>

        <Button color="inherit" onClick={onSignOut}>
          Sign Out
        </Button>
        </Toolbar>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
