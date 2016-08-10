import React from 'react';
import Img1 from '../images/demo1.jpg';
import Img2 from '../images/demo2.jpg';
import Img3 from '../images/demo3.jpg';

class Slide extends React.Component {
  constructor(){
    super();
    this.state={
      nowLocal:0
    }
  }
  turn(){
    if (this.state.nowLocal<2){
      this.setState({
        index:this.state.nowLocal+1
      })
    }else{
      this.setState({
        nowLocal:0
      })
    }

  }
componentDidMount(){

  setInterval(this.turn.bind(this),1000);

  }
  render(){
    let styles={
      ul:{
        left:-this.state.nowLocal*100 + '%'
      }
    }
    return(
      <div className="box">
        <ul style={styles.ul}>
          <li><img src={Img1} /></li>
          <li><img src={Img2} /></li>
          <li><img src={Img3} /></li>
        </ul>
      </div>
    )
  }
}

export default Slide;
