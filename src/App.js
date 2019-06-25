import React from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';

import './App.css';
// App components
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import About from './components/About'
import Contact from './components/Contact';
import Register from './components/Register';
import Home from './components/Home';
import Login from './components/Login';
import QuizRendering from './components/QuizRendering';


const  App= () => {
  return (
   <BrowserRouter>
    <div className="App">
      <Navigation />

      <Route exact path="/home" component= {Home}/>
      <Route path="/about" component= {About}/>
      <Route path="/contact" component= {Contact}/>
      <Route path="/register" component= {Register}/>
      <Route path="/login" component= {Login}/>
      <Route path="/quizzz" component= {QuizRendering} /> 

      <Footer />
    </div>
    </BrowserRouter>  
  );
}

export default App;
