import React from 'react';
import Navbar from './components/Navbar';
import "./styles/App.css";
import UpcomingIpo from './components/ipos/UpcomingIpo'

function App() {
  return(
    <>
      <Navbar />
      <UpcomingIpo />
    </>
  );
}

export default App
