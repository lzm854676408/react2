import React, { Component } from 'react';
import CardList from './CardList.js';

let Cards=[
  {title:'1234',date:'2016.07.01'},
  {title:'4534',date:'2016.07.03'},
  {title:'7894',date:'2016.07.05'}
]

class Card extends Component {

  render(){
    var AllCards = [];
    for (var i = 0; i < Cards.length; i++) {
      let j=i+1;
      AllCards.push(
        <CardList title={Cards[i].title} data={Cards[i].data} index={j} key={i}/>
      )
    };
    return (
      <div>
        {AllCards}
      </div>
    )


  }
}

export default Card;
