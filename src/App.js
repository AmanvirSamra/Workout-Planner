import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Box } from '@mui/material'

import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Info from './pages/Info'

function App() {
  return (
    <Box width="400px" sx={{width: 1}}m="auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<Info />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
