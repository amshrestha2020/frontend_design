// "use client";

// import { useState } from 'react';
// import { Box, Drawer, List, ListItem, ListItemIcon, ListItemText, CircularProgress, Avatar, Typography } from '@mui/material';
// import { Home, Folder, Settings, Notifications, InsertDriveFile, Person, Upgrade } from '@mui/icons-material';

// const menuItems = [
//   { text: 'Home', icon: <Home /> },
//   { text: 'All files', icon: <InsertDriveFile /> },
//   { text: 'Private files', icon: <InsertDriveFile /> },
//   { text: 'Shared with me', icon: <InsertDriveFile /> },
//   { text: 'Deleted files', icon: <InsertDriveFile /> },
//   { text: 'Design', icon: <InsertDriveFile /> },
//   { text: 'Notifications', icon: <Notifications /> },
//   { text: 'Settings', icon: <Settings /> },
// ];

// const Layout = ({ children }) => {
//   const [activeItem, setActiveItem] = useState('Settings');

//   return (
//     <Box display="flex">
//       <Drawer variant="permanent" PaperProps={{ style: { width: 240, backgroundColor: '#1E1E1E', color: '#FFF' } }}>
//         <Box p={2} display="flex" alignItems="center">
//           <Avatar src="/path/to/profile.jpg" alt="Profile" />
//           <Typography variant="h6" ml={2}>Untitled UI</Typography>
//         </Box>
//         <List>
//           {menuItems.map((item, index) => (
//             <ListItem 
//               button 
//               key={item.text} 
//               selected={activeItem === item.text} 
//               onClick={() => setActiveItem(item.text)} 
//               sx={{ '&.Mui-selected': { backgroundColor: '#333', '&:hover': { backgroundColor: '#444' } } }}
//             >
//               <ListItemIcon sx={{ color: '#FFF' }}>{item.icon}</ListItemIcon>
//               <ListItemText primary={item.text} />
//             </ListItem>
//           ))}
//         </List>
//         <Box p={2}>
//           <Box display="flex" justifyContent="space-between">
//             <Typography variant="body2">Storage</Typography>
//             <Typography variant="body2">Upgrade</Typography>
//           </Box>
//           <Box width="100%" mt={1}>
//             <CircularProgress variant="determinate" value={92} />
//             <Typography variant="body2">9.2 GB of 10 GB used</Typography>
//           </Box>
//         </Box>
//       </Drawer>
//       <Box component="main" flexGrow={1} p={3} bgcolor="#2D2D2D">
//         {children}
//       </Box>
//     </Box>
//   );
// };

// export default Layout;
