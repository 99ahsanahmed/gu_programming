import React from "react";
import { Link } from "react-router-dom";
import Product_card from "./Product_card";
const Card = () => {
  const cardData1 ={
      id: 1,
      title: "Chic",
      description: "buy chic",
      price: 7000,
      image:
        "https://muraqqa.shop/cdn/shop/collections/yasamine-june-9pFE-9CWEBI-unsplash.jpg?v=1732784720&width=535",
    }
    const cardData2 ={
      id: 2,
      title: "Element",
      description: "buy element",
      price: 5000,
      image:
        "https://muraqqa.shop/cdn/shop/collections/rocco-stoppoloni-C2QbMA_nHYE-unsplash.jpg?v=1732784779&width=535",
    }
    const cardData3 ={
      id: 3,
      title: "Pulse",
      description: "buy Pulse",
      price: 6700,
      image:
        "https://muraqqa.shop/cdn/shop/collections/yasamine-june-x7WwgfzvALk-unsplash.jpg?v=1732784747&width=535",
    }

  return (
    <div className="flex flex-col justify-center items-center h-screen gap-10">
      <h1 className="text-5xl font-semibold">Winter Collection</h1>
      <div className="flex gap-4">
      <Product_card card_data={cardData1}/>
      <Product_card card_data={cardData2}/>
      <Product_card card_data={cardData3}/>
      </div>
    </div>
  );
};

export default Card;