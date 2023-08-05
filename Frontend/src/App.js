import Edititemform from './components/Edititemform';
import Allbuttons from './components/Allbuttons';
import React from 'react';
import Maintable from './components/Maintable';
import { Routes,Route } from 'react-router-dom';
import Additemform from './components/Additemform';
import Viewdata from './components/Viewdata';



function App() {
  return (
    
      <Routes>
        <Route path="/Additemform" element={<Additemform/>} />
        <Route path="/Edititemform" element={<Edititemform/>} />
        <Route path="/Allbuttons" element={<Allbuttons/>} />
        <Route path="/" element={<Maintable/>} />
        <Route path="/Viewdata/:id" element={<Viewdata/>} />
        <Route path="/Edititemform/:id" element={<Edititemform/>} />
      </Routes>

    // <Maintable/>

    
  );
}

export default App;
