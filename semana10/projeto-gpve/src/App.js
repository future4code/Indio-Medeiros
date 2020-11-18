import React from 'react'
import { Route } from 'react-router-dom'
import ProtectedRouter from './Routers/ProtectedRouter';
import Router from './Routers/Router';

function App() {
  return (
    <div>
      <Router/>
      {/* <ProtectedRouter/> */}
    </div>
  );
}

export default App;
