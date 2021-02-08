import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/HomeFunction';
import Notes from './pages/Notes';

import './styles.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path = "/notes" exact component={Notes}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
