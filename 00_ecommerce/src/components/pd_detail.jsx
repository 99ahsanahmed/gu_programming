import React from 'react'
import { useParams } from 'react-router-dom';
const Product = () => {
  const { pd_id } = useParams();
  const card_details = [
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
  const product = card_details.find((card) => card.id === parseInt(pd_id)); //HAD THE IDEA, BUT LEARNED THIS FROM CHATGPT

  return (
    // PAGE
    <div className="h-screen flex justify-center items-center">
      
      {/* Card */}
      <div className=" h-96 w-80 overflow-hidden hover:shadow-xl transition-all ease-in-out">
        
        {/* Image */}
        <img src={product.image} alt="" />

        {/* BOTTOM*/}
        <div className="card text-black w-full h-56  flex flex-col gap-6">
          <div className="flex justify-between">
            <h1 className="font-bold text-lg"> {product.title} </h1>
            <p className="font-normal text-sm">Product id : {pd_id}</p>
          </div>

          {/* bottom-2 */}
          <div className=" flex justify-between ">
            <p className="text-base font-bold">{product.price}</p>
            <button className="text-white text-sm bg-[#3B1A69] px-2 rounded-2xl">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Product;