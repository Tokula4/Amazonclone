import React from 'react';
import Image from 'next/image';
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from '@heroicons/react/outline';

function Header() {
  return (
    <header>
      {/* Top header*/}
      <div className="flex items-center flex-grow p-1 bg-amazon_blue">
        <div className="items-center flex-grow mt-2 sm:flex-grow-0">
          <Image
            src="/img/arrow.png"
            width={100}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>

        {/*search bar*/}
        <div className="items-center flex-grow hidden h-10 bg-yellow-400 rounded-md cursor-pointer hover:bg-yellow-500 sm:flex ">
          <input
            className="flex-grow flex-shrink w-6 h-full p-2 px-4 rounded-l-md focus:outline-none"
            type="text"
          />
          <SearchIcon className="h-12 p-4" />
        </div>
        {/* Right side */}

        <div className="flex items-center mx-6 space-x-6 text-xs text-white whitespace-nowrap ">
          <div className="link">
            <p>Hello Emmanuel Tokula</p>
            <p className="font-extrabold md:text-sm">Account & List</p>
          </div>
          <div className="link">
            <p>Returns &</p>
            <p className="font-extrabold md:text-sm">Order</p>
          </div>
          <div className="relative flex items-center link">
            <span className="absolute top-0 right-0 w-4 h-4 font-bold text-center text-black bg-yellow-400 rounded-full md:right-10 ">
              0
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="hidden mt-2 font-extrabold md:inline md:text-sm">
              Basket
            </p>
          </div>
        </div>
      </div>
      {/* Bottom header*/}
      <div className="flex items-center p-2 pl-6 space-x-3 text-white bg-amazon_blue-light">
        <p className="flex items-center link ">
          <MenuIcon className="h-6 mr-2" />
          All
        </p>
        <p className="link"> prime videos</p>
        <p className="link"> Amazon Busness</p>
        <p className="link"> prime videos</p>
        <p className="hidden link lg:inline-flex "> Electronics</p>
        <p className="hidden link lg:inline-flex "> Food & Grocerys</p>
        <p className="hidden link lg:inline-flex "> Prime</p>
        <p className="hidden link lg:inline-flex "> Buy again</p>
        <p className="hidden link lg:inline-flex "> Shopper and toolkit</p>
        <p className="hidden link lg:inline-flex "> Health and personal </p>
      </div>
    </header>
  );
}

export default Header;
