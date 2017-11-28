import React, { Component } from 'react';
import 'milligram';
import Sidebar from './components/sidebar'
import Editor from './components/editor'

class App extends Component {
  constructor() {
    super();

    this.change = this.change.bind(this);
  }
  change() {
    console.log('changed');
  }
  render() {
    return (
      <div className="App container">
        <h1>Marky Mark</h1>

        <div className="row">
          <Sidebar />
          <Editor change={this.change}/>
        </div>
      </div>
    );
  }
}

export default App;
