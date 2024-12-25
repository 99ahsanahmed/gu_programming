import React from "react";
import { Link } from "react-router-dom";
const Card = () => {
  const cardData = [
    {
      id: 1,
      title: "Chic",
      description: "buy chic",
      price: 7000,
      image:
        "https://muraqqa.shop/cdn/shop/collections/yasamine-june-9pFE-9CWEBI-unsplash.jpg?v=1732784720&width=535",
    },
    {
      id: 2,
      title: "Element",
      description: "buy element",
      price: 5000,
      image:
        "https://muraqqa.shop/cdn/shop/collections/rocco-stoppoloni-C2QbMA_nHYE-unsplash.jpg?v=1732784779&width=535",
    },
    {
      id: 3,
      title: "Pulse",
      description: "buy Pulse",
      price: 6700,
      image:
        "https://muraqqa.shop/cdn/shop/collections/yasamine-june-x7WwgfzvALk-unsplash.jpg?v=1732784747&width=535",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center h-screen gap-10">
      <h1 className="text-5xl font-semibold">Winter Collection</h1>
      <div className="flex justify-center items-center">
        {cardData.map((card) => (
          <div
            key={card.id}
            className="border border-gray-300 p-4 m-2 rounded-lg w-58"
          >
            <img src={card.image} alt="" className="w-full h-24 object-cover" />
            <h3>{card.title}</h3>
            <h5>{card.price}</h5>
            <button className="bg-[#3B1A69] text-white text-sm rounded-lg px-1">
              <Link to={`/products/${card.id}`}>{card.description}</Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;