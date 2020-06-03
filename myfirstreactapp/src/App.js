import React from 'react';
import NavBar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import Cover from './components/Cover'
import './App.css';

function App(){
  return(
    <div className = 'App'>
    <NavBar title = "strive Bookstore"/>
    <Home/>
    <Cover/>
    <Footer/>
    
    </div>

  )
}



export default App;
