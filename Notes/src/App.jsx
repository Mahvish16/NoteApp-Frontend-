import React from 'react';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import Add from './components/addNotes';
import NoteList from './components/notesList';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path='login/' element={<Login />} />
          <Route path='home/' element={<Home />} />
          <Route path='notes/' element={<Add />} />
          <Route path='/NoteList' element={<NoteList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
