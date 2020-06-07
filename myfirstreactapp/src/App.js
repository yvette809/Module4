import React from "react";
import NavBar from "./components/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import "./App.css";
import Footer from "./components/Footer";
import Browse from "./pages/Browse";
import Book from "./pages/Book";
function App() {
  return (
    <Router>
      <NavBar title="strive Bookstore" />
      <Route path="/home" component={Home} exact />
      <Route path="/about" component={About} />
      <Route path="/browse" component={Browse} />
      <Route path="/book/:bookId" component={Book} />
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
