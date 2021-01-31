import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route}  from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Menu from './components/pages/Menu';
import AboutUs from './components/pages/AboutUs';
import Reservations from './components/pages/Reservations';
// import Chef from './components/pages/Chef';




function App() {
  return (
    <>
    <Router>
       <Navbar />
       <Switch>
         <Route path='/' exact component= {Home} />
         <Route path='/menu' component={Menu} />
         <Route path='/about-us' component={AboutUs} />
         <Route path='/reservations' component={Reservations} />
         {/* <Route path='/chef' component={Chef} /> */}
         </Switch>
        </Router>
    </>
  );
}

export default App;
