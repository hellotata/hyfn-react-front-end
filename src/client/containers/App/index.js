import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Wrapper from '../Wrapper';
import AdsTable from '../AdsTable';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div>
          <Route path='/' component={Wrapper} />
        </div>
      </Router>
    );
  }
}

export default App;
