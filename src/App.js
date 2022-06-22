import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavMenu from './components/NavMenu';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Loader from './components/Loader';

export default function App() {
  const [loading, setLoading] = useState(true);

  if (loading)
    setTimeout(() => {
      setLoading(false);
    }, 2000);

  return (
    <>
      <Loader status={loading} />
      <BrowserRouter>
        <NavMenu />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
          <Route path="/" exact component={Home} />
        </Switch>
      </BrowserRouter>
    </>
  );
}
