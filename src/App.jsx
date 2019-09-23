import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Category from './components/Category';
import Men from './components/Men';
import Ladies from './components/Ladies';
import Gadgets from './components/Gadgets';
import Login from './components/Login';
import Navbar from './components/CustomNavbar';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/category" component={Category} />
        <Route exact path="/men" component={Men} />
        <Route exact path="/women" component={Ladies} />
        <Route exact path="/gadgets" component={Gadgets} />
        <Route exact path="/login" component={Login} />
      </div>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
