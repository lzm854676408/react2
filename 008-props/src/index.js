import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Cards from './components/Cards.js';

// let btnProps = {
//   title:'来自外部变量',
//   bg:'blue'
// }
class App extends Component {
  render(){

    return(

      <div>
        // <Button title={btnProps.title} />
        // <Button {...btnProps} />
        // {btns}
        <CardList title="hello" date="2016.07.01" index="1"/>
      </div>

      // <p>hello {this.props.name},{this.props.where}</p>
    )
  }
}

ReactDOM.render(<App />,document.getElementById('app'));
