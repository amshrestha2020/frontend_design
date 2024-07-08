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


export default function Sidebar() {
  return (
    <div className="flex-none w-64 bg-gray-900 text-white p-4">
      <div className="text-lg font-bold mb-4">Untitled UI</div>
      <ul className="space-y-2">
        <li className="hover:bg-gray-700 p-2 rounded">Home</li>
        <li className="hover:bg-gray-700 p-2 rounded">All files</li>
        <li className="hover:bg-gray-700 p-2 rounded">Private files</li>
        <li className="hover:bg-gray-700 p-2 rounded">Shared with me</li>
        <li className="hover:bg-gray-700 p-2 rounded">Deleted files</li>
        <li className="hover:bg-gray-700 p-2 rounded">Design</li>
        <li className="hover:bg-gray-700 p-2 rounded">Notifications</li>
        <li className="hover:bg-gray-700 p-2 rounded">Settings</li>
      </ul>
      <div className="mt-auto">
        <div className="text-xs">Storage</div>
        <div className="w-full bg-gray-600 h-2 rounded mt-1">
          <div className="bg-blue-500 h-2 rounded" style={{ width: '92%' }}></div>
        </div>
        <div className="text-xs mt-1">9.2 GB of 10 GB used</div>
      </div>
    </div>
  );
}

