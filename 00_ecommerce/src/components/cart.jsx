import React, { useState,useEffect, use } from "react";
const Cart = () => {
  const [chic, setChic] = useState(0);
  const [chicPrice, setChicPrice] = useState(0);

  const [element, setElement] = useState(0);
  const [elementPrice, setElementPrice] = useState(0);

  const [pulse, setPulse] = useState(0);
  const [pulsePrice, setPulsePrice] = useState(0);
  const [total , setTotal] = useState(0);

  // LEARNED THIS FROM CHATGPT
  useEffect(() => {
    setChicPrice(chic * 7000);
  }, [chic]); 

  useEffect(() => {
    setElementPrice(element * 5000);
  }, [element]);

  useEffect(() => {
    setPulsePrice(pulse * 6700);
  }, [pulse]);

  useEffect(() => {
    setTotal(chicPrice + elementPrice + pulsePrice);
  }, [chicPrice, elementPrice, pulsePrice]);
  return (
    <div className="max-w-md mx-auto mt-52 p-4 border rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
      <ul className="space-y-2">
        {/* CHIC */}
        <li className="flex justify-between items-center p-2 border rounded-lg bg-gray-100">
          <span>Chic {chic}</span>
          <span className="text-gray-600">{chicPrice}/-</span>
          <button
            className="ml-4 px-2 py-1 text-sm text-white bg-[#3B1A69] rounded hover:bg-[#984fff]"
            onClick={() => setChic(chic > 0 ? chic - 1 : 0)}
          >
            Remove
          </button>
          <button
            className="ml-4 px-2 py-1 text-sm text-white bg-green-500 rounded hover:bg-green-600"
            onClick={() => setChic(chic + 1)}
          >
            Add
          </button>
        </li>

        {/* ELEMENT */}
        <li className="flex justify-between items-center p-2 border rounded-lg bg-gray-100">
          <span>Element {element}</span>
          <span className="text-gray-600">{elementPrice}/-</span>
          <button
            className="ml-4 px-2 py-1 text-sm text-white bg-[#3B1A69] rounded hover:bg-[#984fff]"
            onClick={() => setElement(element > 0 ? element - 1 : 0)}
          >
            Remove
          </button>
          <button
            className="ml-4 px-2 py-1 text-sm text-white bg-green-500 rounded hover:bg-green-600"
            onClick={() => setElement(element + 1)}
          >
            Add
          </button>
        </li>

        {/* PULSE */}
        <li className="flex justify-between items-center p-2 border rounded-lg bg-gray-100">
          <span>Pulse {pulse}</span>
          <span className="text-gray-600">{pulsePrice}/-</span>
          <button
            className="ml-4 px-2 py-1 text-sm text-white bg-[#3B1A69] rounded hover:bg-[#984fff]"
            onClick={() => setPulse(pulse > 0 ? pulse - 1 : 0)}
          >
            Remove
          </button>
          <button
            className="ml-4 px-2 py-1 text-sm text-white bg-green-500 rounded hover:bg-green-600"
            onClick={() => setPulse(pulse + 1)}
          >
            Add
          </button>
        </li>
      </ul>

      <div className="mt-4 pt-4 border-t">
        <div className="flex justify-between">
          <span className="font-bold">Total:</span>
          <span className="font-bold">{total}/-</span>
        </div>
        <button className="w-full mt-4 px-4 py-2 bg-[#3B1A69] text-white font-semibold rounded">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
