import React from 'react'
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="home">
      <div className="top h-screen flex justify-center items-center flex-col ">
        <div>
          <h1 className="text-9xl font-bold ">Muraqqa</h1>
          <p className="text-left text-lg w-96 my-2">
            Our collection features designs and styles catering to individuals
            seeking both modesty and fashion. <br />
            <div className="flex justify-between">
              <button className="bg-[#3B1A69] text-white p-1 rounded-lg text-sm">
                Learn More
              </button>
              <button className="bg-[#3B1A69] text-white p-1 rounded-lg text-sm">
                <Link to="/products">Shop now</Link>
              </button>
            </div>
          </p>
        </div>
      </div>

      {/* FOOTER */}
      <div className="footer h-96 flex justify-around items-center bg-[#EBE7F0] text-black">
        <img
          src="https://muraqqa.shop/cdn/shop/files/Favicon.svg?v=1718464014&width=100"
          className="w-20"
        />
        <div>
          <ul className="text-sm  space-y-2">
            <li>
              <h1 className="text-xl  font-semibold">
                {" "}
                Quick links{" "}
              </h1>
            </li>
            <li>Collections</li>
            <li>Products</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="w-64">
          <span className="text-xs">
            Muraqqa weaves a narrative of elegance and spirituality accessible
            through fashion. It stands at the crossroads of tradition and
            modernity, crafting identities with garments that honor Islamic
            principles and culture. Muraqqa is for those who value their
            heritage and embrace contemporary trends.
          </span>
        </div>
      </div>
    </div>
  );
}

export default Home