import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage'
import Navbar from './Navbar';
import Flex from './Flex';
import Team from './Team';
import Ticket from './Ticket';
import Conatct from './Conatct';
import Gallery from './Gallery';

function App() {
  return (
    <div className='bg-gray-900'>
      <Routes>
      <Route path="/bonfire/" element={ <HomePage/> }/>
      <Route path="/team" element={<div> <Navbar/><Team /><Conatct/></div>}/>
      <Route path="/ticket" element={<div> <Navbar/><Ticket/><Conatct/></div>} />
      <Route path="/gallery" element={<div> <Navbar/><Gallery /></div>} />
      </Routes>
    </div>

  );
}

export default App;
