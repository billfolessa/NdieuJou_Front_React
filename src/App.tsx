import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './pages/login';
import Register from './pages/register';
import AuthProvider from './store/authStore';
import RouteApp from './route/route';

function App() {
  return (

      <AuthProvider >
        <RouteApp/>
      </AuthProvider>

  );
}

export default App;
