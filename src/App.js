import React, { Component } from 'react';
import 'milligram';
import Sidebar from './components/sidebar'
import Editor from './components/editor'

class App extends Component {
  render() {
    return (
      <div className="App container">
        <h1>Marky Mark</h1>

        <div className="row">
          <Sidebar />
          <Editor />
        </div>
      </div>
    );
  }
}

export default App;
