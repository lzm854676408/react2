import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';


class AppBarDemo extends React.Component{
  handleTouchTap(){
    alert("left");
  }
  handelClick(){
    alert("title");
  }
  render(){
    return(
      <AppBar
        title="Title"
         iconElementRight={<FlatButton label="Save" />}
        onTitleTouchTap={this.handelClick.bind(this)}
        onLeftIconButtonTouchTap={this.handleTouchTap.bind(this)}
      />
    );
  }

}


export default AppBarDemo;
