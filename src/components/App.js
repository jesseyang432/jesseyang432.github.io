import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';

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
        </Switch>
      </Router>
    );
  }
}

export default App;
