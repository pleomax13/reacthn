import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import News from './components/News';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import smoothscroll from 'smoothscroll-polyfill';

smoothscroll.polyfill();

class App extends Component {
  render() {
    console.log(this.props.location)
    return (
      <div className = 'App'>
        <Nav />
        <Main />
        <Footer />
        <BackToTop />
      </div>
    );
  }
}

export default App;
