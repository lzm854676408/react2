import React, { Component } from 'react';
import CardList from './CardList.js';

class Cards extends Component {

let mage=[
  {title:'1234',date:'2016.07.01'},
  {title:'4534',date:'2016.07.03'},
  {title:'7894',date:'2016.07.05'}
];
  render(){
    let mage={
      for(i=0;i<mage.length;i++){
        mage.push{
          <CardList title={mage[i].title} date={mage[i].date} index={i}>
        }
      }
    };
    return (
      <div>
        {mage}
      </div>
    )


  }
}

export default Cards;
