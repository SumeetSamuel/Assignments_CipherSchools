
import React from 'react';
import { Switch, Route } from 'react-router-dom';


import Resume from './resume';
import Contact from './contact';
import Blog from './blog';


const Main = () => (
  <Switch>
    
    <Route exact path="/" component={Resume} />
    <Route path="/contact" component={Contact} />
    <Route path="/blog" component={Blog} />
  </Switch>
)

export default Main;