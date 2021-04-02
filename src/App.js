import React from 'react';
import {
  BrowserRouter as Router,
  Switch, 
  Route,
} from 'react-router-dom';
import { CheckOutPage } from './components/pages/checkout/CheckOutPage';
import { DashboardPage } from './components/pages/dashboard/DashboardPage';
import { HomePage } from './components/pages/home/HomePage';
import { StorePage } from './components/pages/store/StorePage';

function App() {
  return (
    <Router>

      {/* Navbar */}
      



      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/store' component={StorePage}/>
        <Route exact path='/dashboard' component={DashboardPage}/>
        <Route exact path='/checkout' component={CheckOutPage}/>
      </Switch>
    </Router>
  );
}

export default App;
