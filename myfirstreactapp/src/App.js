import React from 'react';
import NavBar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import Cover from './components/Cover'
import Comments from './components/Comments'
import './App.css';

function App(){
  return(
    <div className = 'App'>
    <NavBar title = "strive Bookstore"/>
    <Home/>
    <Cover/>
    <Footer/>
    <Comments />
    
    </div>

  )
}



export default App;
