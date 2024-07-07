import React from 'react';
import { Outlet } from 'react-router-dom';
import './style.css';

const App: React.FC = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default App;
