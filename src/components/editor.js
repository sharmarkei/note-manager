import React, { Component } from 'react';
import SimpleMDE from 'react-simplemde-editor';

class Editor extends Component {
  render() {
    return (
      <div className="editor column column-75">
        <SimpleMDE
          onChange={this.handleChange}
          value="Type Here"
        />
      </div>
    );
  }
}

export default Editor;
