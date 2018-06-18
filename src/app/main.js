import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/home';
import NewSlider from './components/landing/newSlider'


class Main extends React.Component{
  render(){
    return(
      <main>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path="/test" component={NewSlider} />
        </Switch>
      </main>
    )
  }
}
export default Main
