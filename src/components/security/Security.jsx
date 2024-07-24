// src/components/security/Security.jsx
import React from 'react';
import { isSmallScreen, Box, CircularProgress, LinearProgress, Grid, Typography, IconButton, Switch, Avatar, Button, List, ListItem, ListItemText, ListItemIcon, ListItemSecondaryAction, InputBase } from '@mui/material';
import ListItemButton from '@mui/material/ListItemButton';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import UpgradeIcon from '@mui/icons-material/Upgrade';
import LockIcon from '@mui/icons-material/Lock';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import DeleteIcon from '@mui/icons-material/Delete';
import { Home, Folder, Lock, PeopleAlt, Delete, Contrast, Notifications, Settings, ArrowRight } from '@mui/icons-material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import DeleteButton from '../../components/DeleteButton'; // Adjust the path according to your project structure
import FlagIcon from '@mui/icons-material/Flag'; // Generic Flag icon if specific country icons are not available
import Badge from '@mui/material/Badge';



const Security = () => {


  return (
    <Box sx={{ backgroundColor: '#202124', color: '#FFFFFF', minHeight: '100vh', p: { xs: 1, sm: 2 } }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4} md={3}>
        <Box
          sx={{
            backgroundColor: '#2C2C2E',
            padding: '10px',
            borderRadius: '10px',
            height: { sm: '100vh' },
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Box display="flex" alignItems="center" mb={2}>
              <img src="/assets/design.png" alt="Logo" style={{ width: '30px', height: '30px', marginRight: '10px' }} />
              <Typography variant="h6" gutterBottom sx={{ flexGrow: 1 }}>Untitled UI</Typography>
              <Typography variant="caption" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
                v4.0
                <Box component="span" sx={{ ml: 1 }}>
                  <i className="fa fa-external-link" aria-hidden="true"></i>
                </Box>
              </Typography>
            </Box>
            
          

          <List component="nav">
            <ListItemButton sx={{ color: 'white' }}>
              <ListItemIcon sx={{ color: 'white' }}>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
            <ListItemButton sx={{ color: '#f0f0f0' }}>
              <ListItemIcon sx={{ color: '#f0f0f0' }}>
                <Folder />
              </ListItemIcon>
              <ListItemText primary="All files" />
            </ListItemButton>
            <ListItemButton sx={{ color: 'white' }}>
              <ListItemIcon sx={{ color: 'white' }}>
                <Lock />
              </ListItemIcon>
              <ListItemText primary="Private files" />
            </ListItemButton>
            <ListItemButton sx={{ color: 'white' }}>
              <ListItemIcon sx={{ color: 'white' }}>
                <PeopleAlt />
              </ListItemIcon>
              <ListItemText primary="Shared with me" />
            </ListItemButton>
            <ListItemButton sx={{ color: 'white' }}>
              <ListItemIcon sx={{ color: 'white' }}>
                <Delete />
              </ListItemIcon>
              <ListItemText primary="Deleted files" />
            </ListItemButton>
            <ListItemButton sx={{ color: 'white' }}>
              <ListItemIcon sx={{ color: 'white' }}>
                <Contrast />
              </ListItemIcon>
              <ListItemText primary="Design" />
            </ListItemButton>
            <ListItemButton sx={{ color: 'white', display: 'flex', alignItems: 'center' }}>
              <ListItemIcon sx={{ color: 'white' }}>
                <Notifications />
              </ListItemIcon>
              <ListItemText primary="Notifications" />
              <Badge
                badgeContent={8}
                sx={{
                  '& .MuiBadge-badge': {
                    backgroundColor: '#7E3AF2',
                    color: 'white',
                    top: '3px',
                    right: '8px',
                    fontSize: '0.75rem',
                    height: '20px',
                    minWidth: '18px',
                  },
                  ml:2
                }}
              />
            </ListItemButton>
            <ListItemButton sx={{ 
                                color: 'white',
                                borderBottom: '2px solid white', 
                                borderRadius: '5px',
                                backgroundColor: 'rgba(169, 169, 169, 0.5)' 
                              }}>
              <ListItemIcon sx={{ color: 'white' }}>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </List>

          <Box mt={3}>
            <Typography variant="caption" gutterBottom sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              FILE BROWSER
              <Box component="span" sx={{ writingMode: 'vertical-rl', textOrientation: 'upright', ml: { xs: 2, sm: 3, md: 4, lg: 5 } }}>
                ⋮
              </Box>
            </Typography>
            <List>
              <ListItem>
                <Typography variant="h8" sx={{ mr: 2 }}>&gt;</Typography>
                <ListItemText primary={<Typography variant="h7">Folders</Typography>} />
              </ListItem>
            </List>
          </Box>

          <Box mt="auto" sx={{ mt: 2 }}>
            <Box sx={{ backgroundColor: '#3C3C3E', padding: '15px', borderRadius: '10px', marginTop: '10px' }}>
              <Box display="flex" flexDirection="column">
                <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                  <Typography variant="body1" style={{ color: '#FFF' }}>Storage</Typography>
                  <Box sx={{ borderBottom: '1px solid #FFF', pb: '1px' }}>
                    <Typography variant="body1" style={{ color: '#FFF' }}>Upgrade</Typography>
                  </Box>
                </Box>
                <LinearProgress
                  variant="determinate"
                  value={92}
                  sx={{
                    marginTop: 2,
                    height: 10,
                    borderRadius: 5,
                    '& .MuiLinearProgress-bar': {
                      backgroundColor: '#FFF',
                    },
                    '& .MuiLinearProgress-barColorPrimary': {
                      backgroundColor: '#FFF',
                    }
                  }}
                />
                <Typography variant="body2" sx={{ color: 'white', mt: 1 }}>
                  9.2 GB of 10 GB used
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Grid>

        <Grid item xs={12} sm={8} md={9}>
          <Box style={{ 
                      padding: '20px', 
                      borderRadius: '10px',
                      display: 'flex',
                      flexDirection: 'column',
                      height: { xs: 'auto', sm: '100vh' },
                      overflowY: 'auto', }}>
           <Box display="flex" justifyContent="space-between" alignItems="center">
            <div>
              <Typography variant="h6">Mia de Silva</Typography>
              <Typography variant="body2" sx={{ color: 'white' }}>Manage your details and personal preferences here.</Typography>
            </div>
            <Box display="flex" alignItems="center">
              {/* <input type="text" placeholder="Search" className="p-2 border rounded-lg border-black-300" /> */}
              <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor: '#1C1C1E',
                    borderRadius: '8px',
                    padding: '4px 8px',
                    color: 'white',
                  }}
                >
                  <SearchIcon sx={{ color: 'white' }} />
                  <InputBase
                    placeholder="Search"
                    inputProps={{ 'aria-label': 'search' }}
                    sx={{ color: 'white', ml: 1 }}
                  />
                </Box>
              <Button
                  variant="contained"
                  sx={{
                    backgroundColor: '#3C3C3E',
                    color: '#FFF',
                    borderRadius: '8px',
                    textTransform: 'none'
                  }}
                  style={{ marginLeft: 'auto' }}
                  startIcon={<AddIcon />} 
                >
                  Invite
                </Button>
              <Button variant="contained" color="primary" size="small" sx={{ marginLeft: 'auto', borderRadius: '8px', }} style={{ backgroundColor: '#007bff', color: 'white'}}>
                Upgrade
              </Button>
              <Avatar alt="User" src="/user/profile.jpg" sx={{ marginLeft: '10px' }} />
            </Box>
          </Box>

            <Box mt={3}>
              <nav className="flex space-x-1">
                <Button className="py-2 px-2 rounded bg-black-200 text-white normal-case">General</Button>
                <Button className="py-2 px-2 rounded bg-black-200 text-white normal-case border-b-2 border-white" style={{backgroundColor: 'rgba(169, 169, 169, 0.5)'}}> Security </Button>             
                <Button className="py-2 px-2 rounded bg-black-200 text-white normal-case">Billing</Button>
                <Button className="py-2 px-2 rounded bg-black-200 text-white normal-case">Notifications</Button>
                <Button className="py-2 px-2 rounded bg-black-200 text-white normal-case">Apps</Button>
                <Button className="py-2 px-2 rounded bg-black-200 text-white normal-case">Branding</Button>
                <Button className="py-2 px-2 rounded bg-black-200 text-white normal-case">Refer a friend</Button>
                <Button className="py-2 px-2 rounded bg-black-200 text-white normal-case">Sharing</Button>
              </nav>
            </Box>
            

            <Box mt={3}>
              <Typography variant="h6">Security</Typography>
              <Box style={{ backgroundColor: '#3C3C3E', padding: '15px', borderRadius: '10px', marginTop: '10px' }}>
                <Box mt={1} display="flex" alignItems="center">
                  {/* Circular progress indicating 90% security */}
                  <CircularProgress variant="determinate" value={90} thickness={6} size={40} sx={{ marginRight: 2 }} />
                  <Box ml={2}>
                    <div>
                      <Typography variant="body1">Your account security is 90%</Typography>
                      <Typography variant="body2" sx={{ color: 'white' }}>Please review your account security settings regularly and update your password.</Typography>
                    </div>
                  </Box>
                  <Button
                      variant="contained"
                      sx={{
                        backgroundColor: '#3C3C3E',
                        color: '#FFF',
                        borderRadius: '8px',
                        textTransform: 'none'
                      }}
                      style={{ marginLeft: 'auto' }}
                    >
                      Dismiss
                    </Button>
                  <Button variant="contained" color="primary" style={{ marginLeft: '10px' , backgroundColor: '#007bff', color: 'white'}}>Review security</Button>
                </Box>
              </Box>
            </Box>
            <Box mt={3}>
              <Typography variant="h6">Basics</Typography>
              <div style={{ backgroundColor: '#3C3C3E', padding: '15px', borderRadius: '10px', marginTop: '10px' }}>
                {/* Password Section */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ width: '100%', marginBottom: '10px' }}>
                    <Typography variant="body1" style={{ color: '#FFF' }}>Password</Typography>
                    <Typography variant="body2" sx={{ color: 'white' }}>Set a password to protect your account.</Typography>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                      <Typography>**********</Typography>
                      <CheckCircleOutlineIcon style={{ marginLeft: '5px', color: '#4CAF50' }} />
                      <Typography style={{ color: '#4CAF50', marginLeft: '8px' }}>Very secure</Typography>
                    </div>
                    <Button variant="outlined" color="inherit" size="small" style={{ color: '#FFF', marginLeft: '10px' }}>Edit</Button>
                  </div>
                </div>

                {/* Two-step verification Section */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                  <div style={{ width: '100%', marginBottom: '10px' }}>
                    <Typography>Two-step verification</Typography>
                    <Typography variant="body2" sx={{ color: 'white' }}>We recommend requiring a verification code in addition to your password.</Typography>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                      <Switch
                        checked={true}
                        sx={{
                          '& .MuiSwitch-thumb': {
                            color: '#FFF',
                            '&:hover': {
                              backgroundColor: '#FFF',
                            },
                          },
                          '& .MuiSwitch-track': {
                            backgroundColor: '#007bff',
                          },
                        }}
                      />
                      <Typography variant="body2" sx={{ color: 'white', marginLeft: '8px' }}>Two-step verification</Typography>
                    </div>
                    <Button variant="outlined" color="inherit" size="small" style={{ color: '#FFF', marginLeft: '10px' }}>Edit</Button>
                  </div>
                </div>
              </div>
            </Box>



            <Box mt={3}>
              <Typography variant="h6">Browsers and devices</Typography>
              <Typography variant="body2" sx={{ color: 'white' }}>These browsers and devices are currently signed in to your account. Remove any unauthorized devices.</Typography>
              <Box style={{ backgroundColor: '#3C3C3E', padding: '15px', borderRadius: '10px', marginTop: '10px' }}>
                <List component="nav">
                <ListItem>
                  <img
                    src="/assets/brave.png"
                    alt="Brave Logo"
                    style={{ width: '30px', height: '30px', marginRight: '10px' }}
                  />
                <ListItemText primary="Brave on Mac OS X" sx={{ color: 'white',  marginRight: 'auto' }}/>
                  <Box sx={{ display: 'flex', alignItems: 'center',  marginRight: '100px'  }}>
                    <Avatar src="/assets/vietnam-flag.png" sx={{ width: 24, height: 24, marginRight: 1 }} />
                    <ListItemText primary="Ninh Binh, Vietnam" sx={{ color: 'white' }}/>
                  </Box>
                  {/* Current session text with added space */}
                  <Box
                      sx={{
                        flexGrow: 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end', // Align text to the right
                        paddingLeft: { xs: 1, sm: 2, md: 4 }, // Responsive padding
                        paddingRight: { xs: 1, sm: 2, md: 4 }, // Responsive padding
                      }}
                    >
                      <ListItemText
                        primary="Current session"
                        sx={{
                          color: 'white',
                          marginLeft: { xs: 1, sm: 2, md: 4 }, // Responsive margin
                          whiteSpace: 'nowrap', // Prevent text from wrapping
                        }}
                      />
                    </Box>
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete" sx={{ color: 'white' }}>
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
                <ListItem>
                  <img
                    src="/assets/apple.png"
                    alt="Brave Logo"
                    style={{ width: '30px', height: '30px', marginRight: '10px' }}
                  />
                  <ListItemText primary="Mia's MacBook Pro" sx={{ color: 'white', marginRight:'auto' }} />
                  <Box sx={{ display: 'flex', alignItems: 'center', marginRight:'100px' }}>
                    <Avatar src="/assets/vietnam-flag.png" sx={{ width: 24, height: 24, marginRight: 1 }} />
                    <ListItemText primary="Ninh Binh, Vietnam"  sx={{ color: 'white' }} />
                  </Box>
                  {/* Current session text with added space */}
                  <Box
                      sx={{
                        flexGrow: 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end', // Align text to the right
                        paddingLeft: { xs: 1, sm: 2, md: 4 }, // Responsive padding
                        paddingRight: { xs: 1, sm: 2, md: 4 }, // Responsive padding
                      }}
                    >
                      <ListItemText
                        primary="Current session"
                        sx={{
                          color: 'white',
                          marginLeft: { xs: 1, sm: 2, md: 4 }, // Responsive margin
                          whiteSpace: 'nowrap', // Prevent text from wrapping
                        }}
                      />
                    </Box>
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete" sx={{ color: 'white' }}>
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
                <ListItem>
                  <img
                    src="/assets/brave.png"
                    alt="Brave Logo"
                    style={{ width: '30px', height: '30px', marginRight: '10px' }}
                  />
                  <ListItemText primary="Brave on Mac OS X" sx={{ color: 'white', marginRight:'auto' }} />
                  <Box sx={{ display: 'flex', alignItems: 'center', marginRight:'100px' }}>
                    <Avatar src="/assets/mexico-flag.png" sx={{ width: 24, height: 24, marginRight: 1 }} />
                    <ListItemText primary="Mexico City, Mexico" sx={{ color: 'white' }} />
                  </Box>
                  {/* Current session text with added space */}
                  <Box
                      sx={{
                        flexGrow: 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end', // Align text to the right
                        paddingLeft: { xs: 1, sm: 2, md: 4 }, // Responsive padding
                        paddingRight: { xs: 1, sm: 2, md: 4 }, // Responsive padding
                      }}
                    >
                      <ListItemText
                        primary="1 month ago"
                        sx={{
                          color: 'white',
                          marginLeft: { xs: 1, sm: 2, md: 4 }, // Responsive margin
                          whiteSpace: 'nowrap', // Prevent text from wrapping
                        }}
                      />
                    </Box>
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete" sx={{ color: 'white' }}>
                      <DeleteIcon />
                    </IconButton>    
                  </ListItemSecondaryAction>
                </ListItem>
                <ListItem>
                  <img
                    src="/assets/apple.png"
                    alt="Brave Logo"
                    style={{ width: '30px', height: '30px', marginRight: '10px' }}
                  />
                  <ListItemText primary="Mia's MacBook Pro" sx={{ color: 'white', marginRight: 'auto'  }} />
                  <Box sx={{ display: 'flex', alignItems: 'center', marginRight: '100px' }}>
                    <Avatar src="/assets/mexico-flag.png" sx={{ width: 24, height: 24, marginRight: 1 }} />
                    <ListItemText primary="Mexico City, Mexico" sx={{ color: 'white' }} />
                  </Box>
                  {/* Current session text with added space */}
                  <Box
                      sx={{
                        flexGrow: 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end', // Align text to the right
                        paddingLeft: { xs: 1, sm: 2, md: 4 }, // Responsive padding
                        paddingRight: { xs: 1, sm: 2, md: 4 }, // Responsive padding
                      }}
                    >
                      <ListItemText
                        primary="1 month ago"
                        sx={{
                          color: 'white',
                          marginLeft: { xs: 1, sm: 2, md: 4 }, // Responsive margin
                          whiteSpace: 'nowrap', // Prevent text from wrapping
                        }}
                      />
                    </Box>
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
