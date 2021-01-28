import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route}  from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Menu from './components/pages/Menu';
import AboutUs from './components/pages/AboutUs';
import Reservations from './components/pages/Reservations';

function App() {
  return (
    <>
    <Router>
       <Navbar />
       <Switch>
         <Route path='/' exact component= {Home} />
         <Route path='/Menu' component={Menu} />
         <Route path='/about-Us' component={AboutUs} />
         <Route path='/reservations' component={Reservations} />
         </Switch>
        </Router>
    </>
  );
}

export default App;
