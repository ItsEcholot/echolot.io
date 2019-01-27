import React, { PureComponent } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Header from './Header';
import Welcome from './Welcome';

class App extends PureComponent {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Welcome></Welcome>
        <br/><br/><br/><br/><br/>Asd
      </div>
    );
  }
}

export default App;
