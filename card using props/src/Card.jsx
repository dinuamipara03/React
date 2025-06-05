import React from 'react';
import './App.css';

const Card = (props) => {
  return (
    <section>
      <img src={props.image} alt={props.title} />
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </section>
  );
};

export default Card;