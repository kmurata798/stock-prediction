import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Meet the team!</h1>
      <p>Under the guidance of our mentor Julian we are working on developing software to predict stock prices</p>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/Julian_aboutus.jpeg'
              text='Hey Im Julian! Im a software engineer on Microsoft Azures Digital/Customer Experience team.'
              contact='Contact me@'
              label='Julian Boss'
              contact='Email: unknown'
              path='/aboutus'
            />
             <CardItem
              src='images/Dibba_aboutus3.jpeg'
              text='Hey! Im a software engineer from NYC. Throughout college, Ive focused on building mobile applications as side projects - but now Im exploring more fullstack web development. For this project I worked on the frontend side of things with the use of ReactJS.'
              label='Dibba Roy'
              contact='Email: Roydibba@gmail.com'
              path='/aboutus'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/kento_aboutus.jpeg'
              text='Hi, Im a software engineer in Southern California. I recently received my computer science bachelors degree and am working to improve my web development skills. I have been learning how to use new coding tools while working on this stock prediction project which is challenging but exciting.
              '
              label='Kento Murata'
              contact='Email: Kmurata798@gmail.com'
              path='/aboutus'
            />
            <CardItem
              src='images/emran_aboutus.png'
              text='Hey, my name is Emran Arsala and I am currently a junior at CSU Monterey Bay. I want to work as a software engineer or data scientist when I graduate. This project was very fun to work on as I mainly worked on the frontend with ReactJS.'
              label='Emran Arsala'
              contact='Email: Emarsala@csumb.edum'
              path='/aboutus'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;