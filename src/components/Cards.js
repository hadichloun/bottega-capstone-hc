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
              src='images/img-1.jpg'
              text='Explore the hidden tenderness inside the Vache '
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='images/img-1.jpg'
              text='Travel through the world with a little flavor from Our Chef'
              label='Top Seller'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-1.jpg'
              text="It's all about the family and the feast"
              label='Big Feast'
              path='/services'
            />
            <CardItem
              src='images/img-1.jpg'
              text='Hand cut from the world best chef'
              label='Grass Fed'
              path='/products'
            />
            <CardItem
              src='images/img-1.jpg'
              text='Ride through the Sahara Desert on a special select cut'
              label="Who's hungry?"
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;