import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './Navbar';
import Flex from './Flex';
import Team from './Team';
import Ticket from './Ticket';
import Conatct from './Conatct';
import Gallery from './Gallery';

function App() {
  return (
    <div className='bg-gray-800'>
    
   
      <Routes>
      <Route path="/" element={<div> <Navbar/><Flex /><Team /><Ticket/></div>} />

        <Route path="demo/team" element={<div> <Navbar/><Team /><Conatct/></div>}/>
        <Route path="demo/ticket" element={<div> <Navbar/><Ticket  /><Conatct/></div>} />
        
        <Route path="demo/gallery" element={<div> <Navbar/><Gallery /><Conatct/></div>} />
      </Routes>
      
    
    </div>

  );
}

export default App;
