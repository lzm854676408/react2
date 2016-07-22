import React, { Component } from 'react';



class Card extends Component {


  render(){
    let styles={
      root: {
        width:'80%',
        height:'50px',
        backgroundColor:'rgba(0 0 0 0.5)',
        margin:'0 auto'
      },
      left:{
        width:'30%',
        height:'50px',
        lineHeight:'50px',
        textAlign:'center',
        color:'#fff',
        backgroundColor:'teal',
        float:'left'
      },
      right:{
        height:'50px',
        paddingLeft:'20px',
        color:'#fff',
        float:'left'
      }
    }
    return (
      <div style={styles.root}>
        <div style={styles.left}>{this.props.index}</div>
        <div style={styles.right}>
          <h3>{this.props.title}</h3>
          <p>{this.props.date}</p>
        </div>
      </div>
    )
  }
}


CardList.defualtProps={
  index:1,
  title:'标题',
  date:'2016.07.01'
}
// Card.propTypes = {
//   title: React.PropTypes.string.isRaquired,
//   bg: React.PropTypes.string.isRaquired,
// }
export default Card;
