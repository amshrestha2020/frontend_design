import React from 'react';
import styles from './Sidebar.module.css';
import { Button, Switch } from '@mui/material';


// // const Sidebar = () => {
// //   return (
// //     <div className={styles.sidebar}>
// //       <div className={styles.header}>Untitled UI</div>
// //       <ul className={styles.menu}>
// //         <li>Home</li>
// //         <li>All files</li>
// //         <li>Private files</li>
// //         <li>Shared with me</li>
// //         <li>Deleted files</li>
// //         <li>Design</li>
// //         <li>Notifications</li>
// //         <li>Settings</li>
// //       </ul>
// //       <div className={styles.storage}>
// //         <p>Storage</p>
// //         <p>9.2 GB of 10 GB used</p>
// //         <button>Upgrade</button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Sidebar;




// import { useState } from 'react';
// import Link from 'next/link';
// import { useRouter } from 'next/router';

// const Sidebar = () => {
//   const router = useRouter();
//   const [notifications, setNotifications] = useState([
//     'Notification 1',
//     'Notification 2',
//     'Notification 3',
//     'Notification 4',
//     'Notification 5',
//     'Notification 6',
//     'Notification 7',
//     'Notification 8',
//   ]);
//   const [storageUsage, setStorageUsage] = useState(60); // Example usage percentage

//   const menuItems = [
//     { name: 'Dashboard', path: '/' },
//     { name: 'Profile', path: '/profile' },
//     { name: 'Settings', path: '/settings' },
//     { name: 'Messages', path: '/messages' },
//     { name: 'Analytics', path: '/analytics' },
//   ];

//   return (
//     <div className="sidebar">
//       <div className="menu">
//         {menuItems.map((item, index) => (
//           <Link href={item.path} className={router.pathname === item.path ? styles.active : ''}>
//             {item.name}
//           </Link>
//         ))}
//       </div>
//       <div className="notifications">
//         <h4>Notifications</h4>
//         <ul>
//           {notifications.map((notification, index) => (
//             <li key={index}>{notification}</li>
//           ))}
//         </ul>
//       </div>
//       <div className="storage">
//         <h4>Storage</h4>
//         <div className="progress-bar">
//           <div
//             className="progress"
//             style={{ width: `${storageUsage}%` }}
//           ></div>
//         </div>
//         <p>{storageUsage}% used</p>
//       </div>
//       <style jsx>{`
//         .sidebar {
//           width: 250px;
//           background: #f5f5f5;
//           padding: 20px;
//           box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//           display: flex;
//           flex-direction: column;
//           height: 100vh;
//         }
//         .menu a {
//           display: block;
//           padding: 10px 20px;
//           color: #333;
//           text-decoration: none;
//           margin-bottom: 10px;
//           border-radius: 4px;
//         }
//         .menu a.active {
//           background: #0070f3;
//           color: #fff;
//         }
//         .notifications {
//           margin-top: 20px;
//         }
//         .notifications h4 {
//           margin-bottom: 10px;
//         }
//         .notifications ul {
//           list-style: none;
//           padding: 0;
//         }
//         .notifications ul li {
//           padding: 5px 0;
//         }
//         .storage {
//           margin-top: auto;
//         }
//         .storage h4 {
//           margin-bottom: 10px;
//         }
//         .progress-bar {
//           background: #e0e0e0;
//           border-radius: 4px;
//           overflow: hidden;
//           height: 10px;
//           margin-bottom: 10px;
//         }
//         .progress {
//           height: 100%;
//           background: #0070f3;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Sidebar;


// export default function Sidebar() {
//   return (
//     <div className="flex-none w-64 bg-gray-900 text-white p-4">
//       <div className="text-lg font-bold mb-4">Untitled UI</div>
//       <ul className="space-y-2">
//         <li className="hover:bg-gray-700 p-2 rounded">Home</li>
//         <li className="hover:bg-gray-700 p-2 rounded">All files</li>
//         <li className="hover:bg-gray-700 p-2 rounded">Private files</li>
//         <li className="hover:bg-gray-700 p-2 rounded">Shared with me</li>
//         <li className="hover:bg-gray-700 p-2 rounded">Deleted files</li>
//         <li className="hover:bg-gray-700 p-2 rounded">Design</li>
//         <li className="hover:bg-gray-700 p-2 rounded">Notifications</li>
//         <li className="hover:bg-gray-700 p-2 rounded">Settings</li>
//       </ul>
//       <div className="mt-auto">
//         <div className="text-xs">Storage</div>
//         <div className="w-full bg-gray-600 h-2 rounded mt-1">
//           <div className="bg-blue-500 h-2 rounded" style={{ width: '92%' }}></div>
//         </div>
//         <div className="text-xs mt-1">9.2 GB of 10 GB used</div>
//       </div>
//     </div>
//   );
// }

