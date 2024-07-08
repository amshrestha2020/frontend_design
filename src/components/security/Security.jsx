// src/components/security/Security.jsx
import React from 'react';
import { Box, CircularProgress, Grid, Typography, IconButton, Switch, Avatar, Button, List, ListItem, ListItemText, ListItemIcon, ListItemSecondaryAction } from '@mui/material';
import ListItemButton from '@mui/material/ListItemButton';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import UpgradeIcon from '@mui/icons-material/Upgrade';
import LockIcon from '@mui/icons-material/Lock';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import DeleteIcon from '@mui/icons-material/Delete';
import { Home, Folder, Lock, PeopleAlt, Delete, Contrast, Notifications, Settings } from '@mui/icons-material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import DeleteButton from '../../components/DeleteButton'; // Adjust the path according to your project structure
import FlagIcon from '@mui/icons-material/Flag'; // Generic Flag icon if specific country icons are not available


const Security = () => {
  
  return (
    <Box style={{ backgroundColor: '#202124', color: '#FFFFFF', minHeight: '100vh', padding: '0 20px' }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={3}>
          <Box style={{ backgroundColor: '#2C2C2E', padding: '10px', borderRadius: '10px', height: '100vh' }}>
            <Typography variant="h6" gutterBottom>Untitled UI</Typography>
            <List component="nav">
              <ListItemButton sx={{ color: 'white' }}>
                <ListItemIcon sx={{ color: 'white' }}>
                  <Home />
                  <ListItemText primary="Home" />
                </ListItemIcon>
              </ListItemButton>
              <ListItemButton sx={{ color: 'white' }}>
                <ListItemIcon sx={{ color: 'white' }}>
                  <Folder />
                  <ListItemText primary="All files" />
                </ListItemIcon>
              </ListItemButton>
              <ListItemButton sx={{ color: 'white' }}>
                <ListItemIcon sx={{ color: 'white' }}>
                  <Lock />
                  <ListItemText primary="Private files" />
                </ListItemIcon>
              </ListItemButton>
              <ListItemButton sx={{ color: 'white' }}>
                <ListItemIcon sx={{ color: 'white' }}>
                  <PeopleAlt />
                  <ListItemText primary="Shared with me" />
                </ListItemIcon>
              </ListItemButton>
              <ListItemButton sx={{ color: 'white' }}>
                <ListItemIcon sx={{ color: 'white' }}>
                  <Delete />
                  <ListItemText primary="Deleted files" />
                </ListItemIcon>
              </ListItemButton>
              <ListItemButton sx={{ color: 'white' }}>
                <ListItemIcon sx={{ color: 'white' }}>
                  <Contrast />
                  <ListItemText primary="Design" />
                </ListItemIcon>
              </ListItemButton>
              <ListItemButton sx={{ color: 'white' }}>
                <ListItemIcon sx={{ color: 'white' }}>
                <Notifications />
                <ListItemText primary="Notifications" />
                </ListItemIcon>
              </ListItemButton>
              <ListItemButton sx={{ color: 'white' }}>
                <ListItemIcon sx={{ color: 'white' }}>
                  <Settings />
                  <ListItemText primary="Settings" />
                </ListItemIcon>
              </ListItemButton>
            </List>
          </Box>
        </Grid>

        <Grid item xs={12} sm={9}>
          <Box style={{ backgroundColor: '#2C2C2E', padding: '20px', borderRadius: '10px' }}>
           <Box display="flex" justifyContent="space-between" alignItems="center">
            <div>
              <Typography variant="h6">Mia de Silva</Typography>
              <Typography variant="body2" sx={{ color: 'white' }}>Manage your details and personal preferences here.</Typography>
            </div>
            <Box display="flex" alignItems="center">
              <input type="text" placeholder="Search" className="p-2 border rounded-lg border-black-300" />
              <Button variant="contained" color="primary" size="small" startIcon={<AddIcon />} sx={{ marginLeft: '10px' }} style={{ backgroundColor: '#007bff', color: 'white'}}>
                Invite
              </Button>
              <Button variant="contained" color="primary" size="small" startIcon={<UpgradeIcon />} sx={{ marginLeft: '10px' }} style={{ backgroundColor: '#007bff', color: 'white'}}>
                Upgrade
              </Button>
              <Avatar alt="User" src="public/user/profile.jpg" sx={{ marginLeft: '10px' }} />
            </Box>
          </Box>

            <Box mt={3}>
              <nav className="flex space-x-4">
                <Button className="py-2 px-4 rounded bg-black-200">General</Button>
                <Button className="py-2 px-4 rounded bg-black-200">Security</Button>
                <Button className="py-2 px-4 rounded bg-black-200">Billing</Button>
                <Button className="py-2 px-4 rounded bg-black-200">Notifications</Button>
                <Button className="py-2 px-4 rounded bg-black-200">Apps</Button>
                <Button className="py-2 px-4 rounded bg-black-200">Branding</Button>
                <Button className="py-2 px-4 rounded bg-black-200">Refer a friend</Button>
                <Button className="py-2 px-4 rounded bg-black-200">Sharing</Button>
              </nav>
            </Box>

            <Box mt={3}>
              <Typography variant="h6">Security</Typography>
              <Box style={{ backgroundColor: '#3C3C3E', padding: '15px', borderRadius: '10px', marginTop: '10px' }}>
                <Box mt={2} display="flex" alignItems="center">
                  {/* Circular progress indicating 90% security */}
                  <CircularProgress variant="determinate" value={90} size={40} sx={{ marginRight: 2 }} />
                  <Box ml={2}>
                    <div>
                      <Typography variant="body1">Your account security is 90%</Typography>
                      <Typography variant="body2" sx={{ color: 'white' }}>Please review your account security settings regularly and update your password.</Typography>
                    </div>
                  </Box>
                  <Button variant="contained" color="inherit" style={{ marginLeft: 'auto' , color: '#FFF'}}>Dismiss</Button>
                  <Button variant="contained" color="primary" style={{ marginLeft: '10px' , backgroundColor: '#007bff', color: 'white'}}>Review security</Button>
                </Box>
              </Box>
            </Box>
            <Box mt={3}>
              <Typography variant="h6">Basics</Typography>
              <Box style={{ backgroundColor: '#3C3C3E', padding: '15px', borderRadius: '10px', marginTop: '10px' }}>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                  <div>
                    <Typography variant="body1" style={{ color: '#FFF' }}>Password</Typography>
                    <Typography variant="body2" sx={{ color: 'white' }}>Set a password to protect your account.</Typography>
                  </div>
                  <Box display="flex" alignItems="center" mt={3}>
                    <Typography>**********</Typography>
                    <CheckCircleOutlineIcon sx={{ marginLeft: '5px', display: 'flex', alignItems: 'center', color: '#4CAF50' }} />
                    <Typography sx={{ display: 'flex', alignItems: 'center', color: '#4CAF50' }}>
                      Very secure
                    </Typography>
                  </Box>
                  <Button variant="outlined" color="inherit" size="small" style={{ color: '#FFF', marginLeft: '10px' }}>Edit</Button>
                  </Box>
                <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
                <div>
                  <Typography>Two-step verification</Typography>
                  <Typography variant="body2" sx={{ color: 'white' }}>We recommend requiring a verification code in addition to your password.</Typography>
                </div>
                  <Box display="flex" alignItems="center" mt={2}>
                    <Switch
                      checked={true}
                      sx={{
                        '& .MuiSwitch-thumb': {
                          color: '#white', // Color of the switch's thumb (circle)
                          '&:hover': {
                            backgroundColor: '#white', // Color on hover
                          },
                        },
                        '& .MuiSwitch-track': {
                          backgroundColor: '#007bff', // Color of the track
                        },
                      }}
                    />
                    <Box ml={1}>
                      <Typography variant="body2" sx={{ color: 'white' }}>Two-step verification.</Typography>
                    </Box>
                  </Box>
                  <Button variant="outlined" color="inherit" size="small" style={{ color: '#FFF', marginLeft: '10px' }}>Edit</Button>
                  </Box>
              </Box>
            </Box>

            <Box mt={3}>
              <Typography variant="h6">Browsers and devices</Typography>
              <Typography variant="body2" sx={{ color: 'white' }}>These browsers and devices are currently signed in to your account. Remove any unauthorized devices.</Typography>
              <Box style={{ backgroundColor: '#3C3C3E', padding: '15px', borderRadius: '10px', marginTop: '10px' }}>
                <List component="nav">
                <ListItem>
                  <ListItemText primary="Brave on Mac OS X" />
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar src="public/assets/vietnam-flag.png" sx={{ width: 24, height: 24, marginRight: 1 }} />
                    <ListItemText secondary="Ninh Binh, Vietnam"/>
                  </Box>
                  <ListItemText secondary="Current session" sx={{ color: 'white' }} />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete" sx={{ color: 'white' }}>
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
                <ListItem>
                  <ListItemText primary="Mia's MacBook Pro" />
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar src="public/assets/vietnam-flag.png" sx={{ width: 24, height: 24, marginRight: 1 }} />
                    <ListItemText secondary="Ninh Binh, Vietnam" />
                  </Box>
                  <ListItemText secondary="Current session" sx={{ color: 'white' }} />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete" sx={{ color: 'white' }}>
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
                <ListItem>
                  <ListItemText primary="Brave on Mac OS X" />
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar src="public/assets/mexico-flag.png" sx={{ width: 24, height: 24, marginRight: 1 }} />
                    <ListItemText secondary="Mexico City, Mexico" />
                  </Box>
                  <ListItemText secondary="1 month ago" sx={{ color: 'white' }} /> 
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete" sx={{ color: 'white' }}>
                      <DeleteIcon />
                    </IconButton>    
                  </ListItemSecondaryAction>
                </ListItem>
                <ListItem>
                  <ListItemText primary="Mia's MacBook Pro" />
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar src="public/assets/mexico-flag.png" sx={{ width: 24, height: 24, marginRight: 1 }} />
                    <ListItemText secondary="Mexico City, Mexico" />
                  </Box>
                  <ListItemText secondary="1 month ago" sx={{ color: 'white' }} /> 
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete" sx={{ color: 'white' }}>
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
                </List>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Security;
