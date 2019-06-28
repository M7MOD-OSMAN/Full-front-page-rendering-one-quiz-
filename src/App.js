import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import * as actions from './store/actions/auth';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import About from './components/About'
import Contact from './components/Contact';
import Register from './components/Register';
import Home from './components/Home';
import Login from './components/Login';
import QuizRendering from './components/QuizRendering';

class  App extends Component {

  componentDidMount() {
    this.props.onTryAutoSignup();  
  }  

  render () {
  return (
   <BrowserRouter>
    <div className="App">
      <Navigation {...this.props}/>

      <Route exact path="/" component= {Home}/>
      <Route exact path="/home" component= {Home}/>
      <Route path="/about" component= {About}/>
      <Route path="/contact" component= {Contact}/>
      <Route path="/register" component= {Register}/>
      <Route path="/login" component= {Login}/>
      <Route path="/quiz" component= {QuizRendering} /> 

      <Footer {...this.props}/>
    </div>
    </BrowserRouter>  
  );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
