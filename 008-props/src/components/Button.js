
import React, { Component } from 'react';

class Button extends Component {


  render(){
    let styles={
      backgroundColor:this.props.bg,
      borderColor: this.props.bc,
      borderRadius:'5px'
    }
    return (
      <button className="my-button" style={styles}>{this.props.title}</button>
    );
  }
}
Button.defaultProps = {
  title:"props",
  bg:"#cfc",
};
Button.propTypes = {
  title: React.PropTypes.string.isRaquired,
  bg: React.PropTypes.string.isRaquired,
}
export default Button;
