import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      {/* <h1>An Insight of Bottega Five Star Secrets</h1> */}
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/adventure.jpg'
              text='Explore the hidden tenderness inside the Vache '
              label='Adventure'
              path='/Menu'
            />
            <CardItem
              src='images/salmon-topseller.jpg'
              text='Travel through the world with a little flavor from Our Chef'
              label='Top Seller'
              path='/Menu'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/feast.jpg'
              text="It's all about the family and the feast"
              label='Big Feast'
              path='/Menu'
            />
            <CardItem
              src='images/grass-fed.jpg'
              text='Hand cut from the world best chef'
              label='Grass Fed'
              path='/Menu'
            />
            <CardItem
              src='images/whos-hungry.jpg'
              text='Ride through the Fresh Farm on a special select cut'
              label="Who's hungry?"
              path='/Menu'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;