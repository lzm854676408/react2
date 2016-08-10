import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from './AppBar';
import DatePicker from 'material-ui/DatePicker';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import SvgIcon from 'material-ui/SvgIcon';

import Auto from './Auto.js';
import Icon from './icon.js';

var myTheme={

  palette:{
    alternateTextColor:'#BBDEFB',
    primary1Color:'#F06292'
  }
}

class App extends React.Component {
  getChildContext() {
    return {muiTheme: getMuiTheme(myTheme)};
  }
  render () {
    return(
      <div>
         <AppBar title="My AppBar" />

          <DatePicker hintText="Portrait Dialog" />
          <DatePicker hintText="Landscape Dialog" mode="landscape" />
          <DatePicker hintText="Dialog Disabled" disabled={true} />
          <DatePicker hintText="Portrait Inline Dialog" container="inline" />
          <DatePicker hintText="Landscape Inline Dialog" container="inline" mode="landscape" />
          <Auto />
          <Icon />
      </div>
    )
  }
}

App.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};

export default App;
