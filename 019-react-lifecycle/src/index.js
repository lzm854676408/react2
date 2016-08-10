import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// import Mydemo from './components/Mydemo.js';
// import LifeCycle from './components/LifeCycle.js';
import DestroyComponent from './components/DestroyComponent.js';

class App extends Component {
  render(){
    return(
      <div>
        <DestroyComponent />
      </div>
    )
  }
}


ReactDOM.render(<App/>,document.getElementById('app'));
