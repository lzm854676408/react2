import React, { Component } from 'react';
class Mydemo extends Component{
  constructor(){
    super();
    this.state={
      opacity:0.5,
    }
    // alert('init');
  }
  render(){
    return(
      <div>
        <h1>demo</h1>
        <div style={this.state}>hello</div>
      </div>
    )
  }
  componentDidMount(){
    // alert('did');
    this.interval = setInterval(this.change.bind(this),100);
  }
  componentWillMount(){
    // alert('will');
  }
  change(){
    this.setState({
      opacity:this.state.opacity>0 ? this.state.opacity-0.1 : 1,
    })
  }
}

export default Mydemo;
