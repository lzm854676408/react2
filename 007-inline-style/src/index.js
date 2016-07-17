import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Button from './components/Button.js';
import Input from './components/Input.js';



class App extends Component {
  getstyles(){
    return{
      root:{
        backgroundColor:'#ccc',
        width:'200px',
        height:'80px'
      }
    }
  }
  render(){
    const styles = this.getstyles();
    return(

      <div style = {styles.root}>
      <Input />
      <Button />
      </div>
    )
  }
}

ReactDOM.render(<App/>,document.getElementById('app'));
