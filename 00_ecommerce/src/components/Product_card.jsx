import React from 'react'
import { Link } from "react-router-dom";
const Product_card = ({card_data}) => {
  return (
      <div className="border border-gray-300 p-4 m-2 rounded-lg h-96 w-80 hover:shadow-xl transition-all ease-in-out">
        <img src={card_data.image} alt=""  />
        <h3>{card_data.title}</h3>
        <h5>{card_data.price}</h5>
        <button className="bg-[#3B1A69] text-white text-md rounded-lg px-1 hover:px-2 transition-all">
          <Link to={`/products/${card_data.id}`}>{card_data.description}</Link>
        </button>
      </div>

  );
};

export default Product_card
//title, image, price, id, description