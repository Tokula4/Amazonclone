import React, { useState } from 'react';
import Image from 'next/image';
import { MenuIcon, SearchIcon, ShoppingCartIcon } from '@heroicons/react/solid';

const MAX_RATING = 5;
const MIN_RATING = 1;

function Product({ id, price, title, category, image, description }) {
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );

  const [hasprime] = useState(Math.random() < 0.5);

  return (
    <div className=" relative flex flex-col z-30 bg-white p-10 m-5  ">
      <p className="italic text-xs absolute right-2 top-2 text-gray-400 ">
        {category}
      </p>
      <Image src={image} height={200} width={200} objectfit="contain" />\
      <h4 className="my-3 ">{title}</h4>
      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <SearchIcon className="h-12 p-4  text-yellow-500" />
          ))}
      </div>
      <p className=" text-xs line-clamp-2 my-2 ">{description}</p>
      {hasprime && (
        <div className=" flex items-center space-x-2 -mt-2">
          <img className="  w-12 " src="/img/prime-logo.png" />
          <p className="text-xs  text-gray-500">Free Delivery</p>
        </div>
      )}
      <button
        className=" button p-2 text-xs md:text-sm bg-gradient-to-b from-yellow-200 to-yellow-500 border border-yellow-300 focus:outline-none  rounded-sm 
        focus:ring-2 focus:ring-yellow-500 active:from-yellow-500 mt-auto "
      >
        Add to basket
      </button>
    </div>
  );
}

export default Product;
