import React from 'react'
import Card from './Card'

import image1 from "../assets/image1.jpg";
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'

const cards = [
  {
    id: 1,
    title: "Dicho 1",
    text: "A caballo regalado no se le mira colmillo",
    image: image1,
    url: "#!",
  },
  {
    id: 2,
    title: "Dicho 2",
    text: "Mas vale pajaro en mano que mil volando",
    image: image2,
    url: "#!",
  },
  {
    id: 3,
    title: "Dicho 3",
    image: image3,
    url: "#!",
  },
];

function Cards() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {cards.map(({ title, text, image, url, id }) => (
          <div className="col-md-4" key={id}>
            <Card imageSource={image} text={text} title={title} url={url} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards
