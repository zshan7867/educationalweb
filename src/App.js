 import React from 'react'
 import './App.css';
 import { Route, Routes } from 'react-router-dom';
 import Navbar from './Navbar'
 import Welcome from './Login'
 import Home from './Home'
 import Administrator from './Administrator'
 import Admission from './Admission'
 import Tracking from './Tracking'


const App = () => {
  return (  <>
    <Navbar />
    <Routes>
     <Route path="/welcome" element={< Welcome />} />
     <Route path="/home" element={< Home />} />
     <Route path="/administrator" element={< Administrator />} />
     <Route path="/admission" element={< Admission />} />
     <Route path="/tracking" element={< Tracking />} />
</Routes>
    </>
  );
};

export default App