import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Homefunction from './pages/Homefunction';

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
          <Route path="/" exact component={Homefunction}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
