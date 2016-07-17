
import React, { Component } from 'react';

class Button extends Component {

  getstyles(){
    return{
      button:{
        backgroundColor:'#ddd',
        borderColor: '#2db7f5',
        borderRadius:'5px'
      }
    }
  }

  render(){
    const styles = this.getstyles();
    return (
      <button className="my-button" style={styles.button}>click</button>
    );
  }
}

export default Button;
