// App.js
import React from 'react';
import SideBar from './components/Sidebar/SideBar';
import './App.css'
import Dashboard from './components/Dashboard';
import { SidebarProvider } from './components/SideBarContext';

const App = () => {
  return (
    <SidebarProvider>
    <div style={{ display: 'flex'}}>
      <SideBar/>
      <div>
        <Dashboard/>
      </div>
    </div>
    </SidebarProvider>
  );
};

export default App;
