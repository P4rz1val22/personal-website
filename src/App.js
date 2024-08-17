import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavbarComp/Navbar';
import TV from './components/TV/TV';
import React from "react"
import Home from './pages/Index'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Work from './pages/Work'

function App() {
  return (
    <div className="App">
      <Navbar />
      <TV />
    </div>
  );
}


export default App;
