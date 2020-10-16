import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Student from './pages/Student';
import StudentDisplayer from './pages/StudentDisplayer';
import Blocks from './pages/Blocks';
import DefaultRoute from './pages/DefaultRoute';
function App() {
  return (
    <div className="container">
      <Header />
      <Router className="router">
        <Home path="/" />

        <StudentDisplayer path="/students/*" />
        <StudentDisplayer
          path="/graduates"
          query={'graduated'}
          value={'true'}
        />
        <Blocks path="/blocks/*" />
        <DefaultRoute default />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
