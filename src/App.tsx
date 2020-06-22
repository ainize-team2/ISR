import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Home from './components/pages/Home';
import About from './components/pages/About';
import Header from './components/organisms/Header';
import Footer from './components/organisms/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Redirect path="*" to="/home" />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
