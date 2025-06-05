import React from 'react';
import Card from './Card';

const cardData = [
  {
    image: 'download.jpeg',
    title: 'Card One',
    description: 'This is the first card description.',
  },
  {
    image: 'download.jpeg',
    title: 'Card Two',
    description: 'This is the second card description.',
  },
  {
    image: 'download.jpeg',
    title: 'Card Three',
    description: 'This is the third card description.',
  },
];

function App() {
  return (
    <div>
      {cardData.map((item, idx) => (
        <Card
          key={idx}
          image={item.image}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
}

export default App;