import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Students from './pages/Students';
import Student from './pages/Student';
import Graduates from './pages/Graduates';
import Blocks from './pages/Blocks';

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Home path="/" />
        <Students path="/students" />
        <Student path="/students/:student_id" />
        <Graduates path="/graduates" />
        <Blocks path="/blocks" />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
