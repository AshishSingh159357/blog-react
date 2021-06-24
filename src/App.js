import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button1 from './components/Button1';
import Home from './components/Home';
import Skill from './components/Skill'
import Header from './components/Header';

import "./components/componentCSS/section.css";

import Services from './components/Services';
import Blog from './components/Blog';
import Contact from './components/Contact'


function App() {
  return (
    <div>


      <Header/>
      <Skill/>
      <Services/>
      <Blog/>
      <Contact/>
    

    </div>
  );
}

export default App;
